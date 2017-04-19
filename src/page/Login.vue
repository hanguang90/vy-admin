/**
* Created by bk on 2017/3/28.
*/
<style scoped>
    .login {
        width: 100%;
        height: 100%;
        background-color: #00b8ff;
        overflow: hidden;
    }
    .ivu-form {
        position: relative;
        top: 50%;
        left: 50%;
        margin-top: -153px;
        margin-left: -175px;
        width: 350px;
        background-color: #FFF;
        padding: 30px;
        border-radius: 3px;

    }
    .ivu-form-item:last-child {
        margin-bottom: 0;
    }
    .login > h1{
        text-align: center;
    }
</style>

<template>


        <div class="login">
            <i-form ref="formInline" :model="formInline" :rules="ruleInline">
                <Form-item>
                    <h1>登录</h1>
                </Form-item>
                <Form-item prop="user">
                    <Input v-model="formInline.user"></Input>
                </Form-item>
                <Form-item prop="password">
                    <Input v-model="formInline.password" type="password"></Input>
                </Form-item>
                <Form-item>
                    <i-button type="primary" @click.native="handleSubmit('formInline')" long>登录</i-button>
                </Form-item>
            </i-form>
        </div>


</template>

<script>
    export default {
        data() {
        return {
            formInline: {
                user: '',
                password: '',
            },
            ruleInline: {
                user: [{
                    required: true,
                    message: '请填写用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请填写密码',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    min: 6,
                    message: '密码长度不能小于6位',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                var userInfo = {
                    'username': this.username,
                    'password': this.password
                }
                if (valid) {
                    this.$Message.success('提交成功!');
                    this.$store.state.userInfo = userInfo;
                    this.$router.push('/hello');
                } else {
                    this.$Message.error('表单验证失败!');
//                    this.$http.get('../../static/data/menu.json')
//                    .then(function (response) {
//                        console.log(response);
//                    })
//                    .catch(function (error) {
//                        console.log(error);
//                    });
                console.log(this.$store.state.user.count);
            }
            })
        },
        handleReset(val) {
            console.log(val)
        }
    }
    }
</script>
 