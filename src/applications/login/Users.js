import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import MaterialTable from "material-table";
import React from "react";

export default function Users() {
  const columns = [
    { title: "Username", field: "userLoginId" },
    { title: "Created Stamp", field: "createdStamp" },
  ];
  return (
    <div>
      <MaterialTable
        title="User management"
        icons={{
          Check: Check,
          DetailPanel: ChevronRight,
          Export: SaveAlt,
          Filter: FilterList,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          Search: Search,
          ThirdStateCheck: Remove,
        }}
        options={{
          search: true,
          sorting: true,
        }}
        columns={columns}
        data={(query) =>
          new Promise((resolve, reject) => {
            console.log("query = ", query);
            let url =
              "http://localhost:8080/public/list-page-users?page=" +
              `${query.page}` +
              "&size=" +
              `${query.pageSize}`;
            fetch(url)
              .then((res) => res.json())
              .then((res) => {
                console.log("res = ", res);
                resolve({
                  data: res.content,
                  page: query.page,
                  totalCount: res.totalElements,
                });
              });
          })
        }
      ></MaterialTable>
    </div>
  );
}
