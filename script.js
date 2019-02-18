Vue.component('search-component', {
  template: '#search-template',
  data(){
    return {
      query: '',
      results: [],
      masterData: [
        'Rem',
        'Dakara',
        'Emilia',
        'Nanahira'
      ],
      selected: null
    }
  },
  methods: {
    searching(){
      this.results = []
      this.masterData.forEach((data) => {
        dataLower = data.toLowerCase()

        if(dataLower.includes(this.query)) {
          this.results.push(data)
        }
      })
    },

    select(event){
      this.query = event.target.outerText
      this.results = []
    }
  }
})


app = new Vue({
  el: '#app',
})