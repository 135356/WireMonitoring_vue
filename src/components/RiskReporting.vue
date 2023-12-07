<!-- 风险上报 -->
<template>
    <div class="RiskReporting">
        <div class="c1">
            <table>
                <tr>
                    <td>
                        <i class="iconfont">&#xe65d;</i>
                        <p>风险上报</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td @click="addReportingShowF()">
                        <p>新增</p>
                    </td>
                    <td @click="addReportingShowF()">
                        <p>查看</p>
                    </td>
                    <td>
                        <p>删除</p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="c2"></div>
        <div class="c3">
            <table>
                <tr>
                    <!-- <th></th> -->
                    <th>所属片区</th>
                    <th>项目名称</th>
                    <th>区间名称</th>
                    <th>风险级别</th>
                    <th>上报人</th>
                    <th>联系方式</th>
                    <th>填报时间</th>
                    <th>监控开始时间</th>
                    <th>监控结束时间</th>
                    <th>状态</th>
                    <th>负责人</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(v,i) in info">
                    <!-- <td><i></i></td> -->
                    <td>{{ v.area }}</td>
                    <td>{{ v.name }}</td>
                    <td>{{ v.area_name }}</td>
                    <td>{{ v.risk_level }}</td>
                    <td>{{ v.report_person }}</td>
                    <td>{{ v.report_phone }}</td>
                    <td>{{ v.created_at }}</td>
                    <td>{{ v.MP_date_start }}</td>
                    <td>{{ v.MP_date_end }}</td>
                    <td>
                        <div v-if="v.state == 0">未排除</div>
                        <div v-if="v.state == 1">已排除</div>
                    </td>
                    <td>{{ v.undertake_person }}</td>
                    <td>
                        <div>
                            <!-- <button @click="addReportingShowF()">编辑</button> --><button @click="delReportingF(i)" style="background:rgb(240,84,89);">删除</button><!-- <button>查看</button> -->
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="page">
            <span @click="pageF(-1)">上一页</span>
            <!-- <span v-for="v in page['total']" @click="pageF(v)">{{ v }}</span> -->
            <span @click="pageF(-2)">下一页</span>
        </div>
        <div class="AddReporting" v-show="AddReporting_show">
            <ConstructionManagementRiskReporting @closeF="addReportingF"></ConstructionManagementRiskReporting>
        </div>
        <div @click="maskF()" class="mask" v-show="AddReporting_show"></div>
    </div>
</template>

<script>
import ConstructionManagementRiskReporting from "@/components/ConstructionManagementRiskReporting.vue";

export default {
    name: "RiskReporting",
    components: {
        ConstructionManagementRiskReporting
    },
    data() {
        return {
            AddReporting_show:false, //添加风险上报
            info:'', //数据
            page:{}, //翻页信息
            s_data:{'page_type':'0','page':'0','id':0} //与数据库交互的数据
        };
    },
    watch: {},
    computed: {},
    methods: {
        //显示添加风险信息框
        addReportingShowF(){
            this.AddReporting_show = true;
        },
        //添加信息表单提交后
        addReportingF(){
            this.AddReporting_show = false;
            this.s_data['page_type'] = '1';
            this.s_data['id'] = this.info[this.info.length-1]['id'];
            this.$bb_api.riskList(this.s_data).then(res=>{
                if(res.data["state"] === 0){
                    this.info = res.data['cont']['data'];
                }else{
                    this.$bb.alert("已经到底线的", 5000);
                }
            });
        },
        //当遮罩层被点击
        maskF(){
            this.AddReporting_show = false;
        },
        //删除风险信息
        delReportingF(i){
            this.$bb_api.riskDel({'id':this.info[i]['id']}).then(res=>{
                if(res['state'] == 0){
                    this.info.splice(i,1);
                    this.$bb.alert(res["msg"], 500);
                }else{
                    this.$bb.alert(res["msg"], 5000);
                }
            });
        },
        pageF(v){
            if(v == -1){ //上一页
                this.s_data = {'id':this.info[0]['id'],'page_type':'-1'};
            }else if(v == -2){ //下一页
                this.s_data = {'id':this.info[this.info.length-1]['id'],'page_type':'1'};
            }else{
                this.s_data = {'page':v,'page_type':'0'};
            }
            this.$bb_api.riskList(this.s_data).then(res=>{
                if(res.data["state"] === 0){
                    this.info = res.data['cont']['data'];
                }else{
                    this.$bb.alert("已经到底线的", 5000);
                }
            });
        }
    },
    created(){},
    mounted(){
        this.$bb_api.riskList({'page':1,'id':0,'page_type':'0'}).then(res=>{
            console.log(res);
            if(res.data["state"] === 0){
                this.info = res.data['cont']['data'];
                this.page = res.data['cont']['page'];
            }else{
                this.$bb.alert("没有找到数据", 5000);
            }
        });
    },
    destroyed() {},
};
</script>
<style lang="scss" scoped>
.RiskReporting{
    position: relative;
    .c1{
        position: relative;
        height: 40px;
        border:solid 4px #ddd;
        table:nth-child(1){
            position: absolute;
            left: 10px;top:50%;
            transform: translate(0,-50%);
            width:30%;
            text-align:left;
            tr{
                td{
                    height:20px;
                    line-height: 20px;
                    color:#353333;
                    display:flex;
                    i{
                        width:10px;
                        height:5px;
                        line-height: 5px;
                        align-self:center;
                        display: inline-block;
                        padding:5px;
                        margin: 5px;
                        border-radius: 2px;
                        font-size:12px;
                        color:#fff;
                        text-align: center;
                        background:rgb(13, 140, 115);
                    }
                    p{
                        align-self:center;
                    }
                }
            }
        }
        table:nth-child(2){
            position: absolute;
            right: 10px;bottom:3px;
            width:30%;
            text-align: center;
            border-radius: 30px;
            background:#eeeeee;
            tr{
                td{
                    text-align: center;
                    width: 30px;
                    height:20px;
                    line-height: 20px;
                    border-right: solid 1px #ddd;
                    p{
                        text-align: center;
                        width: 100%;
                        color:#333;
                    }
                }
                td:nth-child(3){
                    border:none;
                }
            }
        }
    }
    .c2{}
    .c3{
        width:100%;
        Overflow:scroll;
        table{
            margin: auto;
            tr{
                th{
                    height:18px;
                    line-height:18px;
                    font-weight: 300;
                    color:#fff;
                    background: rgb(46,61,181);
                    i{
                        width: 5px;
                        height:5px;
                        display: inline-block;
                        border:solid 1px #eee;
                    }
                }
                td{
                    min-width:50px;
                    height:20px;
                    border:solid 1px #eee;
                    i{
                        width: 5px;
                        height:5px;
                        display: inline-block;
                        border:solid 1px #eee;
                    }
                }
                th:nth-child(1){
                    width: 18px;
                }
                th:nth-child(2){}
                th:nth-child(3){}
                th:nth-child(4){}
                th:nth-child(5){}
                th:nth-child(6){}
                th:nth-child(7){
                    min-width: 90px;
                }
                th:nth-child(8){}
                th:nth-child(9){}
                th:nth-child(10){}
                th:nth-child(11){}
                th:nth-child(12){}
                th:nth-child(13){
                    width:50px;
                }
                td:nth-child(7){}
                td:nth-child(12){
                    div{
                        width:90px;
                        button{
                            width:20px;height:10px;
                            font-size: 5px;
                            font-weight:100;
                            margin:2px;
                            border:none;
                            border-radius: 1px;
                            color:#fff;
                            background:rgb(52, 135, 255)
                        }
                    }
                }
            }
        }
    }
    .page{
        text-align: left;
        height: 20px;
        margin: 5px 0 0 10px;
        span{
            padding: 5px;
            display: inline-block;
        }
    }
}
</style>