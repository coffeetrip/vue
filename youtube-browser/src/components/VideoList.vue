<template>
  <div class="list-group">
    <!-- < @자식이 올린함수="부모에서 실행할함수"/> -->
    <VideoListItem v-for="video in videos" :key="video.etag" :video="video" @videoSelect="onVideoSelect" />   

  </div>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: {
    // 부모한테 받은거 사용
    videos: Array,
  },
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect: function(video){
      // 부모에게 한번 더 올려주기, 인자도 함께
      this.$emit('videoSelect', video)
    }
  }
}
</script>

<style>

</style>