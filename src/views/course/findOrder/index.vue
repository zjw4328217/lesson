<template>
  <div>
    <h3>
      <img src="~@/assets/warning-circle@2x.png" alt />
      <span>{{warning}}</span>
      <span
        style="color:#257AF6;"
        v-show="select == 4 || select ==3"
      >下单格式：学校 账号 密码 教材（批量下单时需要填写教材，查询下单不用） 用1个空格隔开</span>
      <!-- <span style="color:#257AF6;" v-show="select == 3">下单格式：学校 账号 密码 教材（批量下单时需要填写教材，查询下单不用） 用1个空格隔开</span> -->
    </h3>
    <el-col :span="24">
      <div class="select">
        <el-select
          @change="selectOne"
          style="width:100%;margin-bottom:30px;"
          v-model="select"
          placeholder="请下拉选择课程"
          popper-class="select-down"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </el-col>
    <div class="main" v-if="select == 0">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="12" style="margin-bottom:30px;">
          <el-card
            shadow="hover"
            :body-style="{padding: '0px'}"
            style="height:700px;position:relative;"
          >
            <div class="title"></div>
            <div class="bottom">
              <el-switch
                v-model="select"
                active-color="#ff4949"
                inactive-color="#409EFF"
                style="height:100%;line-height:100%"
                active-text="秒刷模式"
                inactive-text="普通代刷"
              ></el-switch>
              <el-button type="primary">加载课程</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card
            shadow="hover"
            :body-style="{padding: '0px'}"
            style="height:700px;position:relative;"
          >
            <h4>课程信息</h4>
            <div class="bottom">
              <div class="left">合计：￥{{money}}</div>
              <el-button type="primary">确认下单</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <v-run v-else-if="select == 1"></v-run>
    <v-lesson v-else-if="select == 3"></v-lesson>
    <v-uschool v-else-if="select == 4"></v-uschool>
  </div>
</template>

<script>
import vRun from "./components/run";
import vLesson from "./components/netLesson";
import vUschool from "./components/uSchool";
export default {
  data() {
    return {
      select:'',
      money: 0,
      value: "",
      warning: "注意事项：课程的公告及个性化需要会在此显示。",
      options: [
        {
          value: "1",
          label: "运动世界校园"
        },
        {
          value: "2",
          label: "智慧树/知到"
        },
        {
          value: "3",
          label: "超星/尔雅/学习通"
        },
        {
          value: "4",
          label: "u校园"
        },
        {
          value: "5",
          label: "优课联盟"
        },
        {
          value: "6",
          label: "体育势能代跑"
        },
        {
          value: "7",
          label: "FIF口语"
        }
      ]
    };
  },
  components: {
    vRun,
    vUschool,
    vLesson
  },
  methods: {
    selectOne() {
      console.log(this.select);

      switch (this.select) {
        case "1":
          this.warning =
            "代跑时间开始前半小时退出登录，自由跑支持任何位置，室内锻炼无论多少步都只需要下单1KM，绝对匹配规则。";
          break;
        case "3":
          this.warning = "平时分会每天做半小时慢慢刷，截止前48小时会全部做完。";
          break;
        case "4":
          this.warning =
            "一门课不能下多个订单，一本大约一天做完，重刷也请等待1天再上号看。";
          break;
        case "5":
          this.warning = "5";
          break;
        default:
          this.value = "请选择";
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  span {
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(51, 51, 51, 1);
    line-height: 16px;
  }
}
.title {
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  padding-left: 30px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 46px;
}
.title:hover {
  color: rgba(37, 122, 246, 1);
  background: rgba(246, 249, 255, 1);
}
.bottom {
  box-sizing: border-box;
  padding: 15px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h4 {
  height: 76px;
  line-height: 76px;
  padding-left: 30px;
  border-bottom: 1px solid #ebeef5;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
}

::v-deep .select .el-input__inner {
  height: 50px;
}
::v-deep .select {
  .select-down {
    min-width: 611px !important;
  }
}
</style>