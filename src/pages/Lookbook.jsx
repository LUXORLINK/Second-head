import React, { useState } from 'react'
import img3 from '../assets/images/brixton-lookbook.webp'

import Timer from './Timer'
import RegistrationForm from './Registration'

export const Lookbook = () => {
    const [resetFlag, setResetFlag] = useState(false);

    const handleRegister = () => {
        setResetFlag(true)
        setTimeout(() => setResetFlag(false), 0)
    }

    return (
        <>
            <h1 className='LookBook-logo'>Lookbook Page</h1>
            <RegistrationForm register={handleRegister}/>
            <Timer resetFlag={resetFlag} />
            <img src={img3} alt="Lookbook Image" className='imgs3' />
        </>
    )
}

export default Lookbook
