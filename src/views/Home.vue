<template>
  <div class="home">
    <div class="TopMenu">
      <table>
        <tr>
          <td @click="is_constructionManagement()">盾构施工管理</td>
          <td @click="is_videoManagement()">视频监控</td>
        </tr>
      </table>
    </div>
    <div v-if="is_video_management" class="c_VideoManagement">
      <VideoManagement></VideoManagement>
    </div>
    <div v-if="is_construction_management" class="c_ConstructionManagement">
      <ConstructionManagement></ConstructionManagement>
    </div>
  </div>
</template>

<script>
import VideoManagement from '@/components/VideoManagement.vue'
import ConstructionManagement from '@/components/ConstructionManagement.vue'

export default {
  name: 'Home',
  components: {
    VideoManagement,
    ConstructionManagement
  },
  data() {
    return {
      is_video_management:false,
      is_construction_management:false,
    }
  },
  methods: {
    is_videoManagement(){
      this.is_video_management=true;
      this.is_construction_management=false;
    },
    is_constructionManagement(){
      this.is_video_management=false;
      this.is_construction_management=true;
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.home{
  width:100%;
  .TopMenu{
    width:100%;
    height:30px;
    line-height: 30px;
    color:#fff;
    background:#666;
  }
  .content{
    width:100px;
    height:100px;
    div{
      width:100px;
      height:100px;
      color:#000;
    }
  }
}
</style>
