import React from 'react'
import styles from './select.module.css'


const MySelect = ({ options, title, disabled, ...values }) => {
  return (
    <select className={styles.select} {...values} >
      <option value='' disabled={disabled}>{title}</option>
      {options.map(option => <option value={option.value} key={option.value} >
        {option.name}
      </option>
      )}
    </select>

  )
}
export default MySelect
