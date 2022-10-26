<script setup></script>

<template>
  <el-scrollbar>
    <!-- 文件目录 -->
    <el-menu :default-openeds="['1', '2']">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><IEpMessage /></el-icon>Navigator One
        </template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IEpMenu /></el-icon>Navigator Two
        </template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="2-4">
          <template #title>Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><IEpSetting /></el-icon>Navigator Three
        </template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="3-4">
          <template #title>Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
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

<style lang="css"></style>
