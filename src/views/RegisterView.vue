<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8 p-4 shadow" >
        <h1 class="main-heading my-3">Register</h1>
        <form class="row g-3"  @submit.prevent="register">
         <div class="col-12">
            <label for="school-name" class="form-label">School Name</label>
            <input required
              type="text"
              class="form-control"
              id="school-name"
              placeholder="enter school name" v-model="name"
            />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input required type="email" v-model="email"  placeholder="example@gmail.com" class="form-control" id="email" />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">Password</label>
            <input required type="password" v-model="password" placeholder="********" class="form-control" id="password" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input required v-model="address"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="enter address"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input required type="text" v-model="city" class="form-control" placeholder="enter city name" id="inputCity" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">State</label>
            <input required type="text" v-model="state" class="form-control" placeholder="enter state name" id="inputState" />
          </div>
          <div class="col-md-8">
            <label for="inputCountry" class="form-label">Country</label>
            <input required type="text" v-model="country" class="form-control" placeholder="enter country name" id="inputCountry" />
          </div>
          <div class="col-md-4">
            <label for="inputZip" class="form-label">Zip</label>
            <input required type="text" v-model="zip" class="form-control" placeholder="zip code" id="inputZip" />
          </div>
          <div class="col-12">
            <label for="inputWebsite"  class="form-label">Website(URL)</label>
            <input required
              type="url"
              class="form-control"
              id="inputWebsite"
              placeholder="enter website url" v-model="website"
            />
          </div>
          <div class="col-12">
            <label for="inputLogo" class="form-label">Logo(URL)</label>
            <input required
              type="url"
              class="form-control"
              id="inputLogo" v-model="logo"
              placeholder="enter logo url"
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-success">Register</button>
          </div>
        </form>
        <div class="row my-4">
            <div class="col-12">
                <p>Already have an account?<router-link  to="/login"
              >Login</router-link
            ></p>
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
        name:"",
        email: "",
        password: "",
        address:"",
        city:"",
        state:"",
        country:"",
        zip:"",
        website:"",
        logo:""
      };
    },
    methods: {
      async register() {
        try {
          const response = await fetch("http://127.0.0.1:5000/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:this.name,
                email: this.email,
                password: this.password,
                address:this.address,
                city:this.city,
                state:this.state,
                country:this.country,
                zip:this.zip,
                website:this.website,
                logo:this.logo
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
            alertify.success("Registered Successful.");
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