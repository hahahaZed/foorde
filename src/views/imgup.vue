<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <Upload action="https://api.foorde.com/imags"  :headers="myHeaders" >
                            <Button icon="ios-cloud-upload-outline">Upload files</Button>
                        </Upload>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import Menu from "_c/menu"
import Header from "_c/header"
import config from '@/config'
import Cookies from 'js-cookie'
const Token = Cookies.get('__gtr_admin_token__') 
export default {
  name: 'imgup',
  components: {
      Menu,
      Header
  },
  data () {
        return{
            myHeaders:{token:Token},
            actionurl:(process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro) + '/imags'
        }
  }
}
</script>
<style lang="less" scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>