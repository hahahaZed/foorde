<template>
    <div >
        <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
            <template >
                <img :src="item.url" />
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
            </template>
            <!-- <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template> -->
        </div>
        <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            multiple
            type="drag"
            :action="actionurl"
            style="display: inline-block;width:58px;"
        >
            <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="ios-camera" size="20"></Icon>
            </div>
        </Upload>
        <Modal title="View Image" v-model="visible" footer-hide>
            <img :src="imgName " v-if="visible" style="width: 100%" />
        </Modal>
    </div>
</template>

<script>
import Bus from '@/assets/Bus.js'
import config from '@/config'
export default {
  name: 'LogoUpdate',
  data () {
      return{
          defaultList: [],
                imgName: '',
                visible: false,
                uploadList: [],
                actionurl:(process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro) + '/imags?desc=Shop logo&category=logo',
                url:''
      }
  },
//   created(){
//       console.log(this.data)
//        this.defaultList.push({name:this.data,url:this.data})
//        console.log(this.defaultList)
//   },
created(){
      Bus.$on('logo',(e) =>{
          this.uploadList=[{name:e,url:e}]
          Bus.$emit('oldlogo',this.uploadList[0].url)
      })
      this.$get('/api/common.imags/url').then(res =>{
          this.url =res.data.url
      })
  },
  methods: {
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
                this.uploadList.splice(fileList.indexOf(file), 1);
                Bus.$emit('oldlogo',null)
            },
            handleSuccess (res, file) {
                file.url =  this.url + "/" + res.data.url;
                file.name =  this.url + "/" + res.data.url;
                this.uploadList.push({name:file.name,url:file.url})
                this.defaultList.push({name:file.name,url:file.url})
                Bus.$emit('oldlogo',res.data.url)
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            // handleBeforeUpload () {
            //     const check = this.uploadList.length < 5;
            //     if (!check) {
            //         this.$Notice.warning({
            //             title: 'Up to five pictures can be uploaded.'
            //         });
            //     }
            //     return check;
            // }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }
}
</script>
<style lang="less" scoped>
.demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 4px;
}
.demo-upload-list img {
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
    display: block;
}
.demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>