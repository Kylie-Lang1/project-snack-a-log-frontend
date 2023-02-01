import React from 'react'
import SnackDetails from '../Components/SnackDetails'
import * as tailwind from '../css/styles'

export default function Show() {
  return (
    <div>
        <h2 className={tailwind.show_h2}>Snack Details</h2>
        <SnackDetails/>
    </div>
  )
}
