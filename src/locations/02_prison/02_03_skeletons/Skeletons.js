import React, { useState } from 'react'
import style from './Skeletons.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const Skeletons = (props) => {

    return (
        <div className={style.skeletons}>
            <Way url={'/prison'} way={'вернуться'}/>
        </div>
    )
}

export default Skeletons;


