import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import style from './Inventory.module.css'

const Inventory = (props) => {
    return (
        <div className={style.inventory}>
            <div className={style.cell}></div>
            <div className={style.cell}>{props.inventory.crowbar ? <img src='https://utmk.ru/wp-content/uploads/2018/07/9707b97e4120.jpg' /> : null}</div>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}>{props.inventory.key ? <img src='https://live.staticflickr.com/7278/7614407980_f385591e51_s.jpg' /> : null}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    inventory: state.inventory
})
export default connect(mapStateToProps, {})(Inventory);
