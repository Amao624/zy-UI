import zyTextarea from './textarea.vue'

zyTextarea.install = (app) => {
  app.component(zyTextarea.name, zyTextarea)
}

export default zyTextarea
