<template>
  <div>
    <el-row type="flex" justify>
      <el-col :span="24">
        <div class="search">
          <el-input
            placeholder="请输入订单号/客户信息/代理等级等关键字"
            v-model="searchValue"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="订单详情" style="width:160px;">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
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
            <el-table-column prop="id" label="id" width="60"></el-table-column>
            <el-table-column prop="user" width="90" label="客户账号"></el-table-column>
            <el-table-column prop="tel" label="客户手机号" width="100"></el-table-column>
            <el-table-column prop="indety" width="80" label="客户身份"></el-table-column>
            <el-table-column prop="orderNum" width="140" label="订单号"></el-table-column>
            <el-table-column label="充值金额" width="100">
              <template slot-scope="scope">
                <div>￥ {{ scope.row.payAccount }}</div>
              </template>
            </el-table-column>
            <el-table-column label="赠送金额" width="100">
              <template slot-scope="scope">
                <div>￥ {{ scope.row.freeAccount }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="beginDate" label="创建时间" width="140"></el-table-column>
            <el-table-column label="状态" width="80">
              <template slot-scope="scope">
                <div style="color:#36A247" v-show="scope.row.status == 1">处理成功</div>
                <div style="color:#F5A623" v-show="scope.row.status == 2">等待收款</div>
                <div style="color:#9B9B9B" v-show="scope.row.status == 3">取消付款</div>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <div style="display:flex;justify-content:space-between;">
                  <div>操作</div>
                  <button class="addImg">
                    <i class="el-icon-plus el-icon--right"></i>
                    收款码配置
                  </button>
                </div>
              </template>
              <template slot-scope="scope">
                <div style="display:flex;">
                  <el-button
                    style="height:30px;border-radius:4px;"
                    type="primary"
                    @click="go(scope.row)"
                  >显示凭证</el-button>
                  <el-button
                    style="height:30px;background:#36A247;border-radius:4px;color:rgba(255,255,255,1);"
                    @click="confirm"
                  >确认已收款</el-button>
                  <el-button
                    style="height:30px;background:#fff;color:rgba(37,122,246,1);border-radius:4px;border:1px solid rgba(37,122,246,1);"
                  >取消订单</el-button>
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
    <el-dialog title="确认收款" :visible.sync="dialogVisible" width="23%" :before-close="handleClose">
      <div>
          <div style="margin-bottom:20px;">

        <el-radio v-model="radio" label="1">不赠送</el-radio>
        <el-radio v-model="radio" label="2">赠送</el-radio>
          </div>

        <el-select v-model="precent" placeholder="按比例赠送金额" style="margin-bottom:20px;width:100%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>

        </el-select>
        <el-input v-model="input" placeholder="输入自定义金额" style="margin-bottom:20px;"></el-input>
        <div style="margin-bottom:20px;">最终到账&nbsp;&nbsp;&nbsp;<span style="color:#257AF6;">1100</span></div>
      </div>
      <span class="footer-left">
        <el-button @click="dialogVisible = false" style="width:100px;border:1px solid #257AF6;color:#257AF6;">取 消</el-button>
        <el-button type="primary" style="width:100px;" @click="dialogVisible = false">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, //弹框显示与否
      radio: "1", //不赠送
      searchValue: "", //搜索内容
      select: "", //选择内容
      pagesize: 10,
      currpage: 1,
      precent: '',
      input:'', //弹窗输入金额
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
          status: "1",
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
          status: "2",
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
          status: "3",
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
          status: "2",
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
          status: "1",
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
          status: "2",
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
          status: "1",
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
          status: "2",
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
          status: "1",
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
          status: "2",
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
          status: "1",
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
          status: "2",
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
          status: "1",
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
          status: "3",
          orderNum: "6001683003586476"
        }
      ]
    };
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
  margin-right: 30px;
  text-align: center;
  padding-right: 5px;
}
.footer-left {
    display: flex;
    justify-content: flex-start;
}
</style>