import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import casual from "casual-browserify";
import { addNewHobby, settActiveHobby } from "../actions/hobby";

HomePage.propTypes = {};

function HomePage(props) {
  const hobbyList = useSelector((state) => {
    // console.log(state);
    return state.hobby.list;
  });
  const activeId = useSelector((state) => state.hobby.activeId);
  // Not recommend, it call render many time
  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }));
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    //Random a hobby object: id + tittle
    const newHobby = {
      id: casual.uuid,
      title: casual.title,
    };
    //Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = settActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h1> REDUX HOOK</h1>

      <button onClick={handleAddHobbyClick}>Add hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

export default HomePage;
