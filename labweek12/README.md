Redux is a state management library that centralizes state for an entire
application in a single place.

0 - State
State is an object that stores values that belong to an component in
a React applicaiton. Normally we would use SetState() to update it.

1 - Store
A store is an object that stores all of the application's states, it is the only place
where it can be modified.
You can run createStore() to create a store then you can set up actions which will be
used to modify the state.

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

2 - Reducer
A reducer is a function that actually performs the state modification
based on the action.

increment: (state) => {
      state.value += 1
    }

3 - Action
An Action is just an object that describes the changes to be made which are then dispatched to the Reducer functions who actually perform the change.

4 - Dispatch
Taking an action it sends a message to the store to perform the change using a reducer function

const dispatch = useDispatch()

onClick={() => dispatch(increment())}

5 - Subscribe
This sample application equates subscribing with wrapping the entire application with a provider.
Which is a component that allows the all of the apps components to access the store.

import { Provider } from 'react-redux'

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

The sample application creates a store for the counter state then in Counter.js 
creates two buttons that when clicked dispatch the increment and decrement reducer functions created in counterSlice.js to increase and decrease the counter by 1.

----------------------------------------------------------------------------------------

A JSON web token is an open standard that can be used for securely sending information or for authorization.
Web tokens are a JSON object that is secured by a cryptographic signature.
They represent "claims" between two parties, including a server and client. With the information about one of the parties being what is being sent. 
They are separated into three parts:

secret = 'a-string-secret-at-least-256-bits-long'

1 - Header

Headers contain metadata including signing algorithm

header = {
  "alg": "HS256",
  "typ": "JWT"
}

2 - Payload

The payload contains the claim aka the information being sent

payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}

3 - Signature

The signature takes a encoded header, encoded payload, and secret key and uses the algorithm to "signs" it

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

4 - Output

The results is three strings that are linked together by dots, which can be decoded to access
the header and payload.

E.G. a JWT

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzA4MzQ1MTIzLCJleHAiOjE3MDgzNTUxMjN9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
