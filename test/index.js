import {Observable} from 'rx'
import {run} from '@cycle/core'
import {makeDOMDriver, h} from '@cycle/dom'
import path from 'path'

import {makeStamplayDriver, GET, UPDATE, CREATE, DELETE} from '../lib/'

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
