import React, { useState } from 'react'

const RegistrationForm = ({ register }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name,
            email,
            password,
        }
        console.log(formData)
        register()
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type="text" placeholder='Имя' className='sign-in' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <br />
            <div>
                <label>
                    <input type="email" placeholder='Email:' className='sign-in' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <br />
            <div>
                <label>
                    <input type="password" placeholder='Пароль:' className='sign-in' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <br />
            <button className='registr' type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default RegistrationForm 
