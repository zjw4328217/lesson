<template>
  <div>
    <!-- <div class="top"> -->
    <el-row type="flex" style="height:100px;background: rgba(38, 46, 67, 1);">
      <el-col :span="24" style="display:flex;align-items:center;padding-left:10%;">
        <div class="h1">
          <img src="~@/assets/logo@2x.png" />
        </div>
        <div class="right">登录</div>
      </el-col>
    </el-row>

    <!-- </div> -->
    <!-- <div class="content"> -->
      <div class="content1">

      
    <el-row :gutter="40" style="padding-top:50px;">
      <el-col :xs="0" :sm="12" :md="12" :lg="12">
        <div class="content-left">
          <img src="~@/assets/login@2x.png" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12">
        <div class="content-right">
          <div class="title">欢迎登录一课一代</div>
          <el-form
            :model="ruleForm"
            status-icon
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            style="width:100%;"
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
            <el-form-item style="dispaly:flex;" inline="false">
              <el-input
                style="width:70%;"
                placeholder="验证码"
                size="large"
                class="codeIpt"
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
    </el-row>
    </div>
    <!-- </div> -->
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
.content1 {
  width: 100%;
  overflow: hidden;
}
.top {
  display: flex;
  // width: 1920px;
  width: 100%;
  height: 100px;
  background: rgba(38, 46, 67, 1);
  padding-left: 160px;
  padding-top: 27px;
}
.h1 {
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
  // width: 1236px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 616px;
  padding-top: 53px;
  // padding-left: 100px;
}
.content-left {
  width: 100%;
  height: 513px;
  padding-left: 10%;
  img {
    width: 400px;
  }
}
.content-right {
  margin-top: 68px;
  width: 100%;
  height: 444px;
  padding-top: 60px;
  box-sizing: border-box;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  .title {
    width: 100%;
    height: 24px;
    text-align: center;
    font-size: 24px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
::v-deep .el-form-item__content {
  margin: 0!important;
  padding:0 20px;
}
::v-deep .el-row {
  padding-right: 0;
}
@media only screen and (max-width: 470px) {
  // .content-left {
  //   display: none;
  // }
  .top {
    padding-left: 10px;
    box-sizing: border-box;
    width: 100vw !important;
  }
  ::v-deep .content {
    // display: block!important;
    padding: 0;
    height: auto;
    .el-form-item__content {
      margin: 0 10px !important;
    }
    .codeIpt {
      width: 70% !important;
    }
  }
}
@media (min-width: 1100px) {
  .content-right {
      width: 600px!important;
    }
  ::v-deep .content {
    .content-left {
      width: 600px;
    }
    
    .el-form-item__content {
      margin: 0 10px !important;
    }
    ::v-deep .el-form {
      box-sizing: border-box !important;
      padding-right: 30px !important;
    }
  }
}
</style>