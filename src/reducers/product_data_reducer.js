import { getProductDetails } from '../transformer';

export default function () {
    const productDetails = getProductDetails();
	return productDetails;
}