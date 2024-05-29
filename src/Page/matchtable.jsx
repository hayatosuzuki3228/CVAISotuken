import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function createData(id, name, matchdo, history) {
  return {
    id,
    name,
    matchdo,
    history,
  };
}

const rows = [
  createData("001", "Frozen yoghurt", 90, [
    {
      date: "飲食業",
      customerId: "今、シンガポールにいます。",
      amount: "",
      employees: "",
      capital: "",
      sales: "",
    },
  ]),
  createData("002", "Ice cream sandwich", 90, [
    {
      date: "冒険業",
      customerId: "今、異世界にいます。",
      amount: "",
      employees: "",
    },
  ]),
  createData("003", "Eclair", 90, [
    {
      date: "飲食業",
      customerId: "今、夢の国にいます。",
      amount: "",
      employees: "",
    },
  ]),
  createData("004", "Cupcake", 90, [
    {
      date: "闇バイト",
      customerId: "今、どっかにいます。",
      amount: "",
      employees: "",
    },
  ]),
  createData("005", "Gingerbread", 90, [
    {
      date: "宇宙業",
      customerId: "今、宇宙戦艦ヤマトにいます。",
      amount: 3,
      employees: "",
    },
  ]),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.matchdo}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                詳細
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>業種</TableCell>
                    <TableCell>勤務地</TableCell>
                    <TableCell>募集学科</TableCell>
                    <TableCell>従業員数</TableCell>
                    <TableCell>資本金</TableCell>
                    <TableCell>売上高</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>{historyRow.employees}</TableCell>
                      <TableCell>{historyRow.capital}</TableCell>
                      <TableCell>{historyRow.sales}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    matchdo: PropTypes.number.isRequired,

    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        employees: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        sales: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export function Matchtable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>会社ID</TableCell>
            <TableCell>会社名</TableCell>
            <TableCell>マッチ度</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
