<template>
    <Modal v-model="modal" title="Add user" :footer-hide="true">
        <Form :model="form" label-position="left" :label-width="100">
            <FormItem label="User Name">
                <Input v-model="form.user_name"/>
            </FormItem>
            <FormItem label="Nick Name">
                <Input v-model="form.nick_name"/>
            </FormItem>
            <FormItem label="Email">
                <Input v-model="form.email"/>
            </FormItem>
            <FormItem label="Phone">
                <Input v-model="form.phone_number"/>
            </FormItem>
            <FormItem label="Password">
                <Input v-model="form.password"/>
            </FormItem>
        </Form>
        <Button type="primary" size="large" long @click="edit">edit</Button>
    </Modal>
</template>
<script>
export default {
    // TODO 单向数据流
    props:{
        modal:Boolean
    },
    data () {
            return {
                modal2:false,
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
            edit () {
                // this.$Message.info('Clicked ok');
                // this.$post('/admin/manager',this.form).then(res => {
                //     console.log(res)
                // })
            },
            
        }
}
</script>
<style scoped>
</style>