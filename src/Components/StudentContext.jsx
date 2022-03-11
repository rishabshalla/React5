import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentAPI = (props) => {
  const [student, setStudent] = useState([]);
  return (
    <div>
      <StudentContext.Provider value={[student, setStudent]}>
        {props.children}
      </StudentContext.Provider>
    </div>
  );
};
