import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, title, genre, year) {
  return { id, title, genre, year };
}

const rows = [
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
].sort((a, b) => (a.title < b.title ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead style={{  }}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Género</TableCell>
            <TableCell>Año</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ width: 50 }} align="left">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left" /* component="th" scope="row" */>
                {row.title}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.genre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.year}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}


/* import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, title, genre, year) {
  return { id, title, genre, year };
}

const rows = [
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
  createData(0, 'Título', 'Género', 'Año'),
  createData(1, 'Título', 'Género', 'Año'),
  createData(2, 'Título', 'Género', 'Año'),
  createData(3, 'Título', 'Género', 'Año'),
  createData(4, 'Título', 'Género', 'Año'),
]; */

/* import { TableCell } from "@mui/material";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Género</TableCell>
            <TableCell>Año</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.genre}</TableCell>
              <TableCell>{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */

