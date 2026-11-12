
import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
  name: "",
  email: ""
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }
}

const store = createStore(userReducer);

function UserInfo() {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleName = (e) => {
    dispatch({
      type: UPDATE_NAME,
      payload: e.target.value
    });
  };

  const handleEmail = (e) => {
    dispatch({
      type: UPDATE_EMAIL,
      payload: e.target.value
    });
  };

  return (
    <div>
      <h1>User Information</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
        />
      </div>

      <hr />

      <h2>Stored User Information</h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <UserInfo />
    </Provider>
  );
}

export default App;
