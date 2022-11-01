<script setup>
const tabBarData = [
  {
    icon: "标题1",
    name: "文件1",
    status: " • 未保存",
  },
  {
    icon: "标题1",
    name: "文件11",
    status: " • 未上传",
  },
  {
    icon: "标题1",
    name: "文件111",
    status: " • 未保存",
  },
  {
    icon: "标题1",
    name: "文件1111",
    status: " • 未保存",
  },
  {
    icon: "标题1",
    name: "文件11111",
    status: "",
  },
  {
    icon: "标题1",
    name: "文件111111",
    status: "",
  },
  {
    icon: "标题1",
    name: "文件111111",
    status: " • 未保存",
  },
];
</script>

<template>
  <div class="tab-bar">
    <el-scrollbar>
      <div class="tab-bar__left-container">
        <div
          v-for="(item, index) in tabBarData"
          :key="index"
          class="tab-bar__item"
        >
          <el-tooltip
            effect="dark"
            :content="item.name + item.status"
            placement="bottom"
          >
            <div class="item__content">
              <div class="content__left-container">
                <!-- 文件图标 -->
                <div class="content__icon">
                  <el-icon><IEpDocument /></el-icon>
                </div>
                <!-- 文件名 -->
                <div class="content__text">{{ item.name }}</div>
              </div>
              <div class="content__right-container">
                <!-- 文件状态 -->
                <div class="content__button">
                  <!-- 文件状态 • 未保存 TODO:点击保存 -->
                  M
                </div>
                <!-- 关闭文件 -->
                <div class="content__button">
                  <el-icon><IEpClose /></el-icon>
                </div>
              </div>
            </div>
          </el-tooltip>
        </div>
        <!-- 在当前文件夹新建文件 -->
        <div class="tab-bar__tool-button content__button">
          <el-icon><IEpPlus /></el-icon>
        </div>
      </div>
    </el-scrollbar>
    <div class="tab-bar__right-container">
      <div class="tab-bar__tool-bar">
        <!-- 竖向显示所有tabs -->
        <div class="tab-bar__tool-button content__button">
          <el-tooltip effect="dark" content="显示所有标签页" placement="bottom">
            <el-icon><IEpArrowDown /></el-icon>
          </el-tooltip>
        </div>
        <!-- 更多操作 全部关闭、关闭已保存 -->
        <div class="tab-bar__tool-button content__button">
          <el-tooltip effect="dark" content="更多" placement="bottom">
            <el-icon><IEpMoreFilled /></el-icon>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.tab-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
}

.tab-bar .el-scrollbar__view {
  display: flex;
  justify-content: space-between;
}

.tab-bar__left-container {
  display: flex;
  align-items: center;
}

.tab-bar__item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 140px;
  min-width: 20px;
  height: 35px;
  margin: 5px 0;
  padding: 1px 1px;
  text-align: center;
  border-radius: 4px;
  color: var(--color-button-text);
}

.tab-bar__item:hover {
  background-color: var(--color-button-hover);
}

.tab-bar__item:active {
  box-shadow: 0 0 2px 1px rgb(29 17 51 / 4%), 0 0 4px 2px rgb(9 32 77 / 12%),
    0 0 5px -3px rgb(29 17 51 / 12%);
}

.tab-bar__item .item__content {
  margin: 0 1px;
  justify-content: left;
}

.tab-bar .tab-bar__tool-button {
  font-size: 1rem;
  padding: 4px;
  height: 25px;
  margin: 0 3px;
}

.tab-bar__right-container {
  display: flex;
}

.tab-bar__tool-bar {
  display: flex;
  align-items: center;

  height: 35px;
  margin: 5px 0px 5px 5px;
  padding: 1px 1px;
  border-radius: 4px;
}

.tab-bar__tool-bar:hover {
  background-color: var(--color-button-hover);
}
</style>
