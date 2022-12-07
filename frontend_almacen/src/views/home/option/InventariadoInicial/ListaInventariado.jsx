import Layout from "../../Layout";
import { useState, useEffect, CSSProperties } from "react"
import TablaInventariado from "./TablaIventariado";

/*const override: CSSProperties = {
    
    position: "absolute",
    top: "40%",
    left: "48%",
    color: "green",
  };
  
*/
const ListaInventariado = () => {
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
            <TablaInventariado />
        </Layout>
    )
}

export default ListaInventariado

