<template>
     <div>
       <Row>
         <Col span="8">
           <Menu :theme="theme2">
             <Submenu name="1">
               <template slot="title">
                 <Icon type="md-aperture" />
                 内容管理
               </template>
               <MenuItem name="1-1" >文章管理</MenuItem>
               <MenuItem name="1-2">评论管理</MenuItem>
               <MenuItem name="1-3">举报管理</MenuItem>
             </Submenu>
           </Menu>
         </Col>
       </Row>
       <br>
       <p>Change theme</p>
       <RadioGroup v-model="theme2">
         <Radio label="light"></Radio>
         <Radio label="dark"></Radio>
       </RadioGroup>
       <Slider v-model="value9" :tip-format="format"></Slider>
       <div class="box">
         你好啊
       </div>
     </div>
</template>

<script>
    export default {
        name: "iview",
      data(){
          return{
            theme2:'light',
            value9: 25,
          }
      },
      methods:{
        format (val) {
          return 'Progress: ' + val + '%';
        }
      }
    }
</script>

<style scoped>
.box{
  font-size:100px;
}
</style>
