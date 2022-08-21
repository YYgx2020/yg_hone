<template>
  <div id="drafts">
    <ul class="drafts_ul">
      <li class="drafts_item" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index">
        <div class="drafts_main">
          <a href="" class="title">无标题</a>
          <div class="info_box">
            <div class="date">2022 年 8 月 16 日 22:27</div>
            <div class="more_item" @click.stop>
              <i class="more iconfont icon-gengduo" @click="moreClick($event, index)"></i>
              <ul class="tag_2" v-if="index === current">
                <li class="more_list_item" @click="editPosts(item)">编辑</li>
                <li class="more_list_item" @click="deletePosts(item)">删除</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      current: '',
    }
  },
  mounted() {
    document.addEventListener("click", this.bodyCloseMenus);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.bodyCloseMenus);
  },
  methods: {
    moreClick($event, index) {
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
li {
  list-style: none;
}

#drafts {
  .drafts_ul {
    
    .drafts_item {
      padding: 2rem 2.5rem 0;

      // margin-bottom: 2rem;
      .drafts_main {
        border-bottom: 1px solid #e5e6eb;
        padding-bottom: 1.6rem;
        .title {
          line-height: 2rem;
          font-size: 1.33334rem;
          font-weight: 700;
        }

        .info_box {
          position: relative;
          display: flex;
          margin: .3rem 0;
          padding: .8333rem 0;

          .date {
            font-size: 1.2rem;
            color: #86909c;
            cursor: default;
            margin-right: 2rem;
          }

          .more_item {
            position: relative;
            .more {
              z-index: 100;
              color: #86909c;
              font-weight: 700;
              cursor: pointer;
            }

            .more:hover {
              border-radius: 2px;
              background-color: #e5e6eb;
            }

            .tag_2 {
              display: inline-block;
              position: absolute;
              top: 100%;
              left: -100%;
              padding: 2px 0;
              margin-top: 4px;
              background: #fff;
              border: 1px solid #e5e6eb;
              box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
              border-radius: 4px;
              z-index: 10;

              .more_list_item {
                box-sizing: border-box;
                font-size: 12px;
                line-height: 32px;
                color: #4e5969;
                padding: 0 12px;
                min-width: 48px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }

              .more_list_item:hover {
                background-color: #fafafa;
              }
            }
          }
        }
      }
    }
  }
}
</style>