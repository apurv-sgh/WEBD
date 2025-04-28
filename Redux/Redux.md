# Intro Redux:

```
Redux is a JS library that manages application state, or data, across components.
```

### Redux with react:

```
React Redux is the official React UI bindings layer for Redux. It lets your React components read data(state) from a Redux store, and dispatch actions to the store to update state.
```

#### Difference between action,reducer and store in redux:
```
Store - is what holds all the data your application uses.

Reducer - is what manipulates that data when it receives an action.

Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.
```

Resource:https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux

#### Setup Redux with react:
(after project initialization)
```
npm install @reduxjs/toolkit react-redux
```