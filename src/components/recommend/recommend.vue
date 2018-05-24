<template>
  <div class="scroll-recommend">
    <scroll id="scroll"  :data="list"
            :pulldown=true
    >
      <slider>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,key) in list" class="needsclick" :key="key">
            <a :href="item.linkUrl"><img :src="item.picUrl" width="100%" height="100%" alt=""></a>
          </mt-swipe-item>
        </mt-swipe>
      </slider>
      <h4>{{title}}</h4>
      <div class="hot-item" v-for="(list,key) in hotlist" :key="key" >
        <div class="hot-left">
          <img  class="lazy" width="60" height="60" alt="" v-lazy="list.imgurl">
        </div>
        <div class="hot-cont">
          <div class="hot-tit">
            <p>{{list.creator.name}}</p>
            <p class="pic">{{list.dissname}}</p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from 'components/Slider/Slider'
import {getRecommend, getDiscList} from '../../commonality/recommend'
import scroll from 'base/scroll/scroll'
const HOT_TITLE = '热门歌单推荐'
export default {
  data () {
    return {
      list: [],
      hotlist: [],
      title: HOT_TITLE
    }
  },
  methods: {
    getSliderlist () {
      getRecommend().then(data => {
        this.list = data.data.slider
      })
    },
    getHotList () {
      getDiscList().then(data => {
        console.log(data)
        if (data.code === 0) {
          this.hotlist = data.data.list
        }
      }).catch(e => {
        console.log(e)
      })
    }
  },
  created () {
    this.getSliderlist()
    this.getHotList()
  },
  components: {
    slider: Slider,
    scroll
  }
}
</script>

<style scoped lang="scss">
  .mint-swipe-indicator.is-active{
    opacity: 1;
  }
  #scroll{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .scroll-recommend{
    height: calc(100vh - 88px);
  }
  .hot-item{
    display: flex;
    align-items: center;
    padding: 0 20px 20px 20px;
    &[lazy=loading] {
      width: 60px;
      height: 60px;
      margin: auto;
    }
  }
  [lazy=loading] {
    width: 60px;
    height: 60px;
    margin: auto;
  }
  h4 {
    color: #ffcd32;
    font-weight: 700;
    text-align: center;
    height: 35px;
    line-height: 35px;
  }
  .hot-left{
    margin-right: 20px;
  }
  .hot-tit{
    color: #fff;
    .pic{
      color: #666;
      margin-top: 15px;
    }
  }
</style>
