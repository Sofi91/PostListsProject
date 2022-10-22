import React from 'react'
import s from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const classes = [s.body]

    if (visible) {
        classes.push(s.active)
    }
  return (
    <div className={classes.join(' ')} onClick={()=>setVisible(false)}>
        <div className={s.content} onClick={e=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}


export default MyModal