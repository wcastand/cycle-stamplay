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

To know the attributes, just look the name here : [Stamplay NodeJs](https://github.com/Stamplay/stamplay-nodejs-sdk)

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
  Stamplay: makeStamplayDriver(your_api_name, your_api_key)
};

run(main, drivers);

```

#### Exemple for Query
```javascript

   const getuser$ = Observable.just({
    type: 'Query',
    object: 'costs',
    query: [
      {fn: 'greaterThan', attr:'price', value: 5},
      {fn: 'equalTo', attr:'paid', value: true},
      {fn: 'exec'}
    ]
  })
```
