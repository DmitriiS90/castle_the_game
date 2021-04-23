import React, { useState } from 'react'
import style from './Deadlock.module.css'
import Way from '../../../components/way/Way';
import { useSelector } from 'react-redux';

const Deadlock = (props) => {
    const player = useSelector((state) => { return state.persons.player })
    const [text, setText] = useState(true)
    return (
        <div className={style.Deadlock}>
            {!text && <Way url={'/startLocationOpenDoor'} way={'вернуться'}/>}
            {player.isKing && <Way url={'/roomWithGuards'} way={'Подняться по лестнице'}/>}
            {text && !player.isKing && <p onClick={()=>{setText(false)}}>Вы слышите, какие-то голоса наверху и не решаетесь подняться по лестнице</p>}
        </div>
    )
}

export default Deadlock;


