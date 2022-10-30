<!-- 右下角更多操作
     - 反馈 
     - 开发者工具
     - 帮助
-->
<script setup></script>

<template>
  <div class="right-more-options-bar">
    <div class="right-more-options-bar__body">
      <!-- 反馈按钮 -->
      <div class="content__button hidden">
        <el-tooltip effect="dark" content="反馈" placement="top">
          <el-icon><IEpPromotion /></el-icon>
        </el-tooltip>
      </div>
      <!-- 开发者工具按钮 -->
      <div class="content__button hidden">
        <el-tooltip effect="dark" content="开发者工具" placement="top">
          <el-icon><IEpCpu /></el-icon>
        </el-tooltip>
      </div>
      <!-- 帮助文档 -->
      <div class="content__button hidden">
        <el-tooltip effect="dark" content="帮助文档" placement="top">
          <el-icon><IEpMagicStick /></el-icon>
        </el-tooltip>
      </div>
      <!-- 快捷键 -->
      <div class="content__button">
        <el-tooltip effect="dark" content="快捷键" placement="top">
          <el-icon><IEpCompass /></el-icon>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.right-more-options-bar {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.right-more-options-bar__body {
  display: flex;
  justify-content: right;
  padding: 5px;
}

.right-more-options-bar__body .content__button {
  height: 26px;
  width: 26px;
  margin-left: 10px;
  background-color: var(--color-button-inactive);
  border-radius: 5px;
}

.right-more-options-bar__body .content__button:hover {
  background-color: var(--color-button-active);
  color: var(--color-button-icon-hover);
}

.right-more-options-bar__body .el-icon {
  font-size: 18px;
}

/* 鼠标划入该组件，使其他按钮可见 */
.right-more-options-bar:hover .right-more-options-bar__body .hidden {
  display: flex;
}
</style>
