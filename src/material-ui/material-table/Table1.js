import { DataGrid } from "@material-ui/data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    editable: false,
    sortable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
    editable: true,
    sortable: true,
  },
];
const data = [
  { id: 1, name: "pham quang dung", age: 40 },
  { id: 2, name: "le anh tuan", age: 22 },
  { id: 3, name: "nguyen tuan dat", age: 26 },
  { id: 4, name: "nuyen viet dung", age: 22 },
  { id: 5, name: "luu quang dong", age: 23 },
  { id: 6, name: "nguyen van son", age: 30 },
  { id: 7, name: "bui quoc trung", age: 35 },
  { id: 8, name: "nguyen thanh hoang", age: 28 },
  { id: 9, name: "ta duy hoang", age: 28 },
];
export default function Table1() {
  return (
    <div style={{ height: 500, width: "flex" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
