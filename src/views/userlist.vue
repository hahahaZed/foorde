<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>userlist</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <Table stripe border :columns="columns1" :data="data1"></Table>
                    </div>
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
  data () {
            return {
                columns1: [
                    {
                        title: 'user_name',
                        key: 'user_name'
                    },
                    {
                        title: 'nick_name',
                        key: 'nick_name'
                    },
                    {
                        title: 'email',
                        key: 'email'
                    },
                    {
                        title:'phone_number',
                        key:'phone_number'
                    },
                    {
                        title:'login_time',
                        key:'login_time'
                    },
                    {
                        title:'login_ip',
                        key:'login_ip'
                    },
                    {
                        title:'create_time',
                        key:'create_time'
                    },
                    {
                        title:'create_ip',
                        key:'create_ip'
                    },
                    {
                        title:'update_time',
                        key:'update_time'
                    }
                ],
                data1: []
            }
        },
        created () {
            this.$get('/api/admin.manager/lists',{page:1,limit:1}).then(res => {
                console.log(res)
                // this.data1=res.data.list
                // console.log(this.data1)
                // TODO 不能打印
            })
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