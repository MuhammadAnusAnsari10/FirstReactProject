export default function Jsx(prop) {
  return (
    <ul>
      {/* for array */}

      {/* <li>{prop.name[0]}</li>
      <li>{prop.name[1]}</li>
      <li>{prop.name[2]}</li>
      <li>{prop.name[3]}</li> */}
      {/* ------------------------- */}

      {/* using map function */}

      {prop.name.map((receive, index) => (
        <li key={index}>{receive}</li>
      ))}

      {/* --------------------------- */}

      {/* for array of ojb */}

      {/* <li>{prop.attr[0].name}</li>
      <li>{prop.attr[0].age}</li>
      <li>{prop.attr[0].email}</li>
      <hr></hr>
      <li>{prop.attr[1].name}</li>
      <li>{prop.attr[1].age}</li>
      <li>{prop.attr[1].email}</li> */}
    </ul>
  );
}
