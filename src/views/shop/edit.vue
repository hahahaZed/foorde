<template>
    <Modal v-model="modal2" title="Edit shop" :footer-hide="true">
        <Form :model="form" label-position="left" :label-width="100">
            <FormItem label="Name">
                <Input v-model="data.name" />
            </FormItem>
            <FormItem label="Logo">
                <img :src="data.logo" />
            </FormItem>
            <FormItem label="License">
                <img :src="data.license" />
            </FormItem>
            <FormItem label="Desc">
                <Input type="textarea" v-model="data.desc" />
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
                <Input v-model="data.address" />
            </FormItem>
            <FormItem label="Email">
                <Input v-model="data.email" />
            </FormItem>
            <FormItem label="Shop_type">
                <Select v-model="type" style="width:388px" label-in-value @on-change="selecttype">
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
                <Input v-model="data.number" />
            </FormItem>
        </Form>
        <Button type="primary" size="large" long @click="edit">ok</Button>
    </Modal>
</template>
<script>
import Bus from '@/assets/Bus.js'
export default {
    props:{
        data:Object
    },
    
    data () {
            return {
                modal2:false,
                form: {
                    id:'',
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
        Bus.$on('showshop',(e)=>{
            this.modal2 = e
        })
        // this.area = this.data.area
    },
     methods: {
            edit () {
                this.form.user_name = this.data.user_name
                this.form.nick_name = this.data.nick_name
                this.form.email = this.data.email
                this.form.phone_number = this.data.phone_number
                this.form.password = this.data.password
                this.form.id = this.data.id
                this.$post('api/admin.manager/edit',this.form).then(res => {
                    if(res.status !== 1){
                        console.log(res.status)
                        this.moda2 =true
                    }else{
                        this.modal2=false
                    }
                })
            },
            areatype(){

            },
            selecttype(){

            },
            servicetype(){

            },
            foodtype(){

            }
        }
}
</script>
<style scoped>
</style>