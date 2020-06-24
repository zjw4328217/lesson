<template>
  <div>
    <el-row type="flex" justify>
      <el-col :span="24">
        <div class="search">
          <el-input placeholder="账号/昵称/手机号" v-model="searchValue" class="input-with-select">
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </div>
        <el-card
          shadow="hover"
          :body-style="{padding: '0px'}"
          style="height:750px;position:relative;"
        >
          <el-table
            :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
            style="width: 100%;"
          >
            <el-table-column prop="orderNum" width="90" label="账号"></el-table-column>
            <el-table-column width="80" label="代理级别">
              <template slot-scope="scope">
                <div style="color:#257AF6;">{{ scope.row.indety }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="user" width="100" label="昵称"></el-table-column>
            <el-table-column prop="tel" label="手机号" width="100"></el-table-column>
            <el-table-column label="qq" width="100">
              <template slot-scope="scope">
                <div>{{ scope.row.payAccount }}</div>
              </template>
            </el-table-column>
            <el-table-column label="可用余额" width="100">
              <template slot-scope="scope">
                <div>{{ scope.row.freeAccount }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="beginDate" label="加入时间" width="140"></el-table-column>
            <el-table-column prop="endDate" label="最后操作时间" width="140"></el-table-column>
            <el-table-column label="状态" width="80">
              <template slot-scope="scope">
                <div style="color:#36A247" v-show="scope.row.status == 1">正常</div>
                <div style="color:#F5A623" v-show="scope.row.status == 2">冻结</div>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <div style="display:flex;justify-content:space-between;">
                  <div>操作</div>
                  <button class="addImg">
                    <i class="el-icon-plus el-icon--right"></i>
                    新增代理
                  </button>
                </div>
              </template>
              <template slot-scope="scope">
                <div style="display:flex;">
                  <el-button
                    style="height:30px;border-radius:4px;"
                    type="primary"
                    @click="go(scope.row)"
                  >行为分析</el-button>
                  <el-button
                    style="height:30px;background:#36A247;border-radius:4px;color:rgba(255,255,255,1);"
                    @click="confirm(scope.row)"
                  >升级</el-button>
                  <el-button
                    style="height:30px;background:#fff;color:rgba(37,122,246,1);border-radius:4px;border:1px solid rgba(37,122,246,1);"
                  >密码重置</el-button>
                </div>
              </template>
            </el-table-column>
            <!-- <el-table-column ></el-table-column> -->
          </el-table>
          <el-pagination
            class="bottom"
            background
            layout="prev, pager, next, sizes, total, jumper"
            :page-sizes="[5, 10]"
            :page-size="pagesize"
            :total="tableData.length"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          ></el-pagination>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
      :title="data.title"
      :visible.sync="dialogVisible"
      width="37%"
      top='2vh'
      style="margin-top:0;"
      :before-close="handleClose"
    >
      <div class="dialog" style="margin-top:0;">
        <ul>
          <li>
            <label>账户账号</label>
            <span>{{data.user}}</span>
          </li>
          <li>
            <label>账户昵称</label>
            <span>{{data.user}}</span>
          </li>
          <li>
            <label>下级代理数量</label>
            <span>0</span>
          </li>
          <li>
            <label>可用余额</label>
            <span>￥{{data.freeAccount}}</span>
          </li>
          <li>
            <label>累计流入资金</label>
            <span>￥{{data.freeAccount}}</span>
          </li>
          <li>
            <label>累计流出资金</label>
            <span>￥{{data.freeAccount}}</span>
          </li>
          <li>
            <label>最后操作时间</label>
            <span>{{data.beginDate}}</span>
          </li>
          <li>
            <label>最后流水时间</label>
            <span>{{data.endDate}}</span>
          </li>
        </ul>
        <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="消费行为" name="first">
            <v-consume v-show="activeName == 'first'" :chart-data="consumeData"></v-consume>
          </el-tab-pane>
          <el-tab-pane label="订单行为" name="second">
            <v-order v-show="activeName == 'second'" :chart-data="orderData"></v-order>
          </el-tab-pane>
          <el-tab-pane label="行为趋势" name="third">
            <div style="padding:10px 30px 30px 30px;">
              <div class="top">
                <el-date-picker
                  v-model="value2"
                  type="daterange"
                  align="center"
                  size='large'
                  style="width:85%;"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
                <el-button icon="el-icon-search" circle></el-button>
              </div>
              <div class="chartOne">
                  <v-action v-show="activeName == 'third'" :chart-data="actionData"></v-action>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vConsume from "./components/consume";
import vOrder from "./components/orderBehavior";
import vAction from "./components/action";

export default {
  data() {
    return {
      consumeData: [],
      orderData: [],
      actionData:[],
      value2: "",
      activeName: "first", //弹窗默认图
      data: {
        title: "", //行为分析人
        user: "",
        tel: "",
        indety: "",
        payAccount: "",
        freeAccount: "",
        beginDate: "",
        endDate: "",
        status: "",
        orderNum: ""
      },
      dialogVisible: false, //弹框显示与否
      radio: "1", //不赠送
      searchValue: "", //搜索内容
      select: "", //选择内容
      pagesize: 10,
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
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "60016830"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168311"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168311"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168311"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168311"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168311"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "600168300"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          endDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "600168300"
        }
      ]
    };
  },
  components: {
    vConsume,
    vOrder,
    vAction
  },
  mounted() {
    this.consumeData = [
      { value: 335, name: "开户奖励" },
      { value: 310, name: "转账收入" },
      { value: 234, name: "余额更新" },
      { value: 135, name: "订单扣款" }
    ];
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
    confirm(data) {
      console.log(data);
      this.data = data;
      this.data.title = data.indety;
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClick(tab, event) {
      if (tab._props.name == "first") {
        this.consumeData = [
          { value: 335, name: "开户奖励" },
          { value: 310, name: "转账收入" },
          { value: 234, name: "余额更新" },
          { value: 135, name: "订单扣款" }
        ];
      } else if (tab._props.name == "second") {
        this.orderData = [
          { value: 335, name: "智慧树" },
          { value: 310, name: "超星/尔雅/学习通" },
          { value: 234, name: "新世界/清华外语/新国际" },
          { value: 435, name: "运动世界校园" },
          { value: 235, name: "e学会" }
        ];
      } else {
        this.actionData=[{
            name: "订单数量",
            type: "line",
            stack: "总量",
            data: [0, 0, 10, 0, 0, 0, 0]
          },
          {
            name: "订单金额",
            type: "line",
            stack: "总量",
            data: [0, 0, 2, 0, 1, 0, 0]
          },
          {
            name: "下级发展",
            type: "line",
            stack: "总量",
            data: [0, 0, 0, 0, 0, 0, 1]
          }
        ]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  margin-top: 30px;
  margin-bottom: 30px;
  ::v-deep .el-input__inner {
    height: 50px;
  }
}
.bottom {
  position: absolute;
  left: 30px;
  bottom: 30px;
}
.addImg {
  width: 105px;
  height: 30px;
  background: #fff;
  color: rgba(37, 122, 246, 1);
  border-radius: 4px;
  border: 1px solid rgba(37, 122, 246, 1);
  margin-right: 22px;
  text-align: center;
  padding-right: 5px;
}
.footer-left {
  display: flex;
  justify-content: flex-start;
}
::v-deep .el-dialog__body {
  padding-right: 0;
  padding-left: 0;
}
.dialog {
  ul {
    padding-left: 20px;
    margin-bottom: 20px;
    li {
      width: 100%;
      height: 57px;
      line-height: 57px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dcdcdc;
      span {
        margin-right: 35px;
      }
    }
  }
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.chartOne {
    margin-top: 15px;
}
</style>