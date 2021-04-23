import React, { useState } from 'react'
import style from './PlaceWithCrowbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const PlaceWithCrowbar = (props) => {
    const dispatch = useDispatch()

    const crowbar = useSelector((state) => { return state.inventory.crowbar })
    return (
        <div className={style.placeWithCrowbar}>
            <Way url={'/startLocationOpenDoor'} way={'вернуться'}/>

            {!crowbar && <div className={style.crowbar}>
                <img onClick={()=>{dispatch({ type: 'SET_CROWBAR' })}} src='https://utmk.ru/wp-content/uploads/2018/07/9707b97e4120.jpg'/>
            </div>}
        </div>
    )
}

export default PlaceWithCrowbar;


