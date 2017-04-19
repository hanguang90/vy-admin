/**
* Created by bk on 2017/3/28.
*/
<template>
    <div class="nav">
        <div class="logo">
            <div class="logoIcon" @click="routeToRegister">
                <img src="../assets/images/TDLOGO.png" alt=""/>
            </div>
            <div class="logoFont" @click="routeToRegister">
                鞍山市云平台
            </div>
            <div class="logoFontE">
                AnShan City Cloud platform
            </div>
            <div class="businessType">
                <span class="sq">
                    <i class="icon-zitigui-xianxing"></i>
                    <div class="count">1256</div>
                </span>
                <span class="sq borderLeft">
                    <i class="icon-zitigui-xianxing"></i>
                    <div class="count">1256</div>
                </span>
                <span class="sq borderLeft">
                    <i class="icon-zitigui-xianxing"></i>
                    <div class="count">1256</div>
                </span>
            </div>
        </div>
        <div class="menuBox">
			<div class="menu">
                <img src="../assets/images/article-icon.png" >
                知识管理
                <div class="add"><img src="../assets/images/add.png" ></div>
            </div>
            <div class="menu">
                <img src="../assets/images/activity-icon.png" >
                网络管理
                <div class="add"><img src="../assets/images/add.png" ></div>
            </div>
            <div class="menu">
                <img src="../assets/images/service-icon.png" >
                微信管理
                <div class="add"><img src="../assets/images/add.png" ></div>
            </div>
        </div>
        
        <div class="nav-footer">
			<div class="manage">
                <img src="../assets/images/yunLogo.png" >
                <div class="mt">知识管理</div>
            </div>
            <div class="manage">
                <img src="../assets/images/yunLogo.png" >
                <div class="mt">网络管理</div>
            </div>
            <div class="manageSide">
                <img src="../assets/images/yunLogo.png" >
                <div class="mt">微信管理</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'hello',
        data () {
            return {
                menus: [{
                    index: 1,
                    name: 'hello'
                }, {
                    index: 2,
                    name: 'test'
                },{
                    index: 3,
                    name: 'testMap'
                }]
            }
        },
    methods: {
            routeTo(e) {
//                console.log(e);
                this.$router.push(this.$data.menus[e - 1].name);
//                this.$set(this.$data, 'pageName', this.$data.page[e - 1].name);
                //this.$set(this.$data,'activePage',this.$data.page[e - 1].index+'');
            },
            routeToRegister(){
                this.$router.push('register');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .nav{
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 310px;
        border-radius: 0px;
        z-index: 2;
        box-shadow: 0px 1px 1px 0px rgb( 60, 102, 165 );
        background: linear-gradient(#3c7ce6, #325ccc); 
    }
    .logo {
        width: 310px;
        height: 390px;
        padding-top: 58px;
    }
    .logoIcon {
        width: 110px;
        height: 110px;
        margin-left: 92px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
    }
    .logoFont{
        margin-top: 18px;
        text-align: center;
        color: #FFF;
        letter-spacing: 2px;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        cursor: pointer;
    }
    .logoFontE{
        text-align: center;
        color: #FFF;
        font-size: 14px;
        opacity: 0.5;
    }
    .logo img{
        width: 126px;
        height: 126px;
    }
    .nav .ivu-menu{
        width: 310px;
        padding: 5px 0px;
        background-color: #3b7ae4;
    }
    .ivu-icon-white{
        width: 20px;
        height: 20px;
        margin-right: 20px;
        color: #FFF;
    }
    .ivu-menu-item {
        padding-left: 20px;
        text-align: left;
        font-size: 18px;
        color: rgb( 244, 247, 254 );

    }
    .menu {
    	width: 266px;
    	height: 60px;
    	line-height: 60px;
    	margin: 20px auto 0;
        padding-left: 82px;
        text-align: left;
        font-size: 18px;
        color: #bbd2ff;
        background: #4b7ddf;
    }
    .menu img{
    	vertical-align: top;
    	margin-top: 17px;
    }
    .add{
    	width: 20px;
    	height: 20px;
    	float: right;
    	margin-top: 20px;
    	margin-right: 20px;
    	background: #3971dd;
    }
    .add img{
    	margin-top: 0px;
    }
    .wBadge{
        margin-left: 50px;
        width: 20px;
        height: 20px;
    }
    .nav-footer {
        position: absolute;
        bottom: 20px;
        text-align: center;
        color: #6c94fe;
    }
    

    .businessType {
        margin-top: 40px;
        color: #fff;
        text-align: center;
    }
    .businessType > span {
        display: inline-block;
        width: 30%;
        height: 60px;
    }
    .borderLeft{
    	border-left: 1px solid #5e8de4;
    }
    .count{
        font-size: 12px;
    }
    .icon-zitigui-xianxing:before {
        font-family: iconfont;
        font-size: 20px;
    }
    .manage{
    	width: 100px;
    	margin-right: 5px;
    	background: #3660ce;
    	float: left;
    }
    .manageSide{
    	width: 100px;
    	background: #3660ce;
    	float: left;
    }
    .nav-footer > span {
        display: inline-block;
        width: 30%;
        height: 60px;
    }
</style>
