import zyButton from './button'
import zyInput from './input'
import zyTextarea from './textarea/index'

const components = [zyButton, zyInput, zyTextarea]

const install = (app) => {
  components.forEach((component) => {
    app.use(component)
  })
}

const zy_UI = {
  install,
}

export { zyButton, zyInput, zyTextarea }

export default zy_UI
