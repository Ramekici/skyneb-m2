import React from 'react';
import './App.css';
import Boxmoney from './components/Boxmoney';
import Table from './components/table/Table';
import TradingViev from './components/chart/TradingViev';

function App() {

  const data = [
    { id: "12341", name: "USDEUR", alis: 1.32424, satis: 1.35424,
     dusuk: 1.3023, yuksek: 1.3923, color:"#247353", artıs:true,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"} },
    { id: "12342", name: "GBPUSD", alis: 1.23222, satis: 1.43222,
     dusuk: 1.11222, yuksek: 1.44553, color:"#247353", artıs:true,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#62646a"} },
    { id: "12343", name: "EURCHF", alis: 0.32429, satis: 0.35424,
     dusuk: 0.32427, yuksek: 0.35429, color:"#247353", artıs:true,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"} },
    { id: "12344", name: "GBPCHF", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#247353", artıs:true,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#62646a"} },
    { id: "12345", name: "EURAUD", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#853b35", artıs:false,
    styleLeft:{backgroundColor:"#62646a"}, styleRight:{backgroundColor:"#853b35"} },
    { id: "12346", name: "EURGBP", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#853b35", artıs:false,
    styleLeft:{backgroundColor:"#62646a"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "12347", name: "USDCHF", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#853b35", artıs:false,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "12348", name: "USDJPY", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#853b35", artıs:false,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"} },
    { id: "12349", name: "USDEUR", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#853b35", artıs:false,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "123410", name: "USDEUR", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#853b35", artıs:false,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "123411", name: "USDEUR", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#247353", artıs:true,
    styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "123412", name: "USDEUR", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#247353", artıs:true,
     styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "123413", name: "USDEUR", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#247353", artıs:true,
     styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
    { id: "123414", name: "USDEUR", alis: 1.3242, satis: 1.3542,
     dusuk: 1.3023, yuksek: 1.3923, color:"#247353", artıs:true,
     styleLeft:{backgroundColor:"#247353"}, styleRight:{backgroundColor:"#853b35"}  },
  ];



  return (
    <div className="container">
      <div className="row">
        <div className="col-left">
          <div className="sembol text-white font-sm p-1">
            Sembol Listem
          </div>
          <div className="box-group">
            {data.map(item => 
            <Boxmoney
              key={item.id}
              name={item.name}
              alis={item.alis}
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
          <TradingViev/>
          <Table />
        </div>
      </div>
    </div>

  );
}
export default App;