<template>
  <div>
    <div class="top">
      <el-date-picker style="width:100%" v-model="value1" type="date" placeholder="查询时间"></el-date-picker>
    </div>
    <div class="content">
      <el-table
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="num" label="批次号"></el-table-column>
        <el-table-column prop="name" label="教程名称"></el-table-column>
        <el-table-column prop="status" label="处理状态">
          <template slot-scope="scope">
            <div style="color:#36A247;">{{ scope.row.status ? '处理完毕': '正在处理'}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="numCount" label="批次数量"></el-table-column>
        <el-table-column prop="successNum" label="成功数量"></el-table-column>
        <el-table-column prop="failNum" label="失败数量"></el-table-column>
        <el-table-column prop="submitTime" label="提交时间"></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">批次详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="bottom"
        background
        layout="prev, pager, next, sizes, total, jumper"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
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
      tableData: [
        {
          num: "1",
          name: "智慧树/知到1",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "2",
          name: "智慧树/知到2",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "3",
          name: "智慧树/3知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树2/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        },
        {
          num: "15",
          name: "智慧树/知到",
          status: true,
          numCount: "13",
          successNum: "5",
          failNum: "8",
          submitTime: "2020-06-19 11:23:42"
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
          path:'/course-detail',
          query:{
              id:index
          }
      })
    },
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
.content {
  width: 100%;
  padding: 30px 0;
  // position: relative;
}
.bottom {
  position: absolute;
  left: 30px;
  bottom: 30px;
}
</style>