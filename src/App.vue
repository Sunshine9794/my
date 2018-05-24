<template>
  <div id="app">
   <headers></headers>
    <tab></tab>
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import headers from 'components/header/header'
import tab from 'components/tab/tab'
export default {
  components: {
    headers,
    tab
  }
}
</script>

<style scoped lang="scss">

</style>
