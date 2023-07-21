import zyButton from './button.vue'

zyButton.install = (app) => {
  app.component(zyButton.name, zyButton)
}

export default zyButton
