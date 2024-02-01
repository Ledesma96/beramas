import React from 'react'

const CustonRightArrow = ({onClick}) => {
  return (
    <svg onClick={onClick} className="custom-right-arrow" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
    </svg>
  )
}

export default CustonRightArrow