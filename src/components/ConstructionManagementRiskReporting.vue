<template>
    <div class="ConstructionManagementRiskReporting">
        <form @submit.prevent.stop="submitF()">
            <div class="t">
                <div>编辑风险信息</div>
                <div @click="closeF()">x</div>
            </div>
            <table>
                <tr>
                    <td>
                        <span>*</span>
                        <span>项目名称</span>
                        <input v-model="info.name" name="info.name" type="text" required />
                    </td>
                    <td>
                        <span>*</span>
                        <span>风险级别</span>
                        <select v-model="info.risk_level" name="info.risk_level" required>
                            <option value="1">一般风险</option>
                            <option value="2">中风险</option>
                            <option value="3">高风险</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span></span>
                        <span>所属片区</span>
                        <input v-model="info.area" name="info.area" type="text" />
                    </td>
                    <td>
                        <span></span>
                        <span>区间名称</span>
                        <input v-model="info.area_name" name="info.area_name" type="text" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        <span>监控时段</span>
                        <input v-model="info.MP_date_start" name="info.MP_date_start" type="date" required />
                        <span>至</span>
                        <input v-model="info.MP_date_end" name="info.MP_date_end" type="date" required />
                    </td>
                    <td>
                        <span>*</span>
                        <span>是否排除</span>
                        <select v-model="info.state" name="info.state" required>
                            <option value="0">未排除</option>
                            <option value="1" selected>已排除</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        <span>负责部门</span>
                        <input v-model="info.undertake_department" name="info.undertake_department" type="text" required>
                    </td>
                    <td>
                        <span>*</span>
                        <span>带班领导</span>
                        <input v-model="info.undertake_person" name="info.undertake_person" type="text" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>*</span>
                        <span>上报人</span>
                        <input v-model="info.report_person" name="info.report_person" type="text" required />
                    </td>
                    <td>
                        <span>*</span>
                        <span>上报人联系方式</span>
                        <input v-model="info.report_phone" name="info.report_phone" type="text" required />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <span></span>
                        <span>备注</span>
                        <textarea v-model="info.notes" name="info.notes" cols="1" rows="2"></textarea>
                    </td>
                </tr>
            </table>
            <div class="c">
                <div @click.stop="closeF()">取消</div>
                <button type="submit">确认</button>
            </div>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConstructionManagementRiskReporting",
    data() {
      return {
        info:{
            name:'', //项目名称
            area:'', //所属片区
            area_name:'', //区间名称
            undertake_department:'', //负责部门
            undertake_person:'', //负责人
            report_person:'', //上报人
            report_phone:'', //上报人联系方式
            risk_level:1, //风险级别
            state:0, //状态
            MP_date_start:'', //监控时段开始
            MP_date_end:'', //监控时段结束
            notes:'', //备注
        }
      }
    },
    methods: {
        submitF(){
            this.$bb_api.riskAdd(this.info).then(res=>{
                if(res['state'] == 0){
                    this.$emit('closeF');
                }else{
                    this.$bb.alert(res["msg"], 5000);
                }
            });
        },
        closeF(){
            this.$emit('closeF');
        }
    },
    mounted() {}
  }
  </script>
  
  <style lang="scss" scoped>
  .ConstructionManagementRiskReporting{
    position: absolute;
    top: 10px;left: 10px;
    z-index: 100;
    min-width:310px;
    height:185px;
    box-shadow: 1px 2px 3px #333;
    border-radius: 1px;
    background:#fff;
    .t{
        position: relative;
        width:100%;
        height:18px;
        line-height: 18px;
        color:#fff;
        font-size: 7px;
        font-weight: 500;
        background:rgb(46, 61, 181);
        div:nth-child(1){
            position: absolute;
            left:10px;
        }
        div:nth-child(2){
            position: absolute;
            right:10px;
            font-size: 14px;
            font-weight: 100;
        }
    }
    table{
        width:95%;
        margin: auto;
        button, input, select, textarea {
            font-size: 6px;
            font-family: PingFang SC, Microsoft YaHei, tahoma, arial, Helvetica, sans-serif;
        }
        tr{
            td{
                height:22px;
                line-height: 22px;
                text-align: right;
                span{
                    margin-right:3px;
                    font-weight: 500;
                    color:#555;
                }
                span:nth-child(1){
                    color:#f00;
                }
                input,select{
                    height:12px;
                    font-weight: 100;
                    border:solid 0.5px #ccc;
                    border-radius: 1px;
                    background:none;
                }
                textarea{
                    width:83%;
                    height:20px;
                    vertical-align: middle;
                    border:solid 1px #eee;
                    justify-content: center;
                    align-items:center;
                }
            }
        }
        tr:nth-child(1){
            td:nth-child(1){
                width:54%;
                input{
                    width:75%;
                }
            }
            td:nth-child(2){
                width:45%;
                select{
                    width: 60%;
                }
            }
        }
        tr:nth-child(2){
            td:nth-child(1){
                input{
                    width:75%;
                }
            }
            td:nth-child(2){
                input{
                    width:60%;
                }
            }
        }
        tr:nth-child(3){
            td:nth-child(1){
                input{
                    width:34%;
                }
            }
            td:nth-child(2){
                select{
                    width:60%;
                }
            }
        }
        tr:nth-child(4){
            td:nth-child(1){
                input{
                    width:75%;
                }
            }
            td:nth-child(2){
                input{
                    width:60%;
                }
            }
        }
        tr:nth-child(5){
            td:nth-child(1){
                input{
                    width:77%;
                }
            }
            td:nth-child(2){
                input{
                    width:48%;
                }
            }
        }
        tr:nth-child(6){
            textarea{
                width:87%;
            }
        }
    }
    .c{
        position: absolute;
        bottom:8px;right:10px;
        width: 80px;
        height:15px;
        line-height:15px;
        div,button{
            width:35px;
            height: 15px;
            line-height: 15px;
            border-radius: 1px;
            font-size: 6px;
        }
        div:nth-child(1){
            position: absolute;
            left:0;
            border:solid 1px #ddd;
        }
        button{
            position: absolute;
            right:0;
            height: 16px;
            line-height: 15px;
            background-color: transparent;
            outline:none;
            display:block;
            color:#fff;
            font-family:PingFang SC, Microsoft YaHei, tahoma, arial, Helvetica, sans-serif;
            border:solid 1px rgb(36, 71, 191);
            background:rgb(46, 61, 181);
        }
    }
  }
  </style>