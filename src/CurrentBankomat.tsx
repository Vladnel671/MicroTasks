import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === "Dollars"?'blue':'green'}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>
        </>
    );
};


const Banknote = styled.div`
background-color: ${props => {
    if(props.color === 'blue')
    {
        return 'chartreuse'
    }else {
        return '#61dafb'
    }
}};
  width: 400px;
  height: 200px;
  margin: 10px;
`