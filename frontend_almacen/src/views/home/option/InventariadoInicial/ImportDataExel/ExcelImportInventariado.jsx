import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from "axios";
import "./exceldata.scss"

const URI = 'http://localhost:8000/excelimport/upload/'
const ExcelImportInventariado = () => {
  const [archivo, setArchivo] = useState(null)
  const subirArchivos = e => {
    setArchivo(e)
  }
  const getArchivo = async () => {
    const ar = new FormData()
    for (let i = 0; i < archivo.length; i++) {
      ar.append('file', archivo[i])
    }
    await axios.post(URI, ar)
  }
  return (
    <>
      <div className="contend_ex">
        <input
          type='file'
          name="file"
          onChange={(e) => subirArchivos(e.target.files)}
        />
        <button className="buttonE" onClick={() => getArchivo()}>Insertar datos por Excel</button>
      </div>
    </>
  )
}

export default ExcelImportInventariado