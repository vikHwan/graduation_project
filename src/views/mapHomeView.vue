<template>
<div id="mapApp">

</div>
</template>

<script setup>
/*export default {
  name: "mapHomeView"
}*/

import Map from 'ol/Map.js';
import TileWMS  from 'ol/source/TileWMS.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {onMounted, ref} from "vue";

const _map = ref(null)

function _createMap(){
  _map.value = new Map({
    target:'mapApp',
    layers: [
      new TileLayer({
        source: new TileWMS({
          projection: 'EPSG:4326', // here is the source projection
          url: 'https://ahocevar.com/geoserver/wms',
          params: {
            'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
          },
        }),
      }),
    ],
    view:new View({
      center:[116.394926, 39.9125],
      zoom:5,
      projection:"EPSG:3857",
    })
  })
}

onMounted(()=>{
  _createMap()
})
</script>

<style scoped lang="less">
div{
  height: 100%;
  width: 100vh;
  #mapApp{
    height: 100vh;
    width: 100%;
    border: azure solid 1px;
  }
}

</style>