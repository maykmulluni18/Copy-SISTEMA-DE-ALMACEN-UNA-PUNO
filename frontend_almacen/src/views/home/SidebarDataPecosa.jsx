import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
//import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const SidebarDataPecosa = [
    {
        title: 'Pecosa Pedidos',
        path:'/pecosa-pedidos',
        icon: <SummarizeIcon />,
        cName: 'nav-text'

    },
    {
        title: 'Pecosa Bienes',
        path:'/pecosa-bienes',
        icon: <InventoryIcon />,
        cName: 'nav-text'

    },
    
    {
        title: 'Reportes de Pecosa',
        path:'/reportes-pecosa',
        icon: <SummarizeIcon />,
        cName: 'nav-text'

    }
]