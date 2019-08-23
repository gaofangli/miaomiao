<template>
    <div class="header">
       <div class="htop">
       <a class="iconfont back-icon" @click="goBack">&#58890;</a>
       <h1>城市选择</h1>
       </div>
       <div class="hbottom">
        <input type="text" v-model="keyword" placeholder="输入城市名或拼音"/>
       </div>
      <div
        class="search-content"
        ref="search"
        v-show="keyword"
      >
        <ul>
          <li
            class="search-item border-bottom"
            @click="CityClick(item.name)"
            v-for="item of list"
            :key="item.id"
          >
            {{item.name}}
          </li>
          <li class="search-item border-bottom" v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapMutations } from 'vuex'
    export default {
        name: "CityHeader",
        props:{
          citylist : ""
        },
        data(){
            return{
            keyword:"" ,//获取文本框的值
            list:[],//声明个空数组用来存放搜索到的值
            timer: null
            }
        },
        created(){

        },
        methods:{
          goBack(){
            this.$router.push('/')
          },
          CityClick(city){
          this.changeCity(city)
          this.$router.push('/')
        },
        ...mapMutations(["changeCity"])
        },
      computed: {
        hasNoData () {
          return !this.list.length
        }
      },
      watch:{
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.citylist) {
          this.citylist[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
      },
      mounted () {
        this.scroll = new BScroll(this.$refs.search,{click:true})
      }
    }
</script>

<style  lang="less" scoped>
.header{
  width: 100%;
  height: 2.135135rem;
  background: #00bcd4;
  .htop{
    width: 100%;
    height: 1.162162rem;
    line-height: 1.162162rem;
    color:#fff;
    font-size: 16px;
    text-align: center;
    display: flex;
    a{
        display: block;
        width: 5%;
        height: 1.162162rem;
        line-height: 1.162162rem;
        text-align: center;
        color:#fff;
    }
    h1{
        width: 100%;
        height: 1.162162rem;
        line-height: 1.162162rem;
        text-align: center;
    }
  }
  .hbottom{
    width: 100%;
    height: 0.972972rem;
    line-height: 0.972972rem;
    text-align: center;
    input{
        width: 98%;
        height: 0.7rem;
        line-height: 0.7rem;
        margin: 0.1rem;
        text-align: center;
        border-radius: 5.4px;
    }

  }
  .search-content{
    z-index: 1111111;
    overflow: hidden;
    position: absolute;
    top: 2.1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item{
      line-height:0.62rem;
      padding-left: 0.2rem;
      background: #fff;
      color: #666
    }

  }

}
</style>