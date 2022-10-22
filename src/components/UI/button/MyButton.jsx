import React from 'react'
import styles from './button.module.css'


const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myButton}>
      {children}
    </button>
  )
}

export default MyButton