import Rx from 'rx'
import stamplay from 'stamplay'

import User         from './user'
import CustomObject from './object'
import CodeBlock    from './codeBlock'
import WebHook      from './webhook'
import Stripe       from './stripe'
import Query        from './query'


export function makeStamplayDriver(id, key) {
  const Stamplay = new stamplay(id, key)
  return function StamplayDriver(request$) {
    const response$$ = new Rx.ReplaySubject(1)
    request$
      .subscribe(request => {
        const p = () => {
          switch(request.type){
            case 'User':
              return User(Stamplay, request)
              break
            case 'Object':
              return CustomObject(Stamplay, request)
              break
            case 'CodeBlock':
              return CodeBlock(Stamplay, request)
              break
            case 'Webhook':
              return WebHook(Stamplay, request)
              break
            case 'Stripe':
              return Stripe(Stamplay, request)
              break
            case 'Query':
              return Query(Stamplay, request)
              break
          }
        }

        const response$ = Rx.Observable.fromPromise(p())
        response$.request = request
        response$$.onNext(response$)
      },
      response$$.onError.bind(response$$),
      response$$.onCompleted.bind(response$$),
    )
    return response$$
  }
}
