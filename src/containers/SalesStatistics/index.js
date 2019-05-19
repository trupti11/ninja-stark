import React from "react";
import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';

import LineGraph from '../../components/LineGraph';
import SideBar from '../../components/SideBar';
import EnhancedTable from '../../components/EnhancedTable';

import styles from './styles';


class SalesStatistics extends React.Component {
  render() {
  const { retailsData, productDetails, salesDataForTable } = this.props;
    return (
      <Grid container spacing={16}>
      <Grid item xs={12} styles={styles.layout} />
        <Grid item xs={3} styles={styles.sideBar}>
            <SideBar productDetails={productDetails} />
        </Grid>
        <Grid item xs={9}>
          <LineGraph retailsData={retailsData}  />
        </Grid>
        <Grid item xs={3} styles={styles.sideBar}>
            <div />
        </Grid>
        <Grid item xs={9}>
          <EnhancedTable data={salesDataForTable} />
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { retailsData, productDetails, salesDataForTable } = state;
  return {
    retailsData,
    productDetails,
    salesDataForTable,
  };
}

export default connect(mapStateToProps)(SalesStatistics);