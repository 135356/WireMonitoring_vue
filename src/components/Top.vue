<template>
    <div id="Top">
        <table>
            <tr>
                <td>logo</td>
                <td>输电线路异物智能化检测系统</td>
                <td @click="$bb_link.to('ConstructionManagement')">施工管理</td>
            </tr>
        </table>
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
    height: 40px;
    line-height: 40px;
    border-radius: 0px !important;
    z-index: 1002;
    background: rgba(28, 54, 103, 0.5);
    table{
        width:100%;
        height:100%;
        font-size:16px;
        color: #fff;
        td:nth-child(1){
            width: 40px;
            height:100%;
            text-align:center;
        }
        td:nth-child(2){
            padding-left:10px;
            text-align:left;
        }
        td:nth-child(3){
            font-size:9px;
        }
    }
}
</style>