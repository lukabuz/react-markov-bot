import React, { Component } from 'react';
import Grid  from '@material-ui/core/Grid';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';

class SubmitDataset extends Component {
    state = {
        name: '',
        description: '',
        author: '',
        text: '',
    };

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };    

    render() {
        return (
            <React.Fragment>
                <Grid style={{flex: '1', margin: '5px', width: '100%', padding: '15px'}} item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        style={{width: '100%'}}
                    >
                        <Grid style={{margin: '5px', width: '100%'}} item>
                            <InputLabel style={{fontSize: '18px'}} shrink>ტექსტის სახელი</InputLabel>
                            <TextField
                                style={{margin: '15px', flex: 1, width: '80%'}}
                                id="standard-text"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                type="text"
                                margin={'normal'}
                            />
                        </Grid>
                        <Grid style={{margin: '5px', width: '100%'}} item>
                            <InputLabel style={{fontSize: '18px'}} shrink>ტექსტის აღწერა</InputLabel>
                            <TextField
                                style={{margin: '15px', flex: 1, width: '80%'}}
                                id="standard-text"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                type="text"
                                margin={'normal'}
                            />
                        </Grid>
                        <Grid style={{margin: '5px', width: '100%'}} item>
                            <InputLabel style={{fontSize: '18px'}} shrink>ტექსტის ავტორი</InputLabel>
                            <TextField
                                style={{margin: '15px', flex: 1, width: '80%'}}
                                id="standard-text"
                                value={this.state.author}
                                onChange={this.handleChange('author')}
                                type="text"
                                margin={'normal'}
                            />
                        </Grid>
                        <Grid style={{margin: '5px', width: '100%'}} item>
                            <InputLabel style={{fontSize: '18px'}} shrink>ტექსტი</InputLabel>
                            <TextField
                                style={{margin: '15px', flex: 1, width: '80%'}}
                                id="standard-text"
                                value={this.state.text}
                                onChange={this.handleChange('text')}
                                type="text"
                                margin={'normal'}
                                multiline
                                rows={5}
                            />
                        </Grid>
                        <Grid style={{flex: '1', margin: '5px', padding: '10px', direction: 'row'}} item>
                            <Button style={{width: '100%'}} onClick={this.getSentence} variant="contained" color="secondary">
                                შექმენი!
                            </Button>
                            {/* <ReCAPTCHA
                                sitekey="6LdwfHgUAAAAAKh_6QFFy9mD1x6RPIyTfY2Qu_Fs"
                                verifyCallback={this.verifyCallBack}
                            /> */}
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default SubmitDataset;
