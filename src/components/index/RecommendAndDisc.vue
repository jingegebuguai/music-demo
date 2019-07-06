<template lang="pug">
  .index
      recommend-disc.recommends-container(tag="recommend")
      recommend-disc.disc-container(tag="disc")
</template>

<script>
import RecommendDisc from 'cpnts/index/recommend-disc'
export default {
  data () {
    return {
    }
  },
  components: {
    RecommendDisc
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.recommends-container, .disc-container {
    position: relative;
    z-index: 1;
    width: 95%;
    margin: 32px 2.5% 0 2.5%;
}

</style>
