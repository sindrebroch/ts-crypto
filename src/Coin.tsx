import * as React from 'react';
  
interface Quote { USD: USD };
interface USD { price: number };

export default class Coin {
    id: number;
    name: string;
    symbol: string;
    amount: number;
    quote: Quote;
    USDtoNOK: number;

    constructor(
        id: number,
        name: string,
        symbol: string,
        amount: number,
        quote: Quote,
        USDtoNOK: number) {
            this.id = id;
            this.name = name;
            this.symbol = symbol;
            this.amount = amount;
            this.quote = quote;
            this.USDtoNOK = USDtoNOK;
    } 

    renderCoin = () => {
        return (
            <div key={this.id} style={{border: '1px solid black'}}>
                <p>{`${this.name} (${this.symbol})`}</p>
                <p>{`${this.amount} * ${this.quote.USD.price.toFixed(2)} * ${this.USDtoNOK.toFixed(2)}`}</p>
                <p>{`= ${(this.amount*this.quote.USD.price*this.USDtoNOK).toFixed(2)} NOK`}</p>
            </div>);    
    }
}