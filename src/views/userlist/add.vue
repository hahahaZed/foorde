<template>
    <div>
        <Button type="primary" class="mb-10 add" @click="modal1 = true">add</Button>
        <Modal v-model="modal1" title="Add user" :footer-hide="true">
            <Form :model="form" label-position="left" :label-width="100">
                <FormItem label="User Name">
                    <Input v-model="form.user_name" />
                </FormItem>
                <FormItem label="Nick Name">
                    <Input v-model="form.nick_name" />
                </FormItem>
                <FormItem label="Email">
                    <Input v-model="form.email" />
                </FormItem>
                <FormItem label="Phone Number">
                    <Input v-model="form.phone_number" />
                </FormItem>
                <FormItem label="Password">
                    <Input v-model="form.password" />
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
                    user_name: '',
                    nick_name: '',
                    email: '',
                    phone_number:'',
                    password:''
                },
            }
        },
     methods: {
            
            add(){
                this.$post('/admin/manager',this.form).then(res => {
                    console.log(res)
                    if(res.status !== 1){
                        console.log(res.status)
                        this.modal1 =true
                    }else{
                        this.modal1=false
                    }
                })
            },
            
        }
}
</script>
<style scoped>
</style>