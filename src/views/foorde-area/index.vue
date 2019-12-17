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
                                <Select v-model="model1" style="width:200px" label-in-value @on-change="select">
                            <Option
                                v-for="item in cityList"
                                :value="item.value"
                                :key="item.value"
                            >{{ item.label }}</Option>
                        </Select>
                            </label>
                      
                        <label>
                            keyword:
                            <input v-model="keyword" style="width:200px;height:32px"/>
                        </label>
                        <Button type="primary" class="ml-10" @click="handelCreate">create</Button>

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
                                :position="{lng: center.lng, lat: center.lat}"
                                :dragging="true"
                                animation="BMAP_ANIMATION_BOUNCE"
                            ></bm-marker>
                            <bm-local-search
                                :keyword="keyword"
                                :location="location"
                                :auto-viewport="true"
                            ></bm-local-search>
                        </baidu-map>
                        <div style="position:absolute;right:16px;top:16px">
                            <input v-model.number="center.lng" />
                            <input v-model.number="center.lat" />
                            <input v-model.number="zoom" />
                        </div>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>



<script>
import Menu from "_c/menu"
import Header from "_c/header"
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
      keyword: '',
      location: 'Dubai',
      zoom: 13,

      cityList: [],
        model1: '',
        city:0,
        tude:""
    }
  },
  created(){
      this.$get('/api/admin.area/getcity').then(res =>{
          res.data.forEach(element =>{
              this.cityList.push({label:element,value:res.data.indexOf(element)})
          })
        //   console.log(this.cityList)
      })
  },
  methods: {
    getClickInfo(e) {
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
        this.tude = this.center.lng + "|" + this.center.lat
        // console.log(this.tude)
    },
    syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.tude = this.center.lng + "|" + this.center.lat
      this.zoom = e.target.getZoom()
    },
    select(val){
        // console.log(val)
        this.city = val.value
        this.location = val.label
        // console.log(this.location)
    },
    handelCreate(){
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
    padding-right: 32px;
    padding-top:16px;
}
.bm-view > div:nth-child(3) {
    position: absolute;
    top: 16px;
    width: 300px;
}
</style>