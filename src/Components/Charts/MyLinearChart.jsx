import React from "react";
import { ResponsiveLine } from "@nivo/line";

const MyLinearChart = ({ data, theme }) => {
    return (
        <ResponsiveLine
            height={400}
            data={data}
            theme={theme}
            margin={{ top: 20, right: 40, bottom: 60, left: 60 }}
            // curve="natural"
            lineWidth={2}
            // xScale={{ type: 'point' }}
            // yScale={{
            //     type: 'linear',
            //     min: 'auto',
            //     max: 'auto',
            //     reverse: false,
            // }}
            colors={{ datum: "color" }}
            enableArea={true}
            enableCrosshair={false}
            axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "lablel-left",
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 10,
                tickRotation: 0,
                legend: "label-right",
                legendOffset: -46,
                legendPosition: "middle",
            }}
            // pointSize={10}
            // pointColor={{ theme: 'background' }}
            // pointBorderWidth={2}
            // pointBorderColor={{ from: 'serieColor' }}
            useMesh={true}
        />
    );
};

export default MyLinearChart;
