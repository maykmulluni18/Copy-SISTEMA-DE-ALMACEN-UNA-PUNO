
import "./tableB.scss"
import TableData from "./Table";
import Layout from "../../Layout";
import { useState, useEffect, CSSProperties } from "react"
import ClipLoader from "react-spinners/ClipLoader";

/*const override: CSSProperties = {
    
    position: "absolute",
    top: "40%",
    left: "48%",
    color: "green",
  };
  
*/
const Listinfobienes = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    let [color, setColor] = useState("#ffffff");

    return (
        <Layout>
            <TableData />
        </Layout>
    )
}

export default Listinfobienes

