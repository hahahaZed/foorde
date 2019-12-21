<template>
    <Modal v-model="modal2" title="Edit user" :footer-hide="true">
        <Form :model="form" label-position="left" :label-width="100">
            <FormItem label="User Name">
                <Input v-model="data.user_name" />
            </FormItem>
            <FormItem label="Nick Name">
                <Input v-model="data.nick_name" />
            </FormItem>
            <FormItem label="Email">
                <Input v-model="data.email" />
            </FormItem>
            <FormItem label="Phone">
                <Input v-model="data.phone_number" />
            </FormItem>
            <FormItem label="Password">
                <Input v-model="data.password" />
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
                    user_name: '',
                    nick_name: '',
                    email: '',
                    phone_number:'',
                    password:''
                },
            }
        },
    created(){
        Bus.$on('show',(e)=>{
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
                        this.modal2 =true
                    }else{
                        this.modal2=false
                        setTimeout(() => {
                            this.$router.go(0)
                        },500)
                        
                    }
                })
            },
            
        }
}
</script>
<style scoped>
</style>