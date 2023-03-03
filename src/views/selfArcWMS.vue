<template>

    <div id="back">
      <div id="mapApp"></div>
      <div id="aside">
      <router-link to="/bottomControl"> <button>123123</button></router-link>
      </div>
      <router-view ></router-view>
    </div>





</template>

<script setup>
import Map from "ol/Map.js";
import View from "ol/View.js";
import Projection from 'ol/proj/Projection'
import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'
import {defaults} from 'ol/control/defaults.js'
import {onMounted, ref} from "vue";

// import mapAsideControl from '@/components/mapAsideControl.vue'


const _map = ref(null)

async function initMap(){
  let format = 'image/png'
  let projection = new Projection({
    code:'EPSG:4326',
    units: 'm',
    axisOrientation: 'neu',
    global: false
  })
  let imgLayer = new ImageLayer({
    source:new ImageWMS({
      url:'http://localhost:6080/arcgis/services/MyMapService/MapServer/WMSServer',
      ratio:1,
      params:{
        'FORMAT': format,
        'VERSION': '1.3.0',
        STYLES: '',
        LAYERS: '0,1,',
      }
    })
  })
/*  let word = new ImageLayer({
    source:new ImageWMS({
      url:'http://localhost:6080/arcgis/services/SampleWorldCities/MapServer/WMSServer',
      ratio:1,
      params:{
        'FORMAT': format,
        'VERSION': '1.3.0',
        STYLES: '',
        LAYERS: '0,1,',
      }
    })
  })*/
  _map.value = new Map({
    target:'mapApp',
    layers:[imgLayer,],
    view:new View({
      center: [ 119.39602320525331, 33.112911314847075],
      zoom: 24,
      // center: [13306774.401650095, 3868476.942811535],
      // zoom: 7,
      projection
    }),
    controls:defaults({
      attribution:false,
      zoom:false,
      rotate:false
    })
  })
  //！！！重要
  let bounds = [116.343018,122.042595,30.736591,35.127431]
  _map.value.getView().fit(bounds,_map.value.getSize())
  _map.value.on('click',e=>{console.log(e.coordinate)})

}

onMounted(()=>{
  initMap()
})

</script>

<style scoped lang="less">
#back{
  position: relative;
  #mapApp{
    height: 900px;
    width: 1900px;
    position: absolute;
  }
  #aside{
    position: absolute;
    height: 800px;
    width: 200px;
    border: 1px solid black;
  }
  #routerView{

  }
}

</style>