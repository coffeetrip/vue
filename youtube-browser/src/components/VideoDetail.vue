<template>
  <div v-if="video">
    <div>
      <iframe :src="videoURL" frameborder="0"></iframe>
      <h4>{{video.snippet.title}}</h4>
      <p>{{video.snippet.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: Object,
  }, 
  computed:{
    videoURL: function(){
      const videoID = this.video.id.videoId
      return `https://www.youtube.com/embed/${videoID}`
    }
  }
}
</script>

<style>

</style>