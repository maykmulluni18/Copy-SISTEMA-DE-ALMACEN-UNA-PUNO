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


export const SidebarDataNeas = [

    {
        title: 'Neas Entradas',
        path:'/neas-entradas',
        icon: <SummarizeIcon />,
        cName: 'nav-text'

    },
    {
        title: 'Neas Bienes',
        path:'/neas-bienes',
        icon: <InventoryIcon />,
        cName: 'nav-text'

    },
    {
        title: 'Neas Reportes',
        path:'/reportes-neas',
        icon: <SummarizeIcon />,
        cName: 'nav-text'

    }
]