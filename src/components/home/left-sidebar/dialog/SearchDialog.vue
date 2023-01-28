<script setup>
// 搜索弹窗
const searchDialogBl = ref(false);
// 搜索框内容
const searchDialogSearchInputStr = ref("");

// 搜索笔记结果
const searchResultNoteData = [
  {
    file: {
      icon: "ic",
      name: "文件名",
      path: "根目录/文件夹/文件夹",
    },
    result: [
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
    ],
  },
  {
    file: {
      icon: "ic",
      name: "文件名",
      path: "根目录/文件夹/文件夹",
    },
    result: [
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
    ],
  },
  {
    file: {
      icon: "ic",
      name: "文件名",
      path: "根目录/文件夹/文件夹",
    },
    result: [
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
    ],
  },
];

// 搜索文献结果
const searchResultLiteratureData = [
  {
    file: {
      icon: "ic",
      name: "文献名",
      path: "根目录/文件夹/文件夹",
    },
    result: [
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
      {
        icon: "rs",
        name: "父标题名",
        match: "匹配的文本段",
      },
    ],
  },
];
</script>

<template>
  <!-- 全局搜索框  TODO 图标icon：Aa、回车键等-->
  <el-dialog v-model="searchDialogBl" :show-close="false" class="search-dialog">
    <template #header class="search-dialog__header">
      <!-- 搜索框 -->
      <div class="search-dialog__search-input">
        <el-input
          v-model="searchDialogSearchInputStr"
          placeholder="输入关键字进行搜索"
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon"><IEpSearch /></el-icon>
          </template>
        </el-input>
      </div>
      <!-- 搜索限制 -->
      <div class="search-dialog__search-limit">
        <!-- 匹配限制 -->
        <div class="search-limit__match-limit">
          <!-- 区分大小写 -->
          <div class="match-limit__button menu__item item__content">
            <el-tooltip
              effect="dark"
              content="区分大小写 Alt + C"
              placement="bottom"
            >
              Aa
              <!-- <el-icon><IEpArrowDown /></el-icon> -->
            </el-tooltip>
          </div>
          <!-- 全字段匹配 -->
          <div class="match-limit__button menu__item item__content">
            <el-tooltip
              effect="dark"
              content="全字匹配 Alt + W"
              placement="bottom"
            >
              <el-icon><IEpFinished /></el-icon>
            </el-tooltip>
          </div>
        </div>
        <!-- 搜索类型限制 -->
        <div class="menu__item item__content">
          <div class="content__left-container">
            <!-- 图标 -->
            <div class="content__icon">
              <el-icon><IEpSetUp /></el-icon>
            </div>
            <!-- 文件名 -->
            <div class="content__text">类型设置</div>
          </div>
          <div class="content__right-container">
            <div class="content__icon">
              <el-icon><IEpArrowDown /></el-icon>
            </div>
          </div>
        </div>
        <!-- 路径限制 -->
        <div class="menu__item item__content">
          <div class="content__left-container">
            <!-- 图标 -->
            <div class="content__icon">
              <el-icon><IEpShip /></el-icon>
            </div>
            <!-- 文件名 -->
            <div class="content__text">路径设置</div>
          </div>
          <div class="content__right-container">
            <div class="content__icon">
              <el-icon><IEpArrowDown /></el-icon>
            </div>
          </div>
        </div>
        <!-- 创建时间限制 -->
        <div class="menu__item item__content">
          <div class="content__left-container">
            <!-- 图标 -->
            <div class="content__icon">
              <el-icon><IEpClock /></el-icon>
            </div>
            <!-- 文件名 -->
            <div class="content__text">创建时间</div>
          </div>
          <div class="content__right-container">
            <div class="content__icon">
              <el-icon><IEpArrowDown /></el-icon>
            </div>
          </div>
        </div>
        <!-- 编辑时间限制 -->
        <div class="menu__item item__content">
          <div class="content__left-container">
            <!-- 图标 -->
            <div class="content__icon">
              <el-icon><IEpEdit /></el-icon>
            </div>
            <!-- 文件名 -->
            <div class="content__text">编辑时间</div>
          </div>
          <div class="content__right-container">
            <div class="content__icon">
              <el-icon><IEpArrowDown /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </template>
    <el-scrollbar max-height="50vh">
      <div class="search-dialog__body">
        <!-- 搜索结果 -->
        <!-- 如果未输入信息则显示搜索历史，输入了则显示搜索结果(TODO 下面这种方法好，还是写成js函数效率更好) -->
        <!-- 历史信息 -->
        <div v-if="searchDialogSearchInputStr.length == 0">
          <div class="search-dialog__reslut-menu">
            <div class="search-dialog__menu-header item__content">
              <div class="menu-header__title">历史记录</div>
              <div class="content__right-container">
                <!-- 删除所有记录 -->
                <div class="content__button">
                  <el-tooltip
                    effect="dark"
                    content="清空历史记录"
                    placement="bottom"
                    class="menu-header__title"
                  >
                    <el-icon><IEpClose /></el-icon>
                  </el-tooltip>
                </div>
              </div>
            </div>
            <div
              class="search-dialog__menu-item menu__item"
              v-for="i in [1, 2, 3]"
              :index="i"
            >
              <div class="item__content">
                <div class="content__left-container">
                  <div class="search-result-item__icon-container">
                    <!-- 文件图标 -->
                    <div class="content__icon search-result__icon">
                      <el-icon><IEpClock /></el-icon>
                    </div>
                  </div>
                  <div class="search-result-item__text">
                    <!-- 搜索内容 -->
                    <div class="search-text__name">搜索内容</div>
                    <!-- 所属文件夹 / 匹配的文字 -->
                    <div class="search-text__match_text">匹配的文字</div>
                  </div>
                </div>
                <div class="content__right-container">
                  <!-- 收藏记录 TODO 收藏页置顶在历史页面中 -->
                  <div class="content__button">
                    <el-tooltip effect="dark" content="收藏" placement="bottom">
                      <el-icon><IEpStar /></el-icon>
                    </el-tooltip>
                  </div>
                  <!-- 删除记录 -->
                  <div class="content__button">
                    <el-tooltip effect="dark" content="删除" placement="bottom">
                      <el-icon><IEpClose /></el-icon>
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 搜索结果 -->
        <div v-else>
          <div
            class="search-dialog__reslut-menu"
            v-for="i in [1, 2, 3]"
            :index="i"
          >
            <div class="search-dialog__menu-header item__content">
              <div class="content__left-container">
                <div class="menu-header__title">笔记</div>
              </div>
              <div class="content__right-container">
                <!-- 收缩 -->
                <div class="content__button">
                  <el-tooltip effect="dark" content="收缩" placement="bottom">
                    <el-icon><IEpMinus /></el-icon>
                  </el-tooltip>
                </div>
              </div>
            </div>
            <!-- 文件 -->
            <div class="search-dialog__menu-item menu__item">
              <div class="item__content">
                <div class="content__left-container">
                  <div class="search-result-item__icon-container">
                    <!-- 文件图标 -->
                    <div class="content__icon search-result__icon">
                      <el-icon><IEpDocument /></el-icon>
                    </div>
                  </div>
                  <div class="search-result-item__text">
                    <!-- 文件名 -->
                    <div class="search-text__name">搜索内容</div>
                    <!-- 所属文件夹 / 匹配的文字 -->
                    <div class="search-text__match_text">所属文件夹</div>
                  </div>
                </div>
                <div class="content__right-container">
                  <!-- 打开 -->
                  <div class="content__icon">
                    <!-- <el-icon><IEpClose /></el-icon> -->
                    ↵
                  </div>
                </div>
              </div>
            </div>
            <!-- 文件下搜索到的结果 -->
            <div class="search-dialog__menu-item menu__item">
              <div class="item__content">
                <div class="content__left-container">
                  <div class="search-result-item__icon-container">
                    <!-- 文件图标 -->
                    <div class="content__icon search-result__icon">#</div>
                    <div class="content__icon search-result__icon">#</div>
                  </div>
                  <div class="search-result-item__text">
                    <!-- 搜索内容 -->
                    <div class="search-text__name">搜索内容</div>
                    <!-- 所属文件夹 / 匹配的文字 -->
                    <div class="search-text__match_text">匹配的文字</div>
                  </div>
                </div>
                <div class="content__right-container">
                  <!-- 打开 -->
                  <div class="content__icon">
                    <!-- <el-icon><IEpClose /></el-icon> -->
                    ↵
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>

    <!-- 快捷键提示 -->
    <template #footer>
      <div class="search-dialog__footer">
        <div class="search-dialog__footer-left-container">
          <!-- 上下移动 -->
          <div class="menu__item item__content">
            <!-- 图标 -->
            <div class="content__icon">
              <el-icon><IEpTop /></el-icon>
            </div>
            <div class="content__icon">
              <el-icon><IEpBottom /></el-icon>
            </div>
            <!-- 操作名 -->
            <div class="content__text">上下移动</div>
          </div>
          <!-- 选择 -->
          <div class="menu__item item__content">
            <!-- 图标 -->
            <div class="content__icon">↵</div>
            <!-- 操作名 -->
            <div class="content__text">选择</div>
          </div>
          <!-- 关闭搜索框 -->
          <div class="menu__item item__content">
            <!-- 图标 -->
            <div class="content__icon">esc</div>
            <!-- 操作名 -->
            <div class="content__text">关闭搜索框</div>
          </div>
        </div>
        <!-- 搜索引擎支持  或者  Twilight的LOGO -->
        <div class="search-dialog__footer-right-container"></div>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="css">
/* 搜索框 */
.search-dialog {
  border-radius: 8px;
  max-width: 600px;
  max-height: 80%;
}

.search-dialog .el-dialog__header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
}

.search-dialog__search-input {
  border-bottom: 1px solid var(--color-border);
}

.search-dialog__search-input .el-input__wrapper {
  height: 48px;
  border-radius: 8px;
  background-color: transparent;
  box-shadow: none;
  font-size: 1.1rem;
}

.search-dialog__search-limit {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}

.search-dialog__search-limit .search-limit__match-limit {
  display: flex;
}

.search-limit__match-limit .match-limit__button {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
}

.search-dialog__search-limit .item__content {
  margin: 5px 2px;
  max-width: 140px;
}

.search-dialog .el-dialog__body {
  padding: 0;
  margin: 0 5px;
}

.search-dialog__body {
    overflow: auto;
}

.search-dialog__menu-header {
  display: flex;
  justify-content: space-between;
}

.menu-header__title {
  font-size: 0.9rem;
  color: var(--color-text-title);
  font-weight: bold;
}

.search-dialog__reslut-menu .search-dialog__menu-item {
  margin: 0 5px 5px 5px;
  height: 55px;
  box-shadow: var(--box-shadow-menu-item);
}

.search-dialog__menu-item .item__content {
  height: 50px;
}

.search-dialog__menu-item .content__left-container {
  justify-content: center;
}

.search-text__name {
  font-size: 0.9rem;
  line-height: 20px;
  line-height: normal;
}

.search-text__match_text {
  font-size: 0.75rem;
  line-height: 20px;
  line-height: normal;
}

.search-result-item__icon-container {
  display: flex;
  height: 50px;
  align-items: center;
  /* margin-left: 5px; */
  margin-right: 5px;
}

.search-result__icon {
  width: 25px;
  font-size: 1.1rem; /* TODO 找好每个段落的符号后替换掉#号 */
}

.search-result-item__icon-container .search-result__icon .el-icon {
  font-size: 1.3rem;
  width: 50px;
}

.search-dialog__menu-item .content__button {
  width: 25px;
  height: 25px;
}

.search-dialog__menu-item .content__button .el-icon {
  font-size: 1.1rem;
}

.search-dialog .el-dialog__footer {
  padding: 0;
}

.search-dialog__footer {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 3px 5px;
  box-shadow: var(--box-shadow-dialog-footer);
  margin-top: 15px;
}

.search-dialog__footer .content__text,
.search-dialog__footer .content__icon .el-icon {
  font-size: 0.75rem;
}

.search-dialog__footer-left-container {
  display: flex;
}
</style>
