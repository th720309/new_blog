import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home'
import About from './views/about/About'
import Photo from './views/photo/Photo'
import Music from './views/music/Music'
import Read from './views/read/Read'
import Speak from './views/speak/Speak'
import Code from './views/code/Code'
import Comment from './views/comment/Comment'
import Archive from './views/archive/Archive'
import Location from './views/location/Location'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/read',
      name: 'read',
      component: Read
    },
    {
      path: '/code',
      name: 'code',
      component: Code
    },
    {
      path: '/speak',
      name: 'speak',
      component: Speak
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    }
  ]
})
