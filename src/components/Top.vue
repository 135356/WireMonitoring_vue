<template>
    <div id="Top">
        <div class="left">
            <table>
                <tr>
                    <td></td>
                    <td>输电线路异物智能化检测系统</td>
                </tr>
            </table>
        </div>
        <div class="right">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "Top",
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
}
</script>
<style lang="scss" scoped>
#Top{
    position:fixed;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size:12px;
    border-radius: 0px !important;
    z-index: 1002;
    color: #fff;
    background: rgba(28, 54, 103, 0.5);
    .left{
        position: absolute;
        top:0;left:0;
        width:220px;
        table{
            width:100%;
            height:100%;
            td:nth-child(1){
                width: 40px;
                height:100%;
                text-align:center;
            }
            td:nth-child(2){
                text-align:left;
            }
            td:nth-child(3){
            }
        }
    }
    .right{
        position:absolute;
        top:0;right:200px;
        table{
            tr{
                td{
                    width:50px;
                    height:100%;
                    font-size:7px;
                    background:rgba(20,20,20,0.8);
                }
            }
        }
    }
}
</style>