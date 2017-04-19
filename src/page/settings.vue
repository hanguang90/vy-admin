/**
* Created by bk on 2017/3/28.
*/
<template>
    <div>
        <my-head></my-head>
        <div class="settings" >
            <div class="title"><img src="../assets/images/title.png" ></div>
            <div class="publicBox">
            	<div class="p-box">
            		<div class="p-title">设置<img src="../assets/images/drop-down.png" ></div>
            		<div class="p-edit"><img src="../assets/images/drop-down.png" ></div>
            	</div>
            	<div class="public"><img src="../assets/images/drop-down.png" >公众号名称</div>
            	<p class="name">1111111111111111</p>
            </div>
            <div class="menuBox">
            	<div class="p-box">
            		<div class="p-title">菜单设置<img src="../assets/images/drop-down.png" ></div>
            	</div>
            	<div class="menu">
            		<div class="keyboard"><img src="../assets/images/drop-down.png" ></div>
            		<div class="menu-name"><img src="../assets/images/drop-down.png" >菜单
            			<div class="navmenu-add">+</div>
            		</div>
            		<div class="menu-add">+</div>
            	</div>	
            </div>
            <div class="replyBox">
            	<div class="p-box">
            		<div class="p-title">自动回复<img src="../assets/images/drop-down.png" ></div>
            		<div class="p-edit"><img src="../assets/images/drop-down.png" ></div>
            	</div>
            	<div class="r-box">
            		<div class="r-title">被添加<img src="../assets/images/drop-down.png" ></div>
            		<div class="p-edit"><img src="../assets/images/drop-down.png" ></div>
            		<div class="clear"></div>
            	</div>
            	<p class="name">1111111111111111</p>
            	<div class="r-box">
            		<div class="r-title">消息<img src="../assets/images/drop-down.png" ></div>
            		<div class="p-edit"><img src="../assets/images/drop-down.png" ></div>
            		<div class="clear"></div>
            	</div>
            	<p class="name">1111111111111111</p>
            	<div class="r-box">
            		<div class="r-title">关键词<img src="../assets/images/drop-down.png" ></div>
            		<div class="p-edit"><img src="../assets/images/drop-down.png" ></div>
            		<div class="clear"></div>
            	</div>
            	<div class="labelBox">
            		<div class="label">
            			<div class="label-name">健身<span>x</span></div>
            		</div>
            		<div class="label-add">+</div>
            		<div class="clear"></div>
            	</div>
            </div>
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
        font-size: 16px;
        font-family: "微软雅黑";
    }
    .title{
    	margin-top: 48px;
    }
    .publicBox{
    	width: 800px;
    	height: 238px;
    	float: left;
    	border: 1px solid #d7dde4;
    }
    .p-box{
    	height: 60px;
    	padding: 0 20px;
    }
    .p-title{
    	line-height: 60px;
    	float: left;
    }
    .settings img{
    	vertical-align: top;
    	margin: 25px 0px 0 10px;
    }
    .p-edit{
    	float: right;
    }
    .public{
    	padding: 20px 20px;
    	border-top: 1px solid #d7dde4;
    	font-size: 14px;
    }
    .public img,.r-box img{
    	vertical-align: top;
    	margin-top: 5px;
    	margin-right: 6px;
    }
    .name{
    	margin: 20px 0 64px 52px;
    }
    .replyBox{
    	width: 800px;
    	float: left;
    	margin-top: 30px;
    	border: 1px solid #d7dde4;
    }
    .r-box{
    	padding: 20px 20px;
    	border-top: 1px solid #d7dde4;
    }
    .r-title{
    	float: left;
    	font-size: 14px;
    }
    .label{
    	width: 98px;
    	height: 34px;
    	float: left;
    	margin-left: 40px;
    	border:1px solid #ead483 ;
    }
    .label-name{
    	width: 96px;
    	height: 32px;
    	line-height: 32px;
    	text-align: center;
    	border:1px solid #fff ;
    	background: #fef6ce;
    	color: #60646b;
    	cursor: pointer;
    }
    .label-name span{
    	margin-left: 10px;
    	color: #2c51b1;
    	opacity: 0;
    }
    .label-name:hover{
    	.label-name span{
	    	opacity: 1;
	    }
    }
    .label-add{
    	width: 98px;
    	height: 34px;
    	line-height: 32px;
    	float: left;
    	margin-left: 40px;
    	border:1px dashed #ead483 ;
    	text-align: center;
    	color: #ead483;
    	font-size: 28px;
    }
    .menuBox{
    	width: 500px;
    	height: 500px;
    	float: right;
    	border: 1px solid #d7dde4;
    	position: relative;
    }
    .menu{
    	height: 50px;
    	position: absolute;
    	left: 0;
    	bottom: 0px;
    }
    .keyboard{
    	width: 95px;
    	height: 50px;
    	float: left;
    	border-top: 1px solid #d7dde4;
    }
    .menu-name{
    	width: 135px;
    	height: 50px;
    	line-height: 50px;
    	text-align: center;
    	border-left: 1px solid #d7dde4;
    	border-top: 1px solid #d7dde4;
    	color: #666;
    	float: left;
    	position: relative;
    }
    .menu-add{
    	width: 135px;
    	height: 50px;
    	line-height: 50px;
    	text-align: center;
    	border-left: 1px solid #d7dde4;
    	border-top: 1px solid #d7dde4;
    	border-right: 1px solid #d7dde4;
    	color: #666;
    	float: left;
    	
    }
    .navmenu-add{
    	width: 135px;
    	height: 50px;
    	line-height: 50px;
    	text-align: center;
    	border: 1px solid #d7dde4;
    	color: #666;
    	float: left;
    	position: absolute;
    	left: 0;
    	bottom: 62px;
    }
    
    .clear{
    	clear:both;
    }
</style>

 