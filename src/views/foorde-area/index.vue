<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>area</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 700px">
                        <label>
                            location:
                            <Select
                                v-model="model1"
                                style="width:200px"
                                label-in-value
                                @on-change="select"
                            >
                                <Option
                                    v-for="item in cityList"
                                    :value="item.value"
                                    :key="item.value"
                                >{{ item.label }}</Option>
                            </Select>
                        </label>

                        <label>
                            keyword:
                            <input v-model="keyword" style="width:200px;height:32px" />
                        </label>
                        <Button type="primary" class="ml-10" @click="handelCreate">submit</Button>

                        <baidu-map
                            class="bm-view"
                            :scroll-wheel-zoom="true"
                            :center="center"
                            :zoom="zoom"
                            @click="getClickInfo"
                            @moving="syncCenterAndZoom"
                            @moveend="syncCenterAndZoom"
                            @zoomend="syncCenterAndZoom"
                        >
                            <bm-marker
                                :position="{lng: marker.lng, lat: marker.lat}"
                                :dragging="true"
                                animation="BMAP_ANIMATION_BOUNCE"
                            ></bm-marker>
                            <!-- <bm-local-search
                                :keyword="keyword"
                                :location="location"
                                :auto-viewport="true"
                            ></bm-local-search> -->
                        </baidu-map>
                        <div style="position:absolute;right:16px;top:16px">
                            <input v-model.number="marker.lng" />
                            <input v-model.number="marker.lat" />
                            <input v-model.number="zoom" />
                        </div>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
    <!-- TODO 标记点不要居中 -->
</template>



<script>
import Menu from "_c/menu"
import Header from "_c/header"
import Bus from '@/assets/Bus.js'
export default {
  name: 'foordearea',
  components: {
      Menu,
      Header
  },
  data(){
      return {
      center: {
        lng: 55.317797,
        lat: 25.238797
      },
      marker: {
        lng: 55.317797,
        lat: 25.238797
      },
      keyword: '',
      location: 'Dubai',
      zoom: 13,

      cityList: [],
        model1: 0,
        city:0,
        tude:""
    }
  },
  created(){
      this.$get('/api/admin.area/getcity').then(res =>{
          res.data.forEach(element =>{
              this.cityList.push({label:element,value:res.data.indexOf(element)})
          })
      })
      if(this.$route.query.id){
          var location = this.$route.query.location.split('|')
            this.marker.lng =location[0]
            this.marker.lat = location[1]
      }
  },
  methods: {
    getClickInfo(e) {
        this.marker.lng = e.point.lng
        this.marker.lat = e.point.lat
        this.tude = this.marker.lng + "|" + this.marker.lat
    },
    syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.marker.lng = lng
      this.marker.lat = lat
      this.tude = this.marker.lng + "|" + this.marker.lat
      this.zoom = e.target.getZoom()
    },
    select(val){
        this.city = val.value
        this.location = val.label
    },
    handelCreate(){
        if(this.$route.query.id){
            Bus.$emit('location',this.tude)
            this.$router.go(-1)
            Bus.$emit('showarea',true)
        } else if(this.$route.query.shop){
            Bus.$emit('shop',this.tude)
            this.$router.go(-1)
        }else{
            this.$post('/admin/area',{name:this.keyword,city:this.city,location:this.tude}).then(res =>{
                if(res.status == 1){
                    this.$router.push({
                        name:'areaList'
                    })
                }
            })
        }    
    }
  }
}
</script>
<style lang="less" scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.bm-view {
    width: 100%;
    height: 600px;
    position: absolute;
    overflow: hidden;
    padding-right: 32px;
    padding-top: 16px;
}
.bm-view > div:nth-child(3) {
    position: absolute;
    top: 16px;
    width: 300px;
}
</style>