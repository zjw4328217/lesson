<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:800px">
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
          <div class="bottom">
            <div class="bottom-left">
              <el-radio v-model="radio" label="1">整册代刷</el-radio>
              <el-radio v-model="radio" label="2">单元代刷</el-radio>
            </div>
            <div class="bottom-right">
              <el-switch
                v-model="value1"
                active-color="#ff4949"
                inactive-color="#409EFF"
                style="height:100%;line-height:100%"
                active-text="秒刷模式"
                inactive-text="普通代刷"
              ></el-switch>
            </div>
          </div>
          <div class="desc">您已输入 1个账号，其中有效账号 1个，</div>
          <div class="bottombtn">
            <el-button type="primary">加载课程</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:800px">
          <div class="title">
            <span>课程信息</span>
          </div>
          <div class="content">
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]"
              :props="defaultProps"
            ></el-tree>
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
      data: [
        {
          id: 1,
          label: "郑州航空工业管理学院 15288887046 NBLYXooo0422",
          children: [
            {
              id: 4,
              label: "新世界交互英语听说1",
              children: [
                {
                  id: 9,
                  label: "Unit1 MovingForward（44%）"
                },
                {
                  id: 10,
                  label: "Unit2 Lifestyles（56%）"
                },
                {
                  id: 11,
                  label: "Unit3 Lifestyles（56%）"
                },
                {
                  id: 12,
                  label: "Unit4 Lifestyles（56%）"
                },
                {
                  id: 13,
                  label: "Unit5 Lifestyles（56%）"
                }
              ]
            },
            {
              id: 5,
              label: "新世界交互英语听说2",
              children: [
                {
                  id: 9,
                  label: "Unit1 MovingForward（44%）"
                },
                {
                  id: 10,
                  label: "Unit2 Lifestyles（56%）"
                },
                {
                  id: 11,
                  label: "Unit3 Lifestyles（56%）"
                },
                {
                  id: 12,
                  label: "Unit4 Lifestyles（56%）"
                },
                {
                  id: 13,
                  label: "Unit5 Lifestyles（56%）"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "中南林业科技大学 13196304048	hmx232425",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            }
          ]
        }
      ],
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
      radio: "1"
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
.content {
  margin: 30px;
  padding: 30px;
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  justify-content: space-between;
  align-items: center;
}
</style>