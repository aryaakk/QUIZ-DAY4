import axios from "axios";

export const postData = async (e) => {
//   e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3000/users", {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      address: e.target[3].value,
    });
    console.log(res);
    e.target.reset();
    e.window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const putData = async (e) => {
//   e.preventDefault();
  const body = {};
  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].value) {
      body[e.target[i].name] = e.target[i].value;
    }
  }
  console.log(body);
  try {
    const res = await axios.put(
      `http://localhost:3000/users/${e.target[0].value}`,
      {
        ...body,
      }
    );
    console.log(res);
    e.target.reset();
    e.window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const patchData = async (e) => {
//   e.preventDefault();
  try {
    const res = await axios.patch(
      `http://localhost:3000/users/${e.target[0].value}`,
      {
        name: e.target[1].value,
        phone: e.target[2].value,
        email: e.target[3].value,
        address: e.target[4].value,
      }
    );  
    console.log(res);
    e.target.reset();
    e.window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const DeleteData = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    window.location.reload();
  } catch (error) {}
};