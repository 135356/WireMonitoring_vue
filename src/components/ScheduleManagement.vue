<!-- 进度管理 -->
<template>
    <div class="ScheduleManagement">
        <div class="c1">
            <table>
                <tr>
                    <td>
                        <i class="iconfont">&#xe624;</i>
                        <p>进度管理</p>
                    </td>
                    <!-- <td>已检测进度<i></i></td> -->
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
                    <th>运行状态</th>
                    <th>上报人</th>
                    <th>联系方式</th>
                    <th>填报时间</th>
                    <th>负责部门</th>
                    <th>负责人</th>
                    <!-- <th>操作</th> -->
                </tr>
                <tr v-for="(v,i) in info">
                    <!-- <td></td> -->
                    <td>{{ v.area }}</td>
                    <td>{{ v.name }}</td>
                    <td>
                        <div v-if="v.state == 0">错误</div>
                        <div v-if="v.state == 1">正常</div>
                    </td>
                    <td>{{ v.report_person }}</td>
                    <td>{{ v.report_phone }}</td>
                    <td>{{ v.created_at }}</td>
                    <td>{{ v.undertake_department }}</td>
                    <td>{{ v.undertake_person }}</td>
                    <!-- <td><button>查看</button></td> -->
                </tr>
            </table>
        </div>
        <div class="page">
            <span @click="pageF(-1)">上一页</span>
            <!-- <span v-for="v in page['total']" @click="pageF(v)">{{ v }}</span> -->
            <span @click="pageF(-2)">下一页</span>
        </div>
    </div>
</template>

<script>
export default {
name: "ScheduleManagement",
components: {},
data() {
    return {
        info:'', //数据
        page:{}, //翻页信息
    };
},
watch: {},
computed: {},
methods: {
    pageF(v){
        let s_data = {'page_type':'0','page':'0','id':0};
        if(v == -1){ //上一页
            s_data = {'id':this.info[0]['id'],'page_type':'-1'};
        }else if(v == -2){ //下一页
            s_data = {'id':this.info[this.info.length-1]['id'],'page_type':'1'};
        }else{
            s_data = {'page':v,'page_type':'0'};
        }
        this.$bb_api.riskList(s_data).then(res=>{
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
.ScheduleManagement{
    .c1{
        padding:10px 0;
        border:solid 4px #ddd;
        table{
            width:95%;
            margin:auto;
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
                th:nth-child(7){}
                th:nth-child(8){}
                th:nth-child(9){}
                th:nth-child(10){
                    min-width: 90px;
                }
                td:nth-child(10){
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