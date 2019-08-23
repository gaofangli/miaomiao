<template>
  <div class="cinema">
    <div class="cinema-main">
      <p class="mm-cinema">喵喵影院</p>
      <p class="nav-cinema">
        <span v-for="(item,index) in arr" :key="index">
          {{item}}
          <i></i>
        </span>
      </p>
    </div>
    <ul>
      <li v-for="item in cinemaList" :key="item.id">
        <div class="tit">
          <span class="tit-nm">{{item.nm}}</span>
          <span class="q">
            <span class="price">{{item.sellPrice}}</span>元起
          </span>
        </div>
        <div class="address">
          <span>{{item.addr}}</span>
          <span class="fr">{{item.distance}}</span>
        </div>
        <div class="card">
          <span v-for="(item,key) in item.tag" v-show="item ===1 " :class="key | classCard" :key="key">{{ key | formatCard }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinemaList: [],
      arr: ["全城", "品牌", "特色"]
    };
  },
  mounted() {
    this.getData();
  },
  filters: {
    formatCard(key) {
      var card = [
        { key: "allowRefund", value: "改签" },
        { key: "endorse", value: "退" },
        { key: "sell", value: "折扣卡" },
        { key: "snack", value: "小吃" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    },
    classCard(key) {
      var card = [
        { key: "allowRefund", value: "bl" },
        { key: "endorse", value: "bl" },
        { key: "sell", value: "or" },
        { key: "snack", value: "or" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    }
  },
  methods: {
    getData() {
      this.$axios({
        url: "/miao/api/cinemaList?cityId=10"
      }).then(res => {
        var msg = res.data.msg;
        if ((msg = res.data.msg)) {
          this.cinemaList = res.data.data.cinemas;
          console.log(this.cinemaList);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cinema {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .cinema-main {
    width: 100%;
    height: 0.93rem;
    .mm-cinema {
      height: 0.51rem;
      font-size: 0.18rem;
      line-height: 0.51rem;
      text-align: center;
      color: #fff;
      background: #e54847;
    }
    .nav-cinema {
      height: 0.42rem;
      line-height: 0.42rem;
      position: relative;
      border-bottom: 0.01rem solid #ebe8e3;
      display: flex;
      justify-content: space-around;
      span {
        width: 0.7rem;
        height: 0.4rem;
        line-height: 0.4rem;
        display: inline-block;
        font-size: 0.14rem;
        padding: 0px 0.1rem;
        text-align: center;
        border-bottom: 0.02rem solid transparent;
        position: relative;
      }
      i {
        height: 0rem;
        width: 0rem;
        position: absolute;
        right: 0.08rem;
        top: 0.17rem;
        border-top: 0.05rem solid #000;
        border-left: 0.05rem solid transparent;
        border-right: 0.05rem solid transparent;
      }
    }
  }
  ul {
    flex: 1;
    overflow: auto;
    li{
        width: 100%;
        min-height: 1.19rem;
        padding: .19rem .16rem .14rem;
        border-bottom:  .01rem solid #f5f3f1;
        padding-bottom: .15rem;
        .tit{
            font-size: .14rem;
        }
        .address{
            font-size: .12rem;
            color:#666666;
            padding-top: .1rem;
        }
        .card{
            span{
                display: inline-block;
                border-radius: .03rem;
                margin-right: .1rem;
                margin-top: .1rem;
            }
        }
    }
  }
}
.bl{
    color: yellow;border: .01rem solid yellow;
}
.or{
    color: lightblue;border: .01rem solid lightblue;
}
</style>