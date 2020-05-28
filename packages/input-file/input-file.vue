<template>
  <div class="file-wrap">
    <div class="input-wrap">
      <span class="iconfont">&#xe613;</span>
      <span>上传文件</span>
      <input type="file" class="file-input" @change="getFile" :multiple="multiple" />
    </div>
    <!-- 文件列表 start -->
    <ul class="file-list" v-if="fileList.length&&fileList">
      <li v-for="item in fileList" :key="item.id">
        <div class="left">
          <span class="iconfont">&#xe611;</span>
          <span class="title">{{item.name}}</span>
        </div>
        <div class="right" @click="fileList.splice(0);" @input="$emit('input',fileList)">
          <span class="iconfont">&#xe658;</span>
        </div>
      </li>
    </ul>
    <!-- 文件列表 end -->
  </div>
</template>
<script>
export default {
  name: 'input-file',
  data() {
    return {
      fileList: []
    }
  },
  props: {
    value: {
      type: Array
    },
    multiple: {
      type: Boolean
    },
    fileArr: {
      type: Array
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.fileList = val || []
      }
    }
  },
  methods: {
    getFile(file) {
      this.$emit('input', [file.target.files[0]])
    }
  }
}
</script>
<style lang="scss">
.file-wrap {
  width: 500px;
  .input-wrap {
    position: relative;
    color: #fff;
    background-color: #409eff;
    width: 100px;
    line-height: 32px;
    cursor: pointer;
    .file-input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
      left: 0;
      top: 0;
      cursor: pointer;
    }
  }
  .file-list {
    list-style: none;
    font-size: 14px;
    color: #333;
    & > li {
      list-style: none;
      margin: 0;
      padding: 5px 0;
      display: flex;
      justify-content: space-between;
      .left {
        span {
          padding: 0 5px;
        }
        .title {
          color: rgb(175, 175, 175);
        }
      }
      .right {
        cursor: pointer;
        span {
          padding: 0 10px;
        }
        .size {
          color: #ccc;
        }
      }
    }
    & > li:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>