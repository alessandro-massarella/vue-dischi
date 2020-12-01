const myApp = new Vue ({
  el: '#myApp',

  data: {
    records: [],
    url: "https://flynn.boolean.careers/exercises/api/array/music",
  },

  mounted: function() {

      axios
            .get (this.url)
            .then ((response)=> {

              this.records = response.data.response
              console.log(response)
            })
  },
});
