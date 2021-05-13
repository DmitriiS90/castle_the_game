import React, { useState } from 'react'
import style from './RoomWithGuards.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Way from '../../../components/way/Way';

const RoomWithGuards = (props) => {
    let [answer, setAnswer] = useState({
        num:0, 
        openWay:0
    })

    const dispatch = useDispatch()
    const guards = useSelector((state) => { return state.persons.guards })
    const player = useSelector((state) => { return state.persons.player })
    const chestKey = useSelector((state) => { return state.inventory.chestKey })

    return (
        <div className={style.roomWithGuards}>
            {answer.openWay >= 3 || chestKey ? <Way url={'/room'} way={'пройти'} /> :null}

            {player.chest === 'locked' &&
                <>{!guards.isClick && <p onClick={() => {dispatch({ type: 'GUARDS' })}}>{guards.speech[0]}</p>}

                    {guards.isClick &&
                        <div>
                            {answer.num === 0 ? <div><p>-Стража: {guards.speech[0]}</p></div>
                                : answer.num === 1 ? <div><p>-Стража: {guards.speech[1]}</p></div>
                                    : answer.num === 2 ? <div><p>-Стража: {guards.speech[2]}</p></div>
                                         : answer.num === 3 && <div><p>-Стража: {guards.speech[3]}</p></div>}
                            <ol>
                                {answer.num >= 0 && <li onClick={() => { setAnswer({num:answer.num = 1, openWay:answer.openWay + 1}) }}>{player.speechWithGuards[0]}</li>}
                                {answer.num >= 0 && <li onClick={() => { setAnswer({num:answer.num = 2, openWay:answer.openWay + 1}) }}>{player.speechWithGuards[1]}</li>}
                                {answer.num >= 0 && <li onClick={() => { setAnswer({num:answer.num = 3, openWay:answer.openWay + 1}) }}>{player.speechWithGuards[2]}</li>}
                            </ol>
                        </div>}
                </>}

            {player.chest === 'clicked' && !chestKey &&
                <div>
                    <p>-Стража: {guards.speech[4]}</p>
                    <ol>
                        <li onClick={()=>{dispatch({ type: 'GET_CHEST_KEY' })}}>{player.speechWithGuards[3]}</li>
                    </ol>
                </div>}

        </div>
    )
}

export default RoomWithGuards;


