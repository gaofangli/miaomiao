<template>
  <div>
    <!-- 数据没有加载成功显示 -->
    <Loading v-if="isLoading" />
    <ul v-else>
      <li class="movie-sect" v-for="(item,index) in movieList" :key="index">
        <div class="img fl">
          <!-- 图片字符串替代 -->

          <router-link :to="'/detail/' + item.id">
            <img :src="item.img.replace('w.h', '128.180')" alt />
          </router-link>
        </div>
        <div class="text fl">
          <!-- 判断如果version==v3d给它一个类名 -->
          <span :class="{'d3':item.version !=n}" class="d" v-show="item.version">{{item.version}}</span>
          <p class="tit">
            <span class="s1">{{item.nm}}</span>
          </p>
          <p
            class="sc"
            v-html="item.globalReleased?'<span style=font-size:.1rem;>猫眼评分</span>'+ item.sc :item.wish+'<span style=font-size:.1rem;>人想看<span>'"
          ></p>
          <p class="star">{{item.star}}</p>
          <p class="showInfo">{{item.showInfo}}</p>
          <span class="buy">{{item.globalReleased?"购票":"预售"}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Loading from "../Loading/Loading";

export default {
  components: {
    Loading
  },
  data() {
    return {
      n: "v3d",
      movieList: [],
      isLoading: true,
      prevCityId: -1 //上一个城市id
    };
  },

  methods: {
    getData() {
      var cityId = this.$store.state.city.id;
      if (this.prevCityId === cityId) {
        return;
      }
      this.isLoading = true;
      this.$axios({
        // http://39.97.33.178/api/movieOnInfoList?cityId=10
        url: "/miao/api/movieOnInfoList",
        params: {
          cityId: cityId
        }
      }).then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          this.movieList = res.data.data.movieList;
          this.isLoading = false;
          this.prevCityId = cityId;
        }
      });
    }
  },
  activated() {
    this.getData();
    // console.log(111);
  }
};
</script>

<style lang="scss" scoped>
.movie-sect {
  height: 0.92rem;
  width: 100%;
  padding-top: 0.1rem;
  border-bottom: 0.01rem solid #ebe8e3;
  .img {
    height: 100%;
    width: 26%;
    text-align: center;
    img {
      height: 0.64rem;
      width: 0.52rem;
      margin: 0.15rem;
      margin-top: 0.05rem;
    }
  }
  .text {
    height: 100%;
    width: 70%;
    position: relative;
    p {
      width: 1.77rem;
      height: 0.2rem;
      line-height: 0.2rem;
      color: #666666;
      font-size: 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      font-size: 0.1rem;
    }
    .tit .s1 {
      color: #222222;
      font-size: 0.2rem;
      font-weight: 500;
      width: 1.5rem;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .d {
      height: 0.18rem;
      width: 0.28rem;
      line-height: 0.18rem;
      text-align: center;
      display: inline-block;
      color: #509fc9;
      font-size: 0.08rem;
      font-weight: 700;
      border: 0.01rem solid #509fc9;
      position: absolute;
      right: 0.2rem;
      top: 0rem;
      z-index: 2;
    }
    .d3 {
      width: 0.58rem;
    }
    .buy {
      width: 0.37rem;
      height: 0.25rem;
      line-height: 0.25rem;
      display: inline-block;
      text-align: center;
      position: absolute;
      right: 0.1rem;
      top: 0.35rem;
      z-index: 2;
      color: #fff;
      font-size: 0.12rem;
      border-radius: 0.06rem;
      background: #f03d37;
    }
  }
}
</style>