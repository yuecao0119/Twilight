<script setup>
import LeftOptionBar from "../components/home/left-sidebar/LeftOptionBar.vue";
import FileDirectories from "../components/home/left-sidebar/FileDirectories.vue";
import Tags from "../components/home/left-sidebar/Tags.vue";
import changeWidth from "../utils/change-width.js";

const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
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
  z-index: 111;
  background-color: var(--color-aside-bg);
  transition: box-shadow 300ms ease 0s;
  box-shadow: rgb(0 0 0 / 2%) -1px 0px 0px 0px inset;
}

.home-container__left {
  display: flex;
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
</style>
