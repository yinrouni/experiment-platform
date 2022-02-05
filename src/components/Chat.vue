<template>
  <div class="chat_window">
    <div class="top_menu">
        <div class="buttons">
            <div class="button close"></div>
            <div class="button minimize"></div>
            <div class="button maximize"></div>
        </div>
        <div class="title">患者</div>
    </div>
    <ul class="messages scrolling_container">
      <div v-for="chat in chatViewList" :key="chat.id">
        <!-- {% for chat in chat_view_list %} -->
            <li class="message right appeared">
                <div class="avatar">
                </div>
                <div class="text_wrapper">
                    <div class="text">{{ chat.ask }}</div>
                </div>
            </li>
            <li class="message left appeared" tabindex="5">
                <div class="avatar">
                  <el-avatar icon="el-icon-user-solid" :size="60"></el-avatar>
                </div>
                <div class="text_wrapper">
                    <div class="text">{{ chat.reply }}</div>
                </div>
            </li>
            </div>
    </ul>
    <div class="bottom_wrapper clearfix">
        <form >
            <!-- {% csrf_token %} -->
            <label class="message_input_wrapper">
                <select class="message_input" v-model="selected">
                    <option :value="-1" >--Please choose an option--</option>
                    <option  v-for="c in chat" :value="c.id" :key="c.id">{{ c.ask }}</option>
                </select>
            </label>
            <input class="send_message" type="submit" value="发送" @click="send">
        </form>
    </div>
    <div class="message_template">
    </div>
</div>

</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      chat: [{
        id: 0,
        ask: 'ask',
        reply: 'reply'
      }

      ],
      chatViewList: [],
      selected: -1
    }
  },
  methods: {
    send: function () {
      this.$data.chatViewList.push(this.$data.chat[this.$data.selected])
      console.log(this.$data.chatViewList)
    }

  }
}
</script>

<style scoped>
  @import "../assets/chat.css";
  .name{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
