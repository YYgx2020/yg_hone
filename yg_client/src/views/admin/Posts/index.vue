<template>
  <div id="posts">
    <div class="list">
      <!-- , 2, 3, 4, 5, 6, 7, 8 -->
      <li class="list_item" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index">
        <div class="meta_container">
          <span class="date">3天前</span>
          <!-- <a href=""></a> -->
          <!-- <router-link to=""></router-link> -->
          <span class="tag_link">前端</span>
        </div>
        <div class="content_wrapper">
          <div class="content_main">
            <div class="title_row">
              <span class="title">奇安信前端一面凉经分享</span>
            </div>
            <div class="abstract">
              <div>
                基本情况的了解 1.自我介绍 大概讲了以下内容: 姓名 学校 年级 专业 前端做了多久了（我说的是半年多） 2.问前端整体的掌握情况 就是针对前面自我介绍时说到的前端学习时长来问我对前端整体的一个掌握
              </div>
            </div>
            <ul class="action_list">
              <li class="item">
                <i class="iconfont icon-ico_yueduliang"></i>
                <span>140</span>
              </li>
              <li class="item">
                <i class="iconfont icon-dianzan"></i>
                <span>23</span>
              </li>
              <li class="item">
                <i class="iconfont icon-pinglun"></i>
                <span>140</span>
              </li>
              <!-- 阻止冒泡，关闭弹窗 -->
              <li class="item" @click.stop>
                <i class="more iconfont icon-gengduo" @click="moreClick($event, index)"></i>
                <!-- <div class="bgc" @click.stop>
                  
                </div> -->
                <ul class="tag_2" v-if="index === current">
                  <li class="more_list_item" @click="editPosts(item)">编辑</li>
                  <li class="more_list_item" @click="deletePosts(item)">删除</li>
                </ul>
              </li>

            </ul>
          </div>
          <img class="cover" src="../../../assets/img/my_wechat.jpg" alt="" />
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      index: 0,
      showMore: false,
    }
  },
  mounted() {
    document.addEventListener("click", this.bodyCloseMenus);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.bodyCloseMenus);
  },
  methods: {
    moreClick(event, index) {
      if (this.index === this.current) {
        this.current = ''
        return
      }
      // console.log('event:', event.currentTarget.dataset.current);
      console.log('index:', index);
      // this.showMore = !this.showMore
      this.index = this.current = index
    },
    bodyCloseMenus(e) {
      let self = this;
      if (self.index === self.current) {
        // console.log("13");
        self.current = ''
        return
      }
    },

    // 编辑文章按钮
    editPosts(item) {
      console.log('跳转到编辑器界面，并传递文章的id', item);
    },

    // 删除文章按钮
    deletePosts(item) {
      console.log('item: ', item);
      console.log('删除文章');
    },  
  }
}
</script>

<style lang="less" scoped>
@import url('@/assets/css/posts.less');
</style>