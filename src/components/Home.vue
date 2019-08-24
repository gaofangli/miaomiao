<template>
  <div class="wrap">
    <div class="home-main">
     <keep-alive>
      <router-view></router-view>
     </keep-alive>
    </div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        <router-link :to="item.path">
          <p class="s1" v-html="item.ma"></p>
          <p class="s2">{{item.tit}}</p>
        </router-link>
      </li>
    </ul>
      <!-- <MessageBox/> -->

  </div>
</template>
<script>
import {messageBox} from "@/components/JS";
export default {
  name: "Home",
    components:{
    //  MessageBox
  },
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
  },
  // http://39.97.33.178/api/getLocation
  methods: {
   getData(){
      this.$axios({
        url:"/miao/api/getLocation"
      }).then((res) => {
         var msg = res.data.msg
         if( msg === 'ok'){
         var nm = res.data.data.nm
         var id = res.data.data.id
         
        //  如果城市所指刚好是切换的城市，没有弹出框
          if(this.$store.state.city.id === id){return;}
           //   调用并传参
            messageBox({
                title:"定位",
                content:nm,
                cancel:"取消",
                ok:"切换定位",
                 
                handleOk(e){
                  window.localStorage.setItem("nowNm",nm)
                  window.localStorage.setItem("nowId",id)
                  window.location.reload()
                 
                }
            });
              }
      })
   }
  },
  mounted() {
    setTimeout(() =>{
      this.getData()
    },3000)
  },
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
