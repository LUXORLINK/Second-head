import React, { useState, useEffect } from 'react'

const Timer = ({ reset }) => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSecond) => prevSecond + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (reset) {
            setSeconds(0)
        }
    }, [reset])

    return (
        <div>
            <h1 className='Timer'>Секунды: {seconds}</h1>
        </div>
    )
}

export default Timer
