import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useKokoTrees() {
  const trees = ref([])
  const leaderBoardScore = ref([])
  const IsLodgedIn = ref([])
  const totalPlantedTrees = ref([])
  const errors = ref('')
  const router = useRouter()

  const BASE_URL = "http://127.0.0.1:5000/api/"

  const getTrees = async () => {
    let response = await axios.get(BASE_URL + 'trees')
    trees.value = response.data.data
  }
  const getTotalPlantedTrees = async () => {
    let response = await axios.get(BASE_URL + 'total-planted-trees')
    totalPlantedTrees.value = response.data.data
  }
  const getLeaderBoardScore = async () => {
    let response = await axios.get(BASE_URL + 'leader-board')
    leaderBoardScore.value = response.data.data
  }

  const donateTrees = async (data) => {
    errors.value = ''
    try {
      await axios.post(BASE_URL + 'protected/donate-trees', data)
      await router.push({ name: 'home' })
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors
      }
    }
  }

  const getIsLoggedIn=()=>{
    if (localStorage.getItem("kokoGardenToken")) {
        IsLodgedIn.value = true;
      }else{
        IsLodgedIn.value = false;
      }
  }



  return {
    errors,
    trees,
    totalPlantedTrees ,
    leaderBoardScore,
    IsLodgedIn ,
    getIsLoggedIn,
    getLeaderBoardScore,
    getTotalPlantedTrees,
    getTrees,
    donateTrees
  }
}
