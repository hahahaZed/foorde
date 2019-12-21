<template>
    <Modal v-model="modal2" title="Edit user" :footer-hide="true">
        <Form :model="form" label-position="left" :label-width="100">
            <FormItem label="Name">
                <Input v-model="data.name" />
            </FormItem>
            <FormItem label="City">
                <Select v-model="model1" style="width:388px" label-in-value @on-change="select">
                    <Option
                        v-for="item in cityList"
                        :value="item.value"
                        :key="item.value"
                    >{{ item.label }}</Option>
                </Select>
            </FormItem>
            <FormItem label="Location">
                <!-- <Input v-model="data.location" /> -->
                <div>
                    {{data.location}}
                    <Button @click="toarea">Select region</Button>
                </div>
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
                    city: '',
                    name: '',
                    location: '',
                },
                model1: 0,
                cityList:[]
            }
        },
        created(){
            this.$get('/api/admin.area/getcity').then(res =>{
                res.data.forEach(element =>{
                    this.cityList.push({label:element,value:res.data.indexOf(element)})
                })
            })
        Bus.$on('showbox',(e)=>{
            this.modal2 = e
        })
        Bus.$on('location',(e)=>{
            this.data.location = e
        })
        Bus.$on('showarea',(e)=>{
            this.modal2 = e
        })
        Bus.$on('city',(e)=>{
            e = parseInt(e)
            this.model1 = e
        })
    },
   
     methods: {
            edit () {
                this.form.name = this.data.name
                this.form.city = this.data.city
                this.form.id = this.data.id
                this.form.location = this.data.location
                this.$post('/api/admin.area/edit',this.form).then(res => {
                    if(res.status !== 1){
                        this.modal2 =true
                    }else{
                        this.modal2=false
                    }
                })
            },
            toarea(){
                this.$router.push({
                    name:'area',
                    query:{id:this.data.id,location:this.data.location}
                })
                this.modal2=false
            },
            select(val){
            this.data.city =val.value
        },
            
        }
}
</script>
<style scoped>
</style>