<template>
  <div v-if="show" class="LogIn">
    <div class="content">
      <form @submit.prevent="logIn()">
      <table>
        <tr>
          <td>帐号:</td>
          <td><input type="text" v-model="accounts" placeholder="6 到 16个英文字母 或 数字" pattern="^[a-zA-Z0-9|@]{6,16}$" required></td>
        </tr>
        <tr>
          <td>密码:</td>
          <td><input type="password" v-model="password" placeholder="6 到 16个字符" pattern=".{6,16}" required></td>
        </tr>
        <tr>
          <td colspan="2">
            <button class="button">登陆</button>
          </td>
        </tr>
        <tr v-if="0">
          <td colspan="2">
            <button class="button">登出</button>
          </td>
        </tr>
      </table>
      </form>
      <table>
        <tr>
          <td>注册</td>
          <td>修改密码</td>
        </tr>
      </table>
      <div>{{msg}}</div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      show:true,
      accounts:"",
      password:"",
      msg:"",
    }
  },
  methods: {
    //登陆
    logIn(){
      this.password = this.$bb_encrypt.en(this.password);
      this.$bb_api.logIn({'accounts':this.accounts,'password':this.password}).then(res=>{
        this.show = false;
        console.log(res);
      });
    },
    //登出
    logOut(){
      /*this.$bb_api.logOut({'accounts':this.accounts}).then(res=>{
        console.log(res);
      });*/
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.LogIn{
  position:relative;
  width:100%;
  height:100vh;

  .content{
    position:absolute;
    width: 300px;
    height:200px;
    z-index: 9;
    left:50%;top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    background:#fff;
    table{
      width:90%;
      margin:10px auto;
      tr{
        width:100%;
        height:25px;
      }
    }
  }
  .button{
    width:40%;
    height:30px;
    line-height: 30px;
    color:#fff;
    margin:10px auto;
    border-radius: 5px;
    background:#00a0ff;
  }
  .mask{
    z-index: 1;
  }
}
</style>