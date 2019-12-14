<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>userlist</BreadcrumbItem>
                </Breadcrumb>
                
                <Add />
                <Edit :modal="modal2"/>
                <Card>
                    <div style="height: 600px">
                        <Table stripe border :columns="columns1" :data="data1">
                            <template  slot="action">
                                <Button type="info" size="small" class="mr-6" @click="handleEdit()">edit</Button>
                                <!-- TODO  编辑 -->
                                <Button type="error" size="small">delete</Button>
                            </template>
                        </Table>
                        <Page
                            class="page"
                            :page-size="pageSize"
                            :total="total"
                            :current.sync="current"
                            @on-change="changePage"
                        />
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import Menu from "_c/menu"
import Header from "_c/header"
import Add from './add.vue'
import Edit from './edit.vue'
export default {
  name: 'home',
  components: {
      Menu,
      Header,
      Add,
      Edit
  },
  data () {
            return {
                modal1: false,
                modal2: false,
                columns1: [
                    {
                        title: 'User Name',
                        key: 'user_name'
                    },
                    {
                        title: 'Nick Name',
                        key: 'nick_name'
                    },
                    {
                        title: 'Email',
                        key: 'email'
                    },
                    {
                        title:'Phone Number',
                        key:'phone_number'
                    },
                    {
                        title:'Login Time',
                        key:'login_time'
                    },
                    
                    {
                        title:'Create Time',
                        key:'create_time'
                    },
                   
                    
                    {
                        title:'Action',
                        slot: 'action',
                        align: 'center',
                    }
                ],
                data1: [],//渲染数据
                total:0,//数据总数
                current:1,//当前页
                pageSize:1,//每页条数
            }
        },
        created () {
            this.getdata()
        },  
        methods:{
            getdata(){
                this.$get('/admin/manager',{page:this.current,limit:this.pageSize}).then(res => {   
                    console.log(res.data.list)
                    this.data1 = res.data.list
                    this.total = res.data.totalPage * this.pageSize
                })
            },
            // 切换页码时的回调，返回值是current
            changePage(){
                this.getdata()
            },
            handleEdit(){
                this.modal2 = true
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
.page {
    float: right;
    margin: 20px 0 6px;
}
</style>