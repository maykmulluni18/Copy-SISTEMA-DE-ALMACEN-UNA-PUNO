//import "./everybody.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { LogOut, reset } from "./auth/Authen";
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { SidebarDataHome } from "./SidebarDataHome";
import { SidebarDataNeas } from './SidebarDataNeas';
import { SidebarDataPecosa } from './SidebarDataPecosa';
import { SidebarDataBienes } from './SidebarDataBienes';
import { SidebarDataSedes } from './SidebarDataSedes';
import { SidebarDataAdministrativos } from './SidebarDataAdministrativos';
import { SidebarDataUsers } from './SidebarDataUsers';
import { SidebarDataMetas } from './SidebarDataMetas';
import { SidebarDataInventariado }  from './SidebarDataInventariado'
import img from "./UNAP.png"
import "./sidebar.scss"



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth)
    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    }

    return (
        <div id='leftCol' className="sidebar_grid grid">
            <div className="Logo flex">
                <img src={img} alt="Imagen" />
                <h2>
                    Alamcen
                </h2>
            </div>
            <div className="menu_div">
                <ul className="menu_list grid">
                    {
                        SidebarDataHome.map((item, index) => {
                            return (
                                <li key={index} className="list_item active">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span> </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Neas
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataNeas.map((item, index) => {
                            return (
                                <li key={index} className="list_item ">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon active">{item.icon}
                                            <span className="smallText">{item.title}</span> </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Pecosa
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataPecosa.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Bienes
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataBienes.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>

            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Lista de Sedes
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataSedes.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className="menu_div">
                <h3 className="title_div">
                    Lista de Metas
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataMetas.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>

            <div className="menu_div">
                <h3 className="title_div">
                    Lista de Inventariado
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataInventariado.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>

            <div className="seting_div">
                <h3 className="title_div">
                    Administrativos
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataAdministrativos.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className="seting_div">
                <h3 className="title_div">
                    Usuarios - Administradores
                </h3>
                <ul className="menu_list grid">
                    {
                        SidebarDataUsers.map((item, index) => {
                            return (
                                <li key={index} className="list_item">
                                    <p className="menu_link flex">
                                        <Link to={item.path} className="icon">{item.icon}
                                            <span className="smallText">{item.title}</span>
                                        </Link>
                                    </p>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className='sidebarcar'>
                <DashboardIcon className='icon' />
                <div className='carcontend'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <h3>Help</h3>
                    <p>holas como estas</p>
                    <button className='btn'>help</button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar