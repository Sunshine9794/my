<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import "../../commonality/scss/commonality";
  .router-link-active{
    span{
      color: $color!important;
      font-weight: 700;
      border-bottom: 2px solid $color;
      padding-bottom: 5px;
    }
  }
  .tab{
    display: flex;
    height: 44px;
    line-height: 44px;
    span{
      font-size: 14px;
      color: rgba(255,255,255,.5);
    }
    .tab-item{
      flex: 1;
      text-align: center;
    }
  }
</style>
