In summary, to connect Redux to React, you must do the following:

1. Install and import react-redux
2. Wrap your root App component inside of react-redux's Provider component
3. Import connect into the component you'd like to pull Redux state into
4. Create a mapStateToProps function that determines what state you'd like to pull from your store
5. Export your component using connect, taking mapStateToProps as an argument
6. Pass through your state as an argument to your render function
7. Render your state

<https://chriscourses.com/blog/redux>

# hooks

* useSelctor
* useDispatcher
* useStore
* useEffect
* useState


# redux

1. Actions & Action Creators ( action + payload )
2. Reducers (switch on actions)
3. Store  (createStore)