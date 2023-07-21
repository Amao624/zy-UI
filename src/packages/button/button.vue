<template>
  <button type="button" :class="zyCalss" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'zyButton',
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
})

const zyCalss = computed(() => {
  return [
    'zy_button_base',
    `zy_button_${props.type}`,
    props.disabled ? 'zy_button_disabled' : '',
    props.round ? 'zy_button_round' : '',
  ]
})
</script>

<style lang="scss">
.zy_button_base {
  outline: none;
  border: none;
  line-height: 1;
  background: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  padding: 12px 24px;
  box-sizing: border-box;
  margin: 0 5px;

  &:hover,
  &.focus {
    opacity: 0.8;
  }
}

// 默认按钮样式
.zy_button_default {
  color: $default;
  border: 1px solid $default_border;

  &:hover,
  &:focus {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

// 禁用属性
.zy_button_disabled {
  opacity: 0.4;
  cursor: not-allowed;
  &:hover,
  &:focus {
    opacity: 0.4;
    color: #c0c4cc;
  }
}

// 圆角按钮
.zy_button_round {
  border-radius: 20px;
}

.zy_button_primary {
  background-color: $primary;
  color: #fff;
  border-color: $primary;
}

.zy_button_success {
  background-color: $success;
  color: #fff;
  border-color: $success;
}

.zy_button_warning {
  background-color: $warning;
  color: #fff;
  border-color: $warning;
}

.zy_button_danger {
  background-color: $danger;
  color: #fff;
  border-color: $danger;
}

.zy_button_text {
  background-color: $text;
}
</style>
