<template>
    <div class="ConstructionManagement">
        <Top>
            <table>
                <tr>
                    <td @click="$bb_link.to('Home')">工程概览</td>
                </tr>
            </table>
        </Top>
        <div class="a1">
            <div class="leftMenu">
                <table>
                    <tr>
                        <td>
                            <div @click="scheduleF()">进度管理</div>
                            <ul v-show="schedule_show">
                                <li :class="{'hover':ScheduleManagement_show}" @click.stop="ScheduleManagementF()">进度管理</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div @click="safetyF()">安全管理</div>
                            <ul v-show="safety_show">
                                <li :class="{'hover':RiskManagement_show}" @click.stop="RiskManagementF()">风险管控</li>
                                <li :class="{'hover':RiskReporting_show}" @click.stop="RiskReportingF()">安全风险上报</li>
                            </ul>
                        </td>
                    </tr>
                    <!-- <tr>
                        <td>
                            <div @click="deviceF()">设备管理</div>
                            <ul v-show="device_show"></ul>
                        </td>
                    </tr> -->
                </table>
            </div>
            <div class="content">
                <ScheduleManagement v-show="ScheduleManagement_show"></ScheduleManagement> <!-- 进度管理 -->
                <RiskManagement v-show="RiskManagement_show"></RiskManagement> <!-- 风险管控 -->
                <RiskReporting v-show="RiskReporting_show"></RiskReporting> <!-- 风险上报 -->
            </div>
        </div>
    </div>
</template>
<script>
import Top from "@/components/Top.vue";
import ScheduleManagement from "@/components/ScheduleManagement.vue";
import RiskManagement from "@/components/RiskManagement.vue";
import RiskReporting from "@/components/RiskReporting.vue";

export default {
  name: "ConstructionManagement",
  components: {
    Top,
    ScheduleManagement,
    RiskManagement,
    RiskReporting,
  },
  data() {
    return {
        schedule_show:true,
        safety_show:false,
        device_show:false,
        ScheduleManagement_show:true, //进度管理
        RiskManagement_show:false, //风险管控
        RiskReporting_show:false, //风险上报
    };
  },
  methods: {
    scheduleF(){
        if(this.schedule_show){
            this.schedule_show = false;
        }else{
            this.schedule_show = true;
        }
        this.safety_show = false;
        this.device_show = false;
    },
    safetyF(){
        this.schedule_show = false;
        if(this.safety_show){
            this.safety_show = false;
        }else{
            this.safety_show = true;
        }
        this.device_show = false;
    },
    deviceF(){
        this.schedule_show = false;
        this.safety_show = false;
        this.device_show = false;
        if(this.device_show){
            this.device_show = false;
        }else{
            this.device_show = true;
        }
    },
    ScheduleManagementF(){
        this.ScheduleManagement_show = true; //进度管理
        this.RiskManagement_show=false; //风险管控
        this.RiskReporting_show=false; //风险上报
    },
    RiskManagementF(){
        this.ScheduleManagement_show = false; //进度管理
        this.RiskManagement_show=true; //风险管控
        this.RiskReporting_show=false; //风险上报
    },
    RiskReportingF(){
        this.ScheduleManagement_show = false; //进度管理
        this.RiskManagement_show=false; //风险管控
        this.RiskReporting_show=true; //风险上报
    }
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.ConstructionManagement{
    position: relative;
    width:100%;
    height:100%;
    overflow: scroll;
    background:rgb(5,15,42);
    .a1{
        width:100%;
        height:100%;
        position: absolute;
        top:30px;left:50%;
        transform: translate(-50%,0);
        font-size: 6px;
        font-weight: 300;
        background: rgba(4,10,29,0.3);
        .leftMenu{
            position: absolute;
            left:0;
            width:20%;
            height:100%;
            table{
                tr{
                    td{
                        width:100%;
                        height:20px;
                        line-height: 20px;
                        color:#fff;
                        div{
                            margin:7px 10px 0 10px;
                            border-radius: 3px;
                            background:rgb(7, 59, 90);
                        }
                        div:hover{
                            background:rgb(33, 59, 139);
                        }
                        ul{
                            width:80%;
                            margin:2px auto;
                            li{
                                color:#fff;
                                background:rgba(20, 69, 100,0.8);
                            }
                            li:hover{
                                background:rgb(39, 65, 145);
                            }
                            li.hover{
                                background:rgb(33, 59, 139);
                            }
                        }
                    }
                }
            }
        }
        .content{
            position: absolute;
            left:20%;
            min-width:80%;
            height:100%;
            background:#fff;
        }
    }
}
</style>