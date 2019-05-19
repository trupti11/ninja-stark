import { getDataForGraphByAttribute } from '../transformer';

export default function () {
	const retailsData = getDataForGraphByAttribute('retailSales');
	return retailsData;
}