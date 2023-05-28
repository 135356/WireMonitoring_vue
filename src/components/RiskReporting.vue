<!-- 风险上报 -->
<template>
    <div class="RiskReporting">
        <div class="c1">
            <table>
                <tr>
                    <td>
                        项目风险
                        <i></i>
                    </td>
                </tr>
            </table>
        </div>
        <div class="c2"></div>
        <div class="c3">
            <table>
                <tr>
                    <th><i></i></th>
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
                <tr>
                    <td><i></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button>编辑</button><button>查看</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
name: "RiskReporting",
components: {},
data() {
    return {};
},
watch: {},
computed: {},
methods: {},
created(){},
mounted(){},
destroyed() {},
};
</script>
<style lang="scss" scoped>
.RiskReporting{
    .c1{
        padding:10px 0;
        border:solid 4px #ddd;
        td{
            height:30px;
            line-height: 30px;
            color:#353333;
            i{
                width:50px;
                height:20px;
                padding:5px;
                margin: 5px;
                border-radius: 20px;
                background:rgb(13, 140, 115);
            }
        }
    }
    .c2{}
    .c3{
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
                    height:15px;
                    line-height:15px;
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
                th:nth-child(10){}
                th:nth-child(11){}
                th:nth-child(12){}
                th:nth-child(13){
                    width:50px;
                }
                td:nth-child(13){
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
</style>