<template>
  <Transition name="bounce">
    <pre v-highlight v-if="isShow">
      <code class="language-html" >{{ sourceCode }}</code>
    </pre>
  </Transition>
  <div class="check" @click="change">
    <span v-if="isShow">隐藏代码</span>
    <span v-else>查看代码</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const sourceCode = ref("")
const isShow = ref(false)

const props = defineProps({
  demoName: {
    type: String,
    required: true
  },
  componentsName: {
    type: String,
    required: true
  }
})

onMounted(() => {
  getCode()
})

const change = () => {
  isShow.value = !isShow.value
}

async function getCode() {
  sourceCode.value = (
    await import(
    /* @vite-ignore */ `@/packages/${props.componentsName}/doc/${props.demoName}.vue?raw`)
  ).default;
}
</script>

<style lang="scss">
.check {
  padding: 10px 8px;
  text-align: center;
  border: 1px solid #f3f3f3;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #ddd;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
