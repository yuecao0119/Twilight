<script setup></script>

<template>
  <div class="left-option-bar">
    <!-- 上半部分选项 -->
    <el-menu default-active="1" class="left-option-bar__top-menu" :collapse="true">
      <el-menu-item index="1">
        <el-icon><IEpGuide /></el-icon>
        <template #title>目录 Alt + 6<br/> 单击 展开/收缩</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpAlarmClock /></el-icon>
        <template #title>待办 Alt + 7<br/> 单击 展开/收缩</template>
      </el-menu-item>
    </el-menu>
    <!-- 下半部分选项 -->
    <el-menu class="left-option-bar__bottom-menu" :collapse="true">
      <el-menu-item index="1">
        <el-icon><IEpConnection /></el-icon>
        <template #title>反向链接 Alt + 8<br/> 单击 展开/收缩</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpLock /></el-icon>
        <template #title>锁屏 Alt + 7<br/> 单击 展开/收缩</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><IEpFullScreen /></el-icon>
        <template #title>全屏 Alt + 8<br/> 单击 展开/收缩</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="css">
.left-option-bar {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-option-bar-bg);
}

.left-option-bar .el-menu {
  border-right: none;
  background-color: var(--color-option-bg);
}

.left-option-bar .el-menu--collapse {
  /* 菜单栏宽度 */
  width: 2.2rem;
}

.left-option-bar .el-menu-item {
  height: 1.6rem;
  padding: 0;
  margin: 0.3rem;
  border-radius: 5px;
  background-color: var(--color-icon-bg-option-bar);
}

.left-option-bar .el-menu-item {
  /* 默认图标颜色 */
  color: var(--color-option-bar-icon);
}

.left-option-bar .el-menu-item:hover {
  background-color: var(--color-icon-bg-option-bar-hover);
}

.left-option-bar .el-menu-item.is-active {
  background-color: var(--color-icon-bg-option-bar-active);
  color: var(--color-option-bar-icon-active);

}

.left-option-bar .el-menu-item .el-menu-tooltip__trigger {
  /* 每个item间距 */
  padding: 0;
  /* icon左右间距 */
  justify-content: space-around;
}
</style>
