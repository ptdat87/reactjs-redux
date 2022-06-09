console.log(window.Redux);
const { createStore } = window.Redux;
//state
//reducer
//store

const initialState = JSON.parse(localStorage.getItem("hobby_list")) || [];

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      return [...state, action.payload];
    default:
      return state;
  }
  return state;
};

const store = createStore(hobbyReducer);

//RENDER REDUX HOBBY LIST
const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

  const ulElement = document.querySelector("#hobbyListId");
  if (!ulElement) return;
  //reset previous content of ul element
  ulElement.innerHTML = "";
  for (const hobby of hobbyList) {
    const liElement = document.createElement("li");
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

//Render initial hobby list
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

//HANDLE FORM SUBMIT
const hobbyFormElement = document.querySelector("#hobbyFormId");
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    //prevent browser form reloading
    e.preventDefault();

    const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId");
    if (!hobbyTextElement) return;
    console.log("Submit ", hobbyTextElement.value);

    const action = {
      type: "ADD_HOBBY",
      payload: hobbyTextElement.value,
    };
    store.dispatch(action);

    //Reset form
    hobbyFormElement.reset();
  };

  hobbyFormElement.addEventListener("submit", handleFormSubmit);
}

store.subscribe(() => {
  newHobbyList = store.getState();
  console.log("Update ", newHobbyList);
  renderHobbyList(newHobbyList);
  //Save to local store
  localStorage.setItem("hobby_list", JSON.stringify(newHobbyList));
});
