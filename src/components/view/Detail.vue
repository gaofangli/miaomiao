<template>
  <div class="detail-main slide-enter-active">
    <Loading v-if="isLoading" />
    <div v-else>
      <p class="tit">
        <span class="less" @click="handToback">&#xe628;</span> 影片详情
      </p>
      <div v-for="(item,index) in detailMovie" :key="index">
        <div class="content">
          <img class="con-bg" :src="item.img.replace('w.h', '128.180')" alt />
          <div class="con-ceng"></div>
          <div class="box">
            <div class="img fl">
              <img :src="item.img.replace('w.h', '128.180')" alt />
              <a :href="item.vd">
                <span>&#xe60e;</span>
              </a>
            </div>
            <div class="con fl">
              <p class="nm">{{item.nm}}</p>
              <p class="enm">{{item.enm}}</p>
              <p class="latest">{{item.latestEpisode}}</p>
              <p class="cat">{{item.cat}}</p>
              <p class="src">{{item.src}}/{{item.dur}}分钟</p>
              <p class="pub">{{item.pubDesc}}</p>
            </div>
          </div>
        </div>
        <p class="dra">{{item.dra}}</p>
        <!-- <div class="photo">
        <ul>
          <li  class="fl"><img
          :src="item1.replace('w.h', '128.180')"
          alt
          v-for="(item1,index) in item.photos"
          :key="index"
        /></li>
        </ul>
        </div>-->
        <div class="swiper-wrapper photo" ref="detail_player">
          <div class="swiper-slide">
            <img
              :src="item1.replace('w.h', '128.180')"
              alt
              v-for="(item1,index) in item.photos"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import Loading from "../Loading/Loading";

export default {
  components: {
    Loading
  },
  data() {
    return {
      movieId: "",
      bg: "",
      detailMovie: {},
      isLoading:true,

    };
  },
  mounted() {
    this.getData();
    new Swiper(".swiper-wrapper", {
      slidesPerView: "auto",
      freeMode: true,
      freeModeSticky: true
    });
  },
  methods: {
    handToback() {
      // 回到上一步
      this.$router.back();
    },
    getData() {
      this.$axios({
        // http://39.97.33.178/api/detailmovie?movieId=345808
        url: "/miao/api/detailmovie",
        params: {
          movieId: this.$route.params.id
        }
      }).then(res => {
        this.bg = res.data.data.detailMovie.img;
        this.detailMovie = res.data.data;
        this.isLoading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-main {
  padding-bottom: 0.5rem;
}
.slide-enter-active {
  animation: 0.3s slideMovie;
}
@keyframes slideMovie {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateY(0);
  }
}
.tit {
  width: 100%;
  height: 0.51rem;
  line-height: 0.51rem;
  color: #fff;
  font-size: 0.18rem;
  text-align: center;
  background: #e54847;
  position: relative;
  .less {
    font-family: "iconfont";
    font-size: 0.2rem;
    position: absolute;
    left: 0.1rem;
    top: 0rem;
  }
}
.content {
  width: 100%;
  height: 2rem;
  position: relative;
  .con-bg {
    width: 100%;
    height: 100%;
  }
  .con-ceng {
    width: 100%;
    height: 100%;
    background-color: #40454d;
    opacity: 0.55;
    position: absolute;
    left: 0rem;
    top: 0rem;
    opacity: 0.95;
    z-index: 1;
  }
  .box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0rem;
    top: 0rem;
    z-index: 3;
  }
  .img {
    width: 34%;
    height: 100%;
    text-align: center;
    position: relative;
    a {
      font-family: "iconfont";
      font-size: 0.2rem;
      color: #fff;
      height: 0.48rem;
      width: 0.48rem;
      line-height: 0.48rem;
      text-align: center;
      display: inline-block;
      border-radius: 50%;
      border: 0.02rem solid #fefdfd;
      background: rgba($color: #000000, $alpha: 0.4);
      box-shadow: 0.02rem 0.02rem 0.05rem #888888;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -0.24rem;
      margin-top: -0.24rem;
    }
    img {
      margin-top: 0.2rem;
      width: 0.77rem;
      height: 1.5rem;
    }
  }
  .con {
    width: 66%;
    height: 90%;
    padding-top: 10%;
    p {
      color: #fff;
      font-size: 0.14rem;
      padding-bottom: 0.05rem;
    }
    .nm {
      font-size: 0.18rem;
      font-weight: 700;
    }
    .enm {
      font-size: 0.12rem;
    }
  }
}
.dra {
  padding: 0.1rem;
  line-height: 0.2rem;
  font-size: 0.16rem;
  color: #1f1f1f;
  font-weight: 600;
}
.photo {
  height: 0.25rem;
  width: 94%;
  padding: 0rem 3%;
  // overflow:auto;
  margin-top: 0.2rem;
  overflow: auto;
  .swiper-slide {
    width: 10rem;
  }
  img {
    width: 0.7rem;
    height: 0.25rem;
    float: left;
    margin-right: 0.15rem;
  }
}
</style>