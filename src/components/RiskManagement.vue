<!-- 风险管控 -->
<template>
    <div class="RiskManagement">
        <div class="c1">
            <table>
                <tr>
                    <td>
                        <i class="iconfont">&#xe62e;</i>
                        <p>风险管控</p>
                    </td>
                    <!-- <td>
                        <i></i>
                        风险统计
                    </td>
                    <td>
                        <i></i>
                        风险处理比例
                    </td> -->
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
                    <th>上报人</th>
                    <th>联系方式</th>
                    <th>填报时间</th>
                    <th>所有风险</th>
                    <th>1级风险</th>
                    <th>2级风险</th>
                    <th>3级风险</th>
                    <th>4级风险</th>
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
name: "RiskManagement",
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
.RiskManagement{
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