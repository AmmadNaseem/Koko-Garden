<template>
  <div ref="map" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";

export default {
  name: "TreeMap",

  data() {
    return {
      trees: [],
      map: null,
      markers: [],
    };
  },

  mounted() {
    // Load the Mapbox GL JS library and initialize the map
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [34.5085,8.7832],
      zoom: 12,
    });

    // Fetch tree data from the API and create markers for each tree
    axios
      .get("http://localhost:5000/api/forest-map-trees")
      .then((response) => {
        const jsonData = JSON.stringify(response.data);
        const data = JSON.parse(jsonData);
        this.trees = data;
        this.createMarkers(data.data);
      })
      .catch((error) => console.error(error));
  },

  methods: {
    createMarkers(data) {
      // const bounds = new mapboxgl.LngLatBounds();
      data.forEach((tree) => {
        // Create a custom tree marker
        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage = `url(${require("@/assets/logo.png")})`;
        // el.style.backgroundImage = `url(${require("@/assets/treemarker.png")})`;
        el.style.width = "80px";
        el.style.height = "80px";


        // Create a popup with tree information
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="popup-content">
            <div class="popup-header">
              <img src="${tree.school.logo}" alt="School Logo Image Alt" />
              <h3><strong>Tree Donner Name:</strong>${tree.school.name}</h3>
            </div>
            <div class="popup-body">
              <h3><strong>Tree Name: </strong> ${tree.name}</h3>
              <p><strong>Tree Type: <strong> ${tree.type}</p>
              <p><strong>No. of trees donated: <strong>${tree.no_of_trees}</p>
              <p><strong>Donner Address: <strong>${tree.school.address}</p>
              <p><strong>Donner City: <strong>${tree.school.city}</p>
              <p><strong>Donner State: <strong>${tree.school.state}</p>
              <p><strong>Donner Country: <strong>${tree.school.country}</p>
              <p><strong>Donner Zip Code :<strong>${tree.school.zip}</p>
              <p>Donner Total Donation :${tree.school.total_trees}</p>
            </div>
            <div class="popup-footer">
              <a href="${tree.school.website}" target="_blank">Visit Website</a>
            </div>
          </div>`
        );


        // Create a clickable marker with the custom tree icon and popup
        const marker = new mapboxgl.Marker(el)
          .setLngLat([parseFloat(tree.longitude), parseFloat(tree.latitude)])
          .setPopup(popup)
          .addTo(this.map);



        console.log(tree.longitude + " Lat:" + tree.latitude);
        // Add a click event listener to the marker
        marker.getElement().addEventListener("click", () => {
          // Close all other popups before opening this one
          this.markers.forEach((m) => m.getPopup().remove());
          marker.togglePopup();
        });
        // Add the marker to the bounds
        // bounds.extend(marker.getLngLat());

        // Add the marker to the markers array
        this.markers.push(marker);
      });

      // Fit the map to the bounds
      // this.map.fitBounds(bounds, { padding: 50 });

      // Set the map style
      this.map.setStyle("mapbox://styles/mapbox/streets-v11");
    },
  },
};
</script>

<style>
.map {
  height: 500px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.marker {
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-popup {
  position: absolute;
  top: 20%;
  z-index: 9999;
  max-width: 500px !important;
}
.mapboxgl-popup-content {
  background-color: #42b983;
  color: white;
  font-size: 16px;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
