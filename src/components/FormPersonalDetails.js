import React from 'react'
import MuiThemeProvider  from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {

    const forward = e => {
        e.preventDefault()
        nextStep()
    }

    const back = e => {
        e.preventDefault()
        prevStep()
    }
    
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details" />
                <TextField 
                    style={styles.textFeild}
                    hintText="Enter Your Occupation" 
                    floatingLabelText = "Occupation"
                    onChange={handleChange('Occupation')}
                    defaultValue={values.occupation}
                />
                <br/>
                <TextField 
                    style={styles.textFeild}
                    hintText="Enter Your City" 
                    floatingLabelText = "City"
                    onChange={handleChange('City')}
                    defaultValue={values.city}
                />
                <br/>
                <TextField 
                    style={styles.textFeild}
                    hintText="Enter Your Bio" 
                    floatingLabelText = "Bio"
                    onChange={handleChange('Bio')}
                    defaultValue={values.bio}
                />
                <br/>
                <div style={styles.cont}>
                    <RaisedButton
                        label="Back"
                        primary={true}
                        style={styles.button1}
                        onClick={back}
                    />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button2}
                        onClick={forward}
                    />
                </div>

            </React.Fragment> 
        </MuiThemeProvider>
    )
}

const styles = {
    cont: {
        display: 'flex',
        justifyContent: 'center'
    },
    button1:{
        marginRight: '10px'
    },
    button2:{
        marginLeft: '10px'
    },
    textFeild:{
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default FormPersonalDetails
