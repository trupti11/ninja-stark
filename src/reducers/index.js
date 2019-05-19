import { combineReducers } from 'redux';
import ProductDetailsReducer from './product_data_reducer'
import GraphDataReducer from './graph_data_reducer'
import TableDataReducer from './table_data_reducer'

const rootReducer = combineReducers({
    salesDataForTable: TableDataReducer,
    retailsData: GraphDataReducer,
	productDetails: ProductDetailsReducer,
});

export default rootReducer;