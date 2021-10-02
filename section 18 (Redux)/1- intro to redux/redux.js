// this is how to import redux.
const redux = require('redux');

// each redux must have a reducer function, only one store and a subscriber.

// the reducer function is a pure function takes a (state, action) params and returns the new state with its same old keys but may be with different values.

// we must initialize the state with a value because in the first excution it will make an error if there is not a intial state.

const counterReducer = (state = { counter: 0 }, action) => {
  // after dispatching the actions we handle them in the way we want (remember: must return the same input)
  if (action.type === 'increment') {
    return {
      counter: state.counter++,
    };
  }
  if (action.type === 'decrement') {
    return { counter: state.counter-- };
  }
  return { counter: state.counter };
};

// the main store we create with createStore() function passing to it the reducer to tell the store that this is the allowed reducer that will manipulate your state.

const store = redux.createStore(counterReducer);

// then we need a subscriber to the store to get the data for whatever we need to do.

const counterSubscriber = () => {
  // get the data from the store.
  const latestState = store.getState();
  // do something with it.
  console.log(latestState);
};

// then we tell the store that this is the subscriber allowed to access the data.

store.subscribe(counterSubscriber);

// till now we didn't do any thing to change the state. (we need to do an action). and for this we dispatch an action.
// the dispatch() function takes an object with some properties:
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

// after dispatching the action, we need to manage what this action will do t our state. so we go to the reducer and we do all the work.
