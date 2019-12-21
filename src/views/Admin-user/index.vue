<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>adminList</BreadcrumbItem>
                </Breadcrumb>
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
                            <template slot-scope="{ row}" slot="shop_id">
                                <span>{{ row.shop_id }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="email">
                                <span>{{ row.email }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="is_root">
                                <span>{{ row.is_root }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="phone_number">
                                <span>{{ row.phone_number }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="job_number">
                                <span>{{ row.job_number }}</span>
                            </template>
                            <template slot-scope="{ row}" slot="position">
                                <span>{{ row.position }}</span>
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
export default {
  name: 'adminlist',
  components: {
      Menu,
      Header
  },
  data () {
      return {
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
                        title: 'Shop Id',
                        slot: 'shop_id'
                    },
                    {
                        title: 'Email',
                        slot: 'email'
                    },
                    {
                        title: 'Is Root',
                        slot: 'is_root'
                    },
                    {
                        title:'Phone Number',
                        slot:'phone_number'
                    },
                    {
                        title:'Job Number',
                        slot:'job_number'
                    },
                    
                    {
                        title:'Position',
                        slot:'position'
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
                pageSize:5,//每页条数
                adminData:{},
      }
  },
  created(){
      this.getdata()
  },
  methods:{
      getdata(){
          this.$get('/admin/buser',{page:this.current,limit:this.pageSize}).then(res =>{
            this.data1 = res.data.list
            this.total = res.data.totalPage * this.pageSize
      })
      },
      handleEdit(row){
            const id = row.id
            this.$router.push({
                name: 'adminAdd',
                query:{id}
            })
        },
      changePage(){
        this.getdata()
    },
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