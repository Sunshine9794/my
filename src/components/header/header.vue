<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  $color:#ffcd32;
  body{
    background: #222;
  }
  .m-header{
    position: relative;
    height: 44px;
    text-align: center;
    color: $color;
    font-size: 0;
    .icon{
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      background: url("logo@2x.png");
      background-size: 30px 32px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      color:$color;
      font-size: initial;
      height: 44px;
      font-size:20px;
    }
    .mine{
      position: absolute;
      top: 0;
      right: 0;
    }
    .icon-mine{
      display: block;
      padding: 12px;
      font-size: 20px;
      color: $color;
    }
  }
</style>
