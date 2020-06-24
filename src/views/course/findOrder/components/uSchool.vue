<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:693px">
          <div class="title">请填写《U校园》下单信息</div>
          <div class="content">
            <ul>
              <li style="margin-bottom:10px;" v-for="(item,index) in list" :key="index">
                <span style="margin-right:10px;">{{item.school}}</span>
                <span style="margin-right:10px;">{{item.user}}</span>
                <span>{{item.password}}</span>
              </li>
            </ul>
          </div>
          <div class="desc">
            <span class="first">您已输入</span>
            <span class="second">2</span>
            <span class="first">个账号,其中有效账号</span>
            <span class="third">2</span>
            <span class="first">个,无效账号</span>
            <span class="four">0</span>
            <span>个</span>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <el-switch
                v-model="value1"
                active-color="#ff4949"
                inactive-color="#409EFF"
                style="height:100%;line-height:100%"
                active-text="秒刷模式"
                inactive-text="普通代刷"
              ></el-switch>
            </div>
            <div class="bottom-right">
              <el-button type="primary">加载课程</el-button>
            </div>
          </div>

          <!-- <div class="bottombtn">
            
          </div>-->
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:693px">
          <div class="title">
            <span>课程信息</span>
          </div>
          <div class="content1 content">
            <ul>
              <li>
                <div class="li-left">
                  <span style="color:#333">第</span>
                  <span style="color:#257AF6">1</span>
                  <span style="color:#333">个账号：17853621797</span>
                </div>
                <div class="li-right">
                  <span style="color:#36A247">查询成功</span>
                  <span>
                    <img src="~@/assets/rightarrow.png" />
                  </span>
                </div>
              </li>
              <li style="border-bottom:0;">
                <div class="li-left">
                  <span style="color:#333">第</span>
                  <span style="color:#257AF6">2</span>
                  <span style="color:#333">个账号：17853621797</span>
                </div>
                <div class="li-right">
                  <span style="color:#36A247">查询成功</span>
                  <span>
                    <img src="~@/assets/rightarrow.png" />
                  </span>
                </div>
              </li>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="课程名称" width="120">
                  <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column label="当前单元" width="120">
                  <template slot-scope="scope">
                    <el-select :disabled='scope.row.nowStatus' v-model="scope.row.now" placeholder="词汇篇">
                      <el-option
                        v-for="item in scope.row.begin"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="目标单元" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <el-select :disabled='scope.row.endStatus' v-model="scope.row.target" placeholder="语法篇">
                      <el-option
                        v-for="item in scope.row.end"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="all" label="整册代刷" show-overflow-tooltip>
                  <template>
                    <el-checkbox v-model="checked">整册代刷</el-checkbox>
                  </template>
                </el-table-column>
              </el-table>
            </ul>
          </div>
          <div class="bottomRight">
            <div class="left">合计：￥{{money}}</div>
            <el-button type="primary">确认下单</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: "0",
      value1: false,
      defaultProps: {
        children: "children",
        label: "label"
      },
      list: [
        {
          school: "山东大学",
          user: "1625256666",
          password: "dasd555"
        },
        {
          school: "山东青岛大学",
          user: "1625256666",
          password: "dasd555"
        },
        {
          school: "山汐学院",
          user: "162525336666",
          password: "dasd52255"
        }
      ],
      radio: "1",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          now: "区金沙江路 1518 弄",
          target: '金沙2城',
          endStatus:true,
          nowStatus:true
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          now: "区金沙江路 1518 弄",
          target: '金沙城11',
          endStatus:true,
          nowStatus:true,

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          now: "区金沙江路 1518 弄",
          target: '金沙城',
          endStatus:true,
          nowStatus:true
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          now: "区金沙江 弄",
          target: '金沙城',
          endStatus:false,
          nowStatus:false
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          now: "区金沙江路 1518 弄",
          target: '金沙城',
          endStatus:false,
          nowStatus:false,
          
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  height: 56px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 56px;
  padding-left: 30px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;
}
.content {
  margin: 30px;
  padding: 30px 0 0 30px;
  height: 510px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  ul {
    margin: 0;
    padding: 0;
  }
}
.bottom {
  padding: 0 30px;
  // height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
.desc {
  padding-left: 30px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
}
.bottombtn {
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-bottom: 30px;
}
.bottomRight {
  box-sizing: border-box;
  padding: 15px 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.first {
  color: #666;
}
.second {
  color: #257af6;
}
.third {
  color: #36a247;
}
.four {
  color: #9b9b9b;
}
.content1 {
  padding-top: 0;
  li {
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ebeef5;
    img {
      width: 8px;
      height: 12px;
      margin-left: 9px;
      margin-right: 30px;
    }
  }
}
.left {
  margin-right: 10px;
}
</style>