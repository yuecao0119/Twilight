<script setup></script>
<!-- TODO 鼠标放到某个文件上，tooltip（白底、样式简化一下） 显示文件名 子文件数 创建时间
show-after延迟出现 -->
<template>
  <el-scrollbar>
    <!-- 文件目录 -->
    <div class="file-directories__file-content">
      <span class="split-line"></span>
      <div class="twilight-menu__header">
        <div class="header__left-container">
          <!-- 根目录图标 -->
          <div class="content__button menu-header__icon">
            <el-icon><IEpNotebook /></el-icon>
          </div>
          <!-- 文件名 -->
          <div class="content__text">根目录</div>
        </div>
        <div class="header__right-container">
          <!-- 定位打开的文件 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="定位当前文件" placement="bottom">
              <el-icon><IEpAim /></el-icon>
            </el-tooltip>
          </div>
          <!-- 折叠按钮（只保留一级文件） -->
          <div class="content__button">
            <el-tooltip effect="dark" content="折叠" placement="bottom">
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
        <!-- 文件夹 -->
        <div class="menu__item" v-for="i in [1, 2, 3]" :index="i">
          <div class="item__content item--folder">
            <div class="content__left-container">
              <!-- 文件夹收缩按钮 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="折叠" placement="bottom">
                  <el-icon><IEpArrowRight /></el-icon>
                </el-tooltip>
              </div>
              <!-- 文件图标 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="修改图标" placement="bottom">
                  <el-icon><IEpFolder /></el-icon>
                </el-tooltip>
              </div>
              <!-- 文件名 -->
              <div class="content__text">文件夹测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 文件操作 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="更多" placement="bottom">
                  <el-icon><IEpMoreFilled /></el-icon>
                </el-tooltip>
              </div>
              <!-- 新建文件 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="新建文件" placement="bottom">
                  <el-icon><IEpPlus /></el-icon>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <!-- 文件 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content item--file">
            <div class="content__left-container">
              <!-- 文件按钮 -->
              <div class="content__icon">•</div>
              <!-- 文件图标 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="修改图标" placement="bottom">
                  <el-icon><IEpDocument /></el-icon>
                </el-tooltip>
              </div>
              <!-- 文件名 -->
              <div class="content__text">文件测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 文件操作 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="更多" placement="bottom">
                  <el-icon><IEpMoreFilled /></el-icon>
                </el-tooltip>
              </div>
              <!-- 收藏文件 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="收藏" placement="bottom">
                  <el-icon><IEpStar /></el-icon>
                </el-tooltip>
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
            <el-tooltip effect="dark" content="收缩" placement="bottom">
              <el-icon><IEpArrowRight /></el-icon>
            </el-tooltip>
          </div>
          <!-- 文件名 -->
          <div class="content__text">已打开的文件</div>
        </div>
        <div class="header__right-container">
          <!-- 保存所有文件 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="保存所有文件" placement="bottom">
              <el-icon><IEpMessageBox /></el-icon>
            </el-tooltip>
          </div>
          <!-- 关闭所有文件 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="关闭所有文件" placement="bottom">
              <el-icon><IEpCircleClose /></el-icon>
            </el-tooltip>
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
                <el-tooltip
                  effect="dark"
                  content="关闭当前文件"
                  placement="bottom"
                >
                  <el-icon><IEpClose /></el-icon>
                </el-tooltip>
              </div>
              <!-- 文件图标 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="修改图标" placement="bottom">
                  <el-icon><IEpDocument /></el-icon>
                </el-tooltip>
              </div>
              <!-- 文件名 -->
              <div class="content__text">文件测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 文件状态 -->
              <div class="content__button">
                <el-tooltip
                  effect="dark"
                  content="文件状态 • 未保存 TODO:点击保存"
                  placement="bottom"
                >
                  M
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
