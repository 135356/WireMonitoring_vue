<template>
  <div class="home">
    <Top></Top>
    <div class="content">
      <CanvasMap></CanvasMap>
      <div class="search">
        <table>
          <tr>
            <td class="name">
              <div>项目</div>
              <ul v-if="0">
                <li>子项目</li>
              </ul>
            </td>
            <td class="input">
              <input type="text" placeholder="请输入搜索内容">
            </td>
            <!-- <td class="icon">
              <div>@</div>
            </td> -->
          </tr>
        </table>
      </div>
      <div class="state">
        <table>
          <tr><td>全部</td></tr>
          <tr><td>已开工</td></tr>
          <tr><td>未开工</td></tr>
          <tr><td>已完工</td></tr>
        </table>
      </div>
      <div v-show="false" class="DeviceInformation">
        <div>
          <table>
            <caption>无人机状态统计</caption>
            <tr>
              <td>总计</td>
              <td>4</td>
              <td>台</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
            <caption>今日运行设备数量</caption>
            <tr>
              <td>4</td>
              <td>台</td>
            </tr>
          </table>
          <table>
            <caption>状态断开数量</caption>
            <tr>
              <td>0</td>
              <td>台</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import CanvasMap from "@/components/CanvasMap.vue";

export default {
  name: "Home",
  components: {
    Top,
    CanvasMap
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.home {
  position:relative;
  width:100%;
  background:#000;
  .content{
    position:relative;
    max-width:500px;
    margin:0 auto;
  }
  .search{
    position:absolute;
    top:45px;
    width:70%;
    table{
      width:100%;
      tr{
        width:100%;
        border: solid 1px #8496a8;
        background-color: rgba(48, 66, 67, 0.9);
        td{
          height:22px;
          line-height: 22px;
          input{
            height:22px;
            line-height: 22px;
          }
          input:focus{
            outline: none; 
          } 
        }
        td:nth-child(1){
          div{
            width:40px;
            color:#95abc1;
          }
        }
        td:nth-child(2){
          border-left:solid 1px #6e7d8b;
          input{
            width:280px;
            border-radius: 1px;
            color: #c2ddf8;
            font-size: 6px;
            padding-left:2px;
            border: none;
            background: none;
          }
        }
        td:nth-child(3){
          div{
            width:40px;
            color:#fff;
          }
        }
      }
    }
  }
  .state{
    position:absolute;
    top:45px;right:10px;
    width:40px;
    overflow: hidden;
    font-size: 6px;
    color:#ddd;
    border-radius: 1px;
    table{
      tr{
        td{
          height: 16px;
          background: rgb(8,56,74);
        }
        td:hover{
          background:rgb(44, 25, 130);
        }
      }
    }
  }
  .DeviceInformation{
    position:absolute;
    bottom:45px;
    left:50%;
    transform: translate(-50%,0);
    width:500px;
    height:100px;
    border:solid 1px #95abc1;
  }
}
</style>
