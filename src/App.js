import React, { Component } from 'react';
import './App.css';
import Info from './Components/Info.js';
import SubmitDataset from './Components/SubmitDataset.js';
import UseBot from './Components/UseBot.js';
import ViewDatasets from './Components/ViewDatasets.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';


class App extends Component {
  state = {
    dialogOpen: false,
    error: '',
    selectedTab: 0
  }
  
  handleClose = () => { this.setState({ dialogOpen: false, error: '' }) };

  throwError = (error) => { this.setState({ dialogOpen: true, error: error }) };

  handleChange = (event, value) => this.setState({selectedTab: value});

  render() {
    const value = this.state.selectedTab;

    return (
      <React.Fragment>
        <AppBar z-index={1100} position="static">
          <React.Fragment>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                მარკოვ ბოტი
              </Typography>
            </Toolbar>
            <Tabs fullWidth value={value} onChange={this.handleChange} scrollable scrollButtons={'auto'}>
              <Tab label="ბოტთან ლაპარაკი"></Tab>
              <Tab label="რა არის მარკოვ ბოტი?"></Tab>
              <Tab label="ბოტისთვის ტექსტის სწავლება"></Tab>
              <Tab label="ნასწავლი ტექსტები"></Tab>
              <Tab label="სასწავლი ტექსტები"></Tab>
            </Tabs>
          </React.Fragment>
        </AppBar>
        <Grid
          style={{padding: '1rem'}}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {/* <Grid style={{flex: '1', margin: '5px'}} item></Grid> */}
          <Grid style={{flex: 3, margin: '5px'}} item>
            <Paper z-index={1300} style={{height:'100%', width:'100%'}}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                {value === 0 && <UseBot throwError={this.throwError} />}
                {value === 1 && <Info throwError={this.throwError} />}
                {value === 2 && <SubmitDataset throwError={this.throwError} />}
                {value === 3 && <ViewDatasets throwError={this.throwError} verified={true}/>}
                {value === 4 && <ViewDatasets throwError={this.throwError} verified={false}/>}
              </Grid>
            </Paper>
          </Grid>
          {/* <Grid style={{flex: '1', margin: '5px'}} item></Grid> */}
        </Grid>
        <Dialog 
          open={this.state.dialogOpen || false}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"დაფიქსირდა შეცდომა."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              დახურვა
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default App;
