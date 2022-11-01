<script setup>
import TabBar from "../components/notepage/header/TabBar.vue";
import NoteToolBar from "../components/notepage/header/NoteToolBar.vue";
</script>

<template>
  <div class="note-page">
    <!-- 头部 -->
    <el-header class="note-page__header">
      <!-- 选项卡列表 -->
      <TabBar />
      <!-- 分割线 -->
      <span class="split-line"></span>
      <!-- 文件工具栏 -->
      <NoteToolBar />
    </el-header>
    <!-- 主体内容部分 -->
    <el-main class="note-page__main">
      <el-scrollbar> 笔记 </el-scrollbar>
    </el-main>
    <!-- 底部信息栏 -->
    <el-footer class="note-page__footer">
      <!-- 选项卡列表 TODO -->
      <!-- 文件工具栏 -->
      <div class="footer__note-toolbar">
        <div class="note-toolbar__left">
          <!-- 源代码模式 -->
          <div class="left__source-code-button content__button">
            <el-tooltip effect="dark" content="启用源代码模式" placement="top">
              <el-icon><IEpSwitch /></el-icon>
            </el-tooltip>
          </div>
        </div>
        <div class="note-toolbar__right">
          <!-- 选择编码格式 -->
          <div class="right__code-format content__button">
            <el-tooltip effect="dark" content="编码格式" placement="top">
              UTF-8
            </el-tooltip>
          </div>
          <!-- 语言拼写检查 -->
          <div class="right__check-spell content__button">
            <el-tooltip effect="dark" content="拼写检查" placement="top">
              中文
            </el-tooltip>
          </div>
          <!-- 统计数据 -->
          <div class="right__statistic-data content__button">
            <el-tooltip effect="dark" content="字数统计" placement="top">
              <div>1024 词</div>
              <el-icon><IEpDCaret /></el-icon>
            </el-tooltip>
          </div>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<style lang="css">
.note-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 240px;
}

.note-page__header {
  height: 90px;
  padding: 0px;
  user-select: none;
}

.note-page__main {
  flex: 1 1 auto;
  flex-basis: 0;
}

.note-page__footer {
  height: 25px;
  padding: 0px 8px 0px 8px;
  user-select: none;
}

.footer__note-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.footer__note-toolbar .content__button {
  padding: 6px;
  font-size: 0.8rem;
  min-width: 25px;
  height: 25px;
  border-radius: 0;
}

.right__statistic-data {
  display: flex;
}
</style>
