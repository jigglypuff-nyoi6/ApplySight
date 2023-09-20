import * as _ from 'lodash';

  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['LALALA TS', 'webpack'], ' ');

    return element;
  }

document.body.appendChild(component());