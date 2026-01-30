
import { AdvancedRealTimeChart, TickerTape, TechnicalAnalysis} from "react-ts-tradingview-widgets";
import './App.css'



  function Trading() {
  const monedasCrypto = ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:SOLUSDT", "BINANCE:ADAUSDT"];

  return (
    <div className="dashboard-container">
      <TickerTape colorTheme="dark" />
      
      <div className="header">
        <h1>Trading Metrics</h1>

      </div>

      <div className="cuadriculas">
        {monedasCrypto.map((coin) => (

          <div key={coin} style={{ display: 'contents' }}>
            <div className="graficas">
            <AdvancedRealTimeChart theme="dark" 
              symbol={coin} 
              autosize 
              hide_side_toolbar={true} 
              allow_symbol_change={true}
            
              
            />
          </div> 
          <div className="graficas">
          <TechnicalAnalysis symbol={coin} colorTheme="dark" width="100%" height="100%" />
          </div>
        
          </div>
        ))}
    </div>
  </div>
  );
}  


export default Trading;

