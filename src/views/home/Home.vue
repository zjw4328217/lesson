<template>
  <div>
    <el-row type="flex" :gutter="20">
      <el-col :span="7">
        <el-card shadow="hover" class="mgb20" style="height:475px;">
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
      <el-col :span="5">
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
      <el-col :span="12">
        <el-card
          shadow="hover"
          :body-style="{padding: '30px'}"
          style="margin-bottom: 20px;height:470px;position:relative;"
        >
          <el-table
            :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
            style="width: 100%;margin-bottom:20px;"
          >
            <el-table-column prop="date" label="公共内容"></el-table-column>
            <el-table-column prop="name" label="发布人"></el-table-column>
            <el-table-column prop="date" label="发布时间"></el-table-column>
          </el-table>

          <el-pagination
            background
            layout="prev, pager, next, total"
            :page-size="pagesize"
            :total="tableData.length"
            @current-change="handleCurrentChange"
            style="position:absolute;bottom:20px;left:20px"
          ></el-pagination>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" style="background:#fff;margin-bottom:32px;">
      <el-col :span="24">
        <line-chart :chart-data="lineChartData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from "vue-schart";
<<<<<<< HEAD
import LineChart from "./components/LineChart";
=======
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
export default {
  data() {
    return {
      data: "",
<<<<<<< HEAD
      lineChartData: 
        {
          actualData: [120, 82, 91, 154, 162, 140, 130]
        }
      ,
      pagesize: 8,
      currpage: 1,
=======
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
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
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
<<<<<<< HEAD
    Schart,
    LineChart
=======
    Schart
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
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
<<<<<<< HEAD
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
=======
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
>>>>>>> 5760e282aee17ed47ce777b64a2b3462f0d5848d
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