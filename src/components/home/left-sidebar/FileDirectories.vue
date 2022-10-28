<script setup></script>

<template>
  <el-scrollbar>
    <!-- 文件目录 -->
    
    <!-- 已打开文件 -->
    <el-collapse>
      <el-collapse-item title="打开的文件" name="1">
        <el-menu>
          <!-- TODO 已打开文件 仿照VSCode-->
          <el-menu-item index="1">Option 1</el-menu-item>
          <el-menu-item index="2">Option 2</el-menu-item>
          <el-menu-item index="3">Option 3</el-menu-item>
        </el-menu>
      </el-collapse-item>
    </el-collapse>
  </el-scrollbar>
</template>

<style lang="css">

/* 已打开文件 图标和文字左右互换 */
.el-collapse-item__header {
  flex-direction: row-reverse
}
</style>
