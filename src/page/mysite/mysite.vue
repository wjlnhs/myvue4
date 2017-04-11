<template>
  <div id="mysite">
    <div></div>
    <div v-show="showshop" class="topbanner" style="width: 100%">
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>美食</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>甜品饮料</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>甜品饮料</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>甜品饮料</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>美食</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>甜品饮料</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>甜品饮料</span>
      </div>
      <div class="col-xs-3">
        <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
        <span>甜品饮料</span>
      </div>
    </div>
        <div v-show="showsearch">
          <header1></header1>
            <div class="search-box">
              <input v-model="keyword" @input="getadds" placeholder="请输入地址"/>
              <i v-show="showclear" @click="clearsearch" class="x">x</i>
            </div>
          <div class="shops">
            <div class="s-item" v-for="item in items" @click="addressclick(item)">
               <div class="s-name">{{item.name}}</div>
                <div class="s-add">{{item.address}}</div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
  import header1 from "src/components/header1.vue";
  export default {
    data(){
      return {
        showshop:false,
        showsearch:true,
        showclear:false,
        keyword:'',
        items:[]
      }
    },
    components: {
      header1
    },
    computed: {

    },
    methods: {
      getadds:function(){
        const This=this;
        if(!this.keyword){
          this.showclear=false;
          return;
        }
        this.showclear=true;
        axios.get('/bgs/poi/search_poi_nearby', {
          params: {
            keyword: this.keyword,
            limit:20
          }
        })
          .then(function (response) {
           // debugger;
           // console.log(This)
            This.items=response.data;
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      clearsearch:function(){
        this.keyword='';
        this.showclear=false;
      },
      addressclick:function(item){
        this.showshop=true;
        this.showsearch=false;
      }
    }
  }
</script>
<style>
  #app{
    margin-top: 0px;
  }
  .topbanner img{
    width: 100%;
  }
</style>
<style scoped lang="less">
  @blue: #0096ff;
  .search-box{
    height: 1rem;
    background: @blue;
    position: relative;
  }
  .search-box input{
    width: 6.5rem;
    height: 0.6rem;
    margin: 0 .5rem;
    margin-top: 0.2rem;
    border: 1px solid #f2f2f2;
    border-radius: 0.3rem;
    text-indent: .3rem;
  }
  .search-box .x{
    position: absolute;
    color: #999;
    right: .8rem;
    top: .25rem;
    font-size: 0.3rem;
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
  }
  .s-name{
    color: #000;
    font-weight: bold;
    font-size: .3rem;
  }
  .s-add{
    color: #999;
    font-size: .28rem;
  }
  .s-item{
    text-align: left;
    padding: .2rem;
  }
</style>

