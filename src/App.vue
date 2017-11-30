<template>
  <div id="app">
        <!--<img src="./assets/logo.png">  
        <button class="btn btn-default">btn-default</button>
        <p>info{{info}}</p>-->
        <headerTmp></headerTmp>
        <sideBar></sideBar>
        <div id="content" class="row-fluid ace-container container-fluid">
                <!--路径导航-->
            <!-- <bread></bread>传入路径 -->
            <bread :routeStr="dynamicSegment"></bread>
            <div class="">
                <div class="col-md-12">
                    <h1>{{dynamicSegment}}</h1>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import headerTmp from './components/fw/Header'
import sideBar from './components/fw/Sidebar';
import bread  from './components/fw/bread';
export default {
  props: ['routeStr'],
  name: "app",
  data() {
    return {
      posts: "",
      info: {},
      dynamicSegment:"Dashboard"
    };
  },
  created: function() {
    var url = "http://localhost:3000/posts";

    this.$http.get(url).then(
      function(response) {
        console.log(this);
        console.dir(response.body);
        var json = response.body;
        this.info = response.body; //动态添加到data中
        //或者.bind(this)
        //  this.info = data.body;
      }, //.bind(this), //绑定到vm实例上,这样内部可以直接使用this
      function(response) {
        console.info(response);
      }
    );
  },
  watch: { //监控路由变化
    $route (to,from){
        // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
       console.log('route');
       //console.log(to.name);
       //console.log(from.name);
       //alert($route.path);
        this.dynamicSegment = to.name ||from.name;
    }
  },
  components:{headerTmp,sideBar,bread}
};
//数据获取测试
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
