var test = require('ava');
var Vue = require('vue');
var ElCascader = require('../dist/index.js');

test('el-cascader', t => {
  t.truthy(ElCascader.install);
});
