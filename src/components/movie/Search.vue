<template>
  <div>
    <form action>
      <input type="text" placeholder="请输入你要内容" v-model="message" />
    </form>
    <h2>电影/电视剧/综艺</h2>
    <ul>
      <li v-for="item in moviesList" :key="item.id" class="list">
        <div class="img fl">
          <img :src="item.img.replace('w.h', '128.180')" alt />
        </div>
        <div class="info fr">
          <p class="info-tit">
            <span class="fl">{{item.nm}}</span>
            <span class="fr num">{{item.sc}}</span>
          </p>
          <p class="p enm fl">{{item.enm}}</p>
          <p class="p">{{item.cat}}</p>
          <p class="p">{{item.rt}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      moviesList: []
    };
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    }
  },
  watch: {
    // axios防抖 多次请求数据，阻止上一次请求
    message(newVal) {
      var that = this;
      var cityId = this.$store.state.city.id
      this.cancelRequest();
      this.$axios
        .get("/miao/api/searchList?cityId=1"+ cityId +"&kw=" + newVal, {
          cancelToken: new this.$axios.CancelToken(function(c) {
            that.source = c;
          })
        })
        .then(res => {
          var msg = res.data.msg;
          var movies = res.data.data.movies;
          if (msg && movies) {
            this.moviesList = res.data.data.movies.list;
          }
        })
        .catch(err => {
          if (this.$axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    }
  }
  // http://39.97.33.178/api/searchList?cityId=10&kw=a
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  height: 0.52rem;
  padding: 0.1rem;
  background: #f5f5f5;
  text-align: center;
  input {
    width: 95%;
    height: 0.32rem;
    border-radius: 0.03rem;
    text-indent: 0.2rem;
  }
}

h2 {
  font-size: 0.15rem;
  color: #999999;
  height: 0.45rem;
  line-height: 0.45rem;
  text-indent: 0.2rem;
  border-bottom: 0.01rem solid #ebebeb;
  border-top: 0.01rem solid #ebebeb;
}
li {
  min-height: 0.95rem;
  width: 100%;
  padding: 0.1rem 0.18rem;
  border-bottom: 0.01rem dashed #dedede;
  .img {
    width: 24%;
    height: 0.74rem;
    padding-right: 0.14rem;
    img {
      width: 0.55rem;
      height: 0.74rem;
    }
  }
  .info {
    height: 0.88rem;
    width: 76%;

    .info-tit {
      width: 100%;
      height: .2rem;
    }
    .p {
      font-size: 0.12rem;
      line-height: 0.2rem;
        width: 100%;
        height: .2rem;
    

    }
  }
}
</style>