<!-- 右下角更多操作
     - 反馈 
     - 开发者工具
     - 帮助
-->
<script setup>
// 快捷键drawer
const hotkeysDrawerBl = ref(true);

// 快捷键搜索框
const hotkeysDrawerSearchInputStr = ref("");

// 快捷键内容
const hotkeysDrawerBaseTableData = [
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
];

const hotkeysDrawerEditTableData = [
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
];

const hotkeysDrawerInsertTableData = [
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
];

const hotkeysDrawerTableTableData = [
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
  {
    name: "标题1",
    hotkeys: ["Alt", "Ctrl", "1"],
    markdown: ["#", "Space"],
  },
];
</script>

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
      <div class="content__button" @click="hotkeysDrawerBl = true">
        <el-tooltip effect="dark" content="快捷键" placement="top">
          <el-icon><IEpCompass /></el-icon>
        </el-tooltip>
      </div>

      <!-- 快捷键drawer框 -->
      <div class="hotkeys-drawer">
        <el-drawer
          v-model="hotkeysDrawerBl"
          title="快捷键"
          :modal="false"
          modal-class="hotkeys-drawer__modal"
          size="100%"
        >
          <!-- 搜索框 -->
          <div class="hotkeys-drawer__search-container">
            <el-input
              v-model="hotkeysDrawerSearchInputStr"
              placeholder="输入关键字进行搜索"
              clearable
            >
              <template #prefix>
                <el-icon class="el-input__icon"><IEpSearch /></el-icon>
              </template>
            </el-input>
          </div>
          <el-scrollbar>
            <div class="hotkeys-drawer__body-container">
              <!-- 快捷键表格 - 基础 -->
              <div class="hotkeys-tables__base">
                <div class="table__header">基础</div>
                <el-table :data="hotkeysDrawerBaseTableData">
                  <el-table-column label="格式">
                    <template #default="scope">
                      <!-- 快捷键符号 TODO -->
                      <el-icon><IEpMedal /></el-icon>
                      <!-- 快捷键对应格式名 -->
                      <span>{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="快捷键">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.hotkeys"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column label="Markdown">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.markdown"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <!-- 快捷键表格 - 编辑 -->
              <div class="hotkeys-tables__edit">
                <div class="table__header">基础</div>
                <el-table :data="hotkeysDrawerEditTableData">
                  <el-table-column label="格式">
                    <template #default="scope">
                      <!-- 快捷键符号 TODO -->
                      <el-icon><IEpMedal /></el-icon>
                      <!-- 快捷键对应格式名 -->
                      <span>{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="快捷键">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.hotkeys"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column label="Markdown">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.markdown"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <!-- 快捷键表格 - 插入 -->
              <div class="hotkeys-tables__insert">
                <div class="table__header">基础</div>
                <el-table :data="hotkeysDrawerInsertTableData">
                  <el-table-column label="格式">
                    <template #default="scope">
                      <!-- 快捷键符号 TODO -->
                      <el-icon><IEpMedal /></el-icon>
                      <!-- 快捷键对应格式名 -->
                      <span>{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="快捷键">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.hotkeys"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column label="Markdown">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.markdown"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <!-- 快捷键表格 - 表格 -->
              <div class="hotkeys-tables__table">
                <div class="table__header">基础</div>
                <el-table :data="hotkeysDrawerTableTableData">
                  <el-table-column label="格式">
                    <template #default="scope">
                      <!-- 快捷键符号 TODO -->
                      <el-icon><IEpMedal /></el-icon>
                      <!-- 快捷键对应格式名 -->
                      <span>{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="快捷键">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.hotkeys"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                  <el-table-column label="Markdown">
                    <template #default="scope">
                      <el-tag
                        v-for="(value, index) in scope.row.markdown"
                        :index="index"
                        >{{ value }}</el-tag
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-scrollbar>
        </el-drawer>
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
  margin: 0 5px;
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

/* 快捷键drawer框 */
.hotkeys-drawer .hotkeys-drawer__modal {
  width: 40%;
  height: 100%;
  max-width: 480px;
  inset: 0 0 0 auto !important;
}

.el-drawer__header {
  margin-bottom: 0;
}

.el-drawer__title {
  color: var(--color-text);
  font-weight: 400;
  font-size: 1.2rem;
  padding: 5px 8px;
}

.el-drawer__close-btn {
  padding: 0;
}

button:focus,
button:focus-visible {
  outline: none;
}

.el-drawer__body {
  overflow: hidden;
}

.table__header {
  color: var(--color-text-dark);
  font-weight: bold;
  font-size: 1.3rem;
  padding: 8px;
}

.hotkeys-drawer__search-container {
  display: flex;
  padding: 0 8px 10px 8px;
}

.hotkeys-drawer__search-container .el-input__wrapper {
  border-radius: 5px;
}

.hotkeys-drawer__body-container {
  margin-top: 10px;
}

.hotkeys-drawer__body-container .el-table {
  width: 100%;
}

.hotkeys-drawer__body-container .el-tag {
  margin: 2px 5px 2px 0;
}

.hotkeys-drawer__body-container .el-table .cell {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--color-text-dark);
}

.hotkeys-drawer__body-container .el-table .el-table__cell {
  padding: 7px 0;
}
</style>
