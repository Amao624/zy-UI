<template>
  <div class="bg">
    <div class="container">
      <div class="main">
        <h1>zy-UI</h1>
        <p>一套为开发者、设计师和产品经理准备的基于 Vue 3的Web端组件库</p>
      </div>
      <div class="start">
        <zy-button type="success" @click="goto">开始使用</zy-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goto = () => {
  router.push('/home')
}
</script>

<style scoped lang="scss">
.bg {
  background-image: linear-gradient(125deg, #2c3e50, #27ae60, #2980b9, #e74c3c, #8e44ad);
  background-size: 400%;
  font-size: 20px;
  animation: bgmove 20s infinite ease-in;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: #fff;

    .main {
      text-align: center;

      p {
        margin: 30px 0;
      }
    }
  }
}

@keyframes bgmove {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
</style>
