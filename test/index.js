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
  Stamplay: makeStamplayDriver(YOU_API_NAME, YOU_API_KEY)
};

run(main, drivers);
