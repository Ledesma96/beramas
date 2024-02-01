import React from 'react'

const Alerts = ({children, danger}) => {
  return (
    <div className={danger ? 'alert-on' : 'alert-off'}>
      {children}
    </div>
  )
}

export default Alerts