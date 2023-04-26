<template>
    <div class="container my-5">
      <div class="row">
          <div class="col-lg-6 p-4">
              <img class="img-fluid" src="../assets/b5.png" alt=" planting trees">
          </div>
        <div class="col-lg-6 p-4 shadow">
          <h1 class="main-heading my-3">Donate Trees</h1>
          <form class="row g-3" @submit.prevent="donateTrees">
            <div class="col-12">
              <label for="tree-name" class="form-label">Tree Name</label>
              <input
                required
                type="text"
                class="form-control"
                id="tree-name"
                placeholder="enter tree name"
                v-model="name"
              />
            </div>
            <div class="col-12">
              <label for="tree-type" class="form-label">Tree type</label>
              <input
                required
                type="text"
                class="form-control"
                id="tree-type"
                placeholder="enter tree type"
                v-model="type"
              />
            </div>
            <div class="col-12">
              <label for="tree-numberOfTrees" class="form-label"
                >How many trees?</label
              >
              <input
                required
                type="number"
                min="1"
                class="form-control"
                id="tree-numberOfTrees"
                placeholder="enter tree numberOfTrees"
                v-model="treesDonated"
              />
            </div>
            
            <div class="col-12">
              <label for="tree-longitude" class="form-label"
                >Tree Longitude</label
              >
              <input
                required
                type="text"
                class="form-control"
                id="tree-longitude"
                placeholder="enter tree longitude"
                v-model="longitude"
              />
            </div>
            <div class="col-12">
              <label for="tree-latitude" class="form-label">Tree Latitude</label>
              <input
                required
                type="text"
                class="form-control"
                id="tree-latitude"
                placeholder="enter tree latitude"
                v-model="latitude"
              />
            </div>
            
            <div class="col-12">
                   <!-- Map Display here -->
                  <div class="map-holder">
                    <div id="map" style="height: 400px!important;"></div>
                  </div>
            </div>
        
  
            <div class="col-12">
              <button type="submit" class="btn btn-success">Donate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  import alertify from "alertifyjs";
  import mapboxgl from "mapbox-gl";
  import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
  import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
  import "alertifyjs/build/css/alertify.css";
  
  export default {
    data() {
      return {
        name: "",
        type: "",
        latitude: "",
        longitude: "",
        treesDonated: "",
        access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
        center: [34.5085,8.7832],
        map: {},
  
      };
    },
    methods: {
      async donateTrees() {
        try {
          const response = await fetch(
            "http://127.0.0.1:5000/api/protected/donate-trees",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem(
                  "kokoGardenToken"
                )}`,
              },
              body: JSON.stringify({
                name: this.name,
                type: this.type,
                latitude: this.latitude,
                longitude: this.longitude,
                treesDonated: this.treesDonated,
              }),
            }
          );
  
          if (!response.ok) {
            const error = await response.json();
            alertify.error(error.error);
          } else {
            alertify.success("Thanks For Trees Donation.");
            this.$router.push({ name: "home" });
          }
        } catch (error) {
          alertify.error(error.message);
        }
      },
      async createMap() {
        try {
          mapboxgl.accessToken = this.access_token;
          this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: this.center,
            zoom: 2,
          });
          let geocoder = new MapboxGeocoder({
            accessToken: this.access_token,
            mapboxgl: mapboxgl,
            marker: false,
          });
  
          this.map.addControl(geocoder);
  
          geocoder.on("result", (e) => {
            const marker = new mapboxgl.Marker({
              draggable: true,
              color: "#D80739",
            })
              .setLngLat(e.result.center)
              .addTo(this.map);
            this.center = e.result.center;
            console.log(this.center);
            marker.on("dragend", (e) => {
              this.center = Object.values(e.target.getLngLat());
              this.latitude= this.center[0].toFixed(4);
               this.longitude= this.center[1].toFixed(4);
            });
  
            this.latitude= this.center[0].toFixed(4);
            this.longitude= this.center[1].toFixed(4);
          });
        } catch (err) {
          console.log("map error", err);
        }
      },
    },
    mounted() {
      const isAuthenticated = localStorage.getItem("kokoGardenToken");
  
      if (!isAuthenticated) {
        this.$router.push("/login");
      }
      this.createMap();
    },
  };
  </script>
        
    
    <style>
  .main-heading {
    font-weight: 700;
    color: #42b983;
  }
  </style>