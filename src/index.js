const ElCascader = require('./cascader');
const ElMenu = require('./menu');

module.exports = {
  ElCascader,
  ElMenu,
  install(Vue) {
    Vue.component(ElCascader.name, ElCascader);
    Vue.component(ElMenu.name, ElMenu);
  }
};

