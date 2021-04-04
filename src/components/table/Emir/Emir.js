import React from 'react'

export default function Emir(props) {
    return (
        <div className="table-row">
            <div className="table-column">
                {props.emir}
            </div>
            <div className="table-column">
                {props.zaman}
            </div>
            <div className="table-column">
                {props.tur}
            </div>
            <div className="table-column">
                {props.miktar}
            </div>
            <div className="table-column">
                {props.sembol}
            </div>
            <div className="table-column">
                {props.fiyatLeft}
            </div>
            <div className="table-column">
                {props.ZD}
            </div>
            <div className="table-column">
                {props.KD}
            </div>
            <div className="table-column">
                {props.fiyatRight}
            </div>
            <div className="table-column">
                    {props.faiz}
            </div>
            <div className="table-column">
                {props.KZ}
            </div>
            <div className="table-column">
                <div className="btn-group">
                <button className="btn"> düzenle </button>
                <button className="btn"> kapat </button>
                </div>
            </div>
        </div>
    )
}
