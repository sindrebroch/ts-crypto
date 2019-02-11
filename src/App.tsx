import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Coin from './Coin';

interface AppProps {
  loading: boolean,
  error: any,
  coins: Coin[],
  dispatch: any
}

class App extends React.Component<AppProps> {

  renderCryptoList = () => {
    if(this.props.coins.length === 0) return [];
    return this.props.coins.map( coin => {
      return coin.renderCoin();
    });
  }

  renderTotal = () => {
    let total: number = 0;
    this.props.coins.forEach( (coin) => {
        total += (coin.amount*coin.quote.USD.price)*coin.USDtoNOK
    })

    if(total === 0) return "";
    else return `Total: ${total.toFixed(2)} NOK`
  }

  render() {
    if(this.props.error) return <div>Error {this.props.error.message}</div>
    if(this.props.loading) return <div>Loading...</div>
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.renderTotal()}
            {this.renderCryptoList()}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => ({
  coins: state.coinReducer.coins,
  loading: state.coinReducer.loading,
  error: state.coinReducer.error
})

export default connect(mapStateToProps)(App);