import "./tabelbaru.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  
  
  {
    field: "fullName",
    headerName: "Product",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Luwak", firstName: "Kopi" },
  { id: 2, lastName: "Saset", firstName: "Kopi" },
  { id: 3, lastName: "Murni", firstName: "Susu" },
  { id: 4, lastName: "Gembira", firstName: "Soda", age: 16 },
  { id: 5, lastName: "Kuat", firstName: "Jahe", age: null },
  { id: 6, lastName: "Ultra", firstName: "Susu", age: 150 },
  { id: 7, lastName: "Gayo", firstName: "Kopi", age: 44 },
  { id: 8, lastName: "Latte", firstName: "Matcha", age: 36 },
  { id: 9, lastName: "Velvet", firstName: "Red", age: 65 },
];

const actionColumn = [
  {
    
  },
];

const Tabelbaru = () => {
  return (
    <div className="tabelbaru">
      <div className="tabelbaruTitle">
        Kategori
        
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Tabelbaru;
