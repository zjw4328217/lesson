<template>
  <div>
    <div class="top">
      <h1>
        <img src="~@/assets/logo@2x.png" />
      </h1>
      <div class="right">登录</div>
    </div>
    <div class="content">
      <el-col :xs="24" :md="24" lg="12">
        <div class="content-left">
          <img src="~@/assets/login@2x.png" />
        </div>
      </el-col>
      <el-col :xs="24" :md="24" lg="12">
        <div class="content-right">
          <div class="title">欢迎登录一课一代</div>
          <el-form
            :model="ruleForm"
            status-icon
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            style="width:500px;"
          >
            <el-form-item style="height:50px;">
              <el-input
                size="large"
                placeholder="用户名"
                type="text"
                v-model="ruleForm.user"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item style="height:50px;">
              <el-input
                type="password"
                placeholder="密码"
                v-model="ruleForm.password"
                autocomplete="off"
                size="large"
              ></el-input>
            </el-form-item>
            <el-form-item inline="true">
              <el-input
                style="width:75%;"
                placeholder="验证码"
                size="large"
                v-model.number="ruleForm.code"
              ></el-input>
              <el-image
                @click="getImg"
                style="height:25px;margin:0;margin-left:10px;padding-top:10px;overflow:visible;"
                :src="url"
                fit="contain"
              ></el-image>
            </el-form-item>
            <el-form-item style="margin-top:20px;">
              <el-button type="primary" @click="submitForm" style="height:50px;width:100%;">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        user: "",
        password: "",
        code: ""
      },
      url: ""
    };
  },
  mounted() {
    this.getImg();
    console.log(document.cookie);
  },
  //   watch: {
  //       url:{
  //           handler(newVal, oldVal){
  //               this.url = newVal
  //             console.log(newVal);

  //         },
  //         deep:true
  //       }
  //   },
  methods: {
    submitForm() {
      if (!this.ruleForm.user) {
        alert("请输入用户名");
        return;
      }
      if (!this.ruleForm.password) {
        alert("请输入密码");
        return;
      }
      if (!this.ruleForm.code) {
        alert("请输入验证码");
        return;
      }
      var str = {
        userName: this.ruleForm.user,
        passWord: this.ruleForm.password,
        validateCode: this.ruleForm.code
      };
      this.$axios({
        method: "post",
        url: "/api/user/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          withCredentials: true
        },
        data: this.transformRequest(str)
      }).then(res => {
        console.log(res);
        if (res.data.code == "200") {
          this.$router.push("/home");
        }
      });
    },
    getImg() {
      this.$axios({
        method: "get",
        url: "/api/code/download"
      }).then(res => {
        this.url = "";
        console.log(res);
        this.url = `/api/code/download?${res.data}`;
      });
    },
    transformRequest(data) {
      // 对 data 进行任意转换处理
      let str = "";
      for (const key in data) {
        str +=
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key]) + "&";
      }
      return str.slice(0, str.length - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  // width: 1920px;
  width: 100%;
  height: 100px;
  background: rgba(38, 46, 67, 1);
  padding-left: 160px;
  padding-top: 27px;
}
h1 {
  width: 200px;
  height: 47px;
  margin-right: 21px;
  img {
    width: 100%;
  }
}
.right {
  margin-top: 14px;
  width: 60px;
  height: 18px;
  text-indent: 14px;
  font-size: 18px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 18px;
  border-left: 1px solid rgba(255, 255, 255, 1);
}
.content {
  width: 1236px;
  margin: 0 auto;
  display: flex;
  height: 616px;
  padding-top: 53px;
  // padding-left: 100px;
}
.content-left {
  width: 600px;
  height: 513px;
  margin-right: 61px;
  img {
    width: 100%;
  }
}
.content-right {
  margin-top: 68px;
  width: 640px;
  height: 444px;
  padding-top: 60px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  .title {
    width: 192px;
    height: 24px;
    font-size: 24px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
.el-form-item__content {
  margin: 0;
}
</style>