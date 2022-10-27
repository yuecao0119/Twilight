<script setup></script>

<template>
  <div class="left-option-bar-container">
    <!-- 上半部分选项 -->
    <el-menu default-active="1" class="top-option-menu" :collapse="true">
      <el-menu-item index="1">
        <el-icon><IEpHouse /></el-icon>
        <template #title>笔记</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpEditPen /></el-icon>
        <template #title>文献</template>
      </el-menu-item>
    </el-menu>
    <!-- 下半部分选项 -->
    <el-menu class="bottom-option-menu" :collapse="true">
      <el-menu-item index="1">
        <el-icon><IEpStar /></el-icon>
        <template #title>收藏</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpDiscount /></el-icon>
        <template #title>标签</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="css">
.left-option-bar-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-option-bar-bg);
}

.left-option-bar-container .el-menu {
  border-right: none;
  background-color: var(--color-option-bg);
}

.left-option-bar-container .el-menu--collapse {
  /* 菜单栏宽度 */
  width: 2.2rem;
}

.left-option-bar-container .el-menu-item {
  height: 1.6rem;
  padding: 0;
  margin: 0.3rem;
  border-radius: 5px;
  background-color: var(--color-icon-bg-option-bar);
}

.left-option-bar-container .el-menu-item {
  /* 默认图标颜色 */
  color: var(--color-icon-option-bar);
}

.left-option-bar-container .el-menu-item:hover {
  background-color: var(--color-icon-bg-option-bar-hover);
}

.left-option-bar-container .el-menu-item.is-active {
  background-color: var(--color-icon-bg-option-bar-active);
  color: var(--color-icon-option-bar-active);

}

.left-option-bar-container .el-menu-item .el-menu-tooltip__trigger {
  /* 每个item间距 */
  padding: 0;
  /* icon左右间距 */
  justify-content: space-around;
}
</style>
