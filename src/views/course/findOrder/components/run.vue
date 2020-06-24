<template>
  <div>
      <el-col :span="24" style="margin-bottom:30px;">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="title">请填写《运动世界校园》下单信息</div>
          <div class="form">
            <div class="form-title">跑步账号配置</div>
            <el-form
              :model="ruleForm"
              ref="ruleForm"
              label-width="50px"
              class="demo-ruleForm"
              label-position="top"
              size="large"
            >
              <el-form-item label="学校名称" prop="name">
                <el-input v-model="ruleForm.schoolName"></el-input>
              </el-form-item>
              <el-form-item :rules="[{required: true, message: '账号不能为空'}]" label="账号" prop="user">
                <el-input v-model="ruleForm.user"></el-input>
              </el-form-item>
              <el-form-item
                label="密码"
                :rules="[{required: true, message: '密码不能为空'}]"
                prop="password"
              >
                <el-input v-model="ruleForm.password"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:542px;">
          <div class="title">
            <span>跑步起点配置</span>
            <el-input
              style="width:130px;margin-right:30px;"
              v-model="beginlocal"
              placeholder="请输入起跑地点"
            ></el-input>
          </div>
          <div class="content"></div>
          <div class="bottom">
            <el-button type="primary" style="margin-right:20px;width:140px;">增加跑步配置</el-button>
            <el-button type="success" style="width:140px;">创建订单</el-button>
          </div>
        </el-card>
      </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginlocal: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  height: 76px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 76px;
  padding-left: 30px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;
}
.form {
  padding: 0 30px;
  //   width: 1560px;
  margin: 30px 20px 30px 30px;
  height: 450px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid rgba(220, 220, 220, 1);
  .form-title {
    height: 76px;
    line-height: 76px;
    // padding-left: 30px;
    border-bottom: 1px solid #ebeef5;
  }
}
.content {
  width: 100%;
  height: 350px;
  background: skyblue;
  margin-bottom: 30px;
}
.bottom {
  display: flex;
  justify-content: flex-start;
}
</style>