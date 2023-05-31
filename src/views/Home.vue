<template>
  <div class="home">
    <Top>
      <table>
          <tr>
              <td @click="$bb_link.to('ConstructionManagement')">施工管理</td>
          </tr>
      </table>
    </Top>
    <div class="content">
      <div class="left">
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
            <tr><td :class="{'hove':state_all}" @click="state_allF()">全部</td></tr>
            <tr><td :class="{'hove':state_start}" @click="state_startF()">已开工</td></tr>
            <tr><td :class="{'hove':state_not}" @click="state_notF()">未开工</td></tr>
            <tr><td :class="{'hove':state_complete}" @click="state_completeF()">已完工</td></tr>
          </table>
        </div>
        <div class="DeviceInformation">
          <div class="aaaa">
            <p>监控设备状态统计</p>
            <div>
              <span>监控设备总计</span>
              <span>0</span>
              <span>台</span>
            </div>
          </div>
          <div class="aaaa1">
            <p class="aaaa1_t">今日运行率统计</p>
            <div class="aaaa1_left">
              <p>今日运行设备数量</p>
              <div>
                <span>0</span>
                <span>台</span>
              </div>
            </div>
            <div class="aaaa1_right">
              <p>连接状态断开数量</p>
              <div>
                <span>0</span>
                <span>台</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right"></div>
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
    return {
      state_all:true,
      state_start:false,
      state_not:false,
      state_complete:false,
    };
  },
  methods: {
    state_allF(){
      if(this.state_all){
        this.state_all=false;
      }else{
        this.state_all=true;
      }
      this.state_start=false;
      this.state_not=false;
      this.state_complete=false;
    },
    state_startF(){
      if(this.state_start){
        this.state_start=false;
      }else{
        this.state_start=true;
      }
      this.state_all=false;
      this.state_not=false;
      this.state_complete=false;
    },
    state_notF(){
      if(this.state_not){
        this.state_not=false;
      }else{
        this.state_not=true;
      }
      this.state_all=false;
      this.state_start=false;
      this.state_complete=false;
    },
    state_completeF(){
      if(this.state_complete){
        this.state_complete=false;
      }else{
        this.state_complete=true;
      }
      this.state_all=false;
      this.state_start=false;
      this.state_not=false;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.home {
  position:relative;
  width:100%;
  height:100%;
  background:#000;
  .content{
    position:relative;
    width:100%;
    height:100%;
    .left{
      position:absolute;
      left:0;top:0;
      width:380px;
      .search{
        position:absolute;
        top:35px;
        left:10px;
        width:80%;
        font-size:8px;
        table{
          width:90%;
          tr{
            width:100%;
            border: solid 1px #8496a8;
            background-color: rgba(48, 66, 67, 0.9);
            td{
              height:15px;
              line-height: 15px;
              input{
                height:15px;
                line-height: 15px;
              }
              input:focus{
                outline: none; 
              } 
            }
            td:nth-child(1){
              width:40px;
              div{
                color:#95abc1;
              }
            }
            td:nth-child(2){
              border-left:solid 1px #6e7d8b;
              input{
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
        top:35px;right:0;
        width:42px;
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
              background:rgb(18,66,84);
            }
            td.hove{
              background:rgb(28,76,94);
            }
          }
        }
      }
      .DeviceInformation{
        position:absolute;
        bottom:10px;
        left:50%;
        transform: translate(-50%,0);
        width:95%;
        height:50px;
        border:solid 1px #95abc1;
      }
    }
    .right{
      position:absolute;
      right:0;top:40px;
      width:210px;
      height:80%;
      z-index: 1000000;
      overflow:scroll;
      background:rgba(16,16,16,0.8);
    }
    .DeviceInformation{
      position:relative;
      color:#fff;
      font-size:6px;
      border:solid 1px #f00;
      .aaaa{
        position: absolute;
        left:0;top:0;
        width:80px;
        p{
          height:20px;
          line-height: 20px;
          font-size:7px;
          font-weight:400;
          color:rgb(8, 175, 175);
        }
        div{
          height:20px;
          line-height: 20px;
          margin-top:10px;
          color:#efd216;
          span:nth-child(1){
            font-size:6px;
          }
          span:nth-child(2){
            font-size:9px;
            font-weight:500;
            padding:5px;
          }
          span:nth-child(3){
            font-size:6px;
          }
        }
      }
      .aaaa1{
        position: absolute;
        right:0;top:0;
        width:200px;
        text-align: left;
        .aaaa1_t{
          height:20px;
          line-height: 20px;
          font-size:7px;
          font-weight:400;
          color:rgb(8, 175, 175);
        }
        .aaaa1_left{
          position: absolute;
          left:0;top:25px;
          width:70px;
          height:22px;
          color:#99daea;
          text-align: center;
          background:rgb(30, 96, 96);
          p{
            background:rgb(49, 137, 137);
          }
          div{
            span:nth-child(1){
              font-size:6px;
              font-weight:400;
            }
            span:nth-child(2){
              font-size:4px;
              padding:5px;
            }
          }
        }
        .aaaa1_right{
          position: absolute;
          left:80px;top:25px;
          width:70px;
          height:22px;
          color:#99daea;
          text-align: center;
          background:rgb(30, 96, 96);
          p{
            background:rgb(49, 137, 137);
          }
          div{
            span:nth-child(1){
              font-size:6px;
              font-weight:400;
            }
            span:nth-child(2){
              font-size:4px;
              padding:5px;
            }
          }
        }
      }
    }
  }
  
}
</style>
