<template>
  <div class="index">
    <img src="../assets/img/index_top.png" alt="">
    <ul class="_margin_10px">
      <li>
        <img src="../assets/img/index/index_icon1.png" alt="">
        <p>报修列表</p>
        <p class="tip" type=info>我的报修工单</p>
      </li>
      <li>
        <img src="../assets/img/index/index_icon2.png" alt="">
        <p>巡检与升级</p>
        <p class="tip" type=info>我的巡检与升级</p>
      </li>
      <li>
        <img src="../assets/img/index/index_icon3.png" alt="">
        <p>扫一扫</p>
        <p class="tip" type=info>录入或查看设备详情</p>
      </li>
      <li>
        <img src="../assets/img/index/index_icon4.png" alt="">
        <p>设置</p>
        <p class="tip" type=info>我的设置</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.index{
  >img{
    width: 100%;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width: calc(50% - 10px);
      height: 260px;
      background: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p{
        margin-top: 10px;
      }
      img{
        width: 80px;
        height: 80px;
        &+p{
          font-size: 32px;
          color: #000;
        }
      }
    }
  }
}
</style>
