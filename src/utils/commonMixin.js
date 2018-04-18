import {mapGetters} from 'vuex'
import _ from 'lodash'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'firstSignIn',
      'currentLang',
      'mappingCodes',
    ])
  },
  methods: {
    $t(code) {
      return _.at(this.mappingCodes[this.currentLang], code)[0] || ""
    }
  }
}