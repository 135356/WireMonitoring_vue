<template>
  <div class="log_in">
    <div class="content">
      <form @submit.prevent="logIn()">
        <div class="a2">
          <table class="a21">
            <caption>用户登陆</caption>
            <tr>
              <td>帐号:</td>
              <td><input type="text" v-model="accounts" placeholder="请输入邮箱地址" pattern="^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" required></td>
            </tr>
            <tr>
              <td>密码:</td>
              <td><input type="password" v-model="password" placeholder="6 到 16个字符" pattern=".{6,16}" required></td>
            </tr>
          </table>
          <div class="a22">
            <button class="button">登陆</button>
          </div>
        </div>
      </form>
      <!-- <div class="mask"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "log_in",
  data() {
    return {
      accounts:"",
      password:"",
      new_password:"",
    }
  },
  methods: {
    //登陆
    logIn(){
      this.$bb_api.logIn({'accounts':this.accounts,'password':this.$bb_md5(this.password)}).then(res=>{
        if(res["data"]["state"] === 0){
          this.$bb_link.to("/");
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
          this.$bb_link.to("/");
          this.$store.dispatch('isLogInA',true);
        }else{
          /* if(res["data"]["state"] !== -1000){
            this.$bb.alert(res["data"]["msg"], 5000);
          } */
          this.$store.dispatch('isLogInA',false);
        }
      });
    },
    //登出
    logOut(){
      this.$store.dispatch('isLogInA',false);
      this.$bb_api.logOut({'accounts':this.accounts});
    },
  },
  mounted() {
    this.logInToken();
  }
}
</script>

<style lang="scss" scoped>
.log_in{
  width: 100%;
  height:100%;
  background-image:url('@/assets/img/longInBackgrund.jpg');
  background-repeat:no-repeat;
  background-size:100% 100%;
  .content{
    position:fixed;
    width:100%;
    height:100vh;
    .a1{}
    .a2{
      position:absolute;
      width: 280px;
      height:150px;
      z-index: 9;
      left:50%;top: 50%;
      transform: translate(-50%,-50%);
      border-radius: 5px;
      opacity: 0.85;
      box-shadow: 0px 2px 18px #003189;
      background:#fff;
      table.a21{
        width:90%;
        font-size:10px;
        margin:5px auto;
        caption{
          font-size: 12px;
          height:30px;
          line-height: 30px;
          font-weight: 500;
        }
        tr{
          td{
            height:35px;
          }
          td:nth-child(1){
            width:35px;
          }
          td:nth-child(2){
            input{
              width:95%;
              height:26px;
              padding-left:2px;
              font-size:6px;
            }
          }
        }
      }
      .a22{
        position:absolute;
        width:90%;
        height:40px;
        bottom:8px;
        left:50%;
        transform: translate(-50%,0);
        .button{
          width:98%;
          height:25px;
          line-height: 25px;
          color:#fff;
          margin:10px auto;
          border-radius: 2px;
          border:none;
          background:#409eff;
        }
      }
    }
    .mask{
      z-index: 1;
    }
  }
}
</style>