import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, title, genre, imagen) {
  return { id, title, genre, imagen };
}

const rows = [
  createData(1, 'Título', 'Género', 'imagen.png'),
  createData(2, 'Título', 'Género', 'imagen.png'),
  createData(3, 'Título', 'Género', 'imagen.png'),
  createData(4, 'Título', 'Género', 'imagen.png'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell /* align="center" */>Id</TableCell>
            <TableCell /* align="center" */>Título</TableCell>
            <TableCell /* align="center" */>Género</TableCell>
            <TableCell /* align="center" */>Imagen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"  /* align="center" */>{row.id}</TableCell>
              <TableCell /* align="center" */>{row.title}</TableCell>
              <TableCell /* align="center" */>{row.genre}</TableCell>
              <TableCell /* align="center" */>{row.imagen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
