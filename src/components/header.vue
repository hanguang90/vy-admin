/**
* Created by bk on 2017/3/28.
*/
<template>
    <div class="header">
    <span class="title">
      <!--{{$store.state.pageTitle}}-->
    </span>
	<div class="rBox">
		<div class="searchBox">
			<input class="seach" placeholder="搜索..." type="text" />
			<div class="search-icon"></div>
		</div>
		<img src="http://webapplayers.com/inspinia_admin-v2.6.2.1/img/profile_small.jpg" width="30" height="30" class="demo-badge">
	</div>
    <!--<span class="userInfo toolbar">
        <Icon type="search" class="ivu-icon-white searchIcon"></Icon>
        <Icon type="gear-b" class="ivu-icon-white setUpIcon"></Icon>
         <Badge count="3" class="item">
             <img src="http://webapplayers.com/inspinia_admin-v2.6.2.1/img/profile_small.jpg" width="30" height="30" class="demo-badge">
         </Badge>
        <span class="userName">小小王可可</span>
        <Dropdown style="margin-left: 10px" placement="bottom-end">
            <a href="javascript:void(0)">
                <Icon type="arrow-down-b" class="ivu-icon-white"></Icon>
            </a>
            <Dropdown-menu slot="list">
                <Dropdown-item>驴打滚</Dropdown-item>
                <Dropdown-item>炸酱面</Dropdown-item>
                <Dropdown-item disabled>豆汁儿</Dropdown-item>
                <Dropdown-item>冰糖葫芦</Dropdown-item>
                <Dropdown-item divided>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
        </Dropdown>
    </span>-->
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
        return {
            title: '维拓云',
            searchValue: ""
        }
    },
    methods: {
        showSideBar: function(event){
            this.$store.commit('toggleSideBar')
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        position: fixed;
        top: 0px;
        left: 310px;
        right: 0px;
        height: 80px;
		border-bottom: 1px solid #bbb;
    }
    .rBox{
    	width: 258px;
    	height: 50px;
    	float: right;
    	margin-top: 15px;
    	margin-right: 20px;
    }
    .searchBox{
    	width: 190px;
    	height: 30px;
    	margin-top:16px;
    	float: left;
    	border-bottom: 1px solid #eaeaea;
    	position: relative;
    }
    .demo-badge{
        width: 50px;
        height: 50px;
        margin-left:18px;
        border-radius: 50%;
        display: inline-block;
    }
    .seach{
    	width: 190px;
    	margin-top: 5px;
    	border: none;
    	outline: none;
    	font-size: 14px;
    }
    .search-icon{
    	width: 12px;
        height: 12px;
    	position: absolute;
    	top: 5px;
    	right: 0;
    }
    
    
    .title {
        position: absolute;
        left: 20px;
        font-size: 16px;
        width: 50%;
    }
    .toolbar{
        float: right;
        margin-right: 15px;
    }
    .userInfo{

    }
    .userInfo .item{
        height: 30px;
    }
    .userInfo .item img{
        border-radius: 50%;
        background-color: #FFF;
        vertical-align: top;
    }
    .icon{
        width: 24px;
        height: 55px;
        margin-right: 15px;
        cursor: pointer;
    }
    .searchIcon {
        vertical-align: middle;
        font-size: 20px;
        margin-right: 30px;
    }
    .setUpIcon {
        vertical-align: middle;
        font-size: 20px;
        margin-right: 30px;
    }
    .ivu-input-icon {
        top: 12px;
    }
    .userName {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 244, 247, 254 );
        margin-left: 10px;
    }
</style>


 