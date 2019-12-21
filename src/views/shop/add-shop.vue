<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>add-shop</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: auto">
                        <Form :model="form" label-position="left" :label-width="100" inline>
                            <FormItem label="Name">
                                <Input v-model="form.name" style="width:388px" />
                            </FormItem>
                            <FormItem label="Logo">
                                <!-- <Upload
                        action="https://api.foorde.com/imags?desc=Shop logo&category=logo"
                        :on-success="upload"
                    >
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                                </Upload>-->
                                <Logo />
                            </FormItem>
                            <FormItem label="License">
                                <License />
                                <!-- <Upload
                        action="https://api.foorde.com/imags?desc=Business license address&category=license"
                        :on-success="uploadlicense"
                    >
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                                </Upload>-->
                            </FormItem>
                            <FormItem label="Desc">
                                <Input type="textarea" v-model="form.desc" style="width:388px" />
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
                                <Input v-model="form.address" style="width:388px" />
                            </FormItem>
                            <FormItem label="Location">
                                <div>{{form.location}}</div><Button @click="toarea">Select region</Button>
                            </FormItem>
                            <FormItem label="Email">
                                <Input v-model="form.email" style="width:388px" />
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
                                <Input v-model="form.number" style="width:388px" />
                            </FormItem>
                        </Form>
                        <Button type="primary" size="large" @click="add">add</Button>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import Menu from "_c/menu"
import Header from "_c/header"
import Logo from './logo-updated.vue'
import License from './license-updated.vue'
import Bus from '@/assets/Bus.js'
export default {
    name: 'addshop',
    components: {
        Menu,
        Header,
        Logo,
        License
    },
    data () {
            return {
                modal1:false,
                form: {
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
                type: '',

                foodList:[],
                food:'',

                serviceList:[],
                service:'',

                areaList:[],
                area:''
            }
        },
    created(){
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
        Bus.$on('addlogo',(e) =>{
            this.form.logo = e
        })
        
        Bus.$on('addlicense',(e) =>{
            this.form.license = e
        })
        Bus.$on('shop',(e) =>{
            this.form.location = e
        })
    },
     methods: {
            async add(){
                let res = await this.$post('/admin/shop',this.form)
                // TODO 报错未解决
                if(res.status == 1){
                    this.$router.push({
                        name:'shop'
                    })
                }
            },
            // 上传logo
            upload(response){
                this.form.logo = response.data.url
            },
            // 上传营业执照
            uploadlicense(response){
                this.form.license = response.data.url
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
                    query:{shop:'addshoparae'}
                })
            }
        }
}
</script>
<style scoped>
</style>