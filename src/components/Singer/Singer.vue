<template>
    <div id="singerList">
      <listView :data="singList"></listView>
    </div>
</template>

  <script>
import { getSingerList } from "../../commonality/recommend";
import Singer from "common/singer";
import listView from "base/listView/listView";
const HOT_SINGER_LEN = 10;
const HOT_SINGER_TITLE = "热门";
export default {
  data() {
    return {
      singList: []
    };
  },
  methods: {
    getSingerList() {
      getSingerList().then(data => {
        console.log(data);
        console.log(this.formatSingerList(data));
      });
    },
    formatSingerList(data) {
      let res = data.data.list;
      let map = {
        hot: {
          title: HOT_SINGER_TITLE,
          items: []
        }
      };

      for (let i in res) {
        if (i < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer(
              res[i].Fsinger_id,
              res[i].Fsinger_name,
              res[i].Fsinger_mid
            )
          );
        }
        const index = res[i].Findex;

        if (!map[index]) {
          map[index] = {
            title: index,
            items: []
          };
          map[index].items.push(
            new Singer(
              res[i].Fsinger_id,
              res[i].Fsinger_name,
              res[i].Fsinger_mid
            )
          );
        } else {
          map[index].items.push(
            new Singer(
              res[i].Fsinger_id,
              res[i].Fsinger_name,
              res[i].Fsinger_mid
            )
          );
        }
      }
      let hot = [];
      let ret = [];

      for (let k in map) {
        if (map[k].title === HOT_SINGER_TITLE) {
          hot.push(map[k]);
        } else if (map[k].title.match(/[a-zA-Z]/)) {
          ret.push(map[k]);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      this.singList = [...hot, ...ret];
    }
  },
  components: {
    listView
  },
  created() {
    this.getSingerList();
  }
};
</script>

  <style scoped lang="scss">
#singerList {
  height: calc(100vh - 88px);
}
</style>
