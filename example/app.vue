<script>
  import Vue from 'vue';
  import ElCascader from './../src/index';

  Vue.use(ElCascader);

  export default {
    name: 'app',

    template: require('./demo.md'),

    data() {
      return {
        model: ''
      };
    },

    created() {
      this.menus = require('./data/data.json');
    }
  };
</script>
