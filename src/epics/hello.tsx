import 'rxjs'
export const sayHello = (action$, store) =>
  action$.ofType('SAY_HELLO')
  .delay(10000)
  .map(() => ({ type: 'GOT_HELLO', payload: { text: 'got hello'}}))
