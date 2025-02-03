import React from 'react'

export const Links = ({ formData, setFormData, current, setCurrent }) => {
    return (
        <div> Links
            <button className='bg-blue-400 ms-4 p-4' onClick={() => setCurrent(current + 1)}>Next</button>
        </div>
    )
}

export const Dates = ({ formData, setFormData, current, setCurrent }) => {
    return (
        <div>Dates
            <button className='bg-blue-400 ms-4 p-4' onClick={() => setCurrent(current + 1)}>Next</button>
        </div>
    )
}


export const Prizes = ({ formData, setFormData, current, setCurrent }) => {
    return (
        <div>Prizes
            <button className='bg-blue-400 ms-4 p-4' onClick={() => setCurrent(current + 1)}>Next</button>
        </div>
    )
}

