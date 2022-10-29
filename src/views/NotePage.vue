<script setup></script>

<template>
  <div class="note-page">
    <!-- 头部 -->
    <el-header class="note-page__header">
      <!-- 选项卡列表 TODO -->
      <!-- 文件工具栏 -->
      <div class="header__note-toolbar">
        <div class="note-toolbar__left">
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"
              >homepage</el-breadcrumb-item
            >
            <el-breadcrumb-item
              ><a href="/">promotion management</a></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div class="note-toolbar__right">
          <!-- 收藏按钮 -->
          <div class="right__star-button content__button">
            <el-icon><IEpStar /></el-icon>
          </div>
          <!-- 分享按钮 -->
          <div class="right__share-button content__button">分享</div>
          <!-- 更多操作 -->
          <el-dropdown class="content__button">
            <el-icon><IEpMoreFilled /></el-icon>
            <template #dropdown>
              <el-dropdown-menu> twilight-menu </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
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
          <div class="left__source-code-button content__button">源代码</div>
        </div>
        <div class="note-toolbar__right">
          <!-- 选择编码格式 -->
          <div class="right__code-format content__button">UTF-8</div>
          <!-- 语言拼写检查 -->
          <div class="right__check-spell content__button">中文</div>
          <!-- 统计数据 -->
          <div class="right__statistic-data content__button">
            <div>1024 词</div>
            <el-icon><IEpDCaret /></el-icon>
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
  height: 40px;
  padding: 6px 8px 4px 8px;
}

.header__note-toolbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.note-toolbar__left {
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 设置面包屑 长文本省略号显示 */
.el-breadcrumb {
  display: flex;
}

.el-breadcrumb,
.el-breadcrumb__item,
.el-breadcrumb__inner {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.header__note-toolbar .content__button {
    padding: 3px;
    min-height: 2rem;
    min-width: 2rem;
    font-size: 1rem;
}





.note-toolbar__right {
  display: flex;
}

.note-page__main {
  flex: 1 1 auto;
  flex-basis: 0;
}

.note-page__footer {
  height: 25px;
  padding: 0px 8px 5px 8px;
}

.footer__note-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.footer__note-toolbar .content__button {
    padding: 5px;
    font-size: .8rem;
}

.right__statistic-data {
  display: flex;
}
</style>
