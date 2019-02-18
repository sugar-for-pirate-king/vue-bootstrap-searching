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

        if(dataLower.includes(this.query.toLowerCase())) {
          this.results.push(data)
        }
      })

      this.keyMonitor()
    },

    select(event){
      this.query = event.target.outerText
      this.results = []
    },

    keyMonitor(){
      // not implement ye
    }
  }
})


app = new Vue({
  el: '#app',
})