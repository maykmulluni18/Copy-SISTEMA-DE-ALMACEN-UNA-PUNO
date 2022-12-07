
import TablaMetas from "./TablaMetas";
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
const ListinfoMetas = () => {
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
            <TablaMetas />
        </Layout>
    )
}

export default ListinfoMetas