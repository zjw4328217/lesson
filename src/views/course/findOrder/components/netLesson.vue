<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:700px">
          <div class="title">请填写《超星/尔雅/学习通》下单信息</div>
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
          <!-- <div class="bottombtn"> -->
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
          <!-- </div> -->
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" :body-style="{padding: '0px'}" style="height:700px">
          <div class="title">
            <span>课程信息</span>
          </div>
          <div class="content mytree">
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
      value1: false,
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
  // padding: 30px;
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
  border-top: 1px solid #EBEEF5;
  box-sizing: border-box;
  padding: 30px 30px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
.mytree {
  border: 0;
  padding: 0;
  height: 510px;
  margin-bottom: 0;
}
</style>
<style lang="scss" scoped>
::v-deep  .mytree {
    //  .el-tree > .el-tree-node:after {
    //   border-top: none;
    // }
    .el-tree-node {
      position: relative;
      padding-left: 16px;
    }
    //节点有间隙，隐藏掉展开按钮就好了,如果觉得空隙没事可以删掉
    .el-tree-node__expand-icon.is-leaf{
      display: none;
    }
    .el-tree-node__children {
      padding-left: 16px;
    }
 
    .el-tree-node :last-child:before {
      height: 0px;
    }
 
    .el-tree > .el-tree-node:before {
      border-left: none;
    }
 
    .el-tree > .el-tree-node:after {
      border-top: none;
    }
 
    .el-tree-node:before {
      content: "";
      left: 32px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }
 
    .el-tree-node:after {
      content: "";
      left: 32px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }
 
    .el-tree-node:before {
      border-left: 1px solid #DCDCDC;
      bottom: 0px;
      height: 100%;
      top: 12px;
      width: 1px;
      // left: 10px;
    }
 
    .el-tree-node:after {
      border-top: 1px solid #DCDCDC;
      height: 0px;
      top: 12px;
      width: 10px;
      // left: 10px;
    }
  }

</style>