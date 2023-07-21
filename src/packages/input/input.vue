<template>
  <div class="zy_input">
    <input
      :class="zyClass"
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
    />
    <span :style="clearStyle" class="clear_icon" @click="clearInput">x</span>
  </div>
</template>

<script>
export default {
  name: 'zyInput',
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const zyClass = computed(() => {
  return [props.disabled ? 'zy_input_disabled' : '']
})

// 输入框的input方法
const input = (e) => {
  // 更新绑定的值
  emit('update:modelValue', e.target.value)
}

// 清空按钮样式
const clearStyle = computed(() => {
  return [
    {
      display: props.clearable ? (props.modelValue ? 'block' : 'none') : 'none',
    },
  ]
})

// 清空输入框
const clearInput = () => {
  emit('update:modelValue', '')
}
</script>

<style lang="scss">
.zy_input {
  display: inline-block;
  min-width: 250px;
  position: relative;

  input {
    outline: none;
    border: 1px solid $input_border;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: $input_color;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:focus {
      border-color: $primary;
    }
  }

  .clear_icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .zy_input_disabled {
    cursor: not-allowed;
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
  }
}
</style>
