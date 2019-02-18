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
      selected: null,
      indexSelect: null
    }
  },
  methods: {
    searching(event){
      this.results = []
      this.masterData.forEach((data) => {
        dataLower = data.toLowerCase()
        queryLower = this.query.toLowerCase()

        if(dataLower == queryLower){
          return
        }

        if(dataLower.includes(queryLower)) {
          result = {
            data: data,
            keyWatch: false
          }

          this.results.push(result)
        }
      })

      this.keyMonitor(event)
    },

    select(event){
      this.query = event.target.outerText
      this.results = []
    },

    keyMonitor(event){
      if(event.key == 'ArrowDown'){
        if(this.indexSelect == null){
          this.indexSelect = 0
          this.results[this.indexSelect].keyWatch = true
        }else {
          this.results[this.indexSelect].keyWatch = false
          this.indexSelect += 1
          this.results[this.indexSelect].keyWatch = true
        }
      }

      if(event.key == 'ArrowUp'){
        this.results[this.indexSelect].keyWatch = false
        this.indexSelect -= 1
        this.results[this.indexSelect].keyWatch = true
      }
    }
  }
})

app = new Vue({ el: '#app' })
