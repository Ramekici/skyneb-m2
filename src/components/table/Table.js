import React from 'react';
import './Table.scss';
import Emir from './Emir/Emir';


export default function Table() {

    const dataTable = [
        { id: "table-1", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-2", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-3", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-4", emir: "12122", zaman: "12.02.22", tur: "SELL", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-5", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-6", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-7", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-8", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-9", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-10", emir: "12122", zaman: "12.02.22", tur: "SELL", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-11", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-12", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-13", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-14", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-15", emir: "12122", zaman: "12.02.22", tur: "SELL", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-16", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-17", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-18", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        { id: "table-19", emir: "12122", zaman: "12.02.22", tur: "BUY", 
        miktar: "0.01", sembol: "EURUSD", fiyatLeft: "1.1893", faiz:"-0.93",
        fiyatRight: "1.18133", ZD: "0", KD: "0", KZ: "-7.97" },
        
    ]

    return (
        <div className="table">
            <div className="table-row">
                <div className="table-nav-item">
                <div className="table-nav">
                    İşlemler
                </div>
                <div className="table-nav">
                    Risk Analizi & İşlem Analizi
                </div>
                <div className="table-nav">
                    Hesap Geçmişi
                </div>
                </div>
            </div>
            <div className="table-row">
                <div className="table-column">
                    Emir
                </div>
                <div className="table-column">
                    Zaman
                </div>
                <div className="table-column">
                    Tür
                </div>
                <div className="table-column">
                    Miktar
                </div>
                <div className="table-column">
                    Sembol
                </div>
                <div className="table-column">
                    Fiyat
                </div>
                <div className="table-column">
                    ZD
                </div>
                <div className="table-column">
                    KD
                </div>
                <div className="table-column">
                    Fiyat
                </div>
                <div className="table-column">
                    Faiz
                </div>
                <div className="table-column">
                    K/Z
                </div>
                <div className="table-column">
                    Seçenekler
                </div>
            </div>
            {dataTable.map(item => <Emir
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
