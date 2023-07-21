<template>
  <div class="header">
    <div class="icon">zy-UI</div>
  </div>
  <div class="left-menu">
    <template v-for="(item, index) in menuList[1].children" :key="index">
      <li :class="{ active: isActiveClass === index }" @click="switchRouter(item, index)">{{ item.name }}</li>
    </template>
  </div>
  <div class="container">
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import menuList from "@/router/pages"
import { ref } from "vue";
import { useRouter } from "vue-router";

const isActiveClass = ref(0)
const router = useRouter()
const switchRouter = (item, index) => {
  isActiveClass.value = index
  router.push(item.path)
}

</script>

<style lang="scss">
.header {
  height: 50px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding: 5px 10px;
  max-height: 55px;
  background-color: #fff;
  z-index: 9999;

  .icon {
    font-size: 25px;
    line-height: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

.left-menu {
  width: 220px;
  border-right: 1px solid #f0f0f0;
  margin-top: 50px;
  position: fixed;
  top: 0;
  bottom: 0;
  transition: padding-top .3s;
  overflow: auto;

  li {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  li.active {
    border-right: 2px solid #0e80eb;
    color: #0e80eb;
    background: rgba(14, 128, 235, .1);
  }
}

.container {
  display: flex;
  height: 94vh;
  margin-top: 50px;
  position: absolute;
  left: 220px;
  width: calc(100% - 220px);

  .main {
    height: 100%;
    width: 100%;
    padding: 0 20px;
    padding-top: 20px;
  }

}

/* 滚动条整体 */
body::-webkit-scrollbar,
.left-menu::-webkit-scrollbar {
  width: 8px;
}

/* 两个滚动条交接处 -- x轴和y轴 */
body::-webkit-scrollbar-corner,
.left-menu::-webkit-scrollbar-corner {
  background-color: transparent;
}

/* 滚动条滑块 */
body::-webkit-scrollbar-thumb,
.left-menu::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(144, 147, 153, .6);
}

/* 滚动条轨道 */
body::-webkit-scrollbar-track,
.left-menu::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #fff;
}

/* 滚动条两端按钮 */
body::-webkit-scrollbar-button,
.left-menu::-webkit-scrollbar-button {
  display: none;
}
</style>