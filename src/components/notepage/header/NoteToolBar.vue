<script setup></script>

<template>
  <div class="note-toolbar">
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
</template>

<style lang="css">
.note-toolbar {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 0 8px;
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

.note-toolbar .content__button {
  padding: 3px;
  min-height: 2rem;
  min-width: 2rem;
  font-size: 1rem;
}

.note-toolbar .note-toolbar__right .content__button {
  margin-left: 5px;
}

.note-toolbar__right {
  display: flex;
}

.note-toolbar .right__share-button {
  font-size: 0.9rem;
  border: 1px solid var(--color-border);
  min-width: 3.4rem;
}
</style>
