/**
* Created by bk on 2017/3/28.
*/
<template>
    <div>
        <my-head></my-head>
        <div class="wrap" >
            <div style="height: 100%;">
                <transition name="slide-fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <my-nav></my-nav>
        <!--<my-sideBar></my-sideBar>-->
    </div>
</template>

<script>
    import myHead from '../components/header'
//    import myFoot from 'components/footer'
    import myNav from '../components/nav'
//    import mySideBar from 'components/sideBar'

    export default {
        name: 'admin',
        components: {
            myHead,
            myNav
        }
    }
</script>

<style scoped>
    .wrap {
        position: absolute;
        left: 310px;
        top: 80px;
        bottom: 0px;
        right: 0px;
    }


</style>

 