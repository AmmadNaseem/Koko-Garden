<template>
  <div class="garden">
    <div class="row">
      <div class="col-lg-9">
        <ForestMap></ForestMap>
      </div>
      <div class="col-lg-3 shadow">
        <leader-board class="mt-5"></leader-board>        
      </div>
    </div>
    
  </div>
</template>

<script>
import LeaderBoard from "@/components/LeaderBoard.vue";
import ForestMap from "@/components/ForestMap.vue";

export default {
  name: "GardenView",
  components: {
    LeaderBoard: LeaderBoard,
    ForestMap:ForestMap,
  },
 
};
</script>

<style>
/* add any necessary styles for the garden page here */
</style>
