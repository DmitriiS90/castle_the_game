import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import style from './Inventory.module.css'

const Inventory = (props) => {
    const dispatch = useDispatch()

    //const inventory = useSelector((state) => { return state.inventory})
    console.log(props.inventory)

    return (

        <div className={style.inventory}>
            {!props.inventory.isClick && <img onClick={()=>{dispatch({ type: 'SET_INVENTORY' })}} className={style.inventoryImg} src='https://static.vecteezy.com/system/resources/previews/000/613/755/original/vector-axe-icon.jpg'/>}

            {props.inventory.isClick &&
                <>
                    <div className={style.cell}></div>
                    <div className={style.cell}>{props.inventory.crowbar ? <img src='https://utmk.ru/wp-content/uploads/2018/07/9707b97e4120.jpg' /> : null}</div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <img onClick={()=>{dispatch({ type: 'REMOVE_INVENTORY' })}} className={style.inventoryImg} src='https://static.vecteezy.com/system/resources/previews/000/613/755/original/vector-axe-icon.jpg'/>
                </>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    inventory: state.inventory
})
export default connect(mapStateToProps, {})(Inventory);
