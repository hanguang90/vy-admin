/**
* Created by bk on 2017/3/28.
*/
<template>
    <div>
        <my-head></my-head>
        <div class="wrap" >
            <div class="headBox">
            	<div class="sBox">
            		<input class="date-search" placeholder="请搜索..."></input>
            		
            	</div>
            	<div class="calendar"></div>
            	<div class="add-article">+新增一篇文章</div>
            </div>
            <div class="dateBox">
            	<div class="spot"></div>
            	<div class="date">2017-4-15</div>
            	<div class="line"></div>
            	<div class="date-icon"></div>
            </div>
            <div class="listBox">
            	<div class="picture"><img src="image/tucao.png"></div>
				<p class="abstract">111111111111111111111111111111111111111111111111111111111111111111111111</p>
				<div class="follow">
					<div class="time">2016-11-30</div>
					<div class="read">
						<div class="icon"><img src="image/ydIcon.png"></div>
						<div class="number">100</div>
					</div>
					<div class="read">
						<div class="icon"><img src="image/plIcon.png"></div>
						<div class="number">200</div>
					</div>
				</div>
            </div>
            <div class="listBox">
            	<div class="picture"><img src="image/tucao.png"></div>
				<p class="abstract">111111111111111111111111111111111111111111111111111111111111111111111111</p>
				<div class="follow">
					<div class="time">2016-11-30</div>
					<div class="read">
						<div class="icon"><img src="image/ydIcon.png"></div>
						<div class="number">100</div>
					</div>
					<div class="read">
						<div class="icon"><img src="image/plIcon.png"></div>
						<div class="number">200</div>
					</div>
				</div>
            </div>
            <div class="listBox">
            	<div class="picture"><img src="image/tucao.png"></div>
				<p class="abstract">111111111111111111111111111111111111111111111111111111111111111111111111</p>
				<div class="follow">
					<div class="time">2016-11-30</div>
					<div class="read">
						<div class="icon"><img src="image/ydIcon.png"></div>
						<div class="number">100</div>
					</div>
					<div class="read">
						<div class="icon"><img src="image/plIcon.png"></div>
						<div class="number">200</div>
					</div>
				</div>
            </div>
            <div class="listBox">
            	<div class="picture"><img src="image/tucao.png"></div>
				<p class="abstract">111111111111111111111111111111111111111111111111111111111111111111111111</p>
				<div class="follow">
					<div class="time">2016-11-30</div>
					<div class="read">
						<div class="icon"><img src="image/ydIcon.png"></div>
						<div class="number">100</div>
					</div>
					<div class="read">
						<div class="icon"><img src="image/plIcon.png"></div>
						<div class="number">200</div>
					</div>
				</div>
            </div>
            <div class="listBox">
            	<div class="picture"><img src="image/tucao.png"></div>
				<p class="abstract">111111111111111111111111111111111111111111111111111111111111111111111111</p>
				<div class="follow">
					<div class="time">2016-11-30</div>
					<div class="read">
						<div class="icon"><img src="image/ydIcon.png"></div>
						<div class="number">100</div>
					</div>
					<div class="read">
						<div class="icon"><img src="image/plIcon.png"></div>
						<div class="number">200</div>
					</div>
				</div>
            </div>
            <div class="listBox">
            	<div class="picture"><img src="image/tucao.png"></div>
				<p class="abstract">111111111111111111111111111111111111111111111111111111111111111111111111</p>
				<div class="follow">
					<div class="time">2016-11-30</div>
					<div class="read">
						<div class="icon"><img src="image/ydIcon.png"></div>
						<div class="number">100</div>
					</div>
					<div class="read">
						<div class="icon"><img src="image/plIcon.png"></div>
						<div class="number">200</div>
					</div>
				</div>
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
        padding-left: 20px;
        background: #f8f8f8;
    }
    .headBox{
    	height: 105px;
    }
	.sBox{
		width: 300px;
		height: 42px;
		margin-top: 20px;
		float: left;
		position: relative;
	}
	.date-search{
		width: 300px;
		height: 42px;
		padding-left: 10px;
		/*border-radius: 3px;*/
		font-size: 16px;
	}
	.calendar{
		width: 100px;
		height: 16px;
		margin-top: 33px;
		float: left;
	}
	.add-article{
		width: 150px;
		height: 42px;
		line-height: 40px;
		border: 1px solid #3c7ce6;
		border-radius: 3px;
		float: right;
		margin-top: 20px;
		margin-right: 20px;
		text-align: center;
		color: #3c7ce6;
	}
	.dateBox{
		height:18px;
		margin-bottom: 25px;
	}
	.spot{
		width: 4px;
		height: 4px;
		margin-top: 7px;
		border-radius: 50%;
		background: #3a404a;
		float: left;
	}
	.date{
		line-height: 18px;
		float: left;
		margin-left: 10px;
	}
	.line{
		width: 500px;
		height: 9px;
		margin-left: 25px;
		border-bottom:1px dashed #d7dde4 ;
		float: left;
	}
	.date-icon{
		width: 18px;
		height: 18px;
		margin-left: 5px;
		float: right;
	}
	.listBox{
		width: 370px;
		height: 340px;
		margin-right: 30px;
		margin-bottom: 40px;
		float: left;
		border-bottom: 1px solid #e1e1e1;
		background: #fff;
	}
	.picture{
		width:370px;
		height:236px;
	}
	.abstract{
		font-size:16px;
		margin: 0 15px;
		line-height: 24px;
		color:#606060;
		word-wrap:break-word;
		word-break:normal;
	}
	.follow{
		height:20px;
		margin: 20px 15px 0;
	}
	.follow span{
		margin:0 5px;
	}
	.read{
		float:right;
		margin-left: 30px;
	}
	.icon{
		width:14px;
		height:14px;
		margin: 3px 5px 0 0;
		float:left;
	}
	.number{
		float:left;
		font-size:14px;
		color:#bdbdbf;
		margin-right:15px;
	}
	.time{
		float:left;
		font-size:14px;
		color:#999;
	}
</style>

 