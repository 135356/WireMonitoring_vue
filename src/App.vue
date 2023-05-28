<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keep_alive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keep_alive"></router-view>
    <!-- <div v-if="is_log_in">
      <div id="TopMenu">
        <table>
          <tr>
            <td @click="$bb_link.to('/ConstructionManagement')">盾构施工管理</td>
            <td @click="$bb_link.to('/VideoManagement')">视频监控</td>
          </tr>
        </table>
      </div>
    </div> -->
    <div v-if="alert" @click="closeAlert()" id="alert">
      <div class="msg">{{ alert }}</div>
      <div class="mask" style="z-index: 9999"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      is_video_management: false,
      is_construction_management: false,
    };
  },
  watch: {},
  computed: {
    /*监听弹框*/
    alert() {
      return this.$store.state.data_api.alert;
    },
    //登陆状态
    is_log_in() {
      return this.$store.state.data_api.is_log_in;
    },
  },
  methods: {
    /*关闭弹框*/
    closeAlert() {
      this.$store.dispatch("alertA", "");
    },
    is_videoManagement() {
      this.is_video_management = true;
      this.is_construction_management = false;
    },
    is_constructionManagement() {
      this.is_video_management = false;
      this.is_construction_management = true;
    },
  },
  created() {
    this.$bb_link.this_(this);
  },
  destroyed() {},
};
</script>
<style>
@import '@/assets/css/initialize.css';
</style>
<style lang="scss" scoped>
#app {
  width:100vw;
  height:100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
}
#alert {
  position: relative;
  .msg {
    position: fixed;
    left: 50%;
    bottom: 50%;
    width: 80%;
    z-index: 99999;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    background: rgba(0, 0, 0, 0.8);
  }
}
#TopMenu {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #666;
}
</style>
