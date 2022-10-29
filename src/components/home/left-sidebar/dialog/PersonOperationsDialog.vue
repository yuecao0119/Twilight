<script setup>
const person = {
  name: "Virtual Moon",
  img: "/src/assets/img/person-img.jpg",
  email: "crescent2020@163.com",
  motto: "枕上诗书闲处好，门前风景雨来佳。",
};
</script>

<template>
  <!-- 个人操作弹窗 -->
  <el-card class="person-card">
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
      <div class="body__menu twilight-menu__body">
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
</template>

<style lang="css">
/* 个人操作弹窗 */
.person-card {
  width: 270px;
}

.person-card .el-card__body {
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
  margin: 8px 12px 2px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-dark);
  font-size: 0.75rem;
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
  height: 55px;
}

.header__person-info:hover {
  background-color: var(--color-button-hover);
}

.person-info__img {
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25em;
  flex-shrink: 0;
}

.person-info__img img {
  display: block;
  object-fit: cover;
  border-radius: 3px;
  width: 35px;
  height: 35px;
  transition: opacity 100ms ease-out 0s;
}

.person-info__text {
  margin-left: 12px;
  margin-right: 12px;
  min-width: 0px;
}

.text__name {
  font-size: 0.9rem;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text__motto {
  font-size: 0.75rem;
  line-height: 16px;
  color: var(--color-text-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 个人操作弹窗body部分 */
.person-card__body {
  background-color: var(--color-person-card-bg);
}

.person-card__body .item__content {
  margin: 0 12px;
}

.body__footer {
  padding-top: 6px;
  padding-bottom: 6px;
  box-shadow: var(--color-box-shadow) 0px -1px 0px;
  margin-top: 1px;
}

.footer__a {
  display: block;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  color: inherit;
}
</style>
