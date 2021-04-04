import React from 'react';
import './App.scss';
import Boxmoney from './components/Boxmoney';
import Table from './components/table/Table';
import TradingViev from './components/chart/TradingViev';
import Menu from './components/svg/Menu';
import ArrowDotDown from './components/svg/ArrowDotDown';
import {datas} from './components/datas/boxDatas';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-left">
          <div className="sembol">
            <h6 className="m-0 text-gray font-sm p-1">
              Sembol Listem
            </h6>
            <div className="button-group-icon">
              <button type="button" className="btn-icon m-0 p-0">
                <ArrowDotDown />
              </button>
              <button type="button" className="btn-icon m-0 p-0">
                <Menu />
              </button>
            </div>
          </div>
          <div className="box-group">
            {datas.map(item =>
              <Boxmoney
                key={item.id}
                name={item.name}
                alis={item.alis}
                artis={item.artıs}
                satis={item.satis}
                dusuk={item.dusuk}
                yuksek={item.yuksek}
                color={item.color}
                styleLeft={item.styleLeft}
                styleRight={item.styleRight}
              />)}
          </div>
        </div>
        <div className="col-right">
          <TradingViev />
          <Table />
        </div>
      </div>
    </div>

  );
}
export default App;