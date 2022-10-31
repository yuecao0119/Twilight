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
            <el-breadcrumb-item :to="{ path: '/' }">
              <div class="menu__item item__content">
                <div class="content__icon">
                  <el-icon><IEpFolder /></el-icon>
                </div>
                <!-- 文件名 -->
                <div class="content__text">文件夹测试</div>
              </div>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">
              <div class="menu__item item__content">
                <div class="content__icon">
                  <el-icon><IEpFolder /></el-icon>
                </div>
                <!-- 文件名 -->
                <div class="content__text">文件夹测试</div>
              </div>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <div class="menu__item item__content">
                <div class="content__icon">
                  <el-icon><IEpDocument /></el-icon>
                </div>
                <!-- 文件名 -->
                <div class="content__text">文件测试</div>
              </div></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div class="note-toolbar__right">
          <!-- 收藏按钮 -->
          <div class="right__star-button content__button">
            <el-tooltip effect="dark" content="收藏" placement="bottom">
              <el-icon><IEpStar /></el-icon>
            </el-tooltip>
          </div>
          <!-- 分享按钮 -->
          <div class="right__share-button content__button">分享</div>
          <!-- 更多操作 -->
          <el-dropdown class="content__button">
            <div>
              <el-tooltip effect="dark" content="更多" placement="bottom">
                <el-icon><IEpMoreFilled /></el-icon>
              </el-tooltip>
            </div>
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
  height: 40px;
  padding: 6px 8px 4px 8px;
  user-select: none;
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

.el-breadcrumb__separator {
  margin: 0;
}

.header__note-toolbar .content__button {
  padding: 3px;
  min-height: 2rem;
  min-width: 2rem;
  font-size: 1rem;
}

.header__note-toolbar .note-toolbar__right .content__button {
  margin-left: 5px;
}

.note-toolbar__right {
  display: flex;
}

.header__note-toolbar .right__share-button {
  font-size: 0.9rem;
  border: 1px solid var(--color-border);
  min-width: 3.4rem;
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
