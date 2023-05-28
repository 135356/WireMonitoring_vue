<template>
  <div id="LogIn">
    <Top></Top>
    <log_in></log_in>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import log_in from "@/components/log_in.vue";
  
export default {
  name: "LogIn",
  components: {
    Top,
    log_in
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
#LogIn {
  width: 100%;
  height:100vh;
  background-image:url('@/assets/img/longInBackgrund.jpg');
  background-repeat:no-repeat;
  background-size:100% 100%;
}
</style>
  