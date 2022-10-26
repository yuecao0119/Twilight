<script setup></script>

<template>
  <div class="left-option-bar-container">
    <!-- 上半部分选项 -->
    <el-menu
      default-active="1"
      class="top-options-menu"
      :collapse="true"
    >
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
    <el-menu
      class="bottom-options-menu"
      :collapse="true"
    >
      <el-menu-item index="1">
        <el-icon><IEpStar/></el-icon>
        <template #title>收藏</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpDiscount/></el-icon>
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
    background-color: white;
}
.left-option-bar-container .el-menu--collapse {
    width: 2.2rem;
}
.left-option-bar-container .el-menu-item {
    height: 2.2rem;
}
.left-option-bar-container .el-menu-item .el-menu-tooltip__trigger {
    padding: 0 0.3rem;
}
.left-option-bar-container .el-menu--collapse .el-icon {
    size: 1rem;
    color: black;
}
</style>
