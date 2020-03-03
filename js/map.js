       var map;

         function initMap() {

             map = new google.maps.Map(document.getElementsByClassName('.map'), {
                 center: {lat: 46.975316, lng: 31.995549},
                 zoom: 16
             });

             var marker = new google.maps.Marker({

                 position: {lat: 46.977040, lng: 31.996046},

                 map: map,

                 title: 'Place:',

                 icon: '../images/geo.png'
             });
         }