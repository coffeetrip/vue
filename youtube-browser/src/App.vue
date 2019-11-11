<template>
  <div class="container">
    youtube
    <!-- 3. 사용하기 -->

    <!-- <자식컴포넌트 v-on:자식이 올려줄 함수="부모가사용할함수" /> -->
    <SearchBar @inputChange="onInputChange" />

    <VideoDetail :video="selectedVideo" />

    <!-- <자식컴포넌트 v-bind:자식한테 내려줄 함수="부모가 가지고 있는 이름" /> -->
    <VideoList :videos="videos" @videoSelect="onVideoSelect"/>
  </div>
</template>

<script>
// 1. 불러오기
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  // data는 function으로 써야한다. return {}
  data: function(){
    return {
      videos: [],
      // null도 object
      selectedVideo: null,
    }
  },
  // 2.  등록하기
  components: {
    SearchBar,  // SearchBar: SearchBar 
    VideoList,
    VideoDetail
  },
  methods: {
    onInputChange(inputValue){
      //console.log(inputValue)
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: inputValue
        }
      })
      .then((response)=>{
        console.log(response)
        this.videos = response.data.items
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    onVideoSelect(video){
      console.log(video)
      this.selectedVideo = video
    }
  }
}
</script>

<style>

</style>