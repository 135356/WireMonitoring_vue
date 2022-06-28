<template>
  <div class="LogIn">
    <div class="head">
      <table>
        <tr v-if="!show">
          <td @click="logOut()">登出</td>
          <td @click="isChangePassword()">修改密码</td>
        </tr>
        <tr v-if="show">
          <td @click="isLogOn()">注册</td>
          <td @click="isLogIn()">登陆</td>
        </tr>
      </table>
    </div>
    <div class="content" v-if="show">
      <form @submit.prevent="isMethod()">
        <div class="a2">
          <table class="a21">
            <tr>
              <td>帐号:</td>
              <td><input type="text" v-model="accounts" placeholder="请输入邮箱地址" pattern="^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" required></td>
            </tr>
            <tr>
              <td>密码:</td>
              <td><input type="password" v-model="password" placeholder="6 到 16个字符" pattern=".{6,16}" required></td>
            </tr>
            <tr v-if="is_change_password">
              <td>新密码:</td>
              <td><input type="password" v-model="new_password" placeholder="6 到 16个字符" pattern=".{6,16}" required></td>
            </tr>
          </table>
          <div class="a22">
            <button v-if="is_log_in" class="button">登陆</button>
            <button v-if="is_log_on" class="button">注册</button>
            <button v-if="is_change_password" class="button">修改密码</button>
          </div>
        </div>
      </form>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      show:true,
      is_change_password:false,
      is_log_on:false,
      is_log_in:true,
      accounts:"",
      password:"",
      new_password:"",
    }
  },
  methods: {
    //切换界面为注册
    isLogOn(){
      this.show = true;
      this.is_change_password = false;
      this.is_log_on = true;
      this.is_log_in = false;
    },
    //切换界面为修改密码
    isChangePassword(){
      this.show = true;
      this.is_change_password = true;
      this.is_log_on = false;
      this.is_log_in = false;
    },
    //切换界面为登陆界面
    isLogIn(){
      this.show = true;
      this.is_change_password = false;
      this.is_log_on = false;
      this.is_log_in = true;
    },
    isMethod(){
      if(this.is_log_on){
        this.logOn();
      }else if(this.is_log_in){
        this.logIn();
      }else if(this.is_change_password){
        this.changePassword();
      }
    },
    //注册
    logOn(){
      this.$bb_api.logOn({'accounts':this.accounts,'password':this.$bb_md5(this.password)}).then(res=>{
        if(res["data"]["state"] === 0){
          this.show = false;
        }else{
          this.$bb.alert(res["data"]["msg"], 5000);
        }
      });
    },
    //登陆
    logIn(){
      this.$bb_api.logIn({'accounts':this.accounts,'password':this.$bb_md5(this.password)}).then(res=>{
        if(res["data"]["state"] === 0){
          this.show = false;
          this.$store.dispatch('isLogInA',true);
        }else{
          this.$bb.alert(res["data"]["msg"], 5000);
          this.$store.dispatch('isLogInA',false);
        }
      });
    },
    //token登陆
    logInToken(){
      this.$bb_api.logInToken().then(res=>{
        if(res["data"]["state"] === 0){
          this.show = false;
          this.$store.dispatch('isLogInA',true);
        }else{
          this.show = true;
          this.is_change_password = false;
          this.is_log_on = false;
          this.is_log_in = true;
          if(res["data"]["state"] !== -1000){
            this.$bb.alert(res["data"]["msg"], 5000);
          }
          this.$store.dispatch('isLogInA',false);
        }
      });
    },
    //登出
    logOut(){
      this.show = true;
      this.$store.dispatch('isLogInA',false);
      this.$bb_api.logOut({'accounts':this.accounts});
    },
    //修改密码
    changePassword(){
      this.$bb_api.changePassword({'accounts':this.accounts,'password':this.$bb_md5(this.password),'new_password':this.$bb_md5(this.new_password)}).then(res=>{
        if(res["data"]["state"] === 0){
          this.show = true;
          this.$bb.alert('修改成功请登陆', 5000);
        }else{
          this.$bb.alert(res["data"]["msg"], 5000);
        }
      });
    },
  },
  mounted() {
    this.logInToken();
  }
}
</script>

<style lang="scss" scoped>
.LogIn{
  .head{
    position:relative;
    z-index: 9;
    color:#fff;
    background:#000;
    table{
      width:100%;
      tr{
        td{
          width:30px;
          height:20px;
        }
      }
    }
  }
  .content{
    position:fixed;
    width:100%;
    height:100vh;
    .a1{}
    .a2{
      position:absolute;
      width: 240px;
      height:150px;
      z-index: 9;
      left:50%;top: 50%;
      transform: translate(-50%,-50%);
      border-radius: 5px;
      background:#fff;
      table.a21{
        width:90%;
        height:60px;
        margin:5px auto;
        tr{
          input{
            height:20px;
          }
        }
      }
      .a22{
        position:absolute;
        width:90%;
        height:40px;
        bottom:15px;
        left:50%;
        transform: translate(-50%,0);
        .button{
          width:40%;
          height:30px;
          line-height: 30px;
          color:#fff;
          margin:10px auto;
          border-radius: 5px;
          background:#00a0ff;
        }
      }
    }
    .mask{
      z-index: 1;
    }
  }
}
</style>