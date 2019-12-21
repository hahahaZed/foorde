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
                <Edit  :data="adminData" />
                <Card>
                    <div style="height: auto">
                        <Table stripe border :columns="columns1" :data="data1">
                            <template slot-scope="{ row}" slot="id">
                                <span>{{ row.id }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="user_name">
                                <span>{{ row.user_name }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="nick_name">
                                <span>{{ row.nick_name }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="email">
                                <span>{{ row.email }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="phone_number">
                                <span>{{ row.phone_number }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="login_time">
                                <span>{{ row.login_time }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="create_time">
                                <span>{{ row.create_time }}</span>
                            </template>

                            <template slot="action" slot-scope="{ row, index }">
                                <div>
                                    <Button
                                        type="info"
                                        size="small"
                                        @click="handleEdit(row, index)"
                                    >edit</Button>
                                </div>
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
import Bus from '@/assets/Bus.js'
export default {
  name: 'userlist',
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
                id:'',
                columns1: [
                    {
                        title: 'Id',
                        slot: 'id'
                    },
                    {
                        title: 'User Name',
                        slot: 'user_name'
                    },
                    {
                        title: 'Nick Name',
                        slot: 'nick_name'
                    },
                    {
                        title: 'Email',
                        slot: 'email'
                    },
                    {
                        title:'Phone Number',
                        slot:'phone_number'
                    },
                    {
                        title:'Login Time',
                        slot:'login_time'
                    },
                    
                    {
                        title:'Create Time',
                        slot:'create_time'
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
                adminData:{},
            }
        },
        
        created () {
            this.getdata()
        },  
        methods:{
            getdata(){
                this.$get('/admin/manager',{page:this.current,limit:this.pageSize}).then(res => {   
                    this.data1 = res.data.list
                    this.total = res.data.totalPage * this.pageSize
                })
            },
            // 切换页码时的回调，返回值是current
            changePage(){
                this.getdata()
            },
            handleEdit(row){
                const id = row.id
                this.modal2 = true
                Bus.$emit('show', 
                this.modal2
            );
                this.$get('/admin/manager/'+ id ).then(res=>{
                    this.adminData = res.data
                    this.modal2 = true
                })
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