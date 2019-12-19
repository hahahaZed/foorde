<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>shop</BreadcrumbItem>
                </Breadcrumb>

                <!-- <Add /> -->
                <Button type="primary" class="mb-10 add"  :to="{name:'addshop'}">add</Button>
                <Edit  :data="adminData" />
                <Card>
                    <div style="height: 860px">
                        <Table stripe border :columns="columns1" :data="data1">
                            <template slot-scope="{ row}" slot="id">
                                <span>{{ row.id }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="name">
                                <span>{{ row.name }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="logo">
                                <!-- <span>{{ row.logo }}</span> -->
                                <img :src="row.logo"/>
                            </template>
                            <template slot-scope="{ row}" slot="license">
                                <!-- <span>{{ row.license }}</span> -->
                                <img :src=" row.license"/>
                            </template>
                            <template slot-scope="{ row}" slot="area_id">
                                <span>{{ row.area_id }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="address">
                                <span>{{ row.address }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="email">
                                <span>{{ row.email }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="shop_type">
                                <span>{{ row.shop_type }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="food_type">
                                <span>{{ row.food_type }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="service_type">
                                <span>{{ row.service_type }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="number">
                                <span>{{ row.number }}</span>
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

import Edit from './edit.vue'

export default {
  name: 'userlist',
  components: {
      Menu,
      Header,
      
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
                        slot: 'id',
                        width: 50,
                        align: 'center',
                    },
                    {
                        title: 'Name',
                        slot: 'name',
                        align: 'center',
                    },
                    {
                        title: 'Logo',
                        slot: 'logo',
                        align: 'center',
                    },
                    {
                        title: 'License',
                        slot: 'license',
                        align: 'center',
                    },
                    {
                        title:'Area_id',
                        slot:'area_id',
                        width: 90,
                        align: 'center',
                    },
                    {
                        title:'Address',
                        slot:'address',
                        align: 'center',
                    },
                    
                    {
                        title:'Email',
                        slot:'email',
                        align: 'center',
                    },
                    {
                        title:'Shop_type',
                        slot:'shop_type',
                        align: 'center',
                    },
                    {
                        title:'Food_type',
                        slot:'food_type',
                        align: 'center',
                    },
                    {
                        title:'Service_type',
                        slot:'service_type',
                        align: 'center',
                    },
                    {
                        title:'Number',
                        slot:'number',
                        align: 'center',
                    },
                    {
                        title:'Action',
                        slot: 'action',
                        align: 'center',
                        width: 80
                    }
                ],
                data1: [],//渲染数据
                total:0,//数据总数
                current:1,//当前页
                pageSize:5,//每页条数
                adminData:{},
            }
        },
        created () {
            this.getdata()
        },  
        methods:{
            getdata(){
                this.$get('/admin/shop',{page:this.current,limit:this.pageSize}).then(res => {   
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
            //     this.modal2 = true
            //     Bus.$emit('showshop', 
            //     this.modal2
            // );
                this.$router.push({
                    name: 'editshop',
                    query:{id}
                })
                // this.$get('/admin/shop/'+ id ).then(res=>{
                //     this.adminData = res.data
                //     this.modal2 = true
                // })
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
img{
    width:150px;
}
/deep/.ivu-table-cell{
    padding:0;
}
</style>