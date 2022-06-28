<template>
  <div id="app">
    <LogIn></LogIn>
    <router-view v-if="is_log_in" />
    <div v-if="alert" @click="closeAlert()" id="alert">
      <div class="b1">{{alert}}</div>
      <div class="mask" style="z-index: 9999;"></div>
    </div>
  </div>
</template>
<script>
import LogIn from '@/components/LogIn.vue'

export default {
  name: 'App',
  components: {
    LogIn
  },
  data(){
    return {}
  },
  watch: {},
  computed:{
    /*监听弹框*/
    alert()
    {
      return this.$store.state.data_api.alert
    },
    is_log_in(){
      return this.$store.state.data_api.is_log_in
    }
  },
  methods:{
    /*关闭弹框*/
    closeAlert()
    {
      this.$store.dispatch('alertA','');
    }
  },
  created() {},
  destroyed() {}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#alert{
  position:relative;
  .b1{
    position:fixed;
    left:50%;bottom:50%;
    width:80%;
    z-index: 99999;
    transform: translate(-50%,-50%);
    padding:10px 20px;
    border-radius:5px;
    color:#fff;
    font-size:14px;
    font-weight:800;
    background:rgba(0,0,0,0.8);
  }
}
</style>
