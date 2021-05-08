import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import style from './Inventory.module.css'

const Inventory = (props) => {
    const dispatch = useDispatch()

    //const inventory = useSelector((state) => { return state.inventory})
    //console.log(props.inventory)

    return (

        <div className={style.inventory}>
            {!props.inventory.isClick && <img onClick={()=>{dispatch({ type: 'SET_INVENTORY' })}} className={style.inventoryImg} src='https://static.vecteezy.com/system/resources/previews/000/613/755/original/vector-axe-icon.jpg'/>}

            {props.inventory.isClick &&
                <>
                    <div className={style.cell}>{props.inventory.chestKey ? <img src='https://cs5.livemaster.ru/storage/7b/cc/fd75b4b7aa87c532df15a58ffdgx--dlya-ukrashenij-podveska-klyuch-vintazhnyj.jpg' /> : null}</div>
                    <div className={style.cell}>{props.inventory.crowbar ? <img src='https://utmk.ru/wp-content/uploads/2018/07/9707b97e4120.jpg' /> : null}</div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}></div>
                    <div className={style.cell}>{props.inventory.clockHands ? <img src='https://magazinrukodelie.host.webasyst.com/wa-data/public/shop/products/84/86/38684/images/3355/3355.750x0.jpg' /> : null}</div>
                    <div className={style.cell}>{props.inventory.picture ? <img src='https://i.pinimg.com/originals/45/dd/ff/45ddff4ac7922e5f9da75c49df3ac32d.jpg' /> : null}</div>
                    <img onClick={()=>{dispatch({ type: 'REMOVE_INVENTORY' })}} className={style.inventoryImg} src='https://static.vecteezy.com/system/resources/previews/000/613/755/original/vector-axe-icon.jpg'/>
                </>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    inventory: state.inventory
})
export default connect(mapStateToProps, {})(Inventory);
