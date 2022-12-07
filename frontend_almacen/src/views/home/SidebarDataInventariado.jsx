import InventoryIcon from '@mui/icons-material/Inventory';
import SummarizeIcon from '@mui/icons-material/Summarize';

export const SidebarDataInventariado = [
    {
        title: 'Inventariado Inicial',
        path:'/inventariado-inicial',
        icon: <InventoryIcon />,
        cName: 'nav-text'

    },
    {
        title: 'Reportes de Inventariado',
        path:'/reporte-inventariado',
        icon: <SummarizeIcon />,
        cName: 'nav-text'

    }
]