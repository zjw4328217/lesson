<template>
  <div>
    <div class="search">
      <el-input placeholder="订单号/课程名称/账号信息" v-model="searchValue" class="input-with-select">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
    </div>
    <div class="content">
      <el-table
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 100%"
        :row-style="{height:'60px'}"
      >
        <el-table-column prop="order" label="订单号" width="250"></el-table-column>
        <el-table-column prop="mark" label="课程名称" width="230"></el-table-column>

        <el-table-column prop="before" label="单价" width="150">
          <template slot-scope="scope">
            <div style="color:#257AF6">￥{{ scope.row.before }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="edit" label="订单金额" width="150">
          <template slot-scope="scope">
            <div style="color:#257AF6">￥{{ scope.row.edit }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="操作时间"></el-table-column>
        <el-table-column width="150" label="状态">
          <template slot-scope="scope">
            <div style="color:#36A247;">{{ scope.row.type }}</div>
          </template>
        </el-table-column>
      </el-table>
      <div class="bottom">
        <div>
          <el-pagination
            background
            layout="prev, pager, next, total"
            :total="tableData.length"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          ></el-pagination>
        </div>
        <div>
          <span >合计：￥80</span>
          <el-button style="margin-left:20px;" type="primary">批量付款</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      pagesize: 10,
      currpage: 1,
      tableData: [
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20163",
          type: "订单完成",
          order: "15163232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20162",
          type: "订单完成",
          order: "15183232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20164",
          type: "订单完成",
          order: "15173232141",
          before: 30,
          edit: 5.1,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
        },
        {
          id: "20161",
          type: "订单完成",
          order: "15193232141",
          before: 3,
          edit: 5,
          after: 24.9,
          mark: "U校园4.32",
          time: "2020-06-08 14:26:27"
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
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
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
  height: 680px;
  .bottom {
      width: 1100px;
    position: absolute;
    left: 30px;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>