import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";

import { SharePrice } from "./CurrentPrice";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [getdata, setgetdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/shares")
      .then((response) => setgetdata(response.data));
  }, [getdata]);

  let get_no_unit = getdata.map((data) => data.number_of_stocks);
  let get_current_share = getdata.map((data) => data.price_per_unit);
  let curr_share_value = SharePrice.map((curr) => curr.value);

  const current_share_info = curr_share_value.map((dat, index) => {
    return dat * get_no_unit[index];
  });

  const current_user_share_info = get_current_share.map((dat, index) => {
    return dat * get_no_unit[index];
  });

  const profit_loss = current_share_info.map((data, index) => {
    return data - current_user_share_info[index];
  });

  return (
    <React.Fragment>
      <Title>Available Shares</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price Per Units</TableCell>
            <TableCell>Number Of Stocks</TableCell>
            <TableCell>Total Share Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Transaction Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getdata.map((dat) => (
            <TableRow key={dat.id}>
              <TableCell>{dat.name}</TableCell>
              <TableCell>{dat.price_per_unit}</TableCell>
              <TableCell>{dat.number_of_stocks}</TableCell>
              <TableCell>Rs {dat.number_of_stocks * dat.price_per_unit}</TableCell>
              <TableCell>{dat.status}</TableCell>
              <TableCell align="right">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(dat.transaction_date))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Title>Profit And Loss</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price Per Units</TableCell>
            <TableCell>Number Of Stocks</TableCell>
            {/* <TableCell>Total Share Amount</TableCell> */}
            <TableCell>Status</TableCell>
            <TableCell>Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getdata.map((dat) => (
            <TableRow key={dat.id}>
              <TableCell>{dat.name}</TableCell>
              <TableCell>{dat.price_per_unit}</TableCell>
              <TableCell>{dat.number_of_stocks}</TableCell>
              {/* <TableCell>{dat.number_of_stocks * dat.price_per_unit}</TableCell> */}
              <TableCell>{dat.status}</TableCell>
              <TableCell>Rs {dat.number_of_stocks * dat.price_per_unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
