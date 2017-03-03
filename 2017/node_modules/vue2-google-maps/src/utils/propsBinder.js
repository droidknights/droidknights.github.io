/* vim: set softtabstop=2 shiftwidth=2 expandtab : */

import _ from 'lodash'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default (vueElement, googleMapsElement, props, options) => {
  options = options || {};
  var {afterModelChanged : afterModelChanged} = options;
  _.forEach(props, ({twoWay: twoWay, type:type}, attribute) => {
    const setMethodName = 'set' + capitalizeFirstLetter(attribute);
    const getMethodName = 'get' + capitalizeFirstLetter(attribute);
    const eventName = attribute.toLowerCase() + '_changed';

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    var timesSet = 0;

    vueElement.$watch(attribute, () => {
      const attributeValue = vueElement[attribute];

      timesSet++;
      googleMapsElement[setMethodName](attributeValue);
      if (afterModelChanged) {
        afterModelChanged(attribute, attributeValue);
      }
    }, {
      deep: type === Object
    });

    if (twoWay) {
      googleMapsElement.addListener(eventName, (ev) => {
          if (timesSet > 0) {
            timesSet --;
            return;
          }
          else {
            vueElement.$emit(eventName, googleMapsElement[getMethodName]());
          }
        }
      );
    }
  });
}
