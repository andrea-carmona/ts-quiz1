import { createTheme } from '@mui/material/styles';
import {error} from 'console';
export const theme = createTheme ({
    palette: {
        primary: {
          main: "#00796B",
        },
        secondary: {
            main: "#FFAB00",
        },
        error: {
            main: "#D32F2F",
        },
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: { // Aplica estilos a todos los estados del botón
              color: 'white', // Texto blanco para todos los botones
              '&.MuiButton-containedPrimary': { // Botón primario
                backgroundColor: '#00796B', // Teal
                '&:hover': {
                  backgroundColor: '#005A4F', // Teal oscuro al pasar el mouse
                },
              },
            },
          },
        },
        MuiChip: {
            styleOverrides: {
              root: { // Estilos para el chip por defecto
                backgroundColor: '#00796B', // Teal para el fondo
                color: '#FFFFFF', // Texto blanco
                '&.MuiChip-outlined': { // Chip delineado
                  borderColor: '#FFAB00', // Borde ámbar
                  color: '#FFAB00', // Texto ámbar
                },
              },
            },
        },
        MuiAppBar: {
            styleOverrides: {
              colorPrimary: { // AppBar con color primario
                backgroundColor: '#004D40', // Dark Teal
              },
            },
        },
    },
    typography: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        body1: {
          fontSize: '16px',
        },
        h1: {
          fontWeight: 500,
        },
    },
});








