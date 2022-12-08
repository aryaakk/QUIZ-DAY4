import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import Form from "./component/form/Form";
import { Modal, Pagination } from "antd";
import {
  postData,
  putData,
  patchData,
  DeleteData,
} from "./service/users.service/index.service";

function App() {
  //function getUsers
  const [users, setUsers] = useState(null);
  // const [rendering, forceUpdate] = useReducer((x) => x + 1, 0);
  async function getUsers(page = "", limit = "") {
    try {
      const res = await axios.get(
        `http://localhost:3000/users?_page=${page}&_limit=${limit}`
      );
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers(0, 8);
  }, []);
  //end function getUsers

  //function delete data
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("YAKINN NIH DIHAPUS??");
  const showModal = (id) => {
    setOpen(true);
    setId(id);
    console.log(id);
  };
  const handleOk = () => {
    setModalText("OKEYYY TUNGGU BENTARR YAKK");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      DeleteData(id);
    }, 1000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  //end function delete

  return (
    <>
      <div className="App">
        <div className="getUsers">
          <div className="header">
            <span>GET ALL USERS DATA</span>
          </div>
          <div className="wrapperGet">
            {users?.map((user, index) => (
              <div className="get" key={index}>
                <div className="header">
                  <span>{user.id}</span>
                </div>
                <div className="isi">
                  <p>NAME</p>
                  <span>{user.name}</span>
                  <p>PHONE</p>
                  <span>{user.phone}</span>
                  <p>EMAIL</p>
                  <span>{user.email}</span>
                </div>
                <div className="footer">
                  <button onClick={() => showModal(user.id)}>HAPUS</button>
                </div>
              </div>
            ))}
          </div>
          <div className="pagin">
              <div className="prev">

              </div>
          </div>
        </div>
        <div className="postUsers">
          <div className="header">
            <span>POSTS USERS DATA</span>
          </div>
          <div className="wrapperPost">
            <Form
              action={(e) => {
                postData(e);
              }}
              submitName="POST DATA"
            />
          </div>
        </div>
        <div className="putUsers">
          <div className="header">
            <span>PUT USERS DATA</span>
          </div>
          <div className="wrapperPost">
            <Form
              action={(e) => {
                putData(e);
              }}
              type="update"
              submitName="PUT DATA"
            />
          </div>
        </div>
        <div className="patchUsers">
          <div className="header">
            <span>PATCH USERS DATA</span>
          </div>
          <div className="wrapperPost">
            <Form
              action={(e) => {
                patchData(e);
              }}
              type="update"
              submitName="PATCH DATA"
            />
          </div>
        </div>
      </div>
      <Modal
        title="DELETE DATA"
        open={open}
        className="modall"
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}

export default App;
