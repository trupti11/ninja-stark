import React from "react";
import { TimeSeries, Index } from "pondjs";
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  styler
} from "react-timeseries-charts";
import PropTypes from 'prop-types';

export default class LineGraph extends React.PureComponent {
    render() {
      const { retailsData } = this.props;
      const series = new TimeSeries({
        name: "retail_sales",
        columns: ["index", "sales"],
        points: retailsData.map(([d, value]) => [
          Index.getIndexString("1h", new Date(d)),
          value
        ])
      });

      const style = styler([
        {
          key: "sales",
          color: "#3bbfef",
          width: '3px',
          selected: "#2CB1CF"
        }
      ]);

        return (
          <Resizable>
          <ChartContainer timeRange={series.range()}>
            <ChartRow height="400">
              <YAxis
                id="retailSales"
                min={1000}
                max={1000000}
                type="linear"
              />
              <Charts>
                <LineChart
                  axis="retailSales"
                  style={style}
                  spacing={1}
                  columns={["sales"]}
                  series={series}
                  minBarHeight={1}
                  interpolation="curveBasis"
                />
                <LineChart
                  axis="retailSales"
                  style={style}
                  spacing={1}
                  columns={["sales"]}
                  series={series}
                  minBarHeight={1}
                  interpolation="curveBasis"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>
        );
    }
}

LineGraph.propTypes = {
  retailsData: PropTypes.array,
};
