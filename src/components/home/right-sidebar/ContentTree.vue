<script setup></script>

<template>
  <el-scrollbar>
    <!-- 文件目录 -->
    <div class="file-directories__file-content">
      <div class="twilight-menu__header">
        <div class="header__left-container">
          <!-- 根目录图标 -->
          <div class="content__button menu-header__icon">
            <el-icon><IEpGuide /></el-icon>
          </div>
          <div class="content__text">目录树</div>
        </div>
        <div class="header__right-container">
          <!-- 定位打开的目录项 -->
          <div class="content__button">
            <el-tooltip
              effect="dark"
              content="定位当前目录项"
              placement="bottom"
            >
              <el-icon><IEpAim /></el-icon>
            </el-tooltip>
          </div>
          <!-- 折叠按钮（只保留一级目录） -->
          <div class="content__button">
            <el-tooltip effect="dark" content="收缩" placement="bottom">
              <el-icon><IEpArrowUp /></el-icon>
            </el-tooltip>
          </div>
          <!-- 更多按钮 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="更多" placement="bottom">
              <el-icon><IEpMoreFilled /></el-icon>
            </el-tooltip>
          </div>
          <!-- 最小化 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="最小化" placement="bottom">
              <el-icon><IEpMinus /></el-icon>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div class="file-content__menu twilight-menu__body">
        <!-- 目录夹 -->
        <div class="menu__item" v-for="i in [1, 2, 3]" :index="i">
          <div class="item__content item--folder">
            <div class="content__left-container">
              <!-- 目录夹收缩按钮 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="收缩" placement="bottom">
                  <el-icon><IEpArrowRight /></el-icon>
                </el-tooltip>
              </div>
              <!-- 目录图标（几级目录） -->
              <div class="content__button">1</div>
              <!-- 目录名 -->
              <div class="content__text">目录测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 目录子项数 -->
              <div class="content__number">
                <el-tooltip effect="dark" content="子目录数" placement="bottom">
                  1
                </el-tooltip>
              </div>
              <!-- 新建子项 -->
              <div class="content__button">
                <el-tooltip
                  effect="dark"
                  content="新建子目录"
                  placement="bottom"
                >
                  <el-icon><IEpPlus /></el-icon>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <!-- 无子项目录 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content">
            <div class="content__left-container">
              <!-- 无子项目录按钮 -->
              <div class="content__icon">•</div>
              <!-- 目录图标（几级目录） -->
              <div class="content__button">1</div>
              <!-- 文件名 -->
              <div class="content__text">无子项目录测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 新建子项 -->
              <div class="content__button">
                <el-tooltip
                  effect="dark"
                  content="新建子目录"
                  placement="bottom"
                >
                  <el-icon><IEpPlus /></el-icon>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<style lang="css">
/* 文件目录 */
/* 文件夹 */
.item--folder {
  justify-content: space-between;
}

/* 文件 */
.item--file {
  justify-content: space-between;
}
</style>
