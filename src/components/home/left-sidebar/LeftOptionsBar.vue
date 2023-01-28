<script setup></script>

<template>
  <div class="options-bar">
    <!-- 上半部分选项 -->
    <el-menu
      default-active="1"
      class="options-bar__top-menu"
      :collapse="true"
    >
      <el-menu-item index="1">
        <el-icon><IEpHouse /></el-icon>
        <template #title
          >笔记 Alt + 1<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpCoffeeCup /></el-icon>
        <template #title
          >广场 Alt + 2<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><IEpRefrigerator /></el-icon>
        <template #title
          >私密文件 Alt + 0<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
    </el-menu>
    <!-- 下半部分选项 -->
    <el-menu class="options-bar__bottom-menu" :collapse="true">
      <el-menu-item index="1">
        <el-icon><IEpMostlyCloudy /></el-icon>
        <template #title
          >分享 Alt + 3<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpStar /></el-icon>
        <template #title
          >收藏 Alt + 4<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><IEpPriceTag /></el-icon>
        <template #title
          >标签 Alt + 5<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="css">
.options-bar {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-option-bar-bg);
}

.options-bar .el-menu {
  border-right: none;
  background-color: var(--color-option-bg);
}

.options-bar .el-menu--collapse {
  /* 菜单栏宽度 */
  width: 2.4rem;
}

.options-bar .el-menu-item {
  height: 1.8rem;
  width: 1.8rem;
  padding: 0;
  margin: 0.3rem;
  border-radius: 3px;
  background-color: var(--color-icon-bg-option-bar);
}

.options-bar .el-menu-item {
  /* 默认图标颜色 */
  color: var(--color-option-bar-icon);
}

.options-bar .el-menu-item:hover {
  background-color: var(--color-icon-bg-option-bar-hover);
}

.options-bar .el-menu-item.is-active {
  background-color: var(--color-icon-bg-option-bar-active);
  color: var(--color-option-bar-icon-active);
}

.options-bar .el-menu-item .el-menu-tooltip__trigger {
  /* 每个item间距 */
  padding: 0;
  /* icon左右间距 */
  justify-content: space-around;
}
</style>
