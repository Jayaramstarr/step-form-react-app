import React from 'react'
import MuiThemeProvider  from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"

const FormUserDetails = ({ values:{ firstName, lastName, email, occupation, city, bio }, nextStep, prevStep }) => {

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
                <AppBar title="Confirm User Data" />
                <br/>
                <div style={styles.cont}>
                    <ul>
                        {firstName && <h3>First Name: {firstName} </h3>}
                        {lastName && <h3>last Name: {lastName} </h3>}
                        {email && <h3>Email: {email} </h3>}
                        {occupation && <h3>Occupation: {occupation} </h3>}
                        {city && <h3>City: {city} </h3>}
                        {bio && <h3>Bio: {bio} </h3>}
                    </ul>
                </div>
                <br />
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
    }
}

export default FormUserDetails
