<template>
<el-container>
  <el-main>
    <el-row>
      <el-col :span="18">
        <div class="table">
        <el-table
    :data="tableData"
    :header-cell-style="setHeaderStyle"
    border
      height="485"
        stripe
    style="width: 100%">
    <el-table-column
      label="分类"
      width="150">
        <template slot-scope="scope">
        <div class="center">{{ scope.row.category}}</div>
      </template>
    </el-table-column>
    <el-table-column
    class-name="desc"

      label="知识点"
      width="560">

          <template slot-scope="scope">

        <span style="white-space: pre-line">{{ scope.row.desc}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="得分">
        <template slot-scope="scope">
        <div class="center">{{ scope.row.total}}</div>
      </template>
    </el-table-column>
  </el-table>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="img">
        <el-progress type="circle"  :percentage="total"
        :stroke-width="15"
        :width="200"
        :color="textData.color"
        ></el-progress>
         <br>
        <br>
        <div>
          {{text.txt}}
        </div>
        </div>

      </el-col>
    </el-row>

<el-dialog
  :visible.sync="dialogVisible"
  width="30%"
  :close="false"
  :show-close="false"
  >
     <el-result icon="success" title="实验完成" subTitle="感谢体验">
    </el-result>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="finish">确 定</el-button>
  </span>
</el-dialog>

  </el-main>

  <el-footer>
  </el-footer>
  <el-row style="padding: 0 20px">
    <el-col :span="12" class="left">
      <el-button @click="backToIndex"> 返回首页</el-button>
    </el-col>

    <el-col :span="12" class="right">
      <el-button @click="dialogVisible = true"> 完成 </el-button>
    </el-col>
  </el-row>

  </el-container>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    tableData: function () {
      return this.content.map((i, index) => {
        const key = this.names[index]
        const score = this.$store.state.scores[key]
        const data = '' + score + '/' + i.total
        return {category: i.category, total: data, desc: i.desc.join('\n')}
      })
    },
    total: function () {
      const names = Object.keys(this.$store.state.scores)
      let res = 0
      names.forEach((n) => {
        res += this.$store.state.scores[n]
      })
      return res
    },
    text: function () {
      let res
      this.textData.forEach((i) => {
        if (this.total >= i.min && this.total < i.max) {
          res = i
        }
      })
      return res
    }
  },

  data () {
    return {
      dialogVisible: false,
      textData: [{
        txt: ' 还要继续努力哦~',
        min: 0,
        max: 60,
        color: '#E6A23C'
      },
      {
        txt: ' 掌握的不错哟~再接再厉',
        min: 60,
        max: 85,
        color: '#409EFF'
      }, {
        txt: ' 掌握的不错哟~再接再厉',
        min: 85,
        max: 100,
        color: '#67C23A'
      },
      {
        txt: ' 百里挑一的高手！',
        min: 100,
        max: 101,
        color: '#F56C6C'
      }

      ],
      names:
  ['historyCollect',
    'planDiscuss',
    'preparation',
    'remove',
    'plantTest',
    'plantExp',
    'warnings'],
      content: [{
        category: '病史采集',
        desc: [ '1. 在一般检查中,我们对本例种植患者通常采用口腔、颌面部、颞下颌检查即可。', '2. CBCT技术能实现种植牙前对牙槽骨的高度、宽度、神经管的位置、植入种植体的长度等准确诊断,更重要的是可以在电脑上进行模拟种植。' ],
        total: 4.5
      },
      {
        category: '方案商议',
        desc: [ '1. 可摘局部义齿的缺点为初期佩戴异物感明显。', '2. 固定桥的缺点是磨除牙体组织多,适用范围小', '3. 较常规种植,即刻种植不容易获得满意的初期稳定性。', '4. 由于心理或者生理原因不习惯可摘局部义齿者,适用种植义齿。', '5. 本病例患者的最佳方案为拔除21后即刻种植。', '术前的血液检查一般包括血常规、血糖、凝血四项及传染病检查。' ],
        total: 10.5
      },
      {
        category: '术前准备',
        desc: ['1. 符合种植要求的患者需在种植术前2-3周进行牙周洁治', '2. 上颌单颗牙骨质较薄,药物易渗透,最适麻醉方式应为浸润麻醉', '3. 临床上无特殊病史情况下,通常麻醉药使用碧兰麻（4%盐酸阿替卡因+1/100,000肾上腺素）', '4. 给出的所有器械均为本次实验所需的器械。'],
        total: 7.5
      },
      {
        category: '牙拔除术',
        desc: [ '1. 口内消毒药物应选择0.5%碘伏。', '2. 消毒的顺序应为从内向外画圈式消毒。', '3. 浸润麻醉的麻醉位点应为根尖部。' ],
        total: 4.5
      },
      {
        category: '即刻种植测试',
        desc: [ '1. 不翻瓣术式即刻种植中,种植体到唇侧骨板的距离（跳跃间隙）应至少为2mm', '2. 即刻种植中采取翻瓣术式会较不翻瓣式降低修复满意度。', '3. 即刻种植中,种植体植入时的临床状态是拔牙位点没有骨和软组织愈合。', '4. 为保证种植体稳定性种植体的宽度应略大于备洞的宽度' ],
        total: 6
      },
      {
        category: '即刻种植实验操作',
        desc: [ '1. 即刻种植实验操作中,首先使用球钻定位,再用先锋钻初始备洞,插入方向指示器验证备洞方向准确后,依次使用Φ2.8扩孔钻、Φ3.6扩孔钻反复提拉,逐级扩大备洞。', '2. 备洞完成后,使用种植体夹持器（持钉器）夹持种植体植入种植窝,后用扭力扳手确定其初期稳定性。', '3. 于跳跃间隙填充骨粉后,使用扫描杆替换覆盖螺丝,进行口腔扫描,获得3D口腔模型。椅旁制作临时修复体后,使用螺丝刀将组装好的临时修复基台和临时修复体就位,同样使用扭力扳手使其扭矩控制在10~15N。最后调𬌗。' ],
        total: 61
      },
      {
        category: '术后医嘱',
        desc: [ '1. 种植义齿术后初期不可采用超声洁牙,避免影响其稳定性。', '2. 种植术后应进软食,避免使用术区咀嚼。', '3. 种植手术的术后并发症包括：术后急性感染、种植体骨结合不良、术后出血及皮下瘀斑和创口裂开。' ],
        total: 6
      }
      ]

    }
  },
  methods: {
    backToIndex: function () {
      this.$store.commit('reset')
      this.$router.push('/')
    },
    finish: function () {
      this.dialogVisible = false
      this.backToIndex()
    }
  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .right{
    text-align: end;
  }

</style>
