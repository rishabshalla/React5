import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentContext } from "./StudentContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [student, setStudent] = useContext(StudentContext);
  const { ID } = useParams();

  useEffect(() => {
    student.forEach((data) => {
      if (data.ID === ID) {
        setName(data.name);
        setAge(data.age);
        setCourse(data.course);
        setBatch(data.batch);
      }
    });
  }, [ID, student]);

  function handleUpdate() {
    setStudent((prevStudent) =>
      prevStudent.map((data) =>
        data.ID === ID
          ? {
              ID,
              name,
              age,
              batch,
              course,
            }
          : data
      )
    );
  }
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
        <Link to="/student" className="btn" onClick={handleUpdate}>
          Update
        </Link>
      </div>
    </>
  );
};

export default UpdateStudent;
