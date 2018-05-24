<template>
    <div class="slider">
      <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .slider{
    height: 200px;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .mint-swipe-indicator.is-active{
    opacity: 1;
  }
</style>
