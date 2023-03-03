<template>
<div id="mapApp">

</div>
</template>

<script setup>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Image as ImageLayer} from 'ol/layer';
import { ImageArcGISRest} from 'ol/source';
import {onMounted, ref} from "vue";

const _map = ref(null)

async function initMap(){
  _map.value = new Map({
    target:'mapApp',
    layers:[
        new ImageLayer({
          source:new ImageArcGISRest({
            ratio:1,
            url:'http://localhost:6080/arcgis/rest/services/MyMapService/MapServer'
          })
        })
    ],
    view:new View({
      center: [13306774.401650095, 3868476.942811535],
      zoom: 7,
    })

  })
  _map.value.on('click',e=>{
    console.log(e.coordinate)
  })
}

onMounted(()=>{
  initMap()
})
</script>

<style scoped lang="less">
div{
  height: 800px;
  width: 800px;
  border: 1px solid black;
}

</style>