import * as React from "react";
import DataTable from "./Data_Table";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <DataTable />
    </React.Fragment>
  );
}
