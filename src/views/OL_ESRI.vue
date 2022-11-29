<template>
<div id="esriMapApp">

</div>
</template>

<script setup>

import Map from "ol/Map.js";
import View from "ol/View.js";

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
    global: false
  })//投影
  let arcWMS = new ImageLayer({
    source:new ImageWMS({
      ratio:1,
      url:'http://localhost:6080/arcgis/services/SampleWorldCities/MapServer/WMSServer',
      params: {
        'FORMAT': format,
        'VERSION': '1.3.0',
        STYLES: '',
        LAYERS: '0,1',
        projection
      }
    })
  })//获取ArcServer的地图服务
  esriMap.value = new Map({
    target:'esriMapApp',//dom容器
    layers:[//图层
        arcWMS
    ],
    view:new View({//视图
      // projection,
      center:[80.4059615571808, 29.29111495476316],
      zoom: 5,
      projection:"EPSG:4326",
    }),
  })//设置地图容器

  let bounds = [-90.000000, 180.000000, 90.000122, 180.000122]//设置地图服务中的参数
  esriMap.value.getView().fit(bounds,esriMap.value.getSize())

  esriMap.value.on('click',e=>{
    console.log(e.coordinate)
  })//设置地图事件
}


function addClickEvent(){
  console.log(esriMap.value.getProperties())
  /*esriMap.value.on('click',e=>{
    console.log(e.coordinate)
  })*/
}

onMounted(()=>{
  initEsriWMS()
  addClickEvent()
})

</script>

<style scoped lang="less">
div{
  height: 100%;
  width: 100vh;
  #esriMapApp{
    height: 100vh;
    width: 100%;
    border: azure solid 1px;
  }
}

</style>