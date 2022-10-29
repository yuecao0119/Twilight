<script setup>
import LeftOptionBar from "../components/home/left-sidebar/LeftOptionBar.vue";
import BasicOperations from "../components/home/left-sidebar/BasicOperations.vue";
import FileDirectories from "../components/home/left-sidebar/FileDirectories.vue";
import Tags from "../components/home/left-sidebar/Tags.vue";

import PersonOperationsDialog from "../components/home/left-sidebar/dialog/PersonOperationsDialog.vue";

import changeWidth from "../utils/change-width.js";
import { provide } from "vue";

const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 20 }).fill(item));

// dialog显示管理
const isPersonOperations = ref(false); // 是否显示用户操作框
const setIsPersonOperations = (value) => {
  isPersonOperations.value = value;
};

provide("person-operations-visible", {
  isPersonOperations,
  setIsPersonOperations,
});
</script>

<template>
  <div class="home">
    <!-- 页面 -->
    <el-container class="home-container">
      <!-- 左侧侧边栏 -->
      <el-aside class="home-container__left" id="home-container__left">
        <!-- 最左侧选项栏 -->
        <LeftOptionBar />
        <!-- 左侧容器 -->
        <el-scrollbar class="left__container">
          <!-- 基础操作 -->
          <div>
            <BasicOperations />
          </div>

          <div class="left__top-container">
            <!-- 文件目录 -->
            <FileDirectories />
          </div>
          <div class="left__bottom-container">
            <!-- 标签 -->
            <Tags />
          </div>
        </el-scrollbar>
      </el-aside>
      <!-- 宽度可拖拽 -->
      <div
        class="left__dragged-box"
        @mousedown="changeWidth($event, 'home-container__left')"
      ></div>
      <!-- 中间主体 -->
      <el-container class="home-container__main">
        <!-- 头部工具栏 -->
        <el-header>
          <div class="main__file-toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
                ><IEpSetting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>
        <!-- 主体内容部分 -->
        <el-main>
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>

      <!-- 右侧侧边栏 -->
      <el-aside class="home__right">
        <!-- 右侧容器 -->

        <!-- 最右侧选项栏 -->
      </el-aside>
    </el-container>

    <!-- 小窗口 -->
    <!-- 个人操作弹窗 -->
    <PersonOperationsDialog
      v-if="isPersonOperations"
      class="person-operations-dialog"
    />
  </div>
</template>

<style lang="css">
.home {
  height: 100%;
}

.home-container {
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex: 1 1 0%;
  background-color: var(--color-bg);
}

.home-container .el-aside {
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  background-color: var(--color-aside-bg);
  transition: box-shadow 300ms ease 0s;
  box-shadow: var(--color-box-shadow) -1px 0px 0px 0px inset;
}

.home-container__left {
  display: flex;
  width: 250px;
  min-width: 15%;
}

.left__container {
  flex: 1;
}

.left__dragged-box {
  cursor: col-resize;
  width: 5px;
  border-left: 1px solid var(--color-split-line);
}

.left__dragged-box:hover {
  background-color: var(--color-split-line-hover);
}

.home-container .main__file-toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

/* 分割线 */
.split-line {
  background-color: var(--color-split-line);
  display: block;
  /* margin-left: 1rem; */
  /* margin-right: 1rem; */
  height: 0.5px;
}

/* 默认菜单及按钮 */
.twilight-menu__header {
  display: flex;
  justify-content: space-between;
  margin: 5px 5px 0 5px;
  user-select: none;
  transition: background 20ms ease-in 0s;
  border-radius: 3px;
  align-items: center;
  min-height: 28px;
  font-size: 14px;
}

.header__left-container {
  display: flex;
  overflow: hidden;
  align-items: center;
}

.header__right-container {
  display: flex;
}

.twilight-menu__header .content__text {
  color: var(--color-text);
  line-height: 20px;
  margin-left: 5px;
}

.twilight-menu__body {
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 1px;
}

.menu__item {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  min-height: 28px;
  font-size: 14px;
}

.menu__item:hover {
  background-color: var(--color-button-hover);
}

.item__content {
  margin: 0 5px;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  color: var(--color-button-text);
  white-space: nowrap;
  align-items: center;
}

.content__button {
  flex-shrink: 0;
  flex-grow: 0;
  color: var(--color-button-text);
  width: 20px;
  height: 20px;
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.content__button:hover {
  background-color: var(--color-small-button-hover);
}

.content__left-container {
  display: flex;
  overflow: hidden;
}

.content__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
  margin-left: 2px;
}

.content__right-container {
  display: flex;
}

/* 弹窗 */
/* 个人操作弹窗 */
.person-operations-dialog {
  position: absolute;
  top: 40px;
  left: 50px;
  z-index: 111;
}
</style>
