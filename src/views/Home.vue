<template>
  <div class="home">
    <LogIn></LogIn>
  </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue'

export default {
  name: 'Home',
  components: {
    LogIn
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.home{}
</style>
