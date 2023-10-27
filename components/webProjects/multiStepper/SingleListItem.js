import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
// import input from "@material-ui/core/TextField";
import { useStyles } from "./styles";

const SingleListItem = ({
  elem,
  handleDelete,
  handleEdit,
  setFormData,
  formData,
  setList,
  setError,
  list,
}) => {
  const [modal, setModal] = useState(false);
  document.addEventListener("click", (e) => {
    if (e.target.id === "overlayClose") {
      setModal(false);
    }
  });

  function openModal() {
    setModal(true);
  }

  const ShowModal = ({ elem }) => {
    let initialState = {
      email: elem.email,
      password: elem.password,
      confirmPassword: elem.confirmPassword,
      firstName: elem.firstName,
      lastName: elem.lastName,
      userName: elem.userName,
      nationality: elem.nationality,
      other: elem.other,
      id: elem.id,
    };

 
    const [edit, setEdit] = useState(initialState);

    const submitEdit = (e, id) => {
      e.preventDefault();

      let filteredList = list.filter((el) => {
        if (el.id === id) {
          el.email = edit.email;
          el.password = edit.password;
          el.confirmPassword = edit.confirmPassword;
          el.firstName = edit.firstName;
          el.lastName = edit.lastName;
          el.userName = edit.userName;
          el.nationality = edit.nationality;
          el.other = edit.other;
          el.id = id;
          return el;
        } else {
          return list;
        }
      });

      setList(filteredList);
      setModal(false);
    };

    return (
      <>
        <div
          id="overlayClose"
          style={{
            top: "0",
            left: "0",
            zIndex: 99,
            position: "fixed",
            width: "100vw",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div
            className=""
            style={{
              backgroundColor: "white",
              margin: "0 auto",
              marginTop: "28vh",
              borderRadius: "15px",
              padding: "5em",
            }}
          >
            <h1>UPDATE ENTRY</h1>

            <input
              margin="normal"
              required
              name="e-mail"
              label="Email"
              id="e-mail"
              autoComplete="e-mail"
              autoFocus
              type="text"
              placeholder="Email..."
              value={edit.email}
              onChange={(event) => {
                setEdit({ ...edit, email: event.target.value });
              }}
            />
            <input
              required
              name="password"
              label="PassWord"
              autoFocus
              id="password"
              autoComplete="password"
              type="text"
              placeholder="Password..."
              value={edit.password}
              onChange={(event) => {
                // setError(false)
                setEdit({ ...edit, password: event.target.value });
              }}
            />
            <input
              required
              name="confirm-password"
              label="Confirm PassWord"
              autoFocus
              id="confirm-password"
              autoComplete="confirm-password"
              type="text"
              placeholder="Confirm Password..."
              value={edit.confirmPassword}
              onChange={(event) => {
                // setError(false)
                setEdit({
                  ...edit,
                  confirmPassword: event.target.value,
                });
              }}
            />
            <input
              margin="normal"
              required
              name="id"
              label="Email"
              id="id"
              autoComplete="id"
              autoFocus
              type="text"
              placeholder="id"
              value={elem.id}
              onChange={(event) => {
                // setError(false)
                setEdit({ ...elem, id: elem.id });
              }}
            />
            <input
              required
              margin="normal"
              name="first-name"
              label="First Name"
              autoFocus
              id="first-name"
              autoComplete="first-name"
              type="text"
              placeholder="First Name..."
              value={edit.firstName}
              onChange={(e) => {
                //  setError(false)
                setEdit({ ...edit, firstName: e.target.value });
              }}
            />
            <input
              required
              name="last-name"
              label="Last Name"
              autoFocus
              id="last-name"
              autoComplete="last-name"
              type="text"
              placeholder="Last Name..."
              value={edit.lastName}
              onChange={(e) => {
                //  setError(false)
                setEdit({ ...edit, lastName: e.target.value });
              }}
            />
            <input
              required
              name="user-name"
              label="User Name"
              autoFocus
              id="user-name"
              autoComplete="user-name"
              type="text"
              placeholder="Username..."
              value={edit.userName}
              onChange={(e) => {
                //  setError(false)
                setEdit({ ...edit, userName: e.target.value });
              }}
            />
            <input
              required
              margin="normal"
              name="nationality"
              label="Nationality"
              autoFocus
              id="nationality"
              autoComplete="nationality"
              type="text"
              placeholder="Nationality..."
              value={edit.nationality}
              onChange={(e) => {
                setEdit({ ...edit, nationality: e.target.value });
              }}
            />
            <input
              required
              margin="normal"
              name="other"
              label="Other"
              autoFocus
              id="other"
              autoComplete="other"
              type="text"
              placeholder="Other..."
              value={edit.other}
              onChange={(e) => {
                setEdit({ ...edit, other: e.target.value });
              }}
            />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setModal(false)}
                style={{ backgroundColor: "tomato", color: "white" }}
              >
                CANCEL
              </button>
              <button
                onClick={(e) => {
                  submitEdit(e, elem.id);
                }}
                style={{ backgroundColor: "teal", color: "white" }}
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    // <div style={{
    //     display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
    //     justifyContent: 'space-evenly'
    // }}>
    <>
      <tbody>
        <tr
          style={{
            textAlign: "left",
            backgroundColor: "rgba(245,245,245)",
            width: "100%",
          }}
        >
          <td style={{ padding: "1em" }}>{elem.email}</td>
          <td style={{ padding: "1em" }}>{elem.firstName}</td>
          <td style={{ padding: "1em" }}>{elem.lastName}</td>
          <td style={{ padding: "1em" }}>{elem.userName}</td>
          <td style={{ padding: "1em" }}>{elem.nationality}</td>
          <td style={{ padding: "1em" }}>{elem.other}</td>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              verticalAlign: "middle",
            }}
          >
            <button
              style={{
                color: "white",
                backgroundColor: "tomato",
              }}
              onClick={() => handleDelete(elem.id)}
            >
              X
            </button>
            <button
              style={{ color: "white", backgroundColor: "teal" }}
              // onClick={() => handleEdit(elem.id)}
              onClick={() => {
                openModal();
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
      {modal && <ShowModal elem={elem} />}
    </>
  );
};

export default SingleListItem;