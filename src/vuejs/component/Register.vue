<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h1>Register</h1>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model="formdata.email"
            class="form-control"
            name="email"
            id="email"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="formdata.password"
            name="password"
            class="form-control"
            id="password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="register">Đăng kí</button>
          <router-link
            class="router-link"
            v-bind:class="{ 'register-success': isActive }"
            to="/"
            >Đăng nhập</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.router-link {
  display: none;
}
.register-success {
  display: inline;
  margin-left: 50px;
}
</style>
<script>
export default {
  data() {
    return {
      formdata: {},
      message: "",
      isActive: false,
    };
  },
  methods: {
    register() {
      this.axios
        .post("http://localhost:3010/register", this.formdata)
        .then((response) => {
          this.isActive = true;
        });
    },
    
  },
  
};
</script>