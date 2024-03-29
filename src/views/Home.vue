<script setup>
import LeftOptionsBar from "../components/home/left-sidebar/LeftOptionsBar.vue";
import BasicOperations from "../components/home/left-sidebar/BasicOperations.vue";
import FileDirectories from "../components/home/left-sidebar/FileDirectories.vue";
import Tags from "../components/home/left-sidebar/Tags.vue";
import NotePage from "./NotePage.vue";
import ContentTree from "../components/home/right-sidebar/ContentTree.vue";
import BackLinks from "../components/home/right-sidebar/Backlinks.vue";
import RightOptionsBar from "../components/home/right-sidebar/RightOptionsBar.vue";
import RightMoreOptionsBar from "../components/home/right-sidebar/RightMoreOptionsBar.vue";

import PersonOperationsDialog from "../components/home/left-sidebar/dialog/PersonOperationsDialog.vue";

import {
  changeLeftDivWidth,
  changeRightDivWidth,
} from "../utils/change-width.js";
import { provide } from "vue";

// dialog显示管理
const personOperationsBl = ref(false); // 是否显示用户操作框
const setpersonOperationsBl = (value) => {
  personOperationsBl.value = value;
};

provide("person-operations-visible", {
  personOperationsBl,
  setpersonOperationsBl,
});
</script>

<template>
  <div class="home">
    <!-- 页面 -->
    <el-container class="home-container">
      <!-- 左侧侧边栏 -->
      <el-aside class="home-container__left" id="home-container__left">
        <!-- 最左侧选项栏 -->
        <LeftOptionsBar />
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
        class="dragged-box"
        @mousedown="changeLeftDivWidth($event, 'home-container__left')"
      ></div>
      <!-- 中间主体 -->
      <el-container class="home-container__main">
        <NotePage />
      </el-container>
      <!-- 右侧宽度可拖拽 -->
      <div
        class="dragged-box"
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

          <!-- 更多工具 -->
          <RightMoreOptionsBar />
        </el-scrollbar>
        <!-- 最右侧选项栏 -->
        <RightOptionsBar />
      </el-aside>
    </el-container>

    <!-- 小窗口 -->
    <!-- 个人操作弹窗 -->
    <PersonOperationsDialog
      v-if="personOperationsBl"
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
  background-color: var(--color-aside-bg);
}

.home-container__left {
  display: flex;
  width: 250px;
  min-width: 160px;
  max-width: 480px;
}

.left__container {
  flex: 1;
}

.dragged-box {
  cursor: col-resize;
  width: 5px;
  /*  */
}

.dragged-box:hover {
  background-color: var(--color-split-line-hover);
}

/* .left__dragged-box {
  border-left: 1px solid var(--color-split-line);
}

.right__dragged-box {
  border-right: 1px solid var(--color-split-line);
} */

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
  background-color: var(--color-big-button);
}

.header__left-container .menu-header__icon:hover {
  background-color: var(--color-big-button-hover);
  color: var(--color-big-button-icon-hover);
}

.header__left-container .menu-header__icon:active {
  background-color: var(--color-big-button-active);
  color: var(--color-big-button-icon-active);
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
  height: 32px;
  color: var(--color-button-text);
}

.menu__item:hover {
  background-color: var(--color-button-hover);
}

.menu__item:active {
  background-color: var(--color-button-active);
  color: var(--color-button-text-active);
}

.item__content {
  margin: 0 5px;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  white-space: nowrap;
  align-items: center;
  padding: 4px 2px;
  justify-content: space-between;
}

.content__button,
.content__number {
  flex-shrink: 0;
  flex-grow: 0;
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

.menu__item:active .content__button:hover,
.menu__item:active .content__number:hover {
  background-color: var(--color-small-button-active);
}

.content__number {
  border: 1px solid var(--color-border);
  color: var(--color-button-text-dark);
}

.content__icon {
  flex-shrink: 0;
  flex-grow: 0;
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
  align-items: center;
}

.content__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  user-select: none;
  padding: 0 2px;
  transition: background 20ms ease-in 0s;
  border-radius: 3px;
}

.content__right-container {
  display: flex;
  align-items: center;
}

/* 主体部分 */
.home-container__main {
  padding: 0;
  margin: 0;
}

/* 右侧边栏 */
.home-container__right {
  display: flex;
  width: 250px;
  min-width: 160px;
  max-width: 480px;
}

.right__container {
  flex: 1;
}

/* 弹窗 */
/* 个人操作弹窗 */
.person-operations-dialog {
  position: absolute;
  top: 40px;
  left: 50px;
  z-index: 111;
}

/* 盒子状态 */
.hidden {
  display: none;
}
</style>
