// 导入组件，组件必须声明 name
import inputFile from './input-file/input-file.vue'

export default {
  install (Vue) {
    Vue.component(inputFile.name, inputFile)
  }
}