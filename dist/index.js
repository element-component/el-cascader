(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-clickoutside"));
	else if(typeof define === 'function' && define.amd)
		define("ElCascader", ["vue-clickoutside"], factory);
	else if(typeof exports === 'object')
		exports["ElCascader"] = factory(require("vue-clickoutside"));
	else
		root["ElCascader"] = factory(root["VueClickoutside"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElCascader = __webpack_require__(5);
	var ElMenu = __webpack_require__(7);

	module.exports = {
	  ElCascader: ElCascader,
	  ElMenu: ElMenu,
	  install: function install(Vue) {
	    Vue.component(ElCascader.name, ElCascader);
	    Vue.component(ElMenu.name, ElMenu);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{\n    'is-disabled': disabled,\n    'is-readonly': readonly,\n    'is-multiple': multiple\n  }\" class=element-core-input> <template v-if=multiple> <el-core-tag @remove=tags.$remove(tag) v-for=\"tag in tags\" :data=tag> </el-core-tag> </template> <input v-el:input=\"\" v-model=model :type=\"type || 'text'\" :disabled=disabled :readonly=readonly :placeholder=placeholder :number=\"type === 'number'\" @blur=\"$dispatch('e-blur')\" @focus=handleFocus @keydown.down.prevent=\"$dispatch('e-press-down')\" @keydown.up.prevent=\"$dispatch('e-press-up')\" @keyup.enter=\"$dispatch('e-press-enter')\" @keydown.8=handleDelete @keydown.esc=\"$dispatch('e-press-esc')\" class=element-core-input__original> <slot name=icon></slot> </div>";

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<button class=element-core-tag> <span v-text=data></span> <span v-if=_events.remove @click.stop=\"$dispatch('remove')\" class=element-core-tag__button>&times;</span> </button>";

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div v-element-clickoutside=\"show = false\" class=element-cascader> <el-input readonly=\"\" :model.sync=model @click=\"show = !show\" :placeholder=placeholder> </el-input> <div v-show=show class=element-cascader__dropdown> <div class=element-cascader__wrap> <el-dropdown v-ref:dropdown=\"\" :model.sync=model :data=list :index=$index trigger=hover v-for=\"list in data\" @change=handleSelected class=element-cascader__menu> </el-dropdown> </div> </div> <slot></slot> </div>";

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=element-dropdown> <ul class=element-dropdown__list> <li v-for=\"item in data\" class=\"element-option element-option--arrow\" :class=\"{\n        'is-disabled': item.disabled,\n        'is-selected': cache.pid === index && cache.id === $index,\n        'is-last': !item.hasOwnProperty('submenu')\n      }\" @click=\"handleSelected('click', item, index, $index)\" @mouseover=\"handleSelected('hover', item, index, $index)\"> <span v-text=item.label></span> </li> </ul> </div>";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(13)
	__vue_template__ = __webpack_require__(4)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(10)
	__vue_template__ = __webpack_require__(1)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(9);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCoreInput',

	  components: {
	    ElCoreTag: _tag2.default
	  },

	  props: {
	    placeholder: String,
	    disabled: Boolean,
	    readonly: Boolean,
	    multiple: Boolean,
	    tags: Array,
	    model: [String, null],
	    type: String
	  },

	  methods: {
	    handleFocus: function handleFocus() {
	      if (!this.readonly) {
	        this.$els.input.select();
	      }
	      this.$dispatch('e-focus');
	    },
	    handleDelete: function handleDelete() {
	      if (this.model && this.model.trim().length !== 0) {
	        return;
	      }

	      this.$dispatch('e-press-delete');
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'ElCoreTag',

	  props: {
	    data: [String, Number]
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(8);

	var _input2 = _interopRequireDefault(_input);

	var _dropdown = __webpack_require__(6);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCascader',

	  props: {
	    model: {
	      required: true,
	      type: String
	    },
	    placeholder: String
	  },

	  directives: {
	    ElementClickoutside: __webpack_require__(16)
	  },

	  data: function data() {
	    return {
	      show: false,
	      data: [],
	      menus: []
	    };
	  },
	  compiled: function compiled() {
	    this.data.push(this.menus);
	  },


	  methods: {
	    handleSelected: function handleSelected(selected, index) {
	      var nextIndex = index + 1;
	      var removeIndex = nextIndex;

	      if (selected.hasOwnProperty('submenu')) {
	        this.data.$set(nextIndex, selected.submenu);
	        removeIndex++;
	      }

	      this.data = this.data.slice(0, removeIndex);
	    }
	  },

	  components: {
	    ElInput: _input2.default,
	    ElDropdown: _dropdown2.default
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectEqual = __webpack_require__(15);

	var _objectEqual2 = _interopRequireDefault(_objectEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'ElDropdown',

	  props: {
	    data: {
	      default: function _default() {
	        return [];
	      },

	      required: true
	    },
	    model: {
	      default: function _default() {
	        return [];
	      },

	      twoWay: true
	    },
	    index: Number,
	    trigger: {
	      type: String,
	      default: 'click',
	      validator: function validator(value) {
	        return ['click', 'hover'].indexOf(value) > -1;
	      }
	    }
	  },

	  data: function data() {
	    return {
	      cache: {}
	    };
	  },


	  watch: {
	    model: function model(value) {
	      if (!value) {
	        this.cache = '';
	      }
	    }
	  },

	  methods: {
	    handleSelected: function handleSelected(trigger, data, pid, id) {
	      var _this = this;

	      var cache = void 0;

	      if (trigger === 'click' && !data.hasOwnProperty('submenu')) {
	        this.$parent.show = false;
	      }

	      if (data.disabled || trigger !== this.trigger) {
	        return;
	      }

	      cache = { pid: pid, id: id };
	      if ((0, _objectEqual2.default)(cache, this.cache)) {
	        return;
	      }
	      this.cache = cache;

	      if (this.$parent.completed) {
	        if (!Array.isArray(this.model)) {
	          this.model = [];
	        }

	        this.model.$set(pid, data.label);
	        this.model = this.model.slice(0, pid + 1);
	      } else {
	        this.model = data.label;
	      }

	      this.$nextTick(function () {
	        return _this.$dispatch('change', data, pid);
	      });
	    }
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'ElMenu',

	  props: {
	    label: String,
	    disabled: Boolean
	  },

	  compiled: function compiled() {
	    var parent = this.$parent;
	    var menu = {
	      label: this.label,
	      disabled: this.disabled
	    };

	    if (this.submenu) {
	      menu.submenu = this.submenu;
	    }

	    if (parent.$options.name !== this.name && parent.hasOwnProperty('menus')) {
	      parent.menus = parent.menus.concat(menu);
	    } else {
	      parent.submenu = (parent.submenu || []).concat(menu);
	    }
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function equals(a, b) {
	  if (!a && !b) return true;
	  if (!a || !b) return false;
	  if (Object.keys(a).length !== Object.keys(b).length) return false;

	  return Object.keys(a).every(function(key) {
	    return a[key] === b[key];
	  });
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }
/******/ ])
});
;