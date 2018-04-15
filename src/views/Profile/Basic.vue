<template>
  <div>
    <div class="profile">
      <div class="thumb">
        <div class="img-box">
          <img src="../../assets/logo.png" alt="">
        </div>
        <p class="username">Django 中国</p>
        <form>
          <label for="username" class="upload-btn"><i class="iconfont">&#xe618;</i>上传头像</label>
          <input type="file" class="upload" id="username">
        </form>
      </div>
      <div class="profile-box">
        <form>
          <div class="form-group">
            <label for="username">用户名</label>
            <input type="email" class="form-control" disabled id="username">
          </div>
          <div class="form-group">
            <label for="nickname">昵称</label>
            <input type="email" class="form-control" id="nickname">
          </div>
          <div class="form-group">
            <label for="sign">个性签名</label>
            <input type="text" class="form-control" id="sign">
          </div>
          <button type="submit" class="btn btn-primary">保存</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Basic',
  data () {
    return {
      msg: 'basic'
    }
  }
}
</script>
<style lang="scss" scoped>
  .thumb {
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    .img-box {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      border: 2px solid rgba(0,0,0,.3);
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .username {
      padding: 10px 0;
      font-weight: bold;
    }
  }
  .profile-box {
    padding: 20px 10px;
  }
  .form-group label {
    margin-bottom: 10px;
  }
  .upload {
    appearance: none;
    display:none;
  }
  .upload-btn {
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
</style>
