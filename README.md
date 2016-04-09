# CycleJs-stamplay

- [CycleJs](http://cycle.js.org/)
- [Stamplay](https://stamplay.com/)
- [RxJs](https://github.com/Reactive-Extensions/RxJS)

### Test needed

If you are interested, just make a PR or an issue if you find a bug or think about some improvements :-)

## Install:

[npm package](https://www.npmjs.com/package/cycle-stamplay)

``` npm install --save cycle-stamplay ```

### Exemple:

```javascript

import {Observable} from 'rx'
import {run} from '@cycle/core'
import {makeDOMDriver, h} from '@cycle/dom'
import path from 'path'

import {makeStamplayDriver} from '../lib/'

function main({DOM, Stamplay}) {
   const getuser$ = Observable.just({
    type: 'Object',
    object: 'costs',
    fn: 'get',
    data: null,
  })

  const vtree$ = Stamplay
    .mergeAll()
    .flatMap(x => Observable.of(JSON.parse(x)))
    .startWith(null)
    .map(x => {
      console.log(x)
      return h('div', 'Loading...')
    })


  const sinks = {
    DOM: vtree$,
    Stamplay: getuser$
  };
  return sinks;
}


const root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)

const drivers = {
  DOM: makeDOMDriver('#app'),
  Stamplay: makeStamplayDriver('costs', 'd9970d823326250e6597f6715bb3d09d280bd9b009e16730c033beb9928c12bb')
};

run(main, drivers);

```
