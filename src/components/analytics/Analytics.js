import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import BarChart from "./charts/BarChart"
import PieChart from "./charts/PieChart";
import "./style.css"

import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Analytics() {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={9}>
                        <BarChart/>
                    </Grid>
                    <Grid item xs={3}>
                        <PieChart/>
                        <div className="status-div">
                            <div style={{width: 100, height: 100, padding: 10}}>
                                <CircularProgressbar text="50%" value={50}/>
                            </div>
                            <div style={{width: 100, height: 100, padding: 10}}>
                                <CircularProgressbar text="70%" value={76}/>
                            </div>
                            <div style={{width: 100, height: 100, padding: 10}}>
                                <CircularProgressbar text="45%" value={45}/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}