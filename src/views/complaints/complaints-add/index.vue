<template>
  <div>
    <div class="search">
      <!-- <div class="left">
                
                <el-input style="width:80%;" v-model="keyword" placeholder="关键字" ></el-input>
      </div>-->
        <el-col :span="12">
            关键字
          <el-input v-model="keyword" placeholder="请输入"></el-input>
        </el-col>
      <div class="right">
        <span>工单状态</span>
        <template>
          <el-select v-model="selected" placeholder="全部状态">
            <el-option
              v-for="item in option"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </template>
      </div>
    </div>
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
      ]
    };
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
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 70px;
      margin-right: 23px;
    }
  }
}
</style>