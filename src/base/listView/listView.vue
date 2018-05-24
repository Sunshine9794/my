<template>
  <scroll
          :data="data"
          class="listview"
          ref="listview">
    <ul>
      <li v-for="group in data" class="list-group" ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <uL>
          <li  v-for="item in group.items" class="list-group-item">
            <img class="avatar" v-lazy="item.img">
            <span class="name">{{item.name}}</span>
          </li>
        </uL>
      </li>
    </ul>
    <!--<div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove"
         @touchend.stop>
      <ul>
        <li v-for="(item, index) in shortcutList" :data-index="index" class="item"
            :class="{'current':currentIndex===index}">{{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" ref="fixed" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}} </div>
    </div>
    <div v-show="!data.length" class="loading-container">
      <loading></loading>
    </div>-->
  </scroll>
</template>

<script>
  import scroll from 'base/scroll/scroll'
  export default {
    props:{
      data:{
        type:Array,
        default: []
      }
    },
    methods :{

    },
    components:{
      scroll
    }

  }
</script>

<style scoped lang="scss">
  .listview{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #222;
    font-size: 14px;
     .list-group{
        padding-bottom: 30px;
       .list-group-title{
         height: 30px;
         line-height: 30px;
         padding-left: 20px;
         color: hsla(0,0%,100%,.5);
         background: #333;
         font-size: 12px;
       }
       .list-group-item{
         display: flex;
         align-items: center;
         padding: 20px 0 0 30px;
         .avatar{
           width: 50px;
           height: 50px;
           border-radius: 50%;
         }
         .name{
           margin-left: 20px;
           color: hsla(0,0%,100%,.5);
         }

       }

       .list-shortcut{
         position: absolute;
         z-index: 30;
         right: 0;
         top: 50%;
         transform: translateY(-50%);
         width: 20px;
         padding: 20px 0;
         border-radius: 10px;
         text-align: center;
         font-family: Helvetica;
       }
       .list-shortcut{
         position: absolute;
         z-index: 30;
         right: 0;
         top: 50%;
         transform: translateY(-50%);
         width: 20px;
         padding: 20px 0;
         border-radius: 10px;
         text-align: center;
         font-family: Helvetica;
         .item{
           padding: 3px;
           line-height: 1;
           &.cuurent{

           }
         }

       }
       .list-fixed{
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         .fixed-title{
           height: 30px;
           line-height: 30px;
           padding-left: 20px;
           font-size:12px;
           color: hsla(0,0%,100%,.5);
           background:#222;
         }

       }




     }
  }

</style>
