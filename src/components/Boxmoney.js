import React from 'react';
import './Boxmoney.scss';
import ArrowDown from './svg/ArrowDown';
import Expand from './svg/Expand';
import moment from 'moment';
import Information from './svg/Information';

export default function Boxmoney(props) {
    const fark = props.satis - props.alis;
    const satisLeft = props.satis.toString().substring(0, 4);
    const satisCenter = props.satis.toString().substring(4, 6);
    const satisRight = props.satis.toString().substring(6, props.satis.length);
    const alisLeft = props.satis.toString().substring(0, 4);
    const alisCenter = props.satis.toString().substring(4, 6);
    const alisRight = props.satis.toString().substring(6, props.alis.length);
    return (
        <div className="box-container">
            <div className="box-upper-title">
                <h5 className="text-white font-sm text-bold"
                    style={{ margin: ".1rem", padding: ".1rem 0.3rem" }}> {props.name}</h5>
                <div className="button-group-icon">
                    <button type="button" className="btn-icon m-0 p-0">
                        <Expand />
                    </button>
                    <button type="button" className="btn-icon m-0">
                        <Information />
                    </button>
                </div>
            </div>
            <div className="box-group">
                <div className="box-left text-white" style={{ ...props.styleLeft }}>
                    <div className="box-rakam"> {satisLeft}
                        <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{satisCenter}</span>{satisRight}
                    </div>
                    <span className="box-alis font-xs"> Satış </span>
                    <div className="arrow">
                        <ArrowDown 
                        color={props.artis ? "#247353": "#853b35"} 
                        className={props.artis ? "arrow-down-rotate-up" : ""} />
                    </div>
                </div>
                <div className="box-right text-white" style={{ ...props.styleRight }}>
                    <div className="box-rakam"> {alisLeft}
                        <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{alisCenter}</span>{alisRight}
                    </div>
                    <span className="box-satis font-xs"> Alış </span>
                </div>
            </div>
            <div className="alt-group">
                <div className="ust">
                    <span className="text-left-el" style={{paddingLeft:"0.1rem"}}> Fark: <span className="text-bold text-white"> {fark.toFixed(2)} </span> </span>
                    <span className="text-right-el" style={{paddingRight:"0.1rem"}}> <span className="text-bold text-white"> {moment().format('h:mm:ss')}</span> :Tarih </span>
                </div>
                <div className="alt">
                    <span className="text-left-el" style={{paddingLeft:"0.1rem"}}> Düşük: <span className="text-bold text-white">{props.dusuk} </span> </span>
                    <span className="text-right-el" style={{paddingRight:"0.1rem"}}> <span className="text-bold text-white"> {props.yuksek} </span> :Yüksek </span>
                </div>
            </div>
        </div>
    )
}
