import React, {useState} from 'react';
import {Country} from "./Country";

export type BanknotsFilterType = 'Dollars' | 'RUBLS' | 'All'
export type MoneyType = {
    banknotes: BanknotsFilterType
    value: number
    number: string
}

let defaultMoney: MoneyType[] = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filterValue: BanknotsFilterType) => {
    if(filterValue ==='All') return defaultMoney
    return money.filter(item => item.banknotes === filterValue)
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
}

const MoneyApp = () => {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsFilterType>('All')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
    const filteredMoney = moneyFilter(money, filterValue)
    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!

            />
        </div>
    );
};

export default MoneyApp;