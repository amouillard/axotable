new Vue({
  el: '#app',

  data () {
    return {
      apiJsonReturn: {},
      loading: false
    }
  },

  mounted () {
    this.loading = true
    setTimeout(() => {
      this.apiJsonReturn = {
        "users": [
          {
            "id": 1,
            "username": "Dude 1",
            "avatars": [
              "https://api.adorable.io/avatars/120/dude1@adorable.png",
              "https://api.adorable.io/avatars/120/dude1-2@adorable.png",
              "https://api.adorable.io/avatars/120/dude1-3@adorable.png"
            ]
          },
          {
            "id": 2,
            "username": "Dude 2",
            "avatars": [
              "https://api.adorable.io/avatars/120/dude2@adorable.png",
              "https://api.adorable.io/avatars/120/dude2-2@adorable.png",
              "https://api.adorable.io/avatars/120/dude2-3@adorable.png"
            ]
          },
          {
            "id": 3,
            "username": "Dude 3",
            "avatars": [
              "https://api.adorable.io/avatars/120/dude3@adorable.png",
              "https://api.adorable.io/avatars/120/dude3-2@adorable.png",
              "https://api.adorable.io/avatars/120/dude3-3@adorable.png"
            ]
          }
        ],
        "cellsTypes": {
          "id": "simple",
          "username": "simple",
          "avatars": "complex"
        }
      }
      this.loading = false
    }, 1000)
  }
})