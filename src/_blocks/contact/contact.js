if ($("#map").length) {
  if (window.innerWidth < 768) {
    var position = {lat: 49.989000, lng: 36.252140};
  } else {
    position = {lat: 49.992000, lng: 36.252140};
  }
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    draggable: true,
    scrollwheel: true,
    mapTypeId: "hybrid"
    }),
  marker = new google.maps.Marker({
    position: {lat: 49.993080, lng: 36.252140},
    map: map,
    title: "Жилой комплекс 'Речной квартал'",
    zIndex: 1000
  });
  marker.setMap(map);

  map.addListener("center_changed", function(){
    map.panTo(position);
  });
}

