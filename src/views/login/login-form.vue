<template>
    <!-- <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleLogin"> -->
        <Form ref="loginForm" :model="form"  @keydown.enter.native="handleLogin">
        <FormItem prop="username">
            <Input v-model="form.user_name" placeholder="Please enter user name">
                <span slot="prepend">
                    <Icon :size="16" type="ios-person"></Icon>
                </span>
                <!-- eslint-disable-next-line vue/no-parsing-error -->
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="Please enter your password">
                <span slot="prepend">
                    <Icon :size="14" type="md-lock"></Icon>
                </span>
            <!-- eslint-disable-next-line vue/no-parsing-error -->
            </Input>
        </FormItem>

        <Button @click="handleLogin" type="primary" long>Sign in</Button>
    </Form>
</template>
<script>
import store from '@/store'
export default {
    name: 'LoginForm',
    props: {
        usernameRules: {
            type: Array,
            default: () => {
                return [
                    {
                        required: true,
                        message: 'user name cannot be empty',
                        trigger: 'blur'
                    }
                ]
            }
        },
        passwordRules: {
            type: Array,
            default: () => {
                return [
                    { required: true, message: 'Password can not be blank', trigger: 'blur' }
                ]
            }
        }
    },
    data() {
        return {
            loading: false,
            form: {
                user_name: '',
                password: ''
            }
        }
    },
    computed: {
        rules() {
            return {
                username: this.usernameRules,
                password: this.passwordRules
            }
        }
    },
    methods: {
        
        // eslint-disable-next-line no-unused-vars
        handleLogin(params) {
            // eslint-disable-next-line no-unused-vars
            store.dispatch('handleLogin', this).then(response => {
                this.$router.push({
                    name: 'home'
                })
            })
        }
        // handleLogin(){
        //     this.$post('/api/admin.login',this.form).then(res => {
        //         console.log(res)
        //     })
        // }
    }
}
</script>
