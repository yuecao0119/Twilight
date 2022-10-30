<script setup>
import LeftOptionBar from "../components/home/left-sidebar/LeftOptionBar.vue";
import BasicOperations from "../components/home/left-sidebar/BasicOperations.vue";
import FileDirectories from "../components/home/left-sidebar/FileDirectories.vue";
import Tags from "../components/home/left-sidebar/Tags.vue";
import NotePage from "./NotePage.vue";
import ContentTree from "../components/home/right-sidebar/ContentTree.vue";
import BackLinks from "../components/home/right-sidebar/Backlinks.vue"
import RightOptionBar from "../components/home/right-sidebar/RightOptionBar.vue";


import PersonOperationsDialog from "../components/home/left-sidebar/dialog/PersonOperationsDialog.vue";

import {
  changeLeftDivWidth,
  changeRightDivWidth,
} from "../utils/change-width.js";
import { provide } from "vue";

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
      <!-- 左侧宽度可拖拽 -->
      <div
        class="left__dragged-box"
        @mousedown="changeLeftDivWidth($event, 'home-container__left')"
      ></div>
      <!-- 中间主体 -->
      <el-container class="home-container__main">
        <NotePage />
      </el-container>
      <!-- 右侧宽度可拖拽 -->
      <div
        class="right__dragged-box"
        @mousedown="changeRightDivWidth($event, 'home-container__right')"
      ></div>
      <!-- 右侧侧边栏 -->
      <el-aside class="home-container__right" id="home-container__right">
        <!-- 右侧容器 -->
        <el-scrollbar class="right__container">
          <div class="right__top-container">
            <!-- 目录树 -->
              <ContentTree />
          </div>
          <div class="right__bottom-container">
            <!-- 反向链接 -->
            <BackLinks />
          </div>
        </el-scrollbar>
        <!-- 最右侧选项栏 -->
        <RightOptionBar />
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

.header__left-container .menu-header__icon {
  width: 25px;
  height: 25px;
  background-color: var(--color-button-inactive);
}

.header__left-container .menu-header__icon:hover {
  background-color: var(--color-button-active);
}

.header__left-container .menu-header__icon .el-icon {
  font-size: 1.1rem;
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
  padding: 4px 2px;
  justify-content: space-between;
}

.content__button,
.content__number {
  flex-shrink: 0;
  flex-grow: 0;
  color: var(--color-button-text);
  min-width: 20px;
  height: 20px;
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 0 2px;
}

.content__button:hover,
.content__number:hover {
  background-color: var(--color-small-button-hover);
}

.content__number {
  border: 1px solid var(--color-border);
  color: var(--color-button-text-dark);
}

.content__icon {
  flex-shrink: 0;
  flex-grow: 0;
  color: var(--color-button-text);
  min-width: 20px;
  height: 20px;
  user-select: none;
  transition: background 20ms ease-in 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 0 2px;
}

.item__content .el-icon {
  font-size: 0.95rem;
}

.content__left-container {
  display: flex;
  overflow: hidden;
}

.content__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  color: var(--color-button-text);
  user-select: none;
  padding: 0 2px;
  transition: background 20ms ease-in 0s;
  border-radius: 3px;
}

.content__right-container {
  display: flex;
}

/* 右侧边栏 */
.home-container__right {
  display: flex;
  width: 250px;
  min-width: 15%;
}

.right__container {
  flex: 1;
}

.right__dragged-box {
  cursor: col-resize;
  width: 5px;
  border-right: 1px solid var(--color-split-line);
}

.right__dragged-box:hover {
  background-color: var(--color-split-line-hover);
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
