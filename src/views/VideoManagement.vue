<template>
  <div class="VideoManagement">
    <h1>视频监控</h1>
    <div class="add">
      <div class="img" v-for="(v, i) in img.file">
        <i @click="img.deleteF(i)" class="an1_iconfont">删除</i>
        <img :src="v" />
        <div>上传成功:{{ v }}</div>
      </div>
      <div v-if="img.is_add" class="icon">
        <label>
          上传图片
          <input style="visibility: hidden" type="file" @change="img.addF()" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoManagement",
  data() {
    return {
      img: {
        max: 6,
        length: 0,
        is_add: 1,
        file: [],
        /*添加图片*/
        addF: () => {
          this.$bb_api.uploadMedia().then((res) => {
            this.img.file.push(res.address);
            if (this.img.file.length >= this.img.max) {
              this.img.is_add = 0;
            }
          });
        },
        deleteF: (i) => {
          this.img.file.splice(i, 1);
          if (this.img.file.length < this.img.max) {
            this.img.is_add = 1;
          }
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.VideoManagement {
  h1{
    margin:10px;
  }
  .add {
    position: relative;
    width: 95%;
    margin: auto;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-content: space-around;

    .img_max {
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: #ff7800;
    }

    .img {
      position: relative;
      width: 30%;
      height: 90px;
      margin: 3px auto;

      .an1_iconfont {
        position: absolute;
        top: 2px;
        right: 5px;
        color: rgba(0, 0, 0, 0.6);
      }

      img {
        height: 60%;
        object-fit: cover;
      }
      div{
        height:40%;
        font-size: 8px;
        color:#fff;
        background:#000;
      }
    }

    .icon {
      position: relative;
      width: 90px;
      height: 90px;
      line-height: 90px;
      border-radius: 10px;
      border: solid 1px #ddd;

      .an1_iconfont {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 36px;
        color: #ddd;
      }

      label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }

  .add:after {
    content: "";
    width: 30%;
  }
}
</style>