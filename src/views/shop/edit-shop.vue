<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>edit-shop</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: auto">
                        <Form :model="form" label-position="right" :label-width="100" inline>
                            <FormItem label="Name">
                                <Input v-model="data.name" style="width:388px"/>
                            </FormItem>
                            <FormItem label="Logo">
                                <!-- <img :src="data.logo" /> -->
                                <Logo />
                            </FormItem>
                            <FormItem label="License">
                                <License />
                            </FormItem>
                            <FormItem label="Desc">
                                <Input type="textarea" v-model="data.desc" style="width:388px"/>
                            </FormItem>
                            <FormItem label="Area_id">
                                <Select
                                    v-model="area"
                                    style="width:388px"
                                    label-in-value
                                    @on-change="areatype"
                                >
                                    <Option
                                        v-for="item in areaList"
                                        :value="item.value"
                                        :key="item.value"
                                    >{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="Address">
                                <Input v-model="data.address" style="width:388px"/>
                            </FormItem>
                            <FormItem label="Location">
                                <div>{{data.location}}</div><Button @click="toarea">Select region</Button>
                            </FormItem>
                            <FormItem label="Email">
                                <Input v-model="data.email" style="width:388px"/>
                            </FormItem>
                            <FormItem label="Shop_type">
                                <Select
                                    v-model="type"
                                    style="width:388px"
                                    label-in-value
                                    @on-change="selecttype"
                                >
                                    <Option
                                        v-for="item in typeList"
                                        :value="item.value"
                                        :key="item.value"
                                    >{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="Food_type">
                                <Select
                                    v-model="food"
                                    style="width:388px"
                                    label-in-value
                                    @on-change="foodtype"
                                >
                                    <Option
                                        v-for="item in foodList"
                                        :value="item.value"
                                        :key="item.value"
                                    >{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="Service_type">
                                <Select
                                    v-model="service"
                                    style="width:388px"
                                    label-in-value
                                    @on-change="servicetype"
                                >
                                    <Option
                                        v-for="item in serviceList"
                                        :value="item.value"
                                        :key="item.value"
                                    >{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="Number">
                                <Input v-model="data.number" style="width:388px"/>
                            </FormItem>
                        </Form>
                        <Button type="primary" size="large"  @click="edit">ok</Button>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import Bus from '@/assets/Bus.js'
import Logo from './logo-update.vue'
import License from './license-update.vue'
import Menu from "_c/menu"
import Header from "_c/header"
export default {
    name: 'editshop',
    components: {
         Menu,
        Header,
        Logo,
        License
    },
    data () {
            return {
                data:{},
                modal2:false,
                oldlogo:'',
                oldLicense:'',
                form: {
                    id:'',
                    name: '',
                    logo: '',
                    license: '',
                    desc:'',
                    area_id:'',
                    address:'',
                    location:'',
                    email:'',
                    shop_type:'',
                    food_type:'',
                    service_type:'',
                    number:''
                },
                typeList: [],
                type: 0,

                foodList:[],
                food:0,

                serviceList:[],
                service:0,

                areaList:[],
                area:0,

            }
        },
    created(){
        this.getdata()
        this.$get('/api/admin.shop/gettype').then(res =>{
            res.data.shop.forEach(element =>{
                this.typeList.push({label:element,value:res.data.shop.indexOf(element)})
                // this.typeList.push({label:element,value:element})
                // this.cityList.push({label:element,value:res.data.indexOf(element)})
            })
            res.data.food.forEach(element =>{
                // this.foodList.push({label:element,value:element})
                this.foodList.push({label:element,value:res.data.food.indexOf(element)})
            })
            res.data.service.forEach(element =>{
                // this.serviceList.push({label:element,value:element})
                this.serviceList.push({label:element,value:res.data.service.indexOf(element)})
            })
        })
        this.$get('/admin/getarea').then(res =>{
            res.data.list.forEach(element =>{
                // this.serviceList.push({label:element,value:element})
                this.areaList.push({label:element.name,value:element.id})
            })
        })
        Bus.$on('showshop',(e)=>{
            this.modal2 = e
        }) 
        Bus.$on('oldlogo',(e)=>{
            this.oldlogo = e
        })
        Bus.$on('oldLicense',(e)=>{
            this.oldLicense = e
        })
        Bus.$on('shop',(e)=>{
            console.log(this.data.location)
            this.data.location = e 
        })
        // console.log(this.$route,query)
        // if(this.data){
        //         Bus.$emit('logo',
        //         this.data.logo
        //     )
        // }
        
        // this.area = this.data.area
    },
    watch: {
        $route:function(newval,oldval){
            if(newval != oldval){
                this.getdata()
            }  
        },
        data:function(val,old){
            if(val!= old){
                Bus.$emit('logo',
                    val.logo
                )
                Bus.$emit('License',val.license)
            }
        },
        oldlogo:function(val){
            this.form.logo = val    
        },
        oldLicense:function(val){
            this.form.license = val
        }
    },
     methods: {
            getdata(){
                const id = this.$route.query.id
                this.$get('/admin/shop/'+ id ).then(res=>{
                    this.data = res.data
                    this.area =res.data.area_id
                    this.type = parseInt(res.data.shop_type)
                    this.food = parseInt(res.data.food_type)
                    this.service =parseInt(res.data.service_type)
        })
            },
            edit () {
                this.form.name = this.data.name
                this.form.desc = this.data.desc
                this.form.email = this.data.email
                this.form.address = this.data.address
                this.form.location = this.data.location
                this.form.number = this.data.number
                this.form.area_id = this.area
                this.form.shop_type = this.type
                this.form.food_type = this.food
                this.form.service_type = this.service
                this.form.id = this.data.id
                this.$post('/api/admin.shop/edit',this.form).then(res => {
                    if(res.status == 1){
                        this.$router.push({
                            name:'shop'
                        })
                    }
                })
            },
              // 营业类型
            selecttype(val){
                this.form.shop_type = val.value
            },
            // 食物类型
            foodtype(val){
                this.form.food_type = val.value
            },
            // 服务类型
            servicetype(val){
                this.form.service_type = val.value
            },
            // 区域
            areatype(val){
                this.form.area_id = val.value
            },
            toarea(){
                this.$router.push({
                    name:'area',
                    query:{shop:'editshoparae'}
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
</style>