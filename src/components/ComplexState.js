// import React, { useState } from "react";

// const ComplexState = () => {
//   const [data, setData] = useState({
//     name: "anas",
//     age: 20,
//     address: {
//       houseNo: "126-B",
//       area: "unit no 10",
//     },
//     course: {
//       course1: "Web Development",
//     },
//   });
//   const btnHandler = () => {
//     setData({
//       ...data,
//       name: "adeel",
//       address: {
//         ...data.address,
//         houseNo: "128-A",
//       },
//     });
//   };
//   console.log(data);
//   return (
//     <>
//       {data.name}
//       <br></br>
//       {data.age}
//       <br></br>
//       {data.address.houseNo}
//       <br></br>
//       {data.address.area}
//       <br></br>
//       {data.course.course1}
//       <br></br>
//       <button onClick={btnHandler}>Change Data</button>
//     </>
//   );
// };

// export default ComplexState;

import React, { useState } from "react";

const ComplexState = () => {
  const [data, setData] = useState({
    name: "anus",
    age: 20,
    address: {
      houseNo: "134-C",
      street: "10",
    },
    city: {
      city1: "hyderbad",
    },
  });

  const btnHandler = () => {
    let newdata = { ...data };
    newdata.name = "adeel";
    newdata.age = 22;

    let newAddress = { ...data.address };
    newAddress.houseNo = "135-A";
    newAddress.street = "12";
    newdata.address = newAddress;

    let newCity = { ...data.city };
    newCity.city1 = "karachi";
    newdata.city = newCity;
    setData(newdata);
    console.log(newdata);
  };
  return (
    <>
      {data.name}
      <br></br>
      {data.age}
      <br></br>
      {data.address.houseNo}
      <br></br>
      {data.address.street}
      <br></br>
      {data.city.city1}
      <br></br>
      <button onClick={btnHandler}>Change Data</button>
    </>
  );
};

export default ComplexState;
