import React, { Component } from 'react';
import Grid  from '@material-ui/core/Grid';
import TextField  from '@material-ui/core/TextField';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
// import ReCAPTCHA from "react-recaptcha";
import axios from 'axios';

const sentenceLink = 'https://node-markov-bot.herokuapp.com/sentence/make';

class UseBot extends Component {
    state = {
        number: 10,
        loadingSentence: false,
        sentenceLoaded: false,
        captchaValue: ''
    };

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    // verifyCallBack = (value) => {
    //     console.log(value)
    //     this.setState({captchaValue: value});
    // }

    setNumber = (e) => {
        this.setState({number: e.target.value});
    }

    getSentence = (e) => {
        e.preventDefault();
        this.setState({loadingSentence: true});
        axios.get(sentenceLink + '?length=' + this.state.number).then(res => {
            if(res.data.status === 'success') { 
                this.setState({ 
                    loadingSentence: false,
                    sentenceLoaded: true,
                    sentence: res.data.message,
                    time: res.data.time
                });
            } else if (res.data.status === 'error'){
                this.props.throwError(res.data.error);
                this.setState({
                    sentenceLoaded: false,
                })
            }            
        });
    }

    render() {
        return (
            <React.Fragment>
                <Grid style={{flex: 1, margin: '5px', padding:'10px' }} item>
                        <Grid
                        style={{padding: '1rem'}}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >   
                        <React.Fragment>
                            <InputLabel style={{fontSize: '30px'}} shrink>რამდენ სიტყვიანი წინადადება შექმნას მარკოვ ბოტმა?</InputLabel>
                            <Grid style={{margin: '5px', padding:'10px'}} item>
                                    <TextField
                                        style={{margin: '15px', flex: 1}}
                                        id="standard-number"
                                        value={this.state.number}
                                        onChange={this.setNumber}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        margin={'normal'}
                                    />
                            </Grid>
                            <Grid style={{margin: '5px', padding: '10px', direction: 'row'}} item>
                                <Button style={{width: '100%'}} onClick={this.getSentence} variant="contained" color="secondary">
                                    შექმენი!
                                </Button>
                                {/* <ReCAPTCHA
                                    sitekey="6LdwfHgUAAAAAKh_6QFFy9mD1x6RPIyTfY2Qu_Fs"
                                    verifyCallback={this.verifyCallBack}
                                /> */}
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>
                {this.state.sentenceLoaded ? 
                    (<Grid style={{flex: 1, margin: '5px', padding:'10px' }} item>
                        <Typography variant="h4" gutterBottom>
                            მარკოვ ბოტმა წინადადება შექმნა {this.state.time} წამში!
                        </Typography>
                        <hr></hr>
                        <Typography variant="h5" gutterBottom>
                            {this.state.sentence}
                        </Typography>
                    </Grid>)
                : this.state.loadingSentence ? (<CircularProgress color={"primary"}/>) : null}
            </React.Fragment>
        );
    }
}

export default UseBot;
