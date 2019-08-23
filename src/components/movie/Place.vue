<template>
  <!-- 城市 -->
  <div class="city">
    <!-- 数据没有加载成功显示 -->
    <Loading v-if="isLoading" />
    <!-- 滚动联动：锚点或者ref -->
    <div v-else>
      <div class="hot-city">
        <h2>热门城市</h2>
        <p>
          <span v-for="(item,index) in hotList" :key="index" @click="handleToCity(item.nm,item.id)">{{item.nm}}</span>
        </p>
      </div>
      <div class="city-list" ref="city_sort">
        <div v-for="(item,index) in cityList" :key="index">
          <h2 :id="item.big" class="tit">{{item.big}}</h2>
          <ul>
            <li v-for="(item1,index1) in item.content" :key="index1.id"  @click="handleToCity(item1.nm,item1.id)">{{item1.nm}}</li>
          </ul>
        </div>
        <!-- 按字母排序跳转 -->
        <ul class="miaodian">
          <!-- <li
            v-for="(item,index) in cityList"
            :key="index"
            @touchstart="handleToIndex(index)"
          >{{item.big}}</li> -->
          <li  v-for="(item,index) in cityList" :key="index"><a :href="'#'  + item.big">{{item.big}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { changeArr } from "../unitil";
import Loading from "../Loading/Loading";

export default {
  components: {
    Loading
  },
  data() {
    return {
      numArr: "QWERTYUIOPASDFGHJKLZXCVBNM"
        .split("")
        .sort((a, b) => a.charCodeAt() - b.charCodeAt()),
      arr: [],
      cityList: [],
      hotList: [], //热门
      isLoading: true,

    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // 城市列表和热门城市存储本地
      var cityList = window.localStorage.getItem("cityList");
      var hotList = window.localStorage.getItem("hotList");
      if (cityList && hotList) {
        this.cityList = JSON.parse(cityList);
        this.hotList = JSON.parse(hotList);
        this.isLoading = false;
      } else {
        this.$axios({
          url: "/miao/api/cityList"
        }).then(res => {
          var msg = res.data.msg;
          if (msg === "ok") {
            // 过滤热门城市  索引值小7
            this.hotList = res.data.data.cities.filter(
              (item, index) => index < 7
            );
            this.cityList = changeArr(res.data.data.cities);
            window.localStorage.setItem(
              "cityList",
              JSON.stringify(this.cityList)
            );
            window.localStorage.setItem(
              "hotList",
              JSON.stringify(this.hotList)
            );

            this.isLoading = false;
          }
        });
      }
    },
    // 滚动联动
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      this.$refs.city_sort.parentNode.parentNode.scrollTop =
        h2[index].offsetTop - 93;
      console.log(this.$refs.city_sort.parentNode.scrollTop);
    },

    handleToCity(nm,id){
      // 提交mutations,修改状态，定位位置也会修改s
      this.$store.commit("city/CITY_INFO",{nm,id})
      window.localStorage.setItem("nowNm",nm)
      window.localStorage.setItem("nowId",id)

      this.$router.push("/movie/hot")
    }

  }
};
</script>
<style lang="scss" scoped>
.city {
  background: #fff0ff;
  .hot-city {
    h2 {
      height: 0.3rem;
      line-height: 0.3rem;
      text-indent: 0.15rem;
      background: #f0f0f0;
    }
    p {
      height: 1.39rem;
      width: 94%;
      padding: 3%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    span {
      width: 0.8rem;
      height: 0.3rem;
      background: #fff;
      text-align: center;
      display: inline-block;
    }
  }
  .city-list {
    width: 100%;
    .tit {
      height: 0.3rem;
      line-height: 0.3rem;
      text-indent: 0.15rem;
      background: #f0f0f0;
    }
    li {
      height: 0.3rem;
      line-height: 0.3rem;
      text-indent: 0.15rem;
    }
  }

  .miaodian {
    height: 100%;
    position: fixed;
    right: 0rem;
    top: 0.9rem;
    background: #fff;
    li {
      height: 0.16rem;
      // width: 0.16rem;
      a {
        color: #333;
        height: 0.16rem;
        line-height: 0.16rem;
        font-size: 0.12rem;
        display: block;
      }
    }
  }
}
</style>