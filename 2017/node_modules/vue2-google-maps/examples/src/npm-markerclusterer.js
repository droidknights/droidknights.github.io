import * as VueGoogleMap from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMap, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw'
  },
  // Demonstrating how we can customize the name of the components
  installComponents: false,
});

document.addEventListener('DOMContentLoaded', function() {
  Vue.component('google-map', VueGoogleMap.Map);
  Vue.component('google-marker', VueGoogleMap.Marker);
  Vue.component('google-cluster', VueGoogleMap.Cluster);

  new Vue({
    el: '#root',
    template: `
    <div style="width: 100%; height: 500px">
      <google-map
        :center="center"
        :zoom="7"
      >
        <google-cluster>
          <google-marker
            v-for="m in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          ></google-marker>
        </google-cluster>
      </google-map>
    </div>
    `,
    data: {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    },
  });
});
