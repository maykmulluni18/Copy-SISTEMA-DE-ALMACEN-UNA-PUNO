import "./stocks.scss";
import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./Data";
import { GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react'
//import ModalEditUsers from "./modaleditusers/ModalEditUsers";
import axios from "axios";

const URI = 'http://localhost:8000/stock/'


const Stocks = () => {
   /* const [stocks, setStocks] = useState([])

    useEffect(() => {
        getStock()
    }, [])

    const getStock = async () => {
        const res = await axios.get(URI)
        console.log(res)
        setStocks(res.data)
    }
*/

    const actionColumn = [
        {
            field: "opciones",
            headerName: "Opciones",
            width: 330,
            renderCell: (params) => {
                return (
                    <>
                    </>
                );
            },
        },
    ];
    return (
        <>

            <div className="Tabledata_Sedes">

                <div className="Tabledata">
                    <div className="dataTitle">
                        Lista de de Stocks
                        <div className="CrearButton">
                        </div>
                    </div>
                    
                    <DataGrid
                        className="datagrid"
                        rows={''}
                        columns={userColumns.concat(actionColumn)}
                        pageSize={12}
                        rowsPerPageOptions={[5]}
                        //getRowId={row => row[0].id}                        //checkboxSelection
                        disableColumnSelector
                        components={{
                            Toolbar: GridToolbar,
                        }}
                        loading
                        //{...stocks}
                        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                    />
                </div>
            </div>u
        </>
    );
};

export default Stocks;
