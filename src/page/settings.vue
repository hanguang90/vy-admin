/**
* Created by bk on 2017/3/28.
*/
<template>
    <div>
        <my-head></my-head>
        <div class="settings" >
            <div class=""></div>
        </div>
        <my-nav></my-nav>
        <!--<my-sideBar></my-sideBar>-->
    </div>
</template>

<script>
    import myHead from '../components/header'
    import myNav from '../components/nav'

    export default {
        name: 'admin',
        components: {
            myHead,
            myNav
        }
    }
</script>

<style scoped>
    .settings {
        position: absolute;
        left: 310px;
        top: 80px;
        bottom: 0px;
        right: 0px;
        padding-left: 20px;
        background: #f8f8f8;
    }
    
</style>

 