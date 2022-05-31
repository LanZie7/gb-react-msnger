import { useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrevious } from "../../utils/usePrev";


export const Profile = ({ onLogout }) => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  const prevName = usePrevious(name);
  console.log(prevName);

  const handleSubmit = (text) => {
    dispatch(setName(text));
  };

  return (
    <>
      <h3>Profile</h3>
      <button onClick={onLogout}>Logout</button>
      {showName && <span>{name}</span>}
      <button onClick={handleClick}>Change name</button>
      <Form onSubmit={handleSubmit} />
    </>
  )
};


// const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//
//   const handleClick = () => {
//     changeCheckbox()
//   };
//
//   const handleSubmit = (text) => {
//     changeName(text)
//   };
//
//   return (
//     <>
//       <h3>Profile</h3>
//       {showName && <span>{name}</span>}
//       <button onClick={handleClick}>Change name</button>
//       <Form onSubmit={handleSubmit} />
//     </>
//   )
// };
//
// const mapStateToProps = (state) => ({
//   name: state.profile.name,
//   showName: state.profile.showName,
// });
//
// const mapDispatchToProps = {
//   changeName: setName,
//   changeCheckbox: () => toggleCheckbox
// }
//
// export const Profile = connect(
//   mapStateToProps, mapDispatchToProps
// )(ProfileToConnect)

