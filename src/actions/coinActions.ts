import * as types from './actionTypes';
import axios from 'axios';
import Coin from '../Coin';
import coinMock from '../mocks/coinMock';

function url() { return 'http://localhost:8080/crypto/proxy/filtered'; }

export function fetchCoinsBegin() { return { type: types.FETCH_COINS_BEGIN }; };
export function fetchCoinsSuccess(coins:any){ return { type: types.FETCH_COINS_SUCCESS, coins }; };
export function fetchCoinsFailure(error:any) { return { type: types.FETCH_COINS_FAILURE, error} };

export function fetchCoins():any {
    debugger;
    return (dispatch:any) => {
        dispatch(fetchCoinsBegin());
        return axios.get( url() )
            .then( handleErrors )
            .then( response => formatCoins(response.data) )
            .then( response => dispatch(fetchCoinsSuccess(response)) );
    }
}

export function mockFetchCoins():any {
    return (dispatch:any) => {
        dispatch(fetchCoinsBegin());
        return new Promise((resolve) => { 
            setTimeout( () => {
                resolve(coinMock);
            }, 1000);
        })
        .then( (response:any) => formatCoins(response) )
        .then( response => dispatch(fetchCoinsSuccess(response )) );
    }
}

function formatCoins(response:Coin[]) {
    let coins: Coin[] = [];
    response.forEach( coin => {
        coins.push( 
            new Coin(
                coin.id, 
                coin.name, 
                coin.symbol, 
                coin.amount, 
                coin.quote, 
                coin.USDtoNOK))
    });
    return coins;
}

function handleErrors(response:any) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}