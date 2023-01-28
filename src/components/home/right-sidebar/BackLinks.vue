<script setup></script>

<template>
  <!-- 反向链接 -->
  <el-scrollbar>
    <div class="back-links">
      <!-- <div class="split-line"></div> -->
      <div class="twilight-menu__header">
        <div class="header__left-container">
          <!-- 反向链接icon -->
          <div class="content__icon menu-header__icon">
            <el-icon><IEpConnection /></el-icon>
          </div>
          <!-- 反向链接名 -->
          <div class="content__text">反向链接</div>
        </div>
        <div class="header__right-container">
          <!-- 刷新 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="刷新" placement="bottom">
              <el-icon><IEpRefresh /></el-icon>
            </el-tooltip>
          </div>
          <!-- 排序 -->
          <div class="content__button">
            <el-tooltip effect="dark" content="排序" placement="bottom">
              <el-icon><IEpSort /></el-icon>
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
      <div class="back-links__menu twilight-menu__body">
        <!-- 反向链接 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content">
            <div class="content__left-container">
              <!-- 文件收缩按钮 -->
              <div class="content__button">
                <el-tooltip effect="dark" content="折叠" placement="bottom">
                  <el-icon><IEpArrowRight /></el-icon>
                </el-tooltip>
              </div>
              <!-- 文件图标 -->
              <div class="content__icon">
                <el-icon><IEpDocument /></el-icon>
              </div>
              <!-- 文件名 -->
              <div class="content__text">反向文件 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 当前文档该反链数 -->
              <div class="content__number">
                <el-tooltip effect="dark" content="引用次数" placement="bottom">
                  555
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
        <!-- 反向链接内容项 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content">
            <div class="content__left-container">
              <div class="content__icon">•</div>
              <!-- 图标（几级目录或段落） -->
              <div class="content__button">1</div>
              <!-- 内容 -->
              <div class="content__text">无子项目录测试 {{ i }}</div>
            </div>
            <div class="content__right-container"></div>
          </div>
        </div>
      </div></div
  ></el-scrollbar>
</template>

<style lang="css"></style>
