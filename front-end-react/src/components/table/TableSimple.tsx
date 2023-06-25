import { Paper, TextField,TablePagination} from '@mui/material';

import { useState } from "react";
import "./TableSimple.css";
import { ButtonAdd } from '../buttons/ButtonAction';

export interface ColumnTable {
    id: number;
    value: string;
    title: string;
    width :string;
    alignTitle:any;
    align:any;
}


interface TableSimpleProps {
    columns: ColumnTable[];
    rows: any;
    rowId:string;
    saveRow: ()=>void;
    tableColumnFormat:(value:any) => void;
}

export const TableSimple = ({saveRow, columns, rows,tableColumnFormat,rowId }: TableSimpleProps) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchValue, setSearchValue] = useState('');
    const [rowsChange, setRowsChange] = useState([]);
    

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
      };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setPage(0);
        let search = e.target.value;
        setSearchValue(search);
        const gridRow = search.toString().toLowerCase();
        const filteredRows = rows.filter((item: any) =>
            columns.some((val) =>
                item[val.value] ? item[val.value].toString().toLowerCase().includes(gridRow) : ""
            )
        );
        setRowsChange(filteredRows);
    };


  
    tableColumnFormat(rows)
    return (
        <div className='container-fluid' style={{marginTop :"20px"}}>
    <Paper>
            <div className="table-responsive-sm">
                <div  style={{ float: "left", margin :"0.5rem"}}>
                <ButtonAdd saveFunction={saveRow} />
                </div>
            

                <div  style={{ float: "right" }}>
                    <TextField
                        value={searchValue}
                        onChange={handleSearchChange}
                        sx={{ minWidth: "5rem", marginRight: "0.5rem", marginBottom: "1rem" }}

                        label={"Filtrar"} variant="outlined" size="small" InputLabelProps={{
                            shrink: true,
                        }} />

                </div>
                <table className="table table-hover table-sm table-bordered table-container " >
                    <thead  >
                        <tr >
                            {columns.map((l) =>
                                <th  align={l.alignTitle}  key={l.id} >
                                    <span style={{marginLeft : "3px"}}>
                                    {l.title}
                                    </span>
                                    </th>
                            )}
                        </tr>
                    </thead>

                    <tbody>

                        {((rowsChange.length === 0 && searchValue === "") ? rows : rowsChange)
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((l: any) =>

                                <tr key={l[rowId]}>
                                    {columns.map((k) =>
                                        <td width={k.width} align={k.align}  key={k.id} >
                                            <div style={{marginLeft :"2px"}} > {l[k.value]}</div>
                                                                                    
                                            </td>
                                    )}
                                </tr>
                            )}
                    </tbody>
                </table>
                <TablePagination

                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    component="div"
                    count={((rowsChange.length === 0 && searchValue === "") ? rows : (rowsChange)).length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    labelRowsPerPage={"Registros por Página" + (searchValue !== "" ? " Filtrado" : "")}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
               
            </div>
            </Paper>
        </div>
    )
}