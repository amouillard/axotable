Vue.component('axotable', {
  computed: {
    columns () {
      let labelMap = {
        id: '#',
        username: "Nom d'utilisateur",
        avatars: "Photos"
      }

      return this.users.length
        ? Object.keys(this.users[0])
          .map(k => ({
            key: k,
            label: labelMap[k]
          }))
        : []
    }
  },

  props: {
    users: {
      required: true,
      type: Array,
      default: () => ([])
    },

    cellsTypes: {
      required: true,
      type: Object,
      default: () => ({})
    }
  },

  template: `
    <table class="blueTable">
      <thead>
        <tr>
          <th v-for="column in columns">{{column.label}}</th>    
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td v-for="column in columns">
            <component :is="cellsTypes[column.key] === 'complex' ? 'axocell-complex' : 'axocell-simple'"
                       :value="user[column.key]"></component>
          </td>          
        </tr>
      </tbody>
    </table>
  `
})

Vue.component('axocell-simple', {
  props: {
    value: {
      required: true
    }
  },
  template: "<span>{{value}}</span>"
})

Vue.component('axocell-complex', {
  data() {
    return {
      index: 0
    }
  },

  props: {
    value: {
      required: true
    }
  },
  template: `
    <div>
      <div style="display: flex; justify-content: space-around; align-items: center">
        <button :disabled="index === 0" @click="index--"><</button>
          <img :src="value[index]">
        <button :disabled="index === value.length -1" @click="index++">></button>
      </div>
      <caption style="display: block">{{value[index]}}</caption>
    </div>
  `
})