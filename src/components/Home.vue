<template>
  <div class="wrap">
    <div class="home-main">
      <router-view></router-view>
    </div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <router-link :to="item.path">
          <p class="s1" v-html="item.ma"></p>
          <p class="s2">{{item.tit}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      arr: [
        {
          tit: "电影",
          ma: "&#xe679;",
          path: "/movie"
        },
        {
          tit: "影院",
          ma: "&#xe652;",
          path: "/cinema"
        },
        {
          tit: "我的",
          ma: "&#xe619;",
          path: "/my"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-main {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
ul {
  border-top: 0.01rem solid #ebe8e3;
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  li {
    width: 1.06rem;
    height: 0.4rem;
    display: flex;
    padding: 0.05rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    a {
      color: #000;
      cursor: pointer;
      .s1 {
        font-family: "iconfont";
        font-size: 0.18rem;
      }
      .s2 {
        font-size: 0.11rem;
      }
      &:hover {
        color: #f03d37;
      }
    }
  }
}
</style>
