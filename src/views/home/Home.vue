<template>
  <div>
    <el-col :span="7">
      <el-card shadow="hover" class="mgb20" style="height:475px;margin-right:30px;">
        <div class="user-info">
          <img :src="data.headImgUrl" class="user-avator" alt />
          <div class="user-info-cont">
            <div class="user-info-name">欢迎您，{{data.account}}</div>
            <div class="user-info-level">{{data.roleName}}</div>
          </div>
        </div>
        <div class="user-account">
          <span class="title">我的账号</span>
          <span class="desc">{{data.account}}</span>
        </div>
        <div class="user-account">
          <span class="title">我的上级</span>
          <span class="desc">{{data.parentUserName}}</span>
        </div>
        <div class="user-account">
          <span class="title">我的昵称</span>
          <span class="desc">{{data.nickName}}</span>
        </div>
        <div class="user-account">
          <span class="title">手机号码</span>
          <span class="desc">{{data.phone}}</span>
        </div>
        <div class="user-account">
          <span class="title">QQ号码</span>
          <span class="desc">{{data.qq}}</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="7" style="margin-right:30px;">
      <el-card shadow="hover" :body-style="{padding: '0px'}" style="margin-bottom: 20px;">
        <div class="grid-content">
          <span class="iconImg">
            <img src="~@/assets/order@2x.png" alt />
          </span>
          <div class="grid-cont-right">
            <div class="grid-title">我的订单</div>
            <div class="grid-num">{{data.menuList.length}}</div>
          </div>
        </div>
      </el-card>
      <el-card shadow="hover" :body-style="{padding: '0px'}" style="margin-bottom: 20px;">
        <div class="grid-content">
          <span class="iconImg">
            <img src="~@/assets/order@2x.png" alt />
          </span>
          <div class="grid-cont-right">
            <div class="grid-title">可用余额</div>
            <div class="grid-num">{{data.permissionList.length}}</div>
          </div>
        </div>
      </el-card>
      <el-card shadow="hover" :body-style="{padding: '0px'}">
        <div class="grid-content">
          <span class="iconImg">
            <img src="~@/assets/order@2x.png" alt />
          </span>
          <div class="grid-cont-right">
            <div class="grid-title">下级代理</div>
            <div class="grid-num">{{data.level}}</div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="7">
      <el-card
        shadow="hover"
        :body-style="{padding: '30px'}"
        style="margin-bottom: 20px;height:470px;"
      >
        <el-table :data="tableData" style="width: 100%" height="470px">
          <el-table-column prop="date" label="公共内容" width="100"></el-table-column>
          <el-table-column prop="name" label="发布人" width="100"></el-table-column>
          <el-table-column prop="date" label="发布时间"></el-table-column>
        </el-table>
        <div class="block">
          <span class="demonstration">共99条</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="5"
            layout="total, prev, pager, next"
            :total="99"
          ></el-pagination>
        </div>
      </el-card>
    </el-col>
    <!-- <el-row :gutter="40"> -->
      <el-col :span="24" style="height:200px;">
        <el-card shadow="hover">
          <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
        </el-card>
      </el-col>
    <!-- </el-row> -->
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  data() {
    return {
      data: "",
      options2: {
        type: "line",
        title: {
          text: "最近几个月各品类销售趋势图"
        },
        labels: ["2020/6/15", "2020/6/16", "2020/6/17", "2020/6/18", "2020/6/19","2020/6/20","2020/6/21"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230,20,60]
          }
        ]
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "5.2更新记录"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "5.2更新记录"
        }
      ],
      currentPage1: 5
    };
  },
  components: {
    Schart
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios({
        method: "get",
        url: "/api/user/info"
      }).then(res => {
        console.log(res.data.data);
        this.data = res.data.data;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  width: 100%;
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #ebeef5;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
.user-info-cont {
  padding-top: 14px;
  .user-info-name {
    margin-bottom: 10px;
    width: 123px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(51, 51, 51, 1);
    line-height: 16px;
  }
  .user-info-level {
    width: 123px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(37, 122, 246, 1);
    line-height: 16px;
  }
}
.user-account {
  height: 62px;
  line-height: 62px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(51, 51, 51, 1);
    line-height: 16px;
  }
}
.grid-content {
  width: 100%;
  height: 143px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  box-sizing: border-box;
  .iconImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: #257af6;
    border-radius: 50%;
    margin-right: 30px;
    img {
      width: 36px;
      height: 36px;
    }
  }
}
.grid-cont-right {
  .grid-title {
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(51, 51, 51, 1);
    line-height: 16px;
    margin-bottom: 12px;
  }
  .grid-num {
    width: 83px;
    height: 32px;
    font-size: 32px;
    font-family: MicrosoftYaHei;
    color: rgba(37, 122, 246, 1);
    line-height: 32px;
  }
}
</style>