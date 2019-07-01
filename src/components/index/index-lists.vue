<template lang="pug">
  .index
      index-list.recommends-container(tag="recommend")
      index-list.disc-container(tag="disc")
</template>

<script>
import IndexList from 'cpnts/index/index-list'
export default {
  data () {
    return {
      
    }
  },
  components: {
    IndexList
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.recommends-container, .disc-container {
    position: relative;
    z-index: 1;
    width: 95%;
    margin: 16px 2.5% 0 2.5%;
}

</style>
