import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')
  const updatedName = (event) => {
    setName(`It is nice to meet you ${event.target.value}!`)
  }
  return (
    <div className="page">
      <div className="question">To Whom am I Speaking With?</div>
      <input type="text" name="name" onChange={updatedName} />
      <div className="name">{name}</div>
    </div>
  )
}
