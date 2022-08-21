<template>
  <div id="message_box">
    <ul class="choose_ul">
      <li class="choose_item">
        <button :class="choose ? 'choose' : ''" @click="chooseBtn()">最新</button>
      </li>
      <li class="choose_item">
        <button :class="!choose ? 'choose' : ''" @click="chooseBtn()">精选</button>
      </li>
    </ul>
    <ul class="message_box_ul">
      <!-- 切换的时候更新数据 -->
      <li class="message_item" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index">
        <div class="source_label">
          来自&nbsp;<a>留言板</a>
        </div>
        <div class="web_info_container">
          <div class="basic_info">
            <div class="web_avator">
              <img src="@/assets/img/logo_1.png" alt="" />
            </div>
            <div class="other_info">
              <span class="web_pet_name">二狗</span>
              <span class="web_email">6886*******.com</span>
            </div>
            <div class="date">
              19天前
            </div>
          </div>
          <div class="content_box">
            Angular其实是一个很有意思的框架，只不过相对来说上手难度大一点，而且不适合中国企业家们的短平快的"优良"做事风格，再加上在国内各种Google不流畅的网络体验，所以在国内知名度就不行了。另外，让人不甚唏嘘的是，当年也是Angular最先支持TypeScript和RxJS，结果过了几年TypseScript和RxJS火了，反而Angular却越来越少人讨论了，也是可惜Angular其实是一个很有意思的框架，只不过相对来说上手难度大一点，而且不适合中国企业家们的短平快的"优良"做事风格，再加上在国内各种Google不流畅的网络体验，所以在国内知名度就不行了。另外，让人不甚唏嘘的是，当年也是Angular最先支持TypeScript和RxJS，结果过了几年TypseScript和RxJS火了，反而Angular却越来越少人讨论了，也是可惜。
          </div>
        </div>
        <ul class="btn_list" v-if="choose">
          <li class="btn_list_item">
            <button>不精选</button>
          </li>
          <li class="btn_list_item">
            <button>精选</button>
          </li>
        </ul>
        <ul class="btn_list" v-if="!choose">
          <li class="btn_list_item_choose">
            <button disabled>已精选</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      choose: true,
      messageData: '',
    }
  },
  methods: {
    chooseBtn() {
      console.log(this.choose);
      this.choose = !this.choose
    },
  }
}
</script>

<style lang="less" scoped>
@import url('@/assets/css/messageBox.less');
</style>