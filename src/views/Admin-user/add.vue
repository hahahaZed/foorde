<template>
    <div class="layout">
        <Menu />
        <Layout :style="{marginLeft: '250px',height: '100vh',overflow: 'auto'}">
            <Header />
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>add-admin</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: auto">
                        <Form :model="form" label-position="left" :label-width="100" inline>
                            <FormItem label="Name">
                                <Input v-model="form.user_name" style="width:388px" />
                            </FormItem>
                            <FormItem label="Nick Name">
                                <Input v-model="form.nick_name" style="width:388px" />
                            </FormItem>
                            <FormItem label="Shop Id">
                                <Input v-model="form.shop_id" style="width:388px" disabled />
                            </FormItem>
                            <FormItem label="Email">
                                <Input v-model="form.email" style="width:388px" />
                            </FormItem>
                            
                            <FormItem label="Position">
                                <Input v-model="form.position" style="width:388px" />
                            </FormItem>
                            <FormItem label="Job Number">
                                <Input v-model="form.job_number" style="width:388px" />
                            </FormItem>
                            <FormItem label="Phone Number">
                                <Input v-model="form.phone_number" style="width:388px" />
                            </FormItem>
                            <FormItem label="Password">
                                <Input v-model="form.password" style="width:388px" />
                            </FormItem>
                            <FormItem label="is Root">
                                <RadioGroup v-model="form.is_root" >
                                    <Radio label="1">yes</Radio>
                                    <Radio label="0">no</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Form>
                        <Button type="primary" size="large" @click="add">ok</Button>
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
  name: 'adminAdd',
  components: {
      Menu,
      Header
  },
  data () {
      return {
          form:{
              id:'',
              user_name:'',
              nick_name:'',
              shop_id:'',
              email:'',
              is_root:'0',
              position:'',
              job_number:'',
              phone_number:'',
              password:''
          }
      }
  },
   created(){
        this.form.shop_id = this.$route.query.shop_id
        if(this.$route.query.id){
            this.$get('admin/buser/' + this.$route.query.id).then(res =>{
                console.log(res)
                this.form =res.data
            })
        }
    },
  methods: {
      add(){
          if(this.$route.query.id){
              this.$post('/api/admin.buser/edit',this.form).then(res =>{
                  console.log(res)
              })
          } else {
                this.$post('/admin/buser',this.form).then(res => {
                if(res.status == 1){
                    this.$router.push({
                    name:'adminList'
                })
                } 
            })
          }
          
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
</style>