<template>
    <div class="row">
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
             <li class="active">{{routeStr}}</li>
        </ol>
    </div>
</template>
<script>
     console.log('bread');
     export default{
         props:['routeStr']
     };
</script>
<style>
</style>