import "./tablametas.scss";
import * as React from 'react';
import { DataGrid, esES } from "@mui/x-data-grid";
import { userColumns } from "./DataMetas";
import { Link } from "react-router-dom";
import { GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Swal from 'sweetalert2';
import axios from "axios";

const URI = 'http://localhost:8000/metas/'


const TablaMetas = () => {
  const [metas, setMetas] = useState([])

  useEffect(() => {
    getMetas()
  }, [])

  const getMetas = async () => {
    const res = await axios.get(URI)
    setMetas(res.data)
  }

  const deleteMetas = async (id) => {
    const res = await axios.delete(`${URI}${id}`)
    if (res.status === 200) {
      Swal.fire({
        title: 'Esta Seguro que Desea Eliminar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#160a3d',
        cancelButtonColor: '#3d0a0a',
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: 'No, Cancelar',
        timer: 15500
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Eliminado!',
            icon: 'success',
            timer: 5500
          })
          getMetas(res.data)

        }
      })
    }
  }


  const actionColumn = [
    {
      field: "opciones",
      headerName: "Opciones",
      width: 330,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton"><VisibilityIcon /></div>
            </Link>

            <Link to={`edit/${params.id}`}>
              <div className="EditButton">
                <EditIcon />
              </div>
            </Link>

            <div className="cellAction">

              <div
                className="deleteButton"
                onClick={() => deleteMetas(params.id)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="Table_bienes">
      <div className="top">
        <h1>Metas de la Oficina  de abastecimiento</h1>
      </div>
      <div className="Tabledata">
        <div className="dataTitle">
          Lista de Metas
          <div className="CrearButton">
            <Link to={'created-metas'}>
              <button className="crear_bienes">Crear</button>
            </Link>
          </div>
        </div>
        <DataGrid
          className="datagrid"
          rows={metas}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[5]}
          //disableColumnFilter
          disableColumnSelector
          //disableDensitySelector
          components={{ Toolbar: GridToolbar }}
          {...metas}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}

          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </div>

  );
};

export default TablaMetas;
