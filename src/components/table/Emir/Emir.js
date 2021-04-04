import React from 'react'
import Kapat from '../../svg/Kapat'
import Convert from '../../svg/Convert'



export default function Emir(props) {
    return (
        <div className="table-row">
            <div className="table-column" style={{width: "8%",textAlign:"left", paddingLeft:"0.3rem"}}>
                {props.emir} 
            </div>
            <div className="table-column" style={{width: "10%"}}>
                {props.zaman}
            </div>
            <div className="table-column" style={{width: "8%"}}>
                {props.tur}
            </div>
            <div className="table-column" style={{width: "7%"}}>
                {props.miktar}
            </div>
            <div className="table-column" style={{width: "7%"}}>
                {props.sembol}
            </div>
            <div className="table-column" style={{width: "8%"}}>
                {props.fiyatLeft}
            </div>
            <div className="table-column" style={{width: "5%"}}>
                {props.ZD}
            </div>
            <div className="table-column" style={{width: "5%"}}>
                {props.KD}
            </div>
            <div className="table-column" style={{width: "7%"}}>
                {props.fiyatRight}
            </div>
            <div className="table-column" style={{width: "8%"}}>
                {props.faiz}
            </div>
            <div className="table-column" style={{width: "7%"}}>
                {props.KZ}
            </div>
            <div className="table-column" style={{width: "20%"}}>
                <div className="btn-group">
                    <button className="btn"> düzenle <Convert/> </button>
                    <button className="btn"> kapat 
                        <span className="pl-1"> <Kapat/> </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
