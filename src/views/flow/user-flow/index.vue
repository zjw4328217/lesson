<template>
  <div>
    <div class="top">
      <div class="left">
        <span>流水类型</span>
        <el-select v-model="flowType" placeholder="流水类型">
          <el-option
            v-for="item in optionType"
            :label="item.label"
            :value="item.value"
            :key="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="middle">
        <span>流水单号</span>
        <el-select v-model="flowOrder" placeholder="流水单号">
          <el-option
            v-for="item in optionOrder"
            :label="item.label"
            :value="item.value"
            :key="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="right">
        <span>流水时间</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-button
          type="primary"
          style="height:50px;width:100px;margin-left:20px;font-size:16px;"
          icon="el-icon-search"
        >查询</el-button>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 100%"
      >
        <el-table-column prop="id" label="id" width="70"></el-table-column>
        <el-table-column label="流水类型" width="80">
          <template slot-scope="scope">
            <div style="color:#257AF6;">{{ scope.row.type }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="order" label="流水单号" width="150"></el-table-column>
        <el-table-column prop="before" label="操作前余额"></el-table-column>
        <el-table-column prop="edit" label="操作余额"></el-table-column>
        <el-table-column prop="after" label="操作后余额"></el-table-column>
        <el-table-column prop="progress" label="操作流程">
          <template slot-scope="scope">
            <div>{{ scope.row.before }}&nbsp;-&nbsp;{{scope.row.edit}}&nbsp;=&nbsp;{{scope.row.after}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="mark" label="操作备注"></el-table-column>
        <el-table-column prop="time" label="操作时间"></el-table-column>
      </el-table>
      <el-pagination
        class="bottom"
        background
        layout="prev, pager, next, total"
        :total="tableData.length"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagesize: 10,
      currpage: 1,
      tableData: [
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20163",
          type: "扣款",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20162",
          type: "扣款",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20164",
          type: "扣款",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        },
        {
          id: "20161",
          type: "扣款",
          order: "15193232141",
          before: 3,
          edit: 5,
          after: 24.9,
          mark: 'U校园1各单元的代刷任务4.32总价：4.32',
          time: '2020-06-08 14:26:27'
        }
      ],
      flowType: "",
      flowOrder: "",
      value1: "",
      optionType: [
        {
          label: "收入",
          value: "1"
        },
        {
          label: "支出",
          value: "2"
        },
        {
          label: "代理返点",
          value: "3"
        }
      ],
      optionOrder: [
        {
          label: "收入",
          value: "1"
        },
        {
          label: "支出",
          value: "2"
        },
        {
          label: "代理返点",
          value: "3"
        }
      ]
    };
  },
  methods:{
      handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 120px;
  line-height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    margin-right: 20px;
  }
}
::v-deep .el-input__inner {
  height: 50px;
  line-height: 50px;
}
::v-deep .el-range-separator {
  height: 50px;
  line-height: 50px;
}
.content {
    padding: 30px;
    background: #fff;
    position: relative;
    height: 700px;
    .bottom {
  position: absolute;
  left: 30px;
  bottom: 10px;
}
}
</style>