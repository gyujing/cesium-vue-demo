<template>
  <div class="map-box">
    你好
    <div id="cesiumContainer"></div>
  </div>
</template>

<script> 
import Cesium from 'cesium/index.cjs';

export default {
  name: "cesiumExample", 
  mounted() {

    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YzVkY2RjNC1lYmNjLTQ4YjQtOWI1NS00ODdiZDc5YmYzZDEiLCJpZCI6MTY4NzczLCJpYXQiOjE2OTU3ODQ2Mjl9.V1-qgBLqILFCx_F4QYfDASn-wfRk5tlo6p_yHU2ftpg";
    
    var viewer = new Cesium.Viewer("cesiumContainer");
    
    console.log(viewer)
  }
};
</script> 
<style scoped>
  .map-box{
    width: 100%;
    height: 100%;
  }
  #cesiumContainer{
    width: 100%;
    height: 100%;
  }
</style>
