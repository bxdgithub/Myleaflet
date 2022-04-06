// Import stylesheets
import './style.css';
// import leaflet
import { Map, TileLayer, Control, Marker, Icon } from 'leaflet';

// create Map
const map = new Map('map');

// 高德地图
const gaodeLayer = new TileLayer(
  'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
  { subdomains: '1234' }
);
// 腾讯地图
const tenxunLayer = new TileLayer(
  'http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0',
  {}
);
// 天地图影像
// const tiandituLayer = new TileLayer(
//   'http://t7.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911',
//   {}
// );
// 天地图影像标记
// const lablLayer = new TileLayer(
//   'http://t7.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911',
//   {}
// );
// addmap
tenxunLayer.addTo(map);
// 设置视图位置与比例
map.setView([39.90960456049752, 116.3972282409668], 15);
const layerContral = new Control.Layers({
  高德地图: gaodeLayer,
  腾讯地图: tenxunLayer,
});
// addmap
layerContral.addTo(map);
const Mark = new Marker([39.90960456049752, 116.3972282409668], {
  icon:new Icon({
    iconurl:"",
    iconSize:[25,41],
    iconAnchor:[16,32]

  })
});
Mark.addTo(map);
