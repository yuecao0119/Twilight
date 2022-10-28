<script setup>
const person = {
  name: "Virtual Moon",
  img: "/src/assets/img/person-img.jpg",
  email: "crescent2020@163.com",
  motto: "枕上诗书闲处好，门前风景雨来佳。",
};

// 点击头像获取用户操作
const getPersonOperations = () => {
  console.log("Get person operations.");
  
};

// 收缩左侧侧边栏
const collapseLeftSidebar = () => {
  console.log("Collapse the left sidebar.");
};
</script>

<template>
  <div class="basic-operations">
    <!-- 个人信息 -->
    <div class="basic-operations__person">
      <el-button text class="person__button" @click="getPersonOperations">
        <div class="person__button-body">
          <!-- 个人图片 -->
          <img
            :src="person.img"
            referrerpolicy="same-origin"
            class="button__img"
          />
          <!-- 个人用户名 -->
          <div class="button__name">{{ person.name }}</div>
        </div>
      </el-button>
      <!-- 个人操作弹窗 -->
      <el-card class="basic-operations__person-card">
        <div class="person-card__header">
          <!-- 个人邮箱 -->
          <div class="header__email">
            {{ person.email }}
          </div>

          <div class="header__person-info">
            <!-- 个人头像 -->
            <div class="person-info__img">
              <img :src="person.img" referrerpolicy="same-origin" />
            </div>

            <div class="person-info__text">
              <!-- 用户名 -->
              <div class="text__name">
                {{ person.name }}
              </div>
              <!-- 个性签名 -->
              <div class="text__motto">
                {{ person.motto }}
              </div>
            </div>
          </div>
        </div>
        <!-- 操作菜单 -->
        <div class="person-card__body">
          <div class="body__menu">
            <div class="menu__item">
              <div class="item__content">Create work account</div>
            </div>
            <div class="menu__item">
              <div class="item__content">Create work account</div>
            </div>
            <div class="menu__item">
              <div class="item__content">Log out</div>
            </div>
          </div>
          <div class="body__footer">
            <a
              class="footer__a"
              href="https://github.com/LightInk2020/Twilight"
              target="_blank"
              rel="noopener noreferrer"
              ><div class="menu__item">
                <div class="item__content">Go Github</div>
              </div></a
            >
          </div>
        </div>
      </el-card>
      <!-- 收缩菜单栏 -->
      <div class="person__collapse-button" @click="collapseLeftSidebar">
        <el-icon><IEpDArrowLeft /></el-icon>
      </div>
      <!-- 基础操作 -->
      <div class="basic-operations__options"></div>
    </div>
  </div>
</template>

<style lang="css">
.basic-operations__dropdown {
  width: 100%;
}

.basic-operations__person {
  width: 100%;
  position: relative;
}

.person__button {
  user-select: none; /* 子元素无法被选中 */
  /* transition: background 20ms ease-in 0s; */
  display: flex;
  justify-content: flex-start;
  height: 45px;
  width: 100%;
  min-height: 27px;
  overflow: hidden;
  margin-right: 8px;
}

.el-button > span {
  width: 100%;
}

.basic-operations .basic-operations__person .person__button:hover {
  background-color: var(--color-button-hover);
}

.person__button-body {
  display: flex;
  align-items: center;
  width: 80%;
}

.button__img {
  display: block;
  object-fit: cover;
  border-radius: 0.25em;
  width: 1.4rem;
  height: 1.4rem;
  transition: opacity 100ms ease-out 0s;
}

.button__name {
  color: var(--color-text-icon);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 个人操作弹窗 */
.basic-operations__person-card {
    position: absolute;
    z-index: 111;
    width: 270px;
}

.basic-operations__person-card .el-card__body {
    padding: 0;
}

/* 个人操作弹窗header部分 */
.person-card__header {
  flex-grow: 1;
  min-height: 0px;
  transform: translateZ(0px);
  overflow: hidden auto;
  margin-right: 0px;
  margin-bottom: 0px;
}

.header__email {
  margin-top: 8px;
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(55, 53, 47, 0.65);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
}

.header__person-info {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 120%;
  width: 100%;
  padding: 4px 14px;
  font-size: 14px;
  height: 48px;
}

.person-info__img {
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 0.25em;
  flex-shrink: 0;
}

.person-info__img img {
  display: block;
  object-fit: cover;
  border-radius: 3px;
  width: 32px;
  height: 32px;
  transition: opacity 100ms ease-out 0s;
}

.person-info__text {
  margin-left: 12px;
  margin-right: 12px;
  min-width: 0px;
}

.text__name {
  font-size: 14px;
  line-height: 20px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text__motto {
  font-size: 12px;
  line-height: 16px;
  color: rgba(55, 53, 47, 0.65);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 个人操作弹窗body部分 */
.person-card__body {
    background-color: var(--color-person-card-bg);
}

.body__menu {
  padding-top: 6px;
  padding-bottom: 6px;
  box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px;
  margin-top: 1px;
}

.menu__item {
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  line-height: 120%;
  width: 100%;
  user-select: none;
  min-height: 28px;
  font-size: 14px;
}

.item__content {
  margin-left: 12px;
  margin-right: 12px;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  color: rgba(55, 53, 47, 0.65);
  white-space: nowrap;
  font-size: 12px;
}

.body__footer {
  padding-top: 6px;
  padding-bottom: 6px;
  box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px;
  margin-top: 1px;
}

.footer__a {
  display: block;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  color: inherit;
}

.person__collapse-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 5px;
  top: 0;
  right: 0;
  z-index: 11;
  margin: 8px 15px;
  height: 29px;
  width: 29px;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--color-collapse-button);
}

.basic-operations__person .person__collapse-button:hover {
  background-color: var(--color-collapse-button-hover);
}
</style>
