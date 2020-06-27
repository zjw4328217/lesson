<template>
  <div>
    <div class="search">
      <el-row>
        <el-col :xs="24" :md="12">
          <div class="left">
            <span>关键字</span>
            <el-input style="width:80%;" v-model="keyword" placeholder="关键字"></el-input>
          </div>
        </el-col>
        <el-col :xs="24" :md="12">
          <div class="right">
            <span>工单状态</span>
            <el-select style="width:72%;" v-model="selected" placeholder="全部状态">
              <el-option
                v-for="item in option"
                :label="item.label"
                :value="item.value"
                :key="item.value"
              ></el-option>
            </el-select>
            <el-button
              style="width:100px;height:50px;margin-left:10px;font-size:16px;"
              icon="el-icon-search"
              type="primary"
            >搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-card shadow="hover" :body-style="{padding: '30px'}" style="height:650px;position:relative;">
      <div class="content">
        <el-table
          :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
          style="width: 100%;"
        >
          <el-table-column prop="id" label="工单号"></el-table-column>
          <el-table-column prop="tel" label="类型"></el-table-column>
          <el-table-column prop="orderNum" label="标题"></el-table-column>
          <el-table-column prop="beginDate" label="发生时间"></el-table-column>
          <el-table-column label="工单状态">
            <template slot-scope="scope">
              <div style="color:#36A247" v-show="scope.row.status == 1">关闭成功</div>
              <div style="color:#F5A623" v-show="scope.row.status == 2">等待处理</div>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot="header">
              <div></div>
            </template>
            <template slot-scope="scope">
              <div style="display:flex;">
                <el-button
                  style="height:30px;background:#fff;color:rgba(37,122,246,1);border-radius:4px;border:1px solid rgba(37,122,246,1);"
                  @click="go(scope.row)"
                >查看内容</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
              
          
        <div class="bottom">
          <el-row >
          <el-col :xs="24" :md="12">

              
             
          <div class="bottom-left">
            <el-pagination
              background
              layout="prev, pager, next,  total"
              :page-sizes="[5, 10]"
              :page-size="pagesize"
              :total="tableData.length"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
            ></el-pagination>
          </div>
          </el-col>
           <el-col :xs="24" :md="12">

              
          <div class="bottom-right">
            <el-button type="primary" icon="el-icon-plus">发起工单</el-button>
          </div>
          </el-col>
        </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      selected: "",
      option: [
        {
          label: "1",
          value: 1
        }
      ],
      tableData: [
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "3",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "2",
          orderNum: "6001683113586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "1",
          orderNum: "6001683003586476"
        },
        {
          id: 1,
          user: "李三",
          tel: "13526320123",
          indety: "三级代理",
          payAccount: "12.00",
          freeAccount: "0.00",
          beginDate: "2020-06-13 18:08:12",
          status: "3",
          orderNum: "6001683003586476"
        }
      ],
      pagesize: 10,
      currpage: 1,
      screenWidth:document.body.clientWidth
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
    console.log(this.screenWidth);
    if(this.screenWidth < 500 ){
      this.pagesize = 5;
    }
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    go(data) {
      console.log(data);
      this.$router.push({
        path: "/complaints-details",
        query: {
          id: data.id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ::v-deep .el-input__inner {
    height: 50px;
  }
  .left {
    width: 50%;
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 60px;
      margin-right: 13px;
    }
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      margin-right: 13px;
      width: 70px;
    }
  }
}
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
}
.bottom-left {
  position: absolute;
  left: 30px;
  bottom: 30px;
}
.bottom-right {
  position: absolute;
  right: 30px;
  bottom: 30px;
}
@media only screen and (max-width: 470px) {
  .search {
    height: 150px;
    .left {
      width: 100%;
      padding:0 10px;
      box-sizing: border-box;
      margin-bottom: 10px;
      span {
        width: 70px;
        margin-right: 3px;
      }
    }
    .right {
      width: 100%;
      box-sizing: border-box;
      padding:0 10px;
      span {
        display: block;
        width: 105px;
        margin-right: 3px;
        letter-spacing: 0;
        font-size: 14px;
      }
    }
  }
  ::v-deep .is-hover-shadow {
    height: 470px!important;
  }

  .bottom {
    padding-left: 30px;
  }
  .bottom-right {
    position: relative;
    left: 0;
    bottom: 0;
    
  }
  .bottom-left {
    bottom: 0;
    margin-bottom: 10px;
    left: 0;
    position: relative;
  }
}
</style>