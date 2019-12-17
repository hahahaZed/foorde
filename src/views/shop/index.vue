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
                    <div style="height: 600px">Content</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import Menu from "_c/menu"
import Header from "_c/header"
export default {
  name: 'home',
  components: {
      Menu,
      Header
  },
  
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