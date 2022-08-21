<template>
  <div id="admin">
    <Header></Header>
    <!-- pc 端个人信息布局 -->
    <div class="personal_info_panel_pc">
      <div class="user_avator">
        <img src="../../assets/img/logo_img.png" alt="">
      </div>
      <div class="user_name">
        <h1>溢狗</h1>
        <span>开发、学习、成长...</span>
      </div>
      <div class="data_list">
        <div class="data_item">
          <h4>个人成就</h4>
        </div>
        <div class="data_item">
          <span class="icon iconfont icon-01_wenzhangguanli"></span>
          <span>发表文章数<span class="num1">&nbsp;&nbsp;17</span></span>
        </div>
        <div class="data_item">
          <span class="icon iconfont icon-ico_yueduliang"></span>
          <span>文章被阅读<span class="num1">&nbsp;&nbsp;234</span></span>
        </div>
        <div class="data_item">
          <span class="icon iconfont icon-dianzan"></span>
          <span>文章被点赞<span class="num2">&nbsp;&nbsp;1286</span></span>
        </div>
      </div>
      <div class="btn_list">
        <button class="write_article_btn">写文章</button>
        <!-- <button class="draft_box_btn">草稿箱</button> -->
        <button class="layout_btn">退出登录</button>
      </div>
    </div>
    <div class="personal_info_panel_mobile">
      <div class="user_info_panel">
        <div class="user_avator">
          <img src="@/assets/img/logo_1.png" alt="">
        </div>
        <div class="other_info">
          <div class="user_name">
            <h1>溢狗</h1>
          </div>
          <div class="motto">
            <span>开发、学习、成长...</span>
          </div>
        </div>
        <div class="layout">
          <button>退出</button>
        </div>
      </div>
      <div class="person_data">
        <div class="title">
          <h2>个人成就</h2>
        </div>
        <div class="data_item">
          <span class="icon iconfont icon-01_wenzhangguanli"></span>
          <span>发表文章数<span class="num1">&nbsp;&nbsp;17</span></span>
        </div>
        <div class="data_item">
          <span class="icon iconfont icon-ico_yueduliang"></span>
          <span>文章被阅读<span class="num1">&nbsp;&nbsp;234</span></span>
        </div>
        <div class="data_item">
          <span class="icon iconfont icon-dianzan"></span>
          <span>文章被点赞<span class="num2">&nbsp;&nbsp;1286</span></span>
        </div>
      </div>
    </div>
    <div class="detail_list">
      <ul class="nav_ul">
        <li class="nav_item">
          <router-link active-class="active" exact to="/admin">我的博文</router-link>
        </li>
        <li class="nav_item">
          <router-link active-class="active" to="/admin/message">网友留言</router-link>
        </li>
        <li class="nav_item">
          <router-link active-class="active" to="/admin/drafts">草稿文案</router-link>
        </li>
      </ul>
      <div class="detail_content_list">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
@import url('@/assets/css/admin.less');
</style>