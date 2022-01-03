import React from 'react'
import style from './Skeletons.module.css'
import Way from '../../../components/way/Way';

const Skeletons = () => {

    return (
        <div className={style.skeletons}>
            <Way url={'/prison'} way={'вернуться'}/>
        </div>
    )
}

export default Skeletons;


