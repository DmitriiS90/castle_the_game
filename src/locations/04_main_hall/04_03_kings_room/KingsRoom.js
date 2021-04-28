import React, { useState } from 'react'
import style from './KingsRoom.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way'

const KingsRoom = (props) => {
    
    return (
        <div className={style.kingsRoom}>
            <Way url={'/hallway'} way={'Вернуться'} />

            <div className={style.watch}></div>

            <div className={style.wardrobe}></div>
            
        </div>
    )
}

export default KingsRoom;