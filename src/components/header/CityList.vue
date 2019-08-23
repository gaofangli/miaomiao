<template>
  <div class="list" ref="wrapper">
    <div class="main-list">
      <div class="main-list-list">
        <div class="main-list-top">
          <div class="main-list-top-title">
            当前城市
          </div>
          <div class="main-list-top-content">
            <button
              @click="CityClick(item.name)"
            >{{this.city}}</button>
          </div>
        </div>
        <div class="main-list-center">
          <div class="main-list-center-title">
            热门城市
          </div>
          <div class="main-list-center-content">
            <button
              v-for="item of hot"
              :key="item.id"
              @click="CityClick(item.name)"
            >{{item.name}}</button>
          </div>
        </div>
        <div class="main-content">
          <div class="main-list-bottom" v-for="(item,key) of citylist" :key="key" :ref="key">
            <div class="main-list-bottom-title">
              {{key}}
            </div>
            <div class="main-list-bottom-content" v-for="(val,key) of item"  :key="key" @click="CityClick(val.name)">
              {{val.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "CityList",
        props:{
          hot:Array,
          citylist:"",
          letter:String
        },
        data(){
          return{

          }
        },
        computed:{
          ...mapState(["city"])
        },
        methods:{
          CityClick(city){
            console.log(1)
            this.changeCity(city)
            this.$router.push('/')
          },
          ...mapMutations(["changeCity"])
        },
        watch:{
          letter(){
            if(this.letter){
              const element=this.$refs[this.letter][0]
              // console.log(element)
              this.scroll.scrollToElement(element)
              // console.log(this)
            }
          }
        },
        mounted () {
         this.scroll = new BScroll(this.$refs.wrapper,{click:true})
      }
    }
</script>

<style  lang="less" scoped>
  .list{
    flex: 1;
    width: 100%;
    height: 15.837837rem;
    overflow: hidden;
    .main-list{
      width: 100%;
      display: flex;
      flex-direction: column;
      .main-list-top{
        width: 100%;
        height: 1.972972rem;
        .main-list-top-title{
          width: 97%;
          height: 0.729729rem;
          line-height: 0.729729rem;
          font-size: 14px;
          background: #EEEEEE;
          color: #666;
          padding-left: 0.3rem;
        }
        .main-list-top-content{
          width: 97%;
          height: 1.243243rem;
          line-height: 1.243243rem;
          background: #fff;
          padding-left: 0.3rem;
          button{
            width: 2.783783rem;
            height: 0.702702rem;
            border: 1px solid #CCCCCC;
            border-radius: 3.4px;
            background: none;
            margin-left: 0.2rem;
          }
        }
      }
      .main-list-center{
        width:100%;
        height: 2.216216rem;
        .main-list-center-title{
          width: 97%;
          height: 0.729729rem;
          line-height: 0.729729rem;
          font-size: 14px;
          background: #EEEEEE;
          color: #666;
          padding-left: 0.3rem;
        }
        .main-list-center-content{
          width: 97%;
          height: 2.216216rem;
          line-height: 1.1rem;
          background: #fff;
          padding-left: 0.3rem;
          button{
            width: 2.783783rem;
            height: 0.702702rem;
            border: 1px solid #CCCCCC;
            border-radius: 3.4px;
            background: none;
            margin-left: 0.2rem;
          }
        }
      }
      .main-content{
        flex: 1;
        margin-top: 28px;
        .main-list-bottom{
          .main-list-bottom-title{
            width: 97%;
            height: 0.729729rem;
            line-height: 0.729729rem;
            font-size: 14px;
            background: #EEEEEE;
            color: #666;
            padding-left: 0.3rem;
          }
          .main-list-bottom-content{
            width: 97%;
            height: 1.027027rem;
            line-height: 1.027027rem;
            font-size: 14px;
            background: #fff;
            color: #666;
            padding-left: 0.3rem;
            border-top: 1px solid #ccc;
          }
        }
      }

    }
  }
