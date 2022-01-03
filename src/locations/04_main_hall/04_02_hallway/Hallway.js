import React, { useState } from 'react'
import style from './Hallway.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way'
import { NavLink } from 'react-router-dom'

const Hallway = (props) => {
    
    return (
        <div className={style.hallway}>
            <Way url={'/hall'} way={'Вернуться'} />
            <div className={style.doorToKingsRoom}>
                <div className={style.linkButton}></div>
                <div className={style.menu}>
                    <ul>
                        <li><NavLink to='/kingsRoom'>Пройти в свою комноту</NavLink></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Hallway;