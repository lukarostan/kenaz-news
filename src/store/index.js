import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
  },
  actions: {
    async getNews(){
      try{
        let response = await axios
        .get('https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=3e6b5c6472f946bcb61057a205669f44')
        this.news = response
      }catch(err){
        console.log(err)
      }
    }
  },
  modules: {
  }
})
