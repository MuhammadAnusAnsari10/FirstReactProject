import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  deleteField,
} from "firebase/firestore";
import { db } from "../FireBase/FireBaseConfig";
import { Button } from "@mui/material";
import uuid from "react-uuid";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dbData, setDbData] = useState();

  // add data

  // const addData = () => {
  //   const DataRef = addDoc(collection(db, "users"), {
  //     name: name,
  //     email: email,
  //   });
  //   alert("Data Add");
  //   setName("");
  //   setEmail("");
  // };

  // update data

  // const updateData = () => {
  //   const DataRef = doc(db, "users", "L9Xx04OdHQO8sV519kw4");
  //   updateDoc(DataRef, {
  //     name: name,
  //     email: email,
  //   });
  //   alert("Data updated");
  //   setName("");
  //   setEmail("");
  // };

  // delete data

  // const deleteData = () => {
  //   const DataRef = doc(db, "users", "L9Xx04OdHQO8sV519kw4");
  //   // deleteDoc(DataRef);   =>   delete complete collection
  //   updateDoc(DataRef, {
  //     name: deleteField(), //  => delete only one feild
  //   });
  //   alert("deleted");
  // };

  // get data
  // useEffect(() => {
  //   const getData = async () => {
  //     const DataRef = await getDocs(collection(db, "users"));
  //     const [data] = DataRef.docs?.map((doc) => doc.data());
  //     // setDbData(data);
  //     setDbData([...dbData,
  //     dname:data.name

  //     ])
  //     console.log(data);
  //     console.log(DataRef.docs[0].id);
  //   };
  //   getData();
  // }, []);

  // /

  useEffect(() => {
    const getData = async () => {
      const DataRef = await getDocs(collection(db, "users"));
      // const data = DataRef.docs.map((doc) => ({
      //   dname: doc.data().name,
      //   demail: doc.data().email,
      //   dkey: doc.id,
      // }));
      const data = DataRef.docs.map((doc) => ({
        dname: doc.data().name,
        demail: doc.data().email,
        dkey: doc.id,
      }));
      setDbData(data);
    };
    getData();
  }, []);

  const UpdatedData = (key) => {
    // console.log(e);

    const DataRef = doc(db, "users", key);
    updateDoc(DataRef, {
      name: "anus",
    });
    alert("Data updated");
    // setName("");
    // setEmail("");
  };
  return (
    <>
      {/* <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addData}>add Data</button>
      <button onClick={updateData}>Update</button>
      <button onClick={deleteData}>delete</button> */}
      {/* <button onClick={getData}>click</button> */}
      <ul>
        {dbData?.map((e) => (
          <li key={uuid()}>
            {e.dname}{" "}
            <button value={e.dkey} onClick={(e) => UpdatedData(e.target.value)}>
              update
            </button>
            {/* <span>{uuid()}</span> */}
          </li>
        ))}
      </ul>
    </>
  );
}
