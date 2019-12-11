<template>
    <Sider :width="250" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <div class="logo-con">
            <img :src="minLogo" key="min-logo" style="background: #ffffff90;border-radius: 5px;" />
            <span class="name">Orders</span>
        </div>
        <!-- <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']"> -->
        <Menu :active-name="activeName" theme="dark" width="auto">
             <MenuItem name="userlist" :to="{name: 'userlist',query:{activeName:'userlist'}}">
                        <Icon type="ios-navigate"></Icon>
                        <span>userlist</span>
                    </MenuItem>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>Item 1
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>Item 2
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>
<script>
// import minLogo from '@/assets/images/logo-default.png'
import minLogo from '@/assets/images/dog_logo.jpg'
export default {
    data(){
        return{
            minLogo,
            activeName:''
        }
    },
    created(){
        this.activeName =this.$route.query.activeName
    }
}
</script>
<style lang="less" scoped>
.logo-con {
    height: 64px;
    padding: 10px;
    display: flex;
    align-items: center;
    img {
        height: 44px;
        width: 44px;
    }
    .name {
        color: #fff;
        padding-left: 20px;
    }
}
</style>