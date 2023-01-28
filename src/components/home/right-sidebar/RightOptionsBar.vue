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
        <el-icon><IEpGuide /></el-icon>
        <template #title
          >目录 Alt + 6<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpAlarmClock /></el-icon>
        <template #title
          >待办 Alt + 7<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
    </el-menu>
    <!-- 下半部分选项 -->
    <el-menu class="options-bar__bottom-menu" :collapse="true">
      <el-menu-item index="1">
        <el-icon><IEpConnection /></el-icon>
        <template #title
          >反向链接 Alt + 8<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><IEpLock /></el-icon>
        <template #title
          >锁屏 Alt + 7<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><IEpFullScreen /></el-icon>
        <template #title
          >全屏 Alt + 8<br />
          单击 展开/收缩</template
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="css">

</style>
