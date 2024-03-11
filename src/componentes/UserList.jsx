import usersArray from "../services/UsersArrayV1";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const UserList = () => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Imagen</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre de usuario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersArray.map((user) => (
            <TableRow key={user.id}>
              <TableCell> {user.id} </TableCell>
              <TableCell>
                <img
                  src={user.avatar}
                  style={{ width: "50px", height: "50px" }}
                />
              </TableCell>
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
