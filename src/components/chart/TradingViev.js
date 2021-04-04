import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingViev = () => (
  <TradingViewWidget
    symbol="OANDA:EURUSD"
    theme={Themes.DARK}
    locale="tr"
    height="400px"
    width="100%"
    interval={240}
    withdataranges={true}
    timezone="İstanbul"
    toolbar_bg="#f1f3f6"
    enable_publishing={false}
    hide_side_toolbar={false}
    allow_symbol_change={true}
    details={true}
    hotlist={true}
    calendar={true}
    show_popup_button={true}
    popup_width="1000px"
    popup_height="650px"


  />
);

export default TradingViev;