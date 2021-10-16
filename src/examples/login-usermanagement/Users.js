import { Button } from "@material-ui/core";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  FilterList,
  LastPage,
} from "@material-ui/icons";
import FirstPage from "@material-ui/icons/FirstPage";
import axios from "axios";
import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";
export default function Users() {
  const history = useHistory();
  const columns = [
    { title: "Username", field: "userLoginId" },
    { title: "Email", field: "email" },
  ];

  function handleAdd() {
    history.push("/create-user");
  }
  return (
    <div>
      <h1>User management</h1>

      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
      <MaterialTable
        columns={columns}
        icons={{
          Check: Check,
          FirstPage: FirstPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          LastPage: LastPage,
          Filter: FilterList,
        }}
        data={(query) =>
          new Promise((resolve, reject) => {
            console.log("query = ", query);
            let url =
              "http://localhost:8080/list-page-users?page=" +
              `${query.page}` +
              "&size=" +
              `${query.pageSize}`;
            let token = localStorage.getItem("token");

            axios
              .get(url, { headers: { "x-auth-token": token } })
              .then((res) => res.data)
              .then((res) => {
                resolve({
                  data: res.content,
                  page: query.page,
                  totalCount: res.totalElements,
                });
              })
              .catch((err) => {
                console.log("Failed, err = ", err);
                //if (err.response.status === 401) {
                history.push("/login");
                //}
              });
          })
        }
      />
    </div>
  );
}
