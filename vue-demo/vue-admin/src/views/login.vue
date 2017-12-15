<style lang="less">
  @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="submitForm">
      <Card class="ivu-card-login" :shadow="true">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-wrap">
          <Form ref="loginForm" :model="loginForm" :rules="loginFormRules">
            <FormItem prop="username">
              <Input v-model="loginForm.username" placeholder="请输入用户名">
                <Icon slot="prepend" type="person" :size="16"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input v-model="loginForm.password" type="password" placeholder="请输入密码">
                <Icon slot="prepend" type="locked" :size="16"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" long @click="submitForm">登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: ''
        },
        loginFormRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            if (this.loginForm.username === 'admin') {

            } else {

            }
          }
        })
      }
    }
  }
</script>
