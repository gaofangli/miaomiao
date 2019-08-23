import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import Cinema from '@/components/Cinema'
import My from '@/components/My'
import Hot from '@/components/movie/Hot'
import Place from '@/components/movie/Place'
import Search from '@/components/movie/Search'
import Comming from '@/components/movie/Comming'
import Detail from '@/components/view/Detail'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/movie"
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
      
        {
          path: '/movie',
          name: 'Movie',
          component: Movie,

          children: [
            {
              path: '/movie/place',
              name: 'Place',
              component: Place,
            },
            {
              path:"/movie",
              redirect:"/movie/hot",
            },
            {
              path: '/movie/hot',
              name: 'Hot',
              component: Hot,
            },
            {
              path: '/movie/comming',
              name: 'Comming',
              component: Comming,
            },
            {
              path: '/movie/search',
              name: 'Search',
              component: Search,
            }
          ]
        },
        {
          path: '/cinema',
          name: 'Cinema',
          component: Cinema
        },
        {
          path: '/my',
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
  ]
})
