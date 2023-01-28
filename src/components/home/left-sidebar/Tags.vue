<script setup></script>

<template>
  <!-- 标签 -->
  <el-scrollbar>
    <div class="tags">
      <!-- <div class="split-line"></div> -->
      <div class="twilight-menu__header">
        <div class="header__left-container">
          <!-- 标签icon -->
          <div class="content__icon menu-header__icon">
            <el-icon><IEpPriceTag /></el-icon>
          </div>
          <!-- 文件名 -->
          <div class="content__text">标签</div>
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
      <div class="tags__menu twilight-menu__body">
        <!-- 标签 -->
        <div class="menu__item" v-for="i in [1, 2]" :index="i">
          <div class="item__content item--file">
            <div class="content__left-container">
              <!-- 图标 -->
              <div class="content__icon">#</div>
              <!-- 标签名 -->
              <div class="content__text">标签测试 {{ i }}</div>
            </div>
            <div class="content__right-container">
              <!-- 标签总数 -->
              <div class="content__number">
                <el-tooltip effect="dark" content="总数" placement="bottom">
                  555
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></el-scrollbar
  >
</template>

<style lang="css"></style>
