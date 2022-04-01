// Import stylesheets
import './style.css';
// import leaflet
import { Map, TileLayer } from 'leaflet';

// create Map
const map = new Map('map');
// 高德矢量
// http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}
// 高德影像
// https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}
const Layer = new TileLayer(
  'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
  { subdomains: '1234' }
);
// addmap
Layer.addTo(map);
// 设置视图位置与比例
map.setView([39.90960456049752, 116.3972282409668], 15);
