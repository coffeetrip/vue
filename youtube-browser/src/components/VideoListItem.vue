<template>
  <li @click="onVideoSelect" class="list-group-item">
		<img :src="thumbnailURL" class="mr-3">
		{{video.snippet.title}}
  </li>
</template>

<script>
export default {
	name: 'VideoListItem',
	props: {
		video: Object
	},
	computed: {
		// templates에 적게 쓰기 위해
		thumbnailURL: function(){
			return this.video.snippet.thumbnails.default.url
		}
	},
	methods: {
		// 부모로 넘기기(videoList), this.video인자도 함께 넘기기
		onVideoSelect: function(){
			this.$emit('videoSelect', this.video)
		}
	}
}
</script>

<style>

</style>