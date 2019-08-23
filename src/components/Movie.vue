<template>
  <div class="movie">
    <div class="movie-main">
      <p class="mm-movie">喵喵电影</p>
      <p class="nav-movie">
        <router-link to="/movie/place">
          <span class="place fl" :class="{'active':i==3}" @click="i=3">
            哈尔滨
            <i></i>
          </span>
        </router-link>
        <router-link to="/movie/hot">
          <span class="hot fl" :class="{'active':i==0}"  @click="i=0">正在热映</span>
        </router-link>

        <router-link to="/movie/comming">
          <span class="hot fl" :class="{'active':i==1}"  @click="i=1">即将上映</span>
        </router-link>
        <router-link to="/movie/search">
          <span :class="{'active':i==2}" class="s"  @click="i=2">&#xe780;</span>
        </router-link>
      </p>
    </div>
    <div class="movie-home">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: "0" //默认显示
    };
  }
};
</script>

<style lang="scss" scoped>

.movie {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .movie-main {
    width: 100%;
    height: 0.93rem;
    
    .mm-movie {
      height: 0.51rem;
      font-size: 0.18rem;
      line-height: 0.51rem;
      text-align: center;
      color: #fff;
      background: #e54847;
    }
    .nav-movie {
      height: 0.42rem;
      line-height: 0.42rem;
      position: relative;
      border-bottom: 0.01rem solid #ebe8e3;
      a{
         height: 0.4rem;
        line-height: 0.4rem;
        color: #151515;
      }
      span {
        height: 0.4rem;
        line-height: 0.4rem;
        display: inline-block;
        font-size: 0.14rem;
        display: inline-block;
        padding: 0px 0.1rem;
        margin-left: 0.15rem;
        border-bottom: 0.02rem solid transparent;
      }
      .hot {
        margin-left: 0.1rem;
      }
      .active {
        color: #e54847;
        border-bottom: 0.02rem solid #e54847;
      }
      .place {
        position: relative;
        margin-left: 0.2rem;
        i {
          height: 0px;
          width: 0px;
          position: absolute;
          right: 0rem;
          top: 0.15rem;
          border-top: 0.03rem solid #151515;
          border-left: 0.03rem solid transparent;
          border-right: 0.03rem solid transparent;
        }
      }
    }
  }

  .s {
    font-family: "iconfont";
    color: #e54847;
    font-size: 0.16rem;
    margin-left: 0.2rem;
  }
  .movie-home {
    flex: 1;
    width: 100%;
    overflow: auto;
  }
}
</style>   