import React from 'react'

export const Mode = ({ formData, setFormData, current, setCurrent }) => {
  return (
    <div className='mx-8'>Mode
      <button className='bg-blue-400 ms-4 p-4' onClick={() => setCurrent(current + 1)}>Next</button>
    </div>

  )
}

export const Basic = ({ formData, setFormData, current, setCurrent }) => {
  return (
    <div>Basic
      <button className='bg-blue-400 ms-4 p-4' onClick={() => setCurrent(current + 1)}>Next</button>
    </div>
  )
}


export const Details = ({ formData, setFormData, current, setCurrent }) => {
  return (
    <div>Details
      <button className='bg-blue-400 ms-4 p-4' onClick={() => setCurrent(current + 1)}>Next</button>
    </div>
  )
}

