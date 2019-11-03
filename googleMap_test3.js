'use strict';

function initMap() {
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn').addEventListener('click', function(){

      var lat = document.getElementById('lat');
      var lng = document.getElementById('lng');
      console.log(lat.value);
      var latitude  = lat.value;//緯度
      var longitude = lng.value;//経度
      // output.innerHTML = '<p>緯度 ' + latitude + '° <br>経度 ' + longitude + '°</p>';
      // 位置情報
      var latlng = new google.maps.LatLng( latitude , longitude ) ;
      // Google Mapsに書き出し
      var map = new google.maps.Map( document.getElementById( 'map' ) , {
          zoom: 15 ,// ズーム値
          center: latlng ,// 中心座標
      } ) ;
      // マーカーの新規出力

      var marker = new google.maps.Marker( {
          map: map ,
          position: latlng ,
      } ) ;

  },false);
  },false);
}
