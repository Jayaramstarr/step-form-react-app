import React from 'react'
import MuiThemeProvider  from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

const FormUserDetails = ({ values, handleChange, nextStep }) => {

    const forward = e => {
        e.preventDefault()
        nextStep()
    }
    
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField 
                    style={styles.textFeild}
                    container justify = "center"
                    hintText="Enter Your First Name" 
                    floatingLabelText = "First Name"
                    onChange={handleChange('FirstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                    style={styles.textFeild}
                    hintText="Enter Your Last Name" 
                    floatingLabelText = "Last Name"
                    onChange={handleChange('LastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField 
                    style={styles.textFeild}
                    hintText="Enter Your Email" 
                    floatingLabelText = "Email"
                    onChange={handleChange('Email')}
                    defaultValue={values.email}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={forward}
                />
            </React.Fragment> 
        </MuiThemeProvider>
    )
}

const styles = {
    button:{
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        minWidth: 'none',
        maxWidth: '250px'
    },
    textFeild:{
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default FormUserDetails
