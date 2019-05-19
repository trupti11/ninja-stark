import { keyBy } from 'lodash';
import data from '../src/data';

export function getDataForGraphByAttribute(attribute) {
    const keyedGraphData = keyBy(data[0].sales, 'weekEnding');
    let arrayOfArrays = [];

    Object.keys(keyedGraphData).forEach(key => {
        arrayOfArrays.push([key, keyedGraphData[key][attribute]]);
    });
    return arrayOfArrays;
}

export function getProductDetails() {

    return {
        image: data[0].image,
        title: data[0].title,
        subtitle: data[0].subtitle,
    };
}

export function createDataForTable() {
    let counter = 0;
    let allSales = [];
    const keyedGraphData = keyBy(data[0].sales, 'weekEnding');
    Object.keys(keyedGraphData).forEach(key => {
        allSales.push(createData(keyedGraphData[key], counter));
        counter+= 1;
    });
    return allSales;
}

export function createData(sale, counter) {
    const {weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin} = sale;
    return { weekEnding: counter, weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin };
}