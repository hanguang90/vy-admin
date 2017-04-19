/**
* Created by bk on 2017/4/6.
*/
<template>
    <div class="register">
    	<div class="header"><img src="../assets/images/LOGO1.png" ><span>我已注册，现在就<a href="/">登录</a></span></div>
    	<div id="shadow"><img src="../assets/images/shadow.png" ></div>
        <div class="registerWarp">
            <div class="photo"><img :src="src" alt=""/></div>
            <a href="javascript:;" class="a-upload">
			    <input type="file" name="" id="" @change="imgChange">更改头像
			</a>
            <div class="pBox">
            	<input class="serach" placeholder="请搜索行政区域" v-model="inputDistrict" ref="inputDistrict" @blur="searchBlur"></input>
				<ul class="sConten" :class="{hide: flag}">
					<li  v-for="district in districtList" @click="selectItem(district)">
						<div class="s-title">{{district.streetCommunityName}}</div>
						<div class="s-introduce">{{district.introduce}}</div>
					</li>
				</ul>
            </div>
    		<input class="division" placeholder="请输入行政区域" v-model="systemName"></input>


            <div class="sure" @click="register">确定</div>
            
        </div>
        <div class="footer">
        	<div class="foot-logo"><img src="../assets/images/foot-logo.png" alt=""/></div>
        	<p>北京北科维拓科技有限公司 京ICP备08100339号</p>
        </div>
    </div>
</template>
<script type="es6">
	import photoSrc from '../assets/images/photo.png'
    export default {
        name: 'register',
        data () {
            return {
				src: photoSrc,
				flag: true,
				inputDistrict: '',
				systemName: '',
				cityList: [],
				districtList: [],
				currentDistrict: {},
                formValidate: {
                    address: '',
                    communityName: '',
                    photoPath: '',
                    isAgree: ''
                },
                ruleValidate: {
                    address: [
                        { required: true, message: '地址不能为空', trigger: 'blur' }
                    ],
                    communityName: [
                        { required: true, message: '社区名不能为空', trigger: 'blur' }
                    ],
                    photoPath: [
                        { required: true, message: '图片不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
		created: function () {
			var vm =this;
			this.$http.get('/zapi/base/sCity/getAll')
					.then(function (response) {
						console.log(response);
						vm.cityList = response.data.rows;
						console.log(response.data.rows.length);
					})
					.catch(function (error) {
						console.log(error);
					});
		},
		watch: {
			inputDistrict: {
				handler:function(val,oldVal){
					console.log(val);
					var vm = this;
					this.$http.get('/zapi/base/sStreet/getStreetAndCommunityList',{
						params: {
							inputName: val
						}
					})
							.then(function (response) {
								console.log(response);
								vm.districtList = response.data.rows;
							})
							.catch(function (error) {
								console.log(error);
							});
					//console.log(this.$refs.inputDistrict.value);
					if (val) {
						this.flag = false;
					} else {
						this.flag = true;
						this.systemName = "";
					}
				}
			}
		},
		methods: {
			test: function () {
				alert(1235698);
			},
			register: function () {
				console.log(this.$store.state.userInfo);
				this.$http.get('/zapi/base/sCommunitymanager/add',{
					params: {
						phone: this.$store.state.userInfo.phone,
						streetorcommityid: this.currentDistrict.streetCommunityId,
						streetorcommityname: this.currentDistrict.streetCommunityName,
						streetorcommity: this.currentDistrict.strretOrCommunity
					}
				})
						.then(function (response) {
							console.log(response);
						})
						.catch(function (error) {
							console.log(error);
						});
			},
			imgChange: function (e) {
				console.log(e);
				var file = e.target.files || e.dataTransfer.files;
				console.log(e.target.value);
				console.log(file);
				if (typeof FileReader === 'undefined') {
					alert('您的浏览器不支持图片上传，请升级您的浏览器');
					return false;
				}
				var image = new Image();
				var vm = this;
				var leng = file.length;
				for (var i = 0; i < leng; i++) {
					var reader = new FileReader();
					reader.readAsDataURL(file[i]);
					reader.onload = function (e) {
						console.log(e.target.result);
						vm.src = e.target.result;
					};
				}
			},
			upload () {
				var fileObj = document.getElementById("file").files[0];
				var form = new FormData();
				form.append("file", fileObj);
				this.$http.post('/api/base/oss/upload', form)
						.then(function (response) {
							console.log(response);
						})
						.catch(function (error) {
							console.log(error);
						});
			},
			selectItem (district) {
				this.inputDistrict = district.streetCommunityName;
				this.systemName = district.streetCommunityName + '系统';
				this.currentDistrict = district;
				//console.log(this.currentDistrict.streetCommunityName);
			},
			searchBlur () {
				var vm = this;
				setTimeout(function () {
					vm.flag = true;
				}, 200)
			}
		}
	}
</script>
<style scoped>
	*{
		box-sizing:border-box;
	}
    .register {
        width: 100%;
        height: 100%;
    }
    .header{
    	width:1200px;
    	height:91px;
    	margin: 0 auto;
    	line-height: 91px;
    	font-size: 30px;
    	color:#3c7ce6;
    	font-weight: bold;
    }
    .header img{
    	margin-top: 29px;
    }
    .header span{
    	font-size: 14px;
    	color: #666;
    	font-weight: 400;
    	float: right;
    }
    #shadow img{
    	width: 100%;
    }
    .registerWarp {
        width: 600px;
        height: 495px;
        margin: 92px auto 0;
        font-size: 14px;
    }
    .photo{
    	width:120px;
        height: 120px;
        margin: 0 auto;
        border-radius: 50%;
    }
    .photo img{
    	width:120px;
        height: 120px;
    }
    
    .doubleBox{
    	height:56px;
    	margin-top:60px;
    }
    .pBox{
    	height:50px;
    	background:#fff;
    	border: 1px solid #d7dde4;
    	color:#333;
    	font-size:20px;
    	position: relative;
    	border-radius: 5px;
    }
    .pBox img{
    	margin: 21px 13px 0 11px;
    	vertical-align: top;
    }
    .pBox select{
    	    width: 84px;
		    height: 33px;
		    margin-top: 8px;
		    padding: 0 10px;
		    border: none;
		    outline: none;
		    border-right: 1px solid #d7dde4;
    }
    .pBox select option{
    	height: 48px;
    	line-height: 48px;
    }
    .sConten{
    	width: 600px;
		max-height: 360px;
    	position: absolute;
    	top: 50px;
    	left: 0px;
    	box-shadow: 0 5px 10px #aaa;
    	background: #fff;
    	overflow-y: auto;
    }
    .sConten li{
    	padding: 10px 15px 5px;
    	border-bottom: 1px solid #eee;
    }
    .sConten li:hover{
    	cursor: pointer;
    	background: #ccc;
    }
    .s-title{
    	line-height: 20px;
    }
    .s-introduce{
    	font-size: 16px;
    	line-height: 20px;
    	color: #999;
    }
    .serach{
    	width:598px;
    	height:48px;
    	line-height: 48px;
    	background:#fff;
    	border: none;
    	padding-left: 19px;
    	font-size:16px;
    	border-radius: 5px;
    }
    .division{
    	width:600px;
    	height:50px;
    	margin-top:36px;
    	background:#fff;
    	border: 1px solid #d7dde4;
    	padding-left: 19px;
    	border-radius: 5px;
    }
    .sure{
    	height:50px;
    	margin-top:36px;
    	background:#2c52ae;
    	line-height: 56px;
    	text-align: center;
    	color: #fff;
    	border-radius: 5px;
    }
    .phoneBox{
    	width:400px;
    	height:56px;
    	float:left;
    	background:#fff;
    }
    .verBox{
    	width:192px;
    	height:56px;
    	float:right;
    	background:#fff;
    }
    .doubleBox img{
    	width: 26px;
    	height: 26px;
    	margin-top: 15px;
    	margin-left: 17px;
    	vertical-align: top;
    	border: none;
    }
    .phone{
    	width: 230px;
    	height: 38px;
    	margin-top: 9px;
    	margin-left: 17px;
    	padding-left: 10px;
    	border:none;
		outline:none;
		border-left: 1px solid #ddd;
    }
    .code{
    	width: 130px;
    	height: 38px;
    	margin-top: 9px;
    	margin-left: 17px;
    	padding-left: 10px;
    	border:none;
		outline:none;
		border-left: 1px solid #ddd;
    }
    .ver{
    	width: 105px;
    	height: 56px;
    	line-height: 56px;
    	text-align: center;
    	background: #f1f1f1;
    	float:right;
    }
    
    
    .footer{
    	width: 100%;
    	position: absolute;
    	left: 0;
    	bottom: 75px;
    	text-align: center;
    	color:#666;
    }
    .footer p{
    	margin-top: 10px;
    }
    .logo {
        height: 80px;
        text-align: left;
    }
    .logoIcon {
        display: inline-block;
        position: relative;
        top: 5px;
    }
    .title {
        display: inline-block;
        margin-left: 10px;
        font-size: 20px;
        font-family: "MFLangQian_Noncommercial";
        color: rgb( 50, 155, 229 );
        position: relative;
        top: 13px;
    }
    .title > div {
        font-size: 16px;
        font-family: "Aparajita";
        position: relative;
        top: -9px;
    }
    .content {
        width: 80%;
        margin: 0 auto;
    }
    .userInfo {
        margin-top: 50px;
    }
    .ivu-input-group-append {
        background-color: #329be5;
        color: #FFF;
    }
    
    
    .a-upload {
	width:90px;
    height: 30px;
    line-height: 28px;
    border: 1px solid #dedddd;
    margin: 16px auto 54px;
    background: #f6f5f5;
    text-align: center;
    color: #999;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: block;
}

.a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}

.a-upload:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
}
</style>
 