import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

const Student = () => {
  const [data, setData] = useContext(StudentContext);

  console.log(data);

  let deleteStudent = (index) => {
    let tempArr = [];
    data.map((student) => (student.ID === index ? "" : tempArr.push(student)));
    setData(tempArr);
  };

  return (
    <>
      <div className="title-container">
        <h1 className="title">STUDENT DETAILS</h1>
        <Link to="/student/addStudent" className="btn">
          Add Student
        </Link>
      </div>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ width: 175 }}>
                  Name
                </TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Course</TableCell>
                <TableCell align="center">Batch</TableCell>
                <TableCell align="center">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((student) => {
                const { ID, name, age, course, batch } = student;
                return (
                  <TableRow key={ID}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="center">{age}</TableCell>
                    <TableCell align="center">{course}</TableCell>
                    <TableCell align="center">{batch}</TableCell>
                    <TableCell align="center">
                      <Link to={`/student/edit/${ID}`} className="edit-btn">
                        <ModeEditIcon />
                      </Link>
                      <DeleteIcon
                        onClick={() => deleteStudent(ID)}
                        className="delete-btn"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Student;
