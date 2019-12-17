<template>
    <Modal v-model="modal2" title="Edit user" :footer-hide="true">
        <Form :model="form" label-position="left" :label-width="100">
            <FormItem label="Name">
                <Input v-model="data.name" />
            </FormItem>
            <FormItem label="City">
                <Input v-model="data.city" />
            </FormItem>
            <FormItem label="Location">
                <Input v-model="data.location" />
            </FormItem>
        </Form>
        <Button type="primary" size="large" long @click="edit">ok</Button>
    </Modal>
</template>
<script>
import Bus from '@/assets/Bus.js'
export default {
    // TODO 单向数据流
    props:{
        data:Object
    },
    data () {
            return {
                modal2:false,
                form: {
                    id:'',
                    user_name: '',
                    nick_name: '',
                    email: '',
                    phone_number:'',
                    password:''
                },
            }
        },
        created(){
        Bus.$on('showbox',(e)=>{
            this.modal2 = e
        })
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
                        this.modal =true
                    }else{
                        this.modal=false
                    }
                })
            },
            
        }
}
</script>
<style scoped>
</style>