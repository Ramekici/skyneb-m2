import React from 'react';
import './Table.scss';
import Emir from './Emir/Emir';
import { dataTables } from '../datas/dataTable';
import { dataTableBelow } from '../datas/dataTableLabel';
import Button from '../common/Button';
import ArrowDotDown from '../svg/ArrowDotDown';
import Chevron from '../svg/Chevron';



export default function Table() {

    return (
        <div className="table">
            <div className="table-row" style={{ paddingRight: "0.5rem" }}>
                <div className="table-nav-item">
                    <Button name="İşlemler(Pozisyonlar)" className="active" />
                    <Button name="Risk Analizi & İşlem Analizi" />
                    <Button name="Hesap Geçmişi" />
                </div>
                <ArrowDotDown />
            </div>
            <div className="table-row">
                {dataTableBelow.map((item, i) => {
                    if (i === 0) {
                        return (
                        <div className="table-column display-row-between" 
                        key={item.id} style={{ width: `${item.width}` }}>
                            {item.name} <Chevron />
                        </div>)
                    }
                    return (
                    <div className="table-column" key={item.id} style={{ width: `${item.width}` }}>
                        {item.name}
                    </div>)
                }

                )}
            </div>
            {dataTables.map(item => <Emir
                key={item.id}
                emir={item.emir}
                zaman={item.zaman}
                tur={item.tur}
                fiyatLeft={item.fiyatLeft}
                fiyatRight={item.fiyatRight}
                ZD={item.ZD}
                KD={item.KD}
                KZ={item.KZ}
                miktar={item.miktar}
                sembol={item.sembol}
                faiz={item.faiz}
            />)}

        </div>
    )
}
