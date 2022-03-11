import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  const [student, setStudent] = useContext(StudentContext);

  const handleSubmit = () => {
    if (name && age && course && batch) {
      setStudent([
        ...student,
        {
          ID: new Date().getTime().toString(),
          name,
          age,
          course,
          batch,
        },
      ]);
    } else {
      alert(
        "Field is required.\nYou have left a field empty and a value must be entered."
      );
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "red",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="inner-container">
          <TextField
            id="outlined-basic"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
          />
        </div>
        <div className="inner-container">
          <TextField
            id="outlined-basic"
            label="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            type="number"
          />
        </div>
      </Box>
      <div className="btn-container">
        <Link to="/student" className="btn">
          Cancel
        </Link>
        <Link to="/student" className="btn" onClick={handleSubmit}>
          Submit
        </Link>
      </div>
    </>
  );
};

export default AddStudent;
