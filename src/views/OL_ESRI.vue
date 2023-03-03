<template>
<div id="esriMapApp">

</div>
</template>

<script setup>

import Map from "ol/Map.js";
import View from "ol/View.js";
import {defaults} from 'ol/control/defaults'
import Projection from 'ol/proj/Projection'
import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'

import {onMounted, ref} from "vue";

const esriMap = ref(null)

async function initEsriWMS(){
  let format = 'image/png'
  let projection = new Projection({
    code: 'EPSG:4326',
    units: 'm',
    axisOrientation: 'neu',
    global: true
  })//投影
  let arcWMS = new ImageLayer({
    //获取ArcServer的地图服务
    source:new ImageWMS({
      ratio:1,
      url:'http://localhost:6080/arcgis/services/SampleWorldCities/MapServer/WMSServer',
      // url:'http://localhost:6080/arcgis/services/SampleWorldCities/MapServer/WMSServer?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities',
      params: {
        'FORMAT': format,
        'VERSION': '1.3.0',
        STYLES: '',
        LAYERS: '0,1,2',
        projection
      }
    })
  })
  //设置地图容器
  esriMap.value = new Map({
    target:'esriMapApp',//dom容器
    layers:[//图层
        arcWMS,

    ],
    controls:defaults({
      attribution:false,
      zoom:false,
      rotate:false
    }),
    //视图
    view:new View({
      // projection,
      center:[80.4059615571808, 29.29111495476316],
      zoom: 5,
      projection:"EPSG:4326",
    }),

  })
  //设置地图服务中的参数
  let bounds = [ 180.000000, 180.000122,-90.000000, 90.000122]
  // let bounds = [30.677766,103.900691,30.965904,104.327581]
  esriMap.value.getView().fit(bounds,esriMap.value.getSize())
  //设置地图事件
  esriMap.value.on('click',e=>{
    console.log(e.coordinate)
  })
  console.log(esriMap)
}


/*function addClickEvent(){
  console.log(esriMap.value.getProperties())
  /!*esriMap.value.on('click',e=>{
    console.log(e.coordinate)
  })*!/
}*/

onMounted(()=>{
  initEsriWMS()
  // addClickEvent()
})

</script>

<style scoped lang="less">
div{
/*  height: 100%;
  width: 100vh;*/
  #esriMapApp{
    height: 80vh;
    width: 80%;
    border: azure solid 1px;
  }
}

</style>