/**
* Created by bk on 2017/4/7.
*/
<template>
    <div class="login">
    	<div class="header"><img src="../assets/images/LOGO.png" ></div>
        <div class="loginType">
            <div class="codeLogin" :class="{hide: 1 != loginType}">
            	<div class="container">
            		
            	</div>
                <div class="content">
                    <span>手机登录</span>
                    <Form ref="loginIfon" :model="loginIfon" :rules="ruleInline" inline>
                        <Form-item prop="phoneNumber">
                    <Input v-model="loginIfon.phoneNumber" placeholder="请输入手机号" style="width: 263px;height:40px;margin-top:25px;"></Input>
                            </Form-item>
                    <div class="sliderBox">
                    	<div id="slider" @mousedown="slideVerification" v-bind:style="{ marginLeft: ii + 'px'}"></div>
                    </div>
                    <div class="verBox"><input id="p-code" v-model="loginIfon.phoneCode" placeholder="请输入手机验证码" type="text"></input>
                    	<button id="obtain-code" @click="getValidCode('loginIfon')" v-if="isDisabled" style="outline:none;cursor:pointer;">获取验证码</button>
                    	<button id="obtain-code"  v-else disabled v-model="countdown">{{countdown}}s</button>
                    </div>
                    <Button style="width: 263px;height:40px;margin-top:25px;background:#329be5;border:none;" type="success" long @click="handleSubmit('loginIfon')">登录</Button>
                    </Form>
                </div>
            </div>
        </div>
        <div class="footer">
        	<div class="foot-logo"><img src="../assets/images/foot-logo.png" alt=""/></div>
        	<p>北京北科维拓科技有限公司 京ICP备08100339号</p>
        </div>
    </div>
</template>
<script  type="es6">
	
    export default {
        name: 'yunLogin',
        data (){
            return {
                phoneNumber: '',
                phoneCode: '',
                ii: 0,
                loginIfon: {
                    phoneNumber: '',
                    phoneCode: ''
                },
                isDisabled: true,
                countdown: 60,
                loginType: 1,
                ruleInline: {
                    phoneNumber: [{
                        required: true,
                        message: '请填手机号',
                        trigger: 'blur'
                    }, {
                        type: 'string',
                        message: '请输入正确的手机号',
                        pattern:  new RegExp("^1[3|4|5|7|8][0-9]{9}$"),
                        trigger: 'blur'
                    }]
                }
            }
        },
        created: function(){
        	var vm = this;
        	document.onmouseup = function(){
		    	document.onmousemove = null;
		    	if( vm.ii>=213 ){
		          vm.ii = 213;
		        }else{
		        	vm.ii = 0;
		        }
    		}	
        },
        methods: {
            switchLoginType: function (type) {
                this.loginType = type;
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    var userInfo = {
                        'phone': this.loginIfon.phoneNumber
                    }
                    if (valid) {
                        var vm = this;
                        this.$jsonp('http://192.168.0.27:8081/test?jsoncallback=namedCb',{ name: 'namedCb' },function namedCb(err,data){
                            if (err) {
                                console.error(err.message);
                            } else {
                                console.log(data);
                            }
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                        console.log(this.$store.state.user.count);
                    }
                })
//                    this.$http.get('../../static/data/menu.json')
//                    .then(function (response) {
//                        console.log(response);
//                    })
//                    .catch(function (error) {
//                        console.log(error);
//                    });
            },
            handleReset(val) {
                console.log(val)
            },
            getValidCode(name) {
                console.log(this.phoneNumber);
                console.log(this.loginIfon.phoneNumber);
                console.log(22222);

                //this.$refs[name].validate((valid) => {
                //    if (valid) {
                //        this.$Message.success('提交成功!');
                //    } else {
                //        this.$Message.error('表单验证失败!');
                //    }
                //})
                this.isDisabled = false;

                this.setTime();
                this.$http.get('/javaapi/getCodeByPhone', {
                    params: {
                        phone: this.loginIfon.phoneNumber
                    }
                })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

            },
            setTime() {
                if (this.countdown == 0) {
                    this.isDisabled = true;
                    this.countdown = 60;
                } else {
                    this.countdown--;
                    var vm = this;
                    setTimeout(function () {
                        vm.setTime()
                    }, 1000)
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
            slideVerification (e) {
                var bb = e.clientX;
                var vm = this;
                document.onmousemove = function (e) {
                    var dd = e.clientX;

                    if (dd - bb > 0) {
                        vm.ii = dd - bb;
                    } else {
                        vm.ii = 0;
                        return;
                    }
                    if (vm.ii >= 213) {
                        vm.ii = 213;
                    }

                }
            	
            }
        }
    }
    
    
</script>
<style scoped>
    .login {
        width: 100%;
        height: 100%;
        background-size:100% 100%;
    }
    .header{
    	width:1200px;
    	height:91px;
    	margin: 0 auto;
    }
    .header img{
    	margin-top: 29px;
    }
    .loginType {
    	height: 600px;
        background: url("../assets/images/bodybg.png");
        background-size: 100% 100%;
    }
    .codeLogin{
    	width: 320px;
    	height: 370px;
    	background:#fff;
    	float: right;
    	margin-top: 114px;
    	margin-right: 460px;
    }
    .content {
    	margin-top: 40px;
        text-align: center;
    }
    .content > span {
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: rgb( 77, 77, 77 );
    }
    .sliderBox{
    	width: 263px;
	    height: 40px;
	    margin: 25px auto 0;
	    background: #e8e8e8;
	    border-radius: 5px;
    }
    #slider{
    	width: 50px;
	    height: 40px;
	    text-align: center;
	    border-radius: 5px;
	    background: url("../assets/images/slider.png") no-repeat;
    }
    .verBox{
    	width: 263px;
	    height: 40px;
	    margin: 25px auto 0;
	    border: 1px solid #d7dde4;
	    border-radius: 5px;
    }
    .verBox input{
    	width: 172px;
    	height: 38px;
    	float: left;
    	border: none;
    	outline: none;
    	margin-left: 6px;
    }
    .verBox img{
    	vertical-align: top;
    	float: left;
    }
    #obtain-code{
    	width: 83px;
    	height: 27px;
    	background: none;
    	border: none;
    	line-height: 27px;
    	margin-top: 6px;
    	border-left: 1px solid #ccc;
    	float: right;
    	color: #3c7ce6;
    }
    .footer{
    	width: 100%;
    	position: absolute;
    	left: 0;
    	bottom: 75px;
    	color:#666;
    }
    .footer p{
    	margin-top: 10px;
    }
    
    
    .LoginTip {
        position: relative;
        padding-top: 30px;
    }
    .LoginTipFont {
        position: relative;
        left: 116px;
    }
    .LoginTipIcon {
        position: absolute;
        left: 245px;
        top: 30px;
        cursor: pointer;
    }
    
    .code {
        background: url("../assets/images/codebg.png") no-repeat;
    }
    .code img{
    	width:162px;
    	height:162px;
    }
    .footer {
        text-align: center;
        margin-top: 15px;
        font-size: 12px;
        font-family: "NSimSun";
        color: rgb( 102, 102, 102 );
    }

    .formStyle {
        width: 80%;
        margin: 10px auto 0;
    }
    .userStyle {
        display: inline-block;
        width: 15px;
        font-size: 20px;
    }
    .register {
        width: 80%;
        margin: 0 auto 35px;
    }
    .ivu-form-item {
        margin-bottom: 0;
        margin-right: 0;
    }
</style>