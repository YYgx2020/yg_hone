<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img src="../../../assets/img/logo_img.png" alt=""/>
      </router-link>
    </div>
    <ul class="right_nav">
      <li class="nav_item">
        <span class="iconfont icon-shouye"></span>
      </li>
      <li class="nav_item">
        <span class="iconfont icon-yuedu-2"></span>
      </li>
      <li class="nav_item">
        <span class="iconfont icon-liuyan1"></span>
      </li>
      <li class="nav_item">
        <span class="iconfont icon-guanyu"></span>
      </li>
      <li class="nav_item">
        <span class="iconfont icon-denglu"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="less" scoped>
li {
  list-style: none;
}

.header {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  box-shadow: rgba(178, 178, 178, 0.35) 1px 1px 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 3rem;
    height: 3rem;
    margin-left: 1.5rem;
    border-radius: 50%;
    box-shadow: 6px 6px 12px #f2f2f2,
        -6px -6px 12px #ffffff;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .right_nav {
    display: flex;
    width: auto;
    margin-right: 1rem;
    cursor: pointer;
    .nav_item {
      width: 3rem;
      height: 3rem;
      margin: 0 1rem;
      line-height: 3rem;
      text-align: center;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 6px 6px 12px #f2f2f2,
        -6px -6px 12px #ffffff;
      span {
        font-size: 1.5rem;
      }
    }
    .nav_item:hover {
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow:  6px 6px 12px #f2f2f2,
             -6px -6px 12px #ffffff;
    }
  }
}
</style>