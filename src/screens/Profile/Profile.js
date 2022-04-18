import { useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";

export const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  const handleSubmit = (text) => {
    dispatch(setName(text))
  };

  return (
    <>
      <h3>Profile</h3>
      {state.showName && <span>{state.name}</span>}
      <button onClick={handleClick}>Change name</button>
      <Form onSubmit={handleSubmit}></Form>
    </>
  )

};