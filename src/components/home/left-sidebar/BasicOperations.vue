<script setup>
import { inject, ref } from "vue";
import SearchDialog from "./dialog/SearchDialog.vue"


const person = {
  name: "Virtual Moon",
  img: "/src/assets/img/person-img.jpg",
  email: "crescent2020@163.com",
  motto: "枕上诗书闲处好，门前风景雨来佳。",
};

// 点击头像获取用户操作
const { personOperationsBl, setpersonOperationsBl } = inject(
  "person-operations-visible"
);
const getPersonOperations = () => {
  console.log("Get person operations.");
  setpersonOperationsBl(!personOperationsBl.value); // 更换显示状态
  console.log(personOperationsBl);
};

// 收缩左侧侧边栏
const collapseLeftSidebar = () => {
  console.log("Collapse the left sidebar.");
};
</script>

<template>
  <div class="basic-operations">
    <!-- 个人信息 -->
    <div class="basic-operations__person">
      <div class="person__button" @click="getPersonOperations">
        <div class="person__button-body">
          <!-- 个人图片 -->
          <img
            :src="person.img"
            referrerpolicy="same-origin"
            class="button__img"
          />
          <!-- 个人用户名 -->
          <div class="button__name">{{ person.name }}</div>
        </div>
      </div>
      <!-- 收缩菜单栏 -->
      <div class="person__collapse-button" @click="collapseLeftSidebar">
        <el-icon><IEpDArrowLeft /></el-icon>
      </div>
      <!-- 分割线 -->
      <!-- <span class="split-line"></span> -->
      <!-- 基础操作 -->
      <div class="basic-operations__options">
        <div class="twilight-menu__body">
          <div class="menu__item">
            <div class="item__content" @click="searchDialogBl = true">
              <el-icon><IEpSearch /></el-icon>
              Search
            </div>
          </div>
          <div class="menu__item">
            <div class="item__content">
              <el-icon><IEpClock /></el-icon>Updates
            </div>
          </div>
          <div class="menu__item">
            <div class="item__content">
              <el-icon><IEpSetting /></el-icon>Settings
            </div>
          </div>
        </div>
      </div>
      <!-- 基础操作的弹窗 -->
      <!-- 搜索框弹窗 -->
      <SearchDialog />

    </div>
  </div>
</template>

<style lang="css">
.basic-operations__dropdown {
  width: 100%;
}

.basic-operations__person {
  width: 100%;
  position: relative;
}

.person__button {
  user-select: none; /* 子元素无法被选中 */
  /* transition: background 20ms ease-in 0s; */
  display: flex;
  justify-content: flex-start;
  height: 45px;
  width: 100%;
  min-height: 27px;
  overflow: hidden;
  margin-right: 8px;
  padding-left: 15px;
  cursor: pointer;
}

.el-button > span {
  width: 100%;
}

.basic-operations .basic-operations__person .person__button:hover {
  background-color: var(--color-button-hover);
}

.person__button-body {
  display: flex;
  align-items: center;
  width: 80%;
}

.button__img {
  display: block;
  object-fit: cover;
  border-radius: 0.25em;
  width: 1.4rem;
  height: 1.4rem;
  transition: opacity 100ms ease-out 0s;
}

.button__name {
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.person__collapse-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 5px;
  top: 0;
  right: 0;
  z-index: 11;
  margin: 8px 15px;
  height: 29px;
  width: 29px;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--color-collapse-button);
}

.basic-operations__person .person__collapse-button:hover {
  background-color: var(--color-collapse-button-hover);
}

/* 基础操作 */
.basic-operations__options .el-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  font-weight: bold;
}

.basic-operations__options .item__content {
  margin: 0 12px;
  justify-content: flex-start;
}


</style>
