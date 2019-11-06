<template>
  <div id="app">
    <!-- <GetDogImage/>
    <GetCatImage/>-->
    <GetImage btnName="멍멍" @getAnimalImage="getImage" />
    <GetImage btnName="야옹" @getAnimalImage="getImage" />
    <img v-bind:src="animalUrl" alt />
  </div>
</template>

<script>
// import GetDogImage from './components/GetDogImage.vue'
// import GetCatImage from './components/GetCatImage.vue'
import GetImage from "./components/GetImage.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    // GetDogImage,
    // GetCatImage,
    GetImage
  },
  methods: {
    // 자식에서 받는곳
    getImage: function(name) {
      if (name === "멍멍") {
        const DOG_URL = "https://dog.ceo/api/breeds/image/random";
        axios
          .get(DOG_URL)
          .then(response => {
            this.animalUrl = response.data.message;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        const CAT_URL = "https://api.thecatapi.com/v1/images/search";
        axios
          .get(CAT_URL)
          .then(response => {
            this.animalUrl = response.data[0].url;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  data: function() {
    return {
      animalUrl: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
