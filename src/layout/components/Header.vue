<template>
  <div class="content">
    <div class="bg">
      <div class="mask"></div>
      <img src="../../assets/imgs/bg.jpg" />
    </div>
    <!-- 1.0 更多活动 -->
    <a href="javascript:;" class="more" @click="flag = true">
      <span>更多</span><i>&gt;</i>
    </a>
    <!-- 2.0 店铺公告 -->
    <div class="bulltin">
      <span>公告</span>
      <p>
        占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位
      </p>
      <i>&gt;</i>
    </div>
    <!-- 3.0商家信息 -->
    <div class="shop-info">
      <img src="../../assets/imgs/logo.jpg" alt="" />
      <div>
        <h3 @click="flag = true">
          <span>品牌</span>
          <span>阿呆炒饭</span>
        </h3>
        <p>蜂鸟专送/20分钟送达</p>
        <p>
          <i>减</i>
          <span>在线支付满100减99,满200减199</span>
        </p>
      </div>
    </div>
    <!-- 4.0弹框 -->
    <van-overlay :show="flag">
      <div class="warpper" @click.stop>
        <div>
          <!-- 4.1商家信息 -->
          <div class="shop">
            <h3>阿呆炒饭</h3>
            <van-rate
              v-model="rates"
              :size="25"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <!-- 4.2优惠信息 -->
          <div>
            <van-divider>优惠信息</van-divider>
            <ul class="active">
              <li>
                <i>减</i>
                <span>在线支付满100减99,满200减199</span>
              </li>
              <li>
                <i>减</i>
                <span>在线支付满100减99,满200减199</span>
              </li>
              <li>
                <i>减</i>
                <span>在线支付满100减99,满200减199</span>
              </li>
              <li>
                <i>减</i>
                <span>在线支付满100减99,满200减199</span>
              </li>
            </ul>
          </div>
          <!-- 4.3商家公告 -->
          <div>
            <van-divider>商家公告</van-divider>
            <p class="shop-bulltin">
              占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位
            </p>
          </div>
          <!-- close -->
          <p class="close" @click="flag = false">
            <i class="iconfont icon-guanbi"></i>
          </p>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      rates: 4
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  position: relative;
  padding: 20px 0 0 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.more {
  position: absolute;
  right: 12px;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 6px 8px 4px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  border-radius: 30px;
  i {
    font-family: 'Times New Roman', Times, serif;
    font-style: normal;
    margin-left: 2px;
  }
}
.bulltin {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 4px 0;
  span {
    margin: 0 8px;
    background-color: #fff;
    padding: 5px 5px 3px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 12px;
  }
  i {
    color: #fff;
    margin: 0 4px;
    margin-right: 10px;
    font-family: 'Times New Roman', Times, serif;
    font-style: normal;
  }
  p {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    color: #fff;
  }
}
.shop-info {
  display: flex;
  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 4px;
  }
  h3 {
    font-size: 16px;
    margin: 0;
    color: #fff;
    display: flex;
    align-items: center;
    span {
      &:nth-of-type(1) {
        background-color: red;
        font-size: 12px;
        margin-right: 5px;
        padding: 4px 4px 2px;
      }
    }
  }
  p {
    font-size: 14px;
    margin: 0;
    color: #fff;
    margin-top: 5px;
    &:nth-of-type(2) {
      font-size: 12px;
      i {
        font-style: normal;
        background-color: #fff;
        color: red;
        padding: 2px;
        margin-right: 3px;
      }
    }
  }
}
.bg {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
  transform: translateY(-50%);
  img {
    width: 100%;
    //设置模糊效果
    -webkit-filter: blur(5px);
    filter: blur(4px);
  }
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.warpper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  box-sizing: border-box;
  .shop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /deep/.van-rate__item {
      margin: 0 10px;
    }
  }
  .active {
    li {
      margin-top: 15px;
      padding-left: 30px;
    }
    font-size: 14px;
    i {
      font-style: normal;
      background-color: #fff;
      color: red;
      padding: 2px;
      margin-right: 3px;
    }
  }
  .shop-bulltin {
    word-break: break-all;
    line-height: 24px;
  }
  .close {
    text-align: center;
    margin-top: 40px;
    i {
      font-size: 30px;
    }
  }
}
</style>
