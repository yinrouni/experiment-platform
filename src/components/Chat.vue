<template>
<div>
  <div class="chat_window">
    <div class="top_menu">
        <div class="buttons">
            <div class="button close"></div>
            <div class="button minimize"></div>
            <div class="button maximize"></div>
        </div>
        <div class="title">患者</div>
    </div>
    <div class="messages scrolling_container">
    <ul>
      <div v-for="chat in chatViewList" :key="chat.id">
        <!-- {% for chat in chat_view_list %} -->
            <li class="message right appeared">
                <div class="avatar">
                  <el-avatar src="https://bpic.51yuansu.com/pic2/cover/00/28/91/5806b6cbaa3d6_610.jpg" :size="60"></el-avatar>

                </div>
                <div class="text_wrapper">
                    <div class="text">{{ chat.ask }}</div>
                </div>
            </li>
            <li class="message left appeared" tabindex="5">
                <div class="avatar">
                  <el-avatar src="https://bpic.51yuansu.com/pic2/cover/00/31/48/5810b89e70dbc_610.jpg" :size="60"></el-avatar>
                </div>
                <div class="text_wrapper">
                    <div class="text">{{ chat.reply }}</div>
                </div>
            </li>
            </div>
    </ul>
    </div>
    <div class="bottom_wrapper clearfix">
        <form >
            <!-- {% csrf_token %} -->
            <label class="message_input_wrapper">
                <select class="message_input" v-model="selected">
                    <option :value="-1" >{{chat[0].ask}}</option>
                    <!-- <option  v-for="c in chat" :value="c.id" :key="c.id">{{ c.ask }}</option> -->
                </select>
            </label>
            <input class="send_message" type="submit" value="发送" @click="send">
        </form>
    </div>
    <div class="message_template">
    </div>

</div>

<el-dialog
  title="主诉"
  :visible.sync="result"
  width="30%"

  >
  <span>一月前外伤致21牙松动</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="closeDialog">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  name: 'Chat',
  created () {
    this.$store.commit('changeNextStatus', false)
  },
  data () {
    return {
      result: false,
      chat: [{
        id: 0,
        ask: '请问您哪里不舒服？',
        reply: '我上月出差的时候，潜水时不小心把门牙给磕了，回来以后，只是牙龈有些出血红肿，有些疼的厉害，听我朋友的敷了会冰袋，吃了点消炎药，就没太在意。可是昨天磕瓜子时，发现门牙有点松。'
      },
      {
        id: 1,
        ask: '您能指出具体是哪一颗牙齿吗？',
        reply: '是我左边上面这一颗门牙。'
      },
      {
        id: 2,
        ask: '您这颗牙齿有疼痛吗？',
        reply: '刚开始挺疼的，后来吃了药，过段时间就没有了。'
      },
      {
        id: 3,
        ask: '您这颗牙齿之前接受过治疗吗？',
        reply: '没有。'
      },
      {
        id: 4,
        ask: '您还有其他牙齿疼吗？',
        reply: '没有。'
      },
      {
        id: 5,
        ask: '您这颗牙齿能咬东西吗？',
        reply: '不能，它太松了，我怕它磕掉了，一直避免使用它。'
      },
      {
        id: 6,
        ask: '您有在外院治疗过吗？',
        reply: '没有。'
      },
      {
        id: 7,
        ask: '',
        reply: ''
      }
      ],
      chatViewList: [],
      selected: -1
    }
  },
  methods: {
    send: function () {
      if (this.$data.chat.length === 1) {
        this.$data.result = true
        return
      }
      this.$data.chatViewList.push(this.$data.chat[0])
      this.$data.chat.shift()
      // scroll to bottom
      this.$nextTick(function () {
        const container = document.querySelectorAll('.messages')
        container[0].scrollTop = container[0].scrollHeight
      })
    },
    closeDialog () {
      this.result = false
      this.$emit('enableNext')
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
