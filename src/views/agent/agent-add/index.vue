<template>
  <div style="position:relative;">
    <el-row type="flex" justify>
      <el-col :span="24">
        <div class="search">
          <p>开户类型</p>
          <el-select style="width:100%;" v-model="select" slot="prepend" placeholder="通用代理">
            <el-option label="一级代理" value="1"></el-option>
            <el-option label="二级代理" value="2"></el-option>
            <el-option label="三级代理" value="3"></el-option>
            <el-option label="四级代理" value="4"></el-option>
            <el-option label="五级代理" value="5"></el-option>
          </el-select>
        </div>
        <div class="add-level">
          <p>开户等级</p>
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            style="background:#fff;padding:30px 30px 10px"
          >
            <el-tab-pane label="一级代理" name="first">
              <span slot="label">
                <span>
                  <img src="~@/assets/agent.png" />
                </span> 一级代理
              </span>
              <div style="height:48px;line-height:48px;">
                <span style="color:rgba(102,102,102,1);margin-right:40px;">代理类型:一级代理</span>
                <span style="color:rgba(102,102,102,1);margin-right:40px;">到账金额: 68888</span>
                <span style="color:rgba(102,102,102,1);margin-right:40px;">充值金额: 5888</span>
                <el-button size="mini" type="primary">立即开户</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="二级代理" name="second">二级代理</el-tab-pane>
            <el-tab-pane label="三级代理" name="third">三级代理</el-tab-pane>
            <el-tab-pane label="四级代理" name="fourth">四级代理</el-tab-pane>
            <el-tab-pane label="五级代理" name="fifth">五级代理</el-tab-pane>
          </el-tabs>
        </div>
        <div class="cheape">
          <p>答题优惠</p>
          <div class="answerCheape">
            <ul>
              <li>
                <label>教学名称</label>
                <span style="color: rgba(102, 102, 102, 1);">价格</span>
              </li>
              <li>
                <label>运动世界校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>智慧树/知道</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>超星/尔雅/学习通</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>U 校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>优课联盟</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>体适能代跑</label>
                <span>￥1.00</span>
              </li>
            </ul>
            <ul>
              <li>
                <label>教学名称</label>
                <span style="color: rgba(102, 102, 102, 1);">价格</span>
              </li>
              <li>
                <label>运动世界校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>智慧树/知道</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>超星/尔雅/学习通</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>U 校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>优课联盟</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>体适能代跑</label>
                <span>￥1.00</span>
              </li>
            </ul>
            <ul>
              <li>
                <label>教学名称</label>
                <span style="color: rgba(102, 102, 102, 1);">价格</span>
              </li>
              <li>
                <label>运动世界校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>智慧树/知道</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>超星/尔雅/学习通</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>U 校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>优课联盟</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>体适能代跑</label>
                <span>￥1.00</span>
              </li>
            </ul>
            <ul>
              <li>
                <label>教学名称</label>
                <span style="color: rgba(102, 102, 102, 1);">价格</span>
              </li>
              <li>
                <label>运动世界校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>智慧树/知道</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>超星/尔雅/学习通</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>U 校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>优课联盟</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>体适能代跑</label>
                <span>￥1.00</span>
              </li>
            </ul>
            <ul>
              <li>
                <label>教学名称</label>
                <span style="color: rgba(102, 102, 102, 1);">价格</span>
              </li>
              <li>
                <label>运动世界校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>智慧树/知道</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>超星/尔雅/学习通</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>U 校园</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>优课联盟</label>
                <span>￥1.00</span>
              </li>
              <li>
                <label>体适能代跑</label>
                <span>￥1.00</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>推广历史</p>
        </div>
        <el-card
          shadow="hover"
          :body-style="{padding: '30px'}"
          style="height:360px;position:relative;"
        >
          <el-table
            :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
            style="width: 100%;"
          >
            <el-table-column prop="indety"  label="令牌类型"></el-table-column>
            <el-table-column prop="tel" label="注册令牌"></el-table-column>
            <el-table-column prop="status" label="状态" width="600">
              <template slot-scope="scope">
                <div>
                  <!-- {{ scope.row }} -->
                  <el-steps align-center 
                  
                  :active="scope.row.status" finish-status="success">
                    <el-step style="font-size:10px;"  title="提交成功"></el-step>
                    <el-step title="系统确认成功"></el-step>
                    <el-step title="支付成功"></el-step>
                    <el-step v-show="scope.row.status < 4 " title="等待注册"></el-step>
                    <el-step  :title="scope.row.status < 5 ? '推广成功' : '注册成功'"></el-step>
                  </el-steps>
                </div>
              </template>
            </el-table-column>
            <el-table-column width="300">
              <template slot="header">
                  <div>操作</div>
              </template>
              <template slot-scope="scope">
                <div style="display:flex;" v-show="scope.row.status < 5">
                  <el-button
                    style="height:30px;border-radius:4px;"
                    type="primary"
                    @click="go(scope.row)"
                  >创建账户</el-button>
                  <el-button
                     style="height:30px;background:#fff;color:rgba(37,122,246,1);border-radius:4px;border:1px solid rgba(37,122,246,1);"
                    @click="confirm"
                  >复制注册链接</el-button>
                  <el-button
                    style="height:30px;background:#fff;color:rgba(37,122,246,1);border-radius:4px;border:1px solid rgba(37,122,246,1);"
                  >取消订单</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <el-pagination
          class="bottom"
          background
          layout="prev, pager, next"
          :page-size="pagesize"
          :total="tableData.length"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-col>
      <span class="first squl"></span>
      <span class="second squl"></span>
      <span class="third squl"></span>
      <span class="four squl"></span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, //弹框显示与否
      activeName: "first",
      radio: "1", //不赠送
      searchValue: "", //搜索内容
      select: "", //选择内容
      pagesize: 3,
      currpage: 1,
      precent: "",
      input: "", //弹窗输入金额
      options: [
        {
          value: "选项1",
          label: "2%"
        },
        {
          value: "选项2",
          label: "4%"
        },
        {
          value: "选项3",
          label: "6%"
        },
        {
          value: "选项4",
          label: "8%"
        },
        {
          value: "选项5",
          label: "10%"
        }
      ],
      tableData: [
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 1,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 5,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 4,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 4,
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 3,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 3,
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 5,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 1,
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 2,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 2,
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 1,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 3,
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 4,
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: 4,
          orderNum: "6001683003586476"
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    renderHeader(h) {
      return (
        <div>
          <el-button>收款码配置</el-button>
        </div>
      );
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    confirm() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  padding-left: 20px;
  color: rgba(51, 51, 51, 1);
}
.search {
  ::v-deep .el-input__inner {
    height: 50px;
  }
}
.bottom {
  position: absolute;
  left: 10px;
  bottom: 10px;
}
.addImg {
  width: 105px;
  height: 30px;
  background: #fff;
  color: rgba(37, 122, 246, 1);
  border-radius: 4px;
  border: 1px solid rgba(37, 122, 246, 1);
  margin-right: 30px;
  text-align: center;
  padding-right: 5px;
}
.footer-left {
  display: flex;
  justify-content: flex-start;
}
.add-level {
  // padding:0 30px;
  // background: #fff;
  span {
    img {
      width: 20px;
      height: 17px;
    }
  }
}

.answerCheape {
  height: 380px;
  overflow: hidden;
  padding: 30px;
  background: #fff;
  overflow-x: scroll;
  overflow-y: hidden; /* 超出内容不可见 */
  white-space: nowrap;
  ul {
    width: 300px;
    height: 100%;
    display: inline-table;
    margin-right: 60px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 53px;
      line-height: 53px;
      border-bottom: 1px solid #ebeef5;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: rgba(102, 102, 102, 1);
      span {
        color: rgba(37, 122, 246, 1);
        margin-right: 70px;
      }
    }
  }
}
.squl {
  display: block;
  width: 3px;
  height: 18px;
  position: absolute;
  left: 0px;
  background: #257af6;
}
.first {
  top: 18px;
}
.second {
  top: 117px;
}
.third {
  top: 308px;
}
.four {
  top: 798px;

}
</style>