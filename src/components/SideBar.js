import React from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default class SideBar extends React.PureComponent {
    render() {
        const { image, title, subtitle } = this.props.productDetails;
        return (
            <div>
                <img src={image} alt="product" height="200" width="200"></img>
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography variant="body1">
                    {subtitle}
                </Typography>
            </div>
        );
    }
}

SideBar.propTypes = {
  productDetails: PropTypes.object,
};
