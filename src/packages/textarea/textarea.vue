<template>
  <textarea
    class="zy_textatea"
    :cols="cols"
    :rows="rows"
    :value="modelValue"
    @input="input"
  ></textarea>
</template>

<script>
export default {
  name: 'zyTextarea',
}
</script>

<script setup>
const props = defineProps({
  // 双向绑定数据
  modelValue: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    default: 10,
  },
  cols: {
    type: Number,
    default: 30,
  },
  // 限制最大字数
  max: {
    type: Number,
  },
})

const emit = defineEmits(['update:modelValue'])

const input = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style lang="scss">
.zy_textatea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  padding: 0;
  outline: none;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
  color: $input_color;
  border-color: $input_border;

  &:focus {
    border-color: $primary;
  }
}
</style>
