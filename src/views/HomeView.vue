<template>
  <div>
    <div class="treeOneBanner"></div>
    <div class="container py-5">

      <div class="row">
        <div class="col-lg-4">
          <h3 class="my-5">
            Together we can make difference join the team and help us our goal
            to plant 7,77,777 trees.
          </h3>
          <div class="d-grid gap-2 my-2 d-md-flex justify-content-md-start">
            <div>
                <button  v-if="isLoggedIn" @click="logOut" class="btn btn-danger btn-lg">Log Out</button>
                <router-link v-else class="btn btn-secondary btn-lg" to="/register"
                  >Register</router-link>
            </div>
            
            <router-link
              class="btn btn-success btn-lg"
              style="background: #42b983 !important"
              :to="isLoggedIn ? '/donate-trees' : '/login'"
            >
              Donate Trees
            </router-link>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row justify-content-center">
            <div class="col-6 my-5 shadow">
              <leader-board></leader-board>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <StaticMap></StaticMap>
    </div>


    <div class="container shadow totalPlantedTreesBanner">
      <div class="row justify-content-center">
        <div class="col-lg-2">
          <iframe 
                src="https://embed.lottiefiles.com/animation/82915"
                width="500" 
                height="500"
                frameborder="0"
                allowfullscreen

            ></iframe>
        </div>
        <div class="col-lg-10 text-center">
          <h1 class="main-heading">Number of trees planted till to now:</h1>
          <button class="btn btn-lg numberOfTotalTreesPlanted shadow">
            7,77,777{{ NumberOfPlantedTrees }}
          </button>
        </div>
      </div>
    </div>
    <div class="treeTwoBanner"></div>


    <div class="parallax-container">
    <div class="parallax-image"></div>
    </div>

    

  
 


  </div>
</template>

<style>
.parallax-container {
  height: 400px;
  overflow: hidden;
  position: relative;
  perspective: 1px;
  transform-style: preserve-3d;
}

.parallax-image {
  height: 100%;
  background-image: url('../assets/b4-min.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate3d(0, 0, 0);
  background-position: center;
}


.treeOneBanner {
  background: url('../assets/bannertree.png') center top no-repeat;
  background-size: cover;
  height: 200px;
}
.treeTwoBanner {
  background: url('../assets/b6.png') center top no-repeat;
  background-size: cover;
  height: 600px;
  margin-bottom: 100px;
  border-bottom: 91px solid #42b983;
  box-shadow: 0 0 10px #606864;
}

.main-heading {
  font-weight: 700;
  color: rgb(244, 240, 235);
}
.totalPlantedTreesBanner {
  margin-top: 5rem;
  margin-bottom: 5rem;
  background: #42b983;
  padding: 5rem;
}
.numberOfTotalTreesPlanted {
  color: #42b983;
  background: rgb(244, 240, 235);
  font-weight: 700;
  width: 10rem;
  height: 4rem;
}
</style>

<script>
import useKokoTrees from "@/composables/api";
import { onMounted, computed } from "vue";

import LeaderBoard from "@/components/LeaderBoard.vue";
import StaticMap from "@/components/StaticMap.vue";

export default {
  name: "HomeView",
  components: {
    LeaderBoard: LeaderBoard,
    StaticMap:StaticMap,
    
  },
  setup() {
    const { totalPlantedTrees, IsLodgedIn,getTotalPlantedTrees,getIsLoggedIn } = useKokoTrees();

    onMounted(getTotalPlantedTrees);
    onMounted(getIsLoggedIn);

    const isLoggedIn = computed(() => {
      return IsLodgedIn.value;
    });
    const NumberOfPlantedTrees = computed(() => {
      return totalPlantedTrees.value;
    });

    return {
      isLoggedIn,
      NumberOfPlantedTrees,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('kokoGardenToken');
      localStorage.removeItem('kokoGardenUser');
      this.$router.push({ name: "login"});  
    }
  }
};
</script>

