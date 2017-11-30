
<template>
<div class="ace-container container-fluid">
        <div class="sidebar">
            <div class="shortcut">
                <button class="btn btn-small btn-success"><i class="fa fa-signal" aria-hidden="true"></i></button>
                <button class="btn btn-small  btn-info"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                <button class="btn btn-small btn-warning"><i class="fa fa-users" aria-hidden="true"></i></button>
                <button class="btn btn-small btn-danger"><i class="fa fa-cogs" aria-hidden="true"></i></button>
            </div>
            <ul id="example-1" v-for=" menu in menus" class="nav nav-list"  v-if="menus.length>0">
                <!-- {{menus}} -->
                <li>
                    <!-- (val, key){{key }} : {{ val }}     -->
                    <li v-if="menu.submenu != undefined">
                        <router-link to="###" class="dropdown-toggle">
                            <i class="fa fa-desktop"></i> 
                            <span>{{menu.name}}</span>
                            <i class="pull-right fa fa-angle-down" aria-hidden="true"></i>
                        </router-link>
                        <ul class="submenu" role="menu" v-show="isShow">
                            <li v-for="(sub,key) in menu.submenu" :class="{active:key==0}">
                                <router-link :to="{path:sub.url,name:sub.name}">
                                    <i class="fa fa-angle-double-right"></i>
                                </router-link>
                                <span>{{sub.name}}</span>
                            </li>
                        </ul>
                        <!-- <a href="###" class="dropdown-toggle">
                            <i class="fa fa-desktop"></i>
                            <span>{{menu.name}}</span>
                            <i class="pull-right fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <ul class="submenu" role="menu" v-show="isShow">
                            <li v-for="(sub,key) in menu.submenu" :class="{active:key==0}">
                                <a :href="sub.url">
                                    <i class="fa fa-angle-double-right"></i>
                                </a>
                                <span>{{sub.name}}</span>
                            </li>
                        </ul> -->
                    </li>
                    <li v-else>
                        <router-link :to="{path:menu.url,name:menu.name}">
                            <i class="fa fa-text-width"></i>
                            <span>{{menu.name}}</span>
                        </router-link>
                        <!-- <a :href="menu.url">
                            <i class="fa fa-text-width"></i>
                            <span>{{menu.name}}</span>
                        </a> -->
                    </li>
                    
                </li>
            </ul>
        </div>
</div>
</template>
<script>
    export default{
        name:"sideBar",
        data(){
            return {
                 menus:"",
                 isShow:true
            }
        },
        created:function() {
            //获取menus
            var url =  "http://localhost:3000/menus";

             this.$http.get(url).then(function(response){
                 this.menus = response.body;
                
                 //console.dir(this.$set('menus',response.body));

             },function(){
               // console.info(response);
             });
        }
    }
</script>
<style>
    @import '../../common/header.css' 
</style>