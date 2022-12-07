
export const userColumns = [

    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'pecosaPedidoId', headerName: 'Pecosa', width: 80 },
    { field: 'bieneId', headerName: 'Bien', width: 60 },

    {
        field: 'Bienes Descripcion',
        headerName: 'Bienes Descripcion',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 350,
        valueGetter: (params) =>
            `${params.row.biene.description || ''}`,
    },
    { field: 'cantidad', headerName: 'Cantidad', width: 100 },
    { field: 'cuenta_contable', headerName: 'Cuenta Contable', width: 140 },
    { field: 'p_unitario', headerName: 'P.Unitario', width: 110 },
    { field: 'observaciones', headerName: 'Observaciones', width: 210 },    
    { field: 'fecha', headerName: 'Fecha de Pedido', width: 140 },
    {
        field: 'P.Total',
        headerName: 'P.Total',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        valueGetter: (params) =>
            `${params.row.cantidad || ''}` * `${params.row.p_unitario || ''}`,
    },
];