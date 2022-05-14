import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css"

// Components
import Drawer from "./components/drawer/Drawer"

export default function App() {

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark'
                }
            }),
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div>
                <Drawer/>
            </div>
        </ThemeProvider>
    );
}