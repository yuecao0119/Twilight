<script setup></script>

<template>
  <el-scrollbar>
    <!-- 文件目录 -->
    <div class="file-directories__file-content">
      <span class="split-line"></span>
      <div class="twilight-menu__header">
        <div class="header__left-container">
          <!-- 根目录图标 -->
          <div class="content__button root-folder-icon">
            <el-icon><IEpFolder /></el-icon>
          </div>
          <!-- 文件名 -->
          <div class="content__text">根目录</div>
        </div>
        <div class="header__right-container">
          <!-- 定位打开的文件 -->
          <div class="content__button">
            <el-icon><IEpAim /></el-icon>
          </div>
          <!-- 折叠按钮（只保留一级文件） -->
          <div class="content__button">
            <el-icon><IEpArrowUp /></el-icon>
          </div>
          <!-- 更多按钮 -->
          <div class="content__button">
            <el-icon><IEpMoreFilled /></el-icon>
          </div>
          <!-- 最小化 -->
          <div class="content__button">
            <el-icon><IEpMinus /></el-icon>
          </div>
        </div>
      </div>
      <div class="file-content__menu twilight-menu__body">
        <!-- 文件夹 -->
        <div class="menu__item" v-for="i in [1, 2, 3]" :index="i">
          <div class="item__content item--folder">
            <div class="content__left-container">
              <!-- 文件夹收缩按钮 -->
              <div class="content__button">
                <el-icon><IEpArrowRight /></el-icon>
              </div>
              <!-- 文件图标 -->
              <div class="content__button">
                <el-icon><IEpFolder /></el-icon>
              </div>
              <!-- 文件名 -->
              <div class="content__text">文件夹测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 文件操作 -->
              <div class="content__button">
                <el-icon><IEpMoreFilled /></el-icon>
              </div>
              <!-- 新建文件 -->
              <div class="content__button">
                <el-icon><IEpPlus /></el-icon>
              </div>
            </div>
          </div>
        </div>
        <!-- 文件 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content item--file">
            <div class="content__left-container">
              <!-- 文件按钮 -->
              <div class="content__icon">·</div>
              <!-- 文件图标 -->
              <div class="content__button">
                <el-icon><IEpDocument /></el-icon>
              </div>
              <!-- 文件名 -->
              <div class="content__text">文件测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 文件操作 -->
              <div class="content__button">
                <el-icon><IEpMoreFilled /></el-icon>
              </div>
              <!-- 收藏文件 -->
              <div class="content__button">
                <el-icon><IEpStar /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 已打开文件 -->
    <div class="file-directories__opened-file">
      <div class="twilight-menu__header">
        <div class="header__left-container">
          <!-- 收缩按钮 -->
          <div class="content__button">
            <el-icon><IEpArrowRight /></el-icon>
          </div>
          <!-- 文件名 -->
          <div class="content__text">已打开的文件</div>
        </div>
        <div class="header__right-container">
          <!-- 保存所有文件 -->
          <div class="content__button">
            <el-icon><IEpMessageBox /></el-icon>
          </div>
          <!-- 关闭所有文件 -->
          <div class="content__button">
            <el-icon><IEpCircleClose /></el-icon>
          </div>
        </div>
      </div>
      <div class="open-file__menu twilight-menu__body">
        <!-- 文件 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content item--file">
            <div class="content__left-container">
              <!-- 关闭文件 -->
              <div class="content__button">
                <el-icon><IEpClose /></el-icon>
              </div>
              <!-- 文件图标 -->
              <div class="content__button">
                <el-icon><IEpDocument /></el-icon>
              </div>
              <!-- 文件名 -->
              <div class="content__text">文件测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 文件状态 -->
              <div class="content__button">
                M
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
.header__left-container .root-folder-icon {
  width: 25px;
  height: 25px;
}

.header__left-container .root-folder-icon .el-icon {
  font-size: 1rem;
}

/* 文件夹 */
.item--folder {
  justify-content: space-between;
}

/* 文件 */
.item--file {
  justify-content: space-between;
}

.file-content__menu .content__icon {
  font-weight: 800;
}
</style>
