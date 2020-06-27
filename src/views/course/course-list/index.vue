<template>
  <div>
    <el-row type="flex">
      <el-col :span="24">
        <div class="top">
          <el-input v-model="input" placeholder="订单号/课程名称/账号信息"></el-input>
          <el-button
            type="primary"
            style="width:100px;height:50px;lien-height:50px;padding:0 10px;"
          >
            <span class="img">
              <img src="~@/assets/search@2x.png" alt />
            </span>
            <span class="title">搜索</span>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify>
      <el-col :span="24">
        <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          >
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-table
                  :data="scope.row.children"
                  style="width: calc(100% - 47px);"
                  :header-cell-style="{background:'rgba(247,250,255,1)'}"
                  class="two-list"
                >
                  <el-table-column prop="lessonName" label="课程名称"></el-table-column>
                  <el-table-column prop="type" label="代做类型"></el-table-column>
                  <el-table-column prop="finishLevel" label="完成集数"></el-table-column>
                  <el-table-column prop="taskBegin" label="考试开始"></el-table-column>
                  <el-table-column prop="taskEnd" label="考试结束"></el-table-column>
                  <el-table-column prop="count" label="分数"></el-table-column>
                  <el-table-column prop="count" label="状态"></el-table-column>
                  <el-table-column prop="count" label="操作"></el-table-column>

                  <el-table-column prop="editOne" label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        style="border:1px solid rgba(37,122,246,1);color:#257AF6;border-radius:15px;height:30px;"
                        @click="handleEditOne(scope.$index, scope.row)"
                      >进度跟踪</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column prop="lesson" label="教材"></el-table-column>
            <el-table-column prop="school" label="学校"></el-table-column>
            <el-table-column prop="user" label="账号"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column prop="money" label="金额"></el-table-column>
            <el-table-column prop="mark" label="备注"></el-table-column>
            <el-table-column prop="beginDate" label="创建时间"></el-table-column>
            <el-table-column prop="endDate" label="完成时间"></el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <div style="color:#36A247;">{{ scope.row.status }}</div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  style="border-radius:15px;"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                >一键冲刷</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-dialog
            title="进度跟踪"
            :visible.sync="dialogVisible"
            width="30%"
            custom-class="dialog-one"
          >
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
              >
                <div v-if="index >= 1">{{activity.timestamp}}&nbsp;{{activity.content}}</div>
                <div v-else style="color:#36A247;">{{activity.timestamp}}&nbsp;{{activity.content}}</div>
              </el-timeline-item>
            </el-timeline>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          lesson: "超星/尔雅/学习通，2号",
          school: "洛阳理工学院",
          user: "18438623738",
          password: "19981208wp",
          money: "20",
          mark: "无",
          beginDate: "2020-06-08 14:26:27",
          endDate: "2020-06-08 14:26:27",
          status: "任务完成",
          children: [
            {
              lessonName: "东方电影",
              type: "ALL",
              finishLevel: "2",
              taskBegin: "2020-06-08 14:26:27",
              taskEnd: "2020-06-08 14:26:27",
              count: "90"
            }
          ]
        },
        {
          lesson: "超星/尔雅/学习通，2号",
          school: "洛阳理工学院",
          user: "18438623738",
          password: "19981208wp",
          money: "20",
          mark: "无",
          beginDate: "2020-06-08 14:26:27",
          endDate: "2020-06-08 14:26:27",
          status: "任务完成",
          children: [
            {
              lessonName: "东方电影",
              type: "ALL",
              finishLevel: "2",
              taskBegin: "2020-06-08 14:26:27",
              taskEnd: "2020-06-08 14:26:27",
              count: "90"
            }
          ]
        },
        {
          lesson: "超星/尔雅/学习通，2号",
          school: "洛阳理工学院",
          user: "18438623738",
          password: "19981208wp",
          money: "20",
          mark: "无",
          beginDate: "2020-06-08 14:26:27",
          endDate: "2020-06-08 14:26:27",
          status: "任务完成",
          children: [
            {
              lessonName: "东方电影",
              type: "ALL",
              finishLevel: "2",
              taskBegin: "2020-06-08 14:26:27",
              taskEnd: "2020-06-08 14:26:27",
              count: "90"
            }
          ]
        },
        {
          lesson: "超星/尔雅/学习通，2号",
          school: "洛阳理工学院",
          user: "18438623738",
          password: "19981208wp",
          money: "20",
          mark: "无",
          beginDate: "2020-06-08 14:26:27",
          endDate: "2020-06-08 14:26:27",
          status: "任务完成",
          children: [
            {
              lessonName: "东方电影",
              type: "ALL",
              finishLevel: "2",
              taskBegin: "2020-06-08 14:26:27",
              taskEnd: "2020-06-08 14:26:27",
              count: "90"
            }
          ]
        }
      ],
      input: "",
      activities: [
        {
          content: "订单完成",
          timestamp: "2018-04-03 20:46",
          color: "#36A247"
        },
        {
          content: "正在代做",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "账号登陆成功",
          timestamp: "2018-04-03 20:46"
        },
        {
          content: "正在代做",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "账号登陆成功",
          timestamp: "2018-04-03 20:46"
        },
        {
          content: "正在代做",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "账号登陆成功",
          timestamp: "2018-04-03 20:46"
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleEditOne(index, row) {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 0;
  display: flex;
  align-items: center;

  .img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    img {
      width: 18px;
      border: 0;
      vertical-align: middle;
    }
  }
  .title {
    display: inline-block;
    height: 32px;
    line-height: 32px;
  }
}
::v-deep .el-input__inner {
  height: 50px;
}
::v-deep .dialog-one {
  .el-dialog__body {
    margin-right: 20px;
    padding-bottom: 20px;
    height: 200px !important;
    overflow-x: hidden;
  }
}
@media screen and (max-width: 470px) {
  ::v-deep .el-dialog {
    width: 100% !important;
  }
}
</style>