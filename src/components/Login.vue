<template>
  <div id="login_root">
    <div class="login">
      <span>LOGIN</span>
      <Form ref="formLogin" :model="formlogin" :rules="formrules">
        <FormItem prop="user">
          <Icon type="md-person" />用户名:
          <Input type="text" v-model="formlogin.user" placeholder="User"/>
        </FormItem>
        <FormItem prop="pwd">
          <div><Icon type="md-lock" />密码:
          <Input type="password" v-model="formlogin.pwd" placeholder="Password"/></div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formLogin')">Signin</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formlogin: {
        user: "",
        pwd: ""
      }
    };
  }
};
</script>

<style>
#login_root {
  width: 100%;
  height: 100%;
  background-color: #f8f8f9;
}

.login {
  background-color: #fff;
  position: absolute;
  width: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  padding: 30px;
  box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.1);
}
</style>
