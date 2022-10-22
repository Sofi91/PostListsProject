import React from 'react'
import s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.loading}>
            <span className={s.l} style={{"--i":1}}>L</span>
            <span className={s.o} style={{"--i":2}}>o</span>
            <span className={s.a} style={{"--i":3}}>a</span>
            <span className={s.d} style={{"--i":4}}>d</span>
            <span className={s.i} style={{"--i":5}}>i</span>
            <span className={s.n} style={{"--i":6}}>n</span>
            <span className={s.g} style={{"--i":7}}>g</span>
            <span className={s.dot} style={{"--i":8}}>.</span>
            <span className={s.dot} style={{"--i":9}}>.</span>
            <span className={s.dot} style={{"--i":10}}>.</span>
        </div>
    )
}

export default Loader
