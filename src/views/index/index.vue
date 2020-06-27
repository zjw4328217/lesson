<template>
    <div>
        <p>666</p>
          <el-row :gutter="20"  >
              <el-col :xs="12" :sm="8" :lg="6">
                  <div class="div" style="height:30px;background:yellow;"></div>
              </el-col>
              <el-col :xs="12" :sm="8" :lg="6">
                  <div class="div" style="height:30px;background:red;"></div>
              </el-col>
              <el-col :xs="12" :sm="8" :lg="6">
                  <div class="div" style="height:30px;background:skyblue;"></div>
              </el-col>
              <el-col :xs="12" :sm="8" :lg="6">
                  <div class="div" style="height:30px;background:pink;"></div>
              </el-col>
          </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.div {
    position: relative;
}
</style>