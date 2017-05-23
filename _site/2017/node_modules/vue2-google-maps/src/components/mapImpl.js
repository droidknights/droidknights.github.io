import _ from 'lodash';

import {loaded} from '../manager.js';
import {DeferredReadyMixin} from '../utils/deferredReady.js';
import eventsBinder from '../utils/eventsBinder.js';
import propsBinder from '../utils/propsBinder.js';
import {DeferredReady} from '../utils/deferredReady.js'
import getPropsMixin from '../utils/getPropsValuesMixin.js'

const props = {
  center: {
    required: true,
    twoWay: true,
    type: Object
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number
  },
  heading: {
    type: Number,
    twoWay: true,
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  bounds: {
    twoWay: true,
    type: Object,
  },
  projection: {
    twoWay: true,
    type: Object,
  },
  tilt: {
    twoWay: true,
    type: Number,
  },
  options: {
    type: Object,
    default () {return {}}
  }
};

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'idle',
  'mousemove',
  'mouseout',
  'mouseover',
  'resize',
  'rightclick',
  'tilesloaded',
];

// Plain Google Maps methods exposed here for convenience
const linkedMethods = _([
  'panBy',
  'panTo',
  'panToBounds',
  'fitBounds'
])
  .map(methodName => [methodName, function() {
    if (this.$mapObject)
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
  }])
  .fromPairs()
  .value()
;

// Other convenience methods exposed by Vue Google Maps
const customMethods = {
  resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter() {
    if (!this.$mapObject)
      return;

    const oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  }
};

// Methods is a combination of customMethods and linkedMethods
const methods = _.assign({}, customMethods, linkedMethods);

export default {
  mixins: [getPropsMixin, DeferredReadyMixin],
  props: props,
  replace: false, // necessary for css styles

  created() {
    this.$mapCreated = new Promise((resolve, reject) => {
      this.$mapCreatedDeferred = {resolve, reject}
    });
  },

  watch: {
    center: {
      deep: true,
      handler(val, oldVal) {
        // Observed bug with Vue 2.1.6 under certain circumstances:
        // If you pass an object constant into :center, the deep watch
        // is still triggered
        function isChanged(prop) {
          var oldProp = (typeof oldVal[prop] === 'number') ? oldVal[prop] :
                       (typeof oldVal[prop] === 'function') ? oldVal[prop].apply(oldVal) :
                       oldVal[prop]; // don't know how to handle
          var newProp = (typeof val[prop] === 'number') ? val[prop] :
                       (typeof val[prop] === 'function') ? val[prop].apply(val) :
                       val[prop]; // don't know how to handle
          return oldProp !== newProp;
        }

        if (this.$mapObject) {
          // Check if the value has really changed
          if (isChanged('lat') || isChanged('lng')) {
            this.$mapObject.setCenter(val);
          }
        }
      }
    },
    zoom(zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(zoom);
      }
    }
  },

  deferredReady() {
    return loaded.then(() => {
      // getting the DOM element where to create the map
      const element = this.$refs['vue-map'];

      // creating the map
      const copiedData = _.clone(this.getPropsValues());
      delete copiedData.options;
      const options = _.clone(this.options);
      _.assign(options, copiedData);
      this.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      propsBinder(this, this.$mapObject, _.omit(props, ['center', 'zoom', 'bounds']));

      // manually trigger center and zoom
      this.$mapObject.addListener('center_changed', () => {
        this.$emit('center_changed', this.$mapObject.getCenter())
        this.$emit('bounds_changed', this.$mapObject.getBounds())
      })
      this.$mapObject.addListener('zoom_changed', () => {
        this.$emit('zoom_changed', this.$mapObject.getZoom())
        this.$emit('bounds_changed', this.$mapObject.getBounds())
      })

      //binding events
      eventsBinder(this, this.$mapObject, events);

      this.$mapCreatedDeferred.resolve(this.$mapObject);

      return this.$mapCreated;
    })
    .catch((error) => {
      throw error;
    });
  },
  methods: methods
}
