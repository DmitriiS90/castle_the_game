import React, { useState } from 'react'
import style from './Prison.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const Prison = (props) => {
    return (
        <div className={style.prison}>
            <Way url={'/'} way={'вернуться'}/>
            <div className={style.door}>
                <div className={style.linkButton}><button></button></div>
                <div className={style.menuDoor}>
                    <ul>
                        <li><NavLink to='/skeletons'>Посмотреть</NavLink></li>
                    </ul>
                </div>
            </div>
            
            <div className={style.door2}>
                <div className={style.linkButton}><button></button></div>
                <div className={style.menuDoor}>
                    <ul>
                        <li><NavLink to='/menInPrison'>Посмотреть</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Prison;


