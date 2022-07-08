import { Form } from "../../components/Form/Form";
import { logOut, userNameRef, userRef, userShowNameRef } from "../../services/firebase";
import { useEffect, useState } from "react";
import { onValue, set } from "@firebase/database";


export const Profile = () => {

  const [ name, setName ] = useState("");
  const [ showName, setShowName ] = useState(false);

  const handleClick = () => {
    set(userShowNameRef, !showName);
  };

  const handleSubmit = (text) => {
    set(userNameRef, text);
  };

  useEffect(() => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => {
      setName(snapshot.val());
    });
    const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
      setShowName(snapshot.val());
    });
    return () => {
      unsubscribeName();
      unsubscribeShowName();
    }
  }, []);

  return (
    <>
      <h3>Profile</h3>
      <button onClick={logOut}>Logout</button>
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

