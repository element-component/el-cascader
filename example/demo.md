# el-cascader
> 级联下拉选择

-----------

<el-cascader
  placeholder="下拉选择"
  :model="model">
  <el-menu
    v-for="menu in menus"
    :label="menu.label">
    <el-menu
      v-for="submenu in menu.submenu"
      :label="submenu.label">
      <el-menu
        v-for="trimenu in submenu.submenu"
        :label="trimenu.label">
        <el-menu
          v-for="fourmenu in trimenu.submenu"
          :label="fourmenu.label">
        </el-menu>
      </el-menu>
    </el-menu>
  </el-menu>
</el-cascader>

```html
<el-cascader
  placeholder="下拉选择"
  :model="model">
  <el-menu
    v-for="menu in menus"
    :label="menu.label">
    <el-menu
      v-for="submenu in menu.submenu"
      :label="submenu.label">
      <el-menu
        v-for="trimenu in submenu.submenu"
        :label="trimenu.label">
        <el-menu
          v-for="fourmenu in trimenu.submenu"
          :label="fourmenu.label">
        </el-menu>
      </el-menu>
    </el-menu>
  </el-menu>
</el-cascader>
```
