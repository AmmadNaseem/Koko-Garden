<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8 p-4 shadow">
        <h1 class="main-heading my-3">Login Here</h1>
        <form class="row g-3" @submit.prevent="login">
          <div class="col-md-12">
            <label for="email" class="form-label">Email</label>
            <input
              required
              type="email"
              v-model="email"
              placeholder="example@gmail.com"
              class="form-control"
              id="email"
            />
          </div>
          <div class="col-md-12">
            <label for="password" class="form-label">Password</label>
            <input
              required
              v-model="password"
              type="password"
              placeholder="********"
              class="form-control"
              id="password"
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-success">Login</button>
          </div>
        </form>
        <div class="row my-4">
          <div class="col-12">
            <p>
              Don't have an account?<router-link to="/register"
                >Register</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          alertify.error(error.error);
        } else {
          const { token } = await response.json();
          // Decode the token and extract the values
          const decodedToken = JSON.parse(atob(token.split(".")[1]));

          const user = {
            userID: decodedToken.id,
            userName: decodedToken.name,
            userEmail: decodedToken.email,
          };
          localStorage.setItem("kokoGardenToken", token); // Set the token in local storage
          localStorage.setItem("kokoGardenUser",JSON.stringify(user)); 
          alertify.success("Logged In Successful.");
          this.$router.push({ name: "home"});  
        }
      } catch (error) {
        alertify.error(error.message);
      }
    },
  },
  mounted() {
    const isAuthenticated = localStorage.getItem('kokoGardenToken')

    if (isAuthenticated) {
      this.$router.push('/')
    }
  },
};

</script>
  
  <style>
.main-heading {
  font-weight: 700;
  color: #42b983;
}
</style>