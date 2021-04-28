import React,{ useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Success from './Success'
import Confirm from './Confirm'

const UserForm = () => {

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [city, setCity] = useState('')
    const [bio, setBio] = useState('')

    const nextStep = () => setStep(step+1)
    const prevStep = () => setStep(step-1)

    const values = { firstName, lastName, email, occupation, city, bio }

    switch(step){
        case 1:
            return(
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={ input => e => eval(`set${input}`)(e.target.value) }
                    values={values}
                />
            )
        case 2:
            return(
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={ input => e => eval(`set${input}`)(e.target.value) }
                    values={values}
                />
            )
        case 3:
            return(
                <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                />
            )
        case 4:
            return(
                <Success/>
            )

    }

    return (
        <div>
            
        </div>
    )
}

export default UserForm
