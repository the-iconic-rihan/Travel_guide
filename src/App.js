import './App.css';
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import React from 'react';

export const App = () => {
  return (
    <>
      {/* the Cssbaseline manages the margin, padding, and bg-color immediately */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        {/* the left grid will occupy full space on mobile phone and 4 spaces on medium devices. */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App;
