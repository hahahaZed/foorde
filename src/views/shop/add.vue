<template>
    <div>
        <Button type="primary" class="mb-10 add" @click="modal1 = true">add</Button>
        <Modal v-model="modal1" title="Add shop" :footer-hide="true">
            <Form :model="form" label-position="left" :label-width="100">
                <FormItem label="Name">
                    <Input v-model="form.name" />
                </FormItem>
                <FormItem label="Logo">
                    <Upload
                        action="https://api.foorde.com/imags?desc=Shop logo&category=logo"
                        :on-success="upload"
                    >
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </FormItem>
                <FormItem label="License">
                    <Upload
                        action="https://api.foorde.com/imags?desc=Business license address&category=license "
                        :on-success="uploadlicense"
                    >
                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
                    </Upload>
                </FormItem>
                <FormItem label="Desc">
                    <Input type="textarea" v-model="form.desc" />
                </FormItem>
                <FormItem label="Area_id">
                    <Select v-model="area" style="width:388px" label-in-value @on-change="areatype">
                        <Option
                            v-for="item in areaList"
                            :value="item.value"
                            :key="item.value"
                        >{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="Address">
                    <Input v-model="form.address" />
                </FormItem>
                <FormItem label="Email">
                    <Input v-model="form.email" />
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
                    <Select v-model="food" style="width:388px" label-in-value @on-change="foodtype">
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
                    <Input v-model="form.number" />
                </FormItem>
            </Form>
            <Button type="primary" size="large" long @click="add">add</Button>
        </Modal>
    </div>
</template>
<script>
export default {
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
    },
     methods: {
            async add(){
                console.log(this.form)
                let res = await this.$post('/admin/shop',this.form)
                if(res.status !== 1){
                        this.modal1 =true
                    }else{
                        this.modal1=false
                    }
                // .then(res => {
                    // console.log(res)
                        // this.modal1 =true

                    // if(res.status !== 1){
                    //     this.modal1 =true
                    // }else{
                    //     this.modal1=false
                    // }
                // })
            },
            // 上传logo
            upload(response){
                console.log(response)
                this.form.logo = response.data.url
                console.log(this.form.logo)
            },
            // 上传营业执照
            uploadlicense(response){
                console.log(response)
                this.form.license = response.data.url
                console.log(this.form.logo)
            },

            // 营业类型
            selecttype(val){
                this.form.shop_type = val.value
                console.log(this.form.shop_type)
            },
            // 食物类型
            foodtype(val){
                this.form.food_type = val.value
                console.log(this.form.food_type)
            },
            // 服务类型
            servicetype(val){
                this.form.service_type = val.value
                console.log(this.form.service_type)
            },
            // 区域
            areatype(val){
                console.log(val)
                this.form.area_id = val.value
            }
        }
}
</script>
<style scoped>
</style>