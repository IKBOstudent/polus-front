import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

const MapGraph = ({ data, theme }) => <></>;

const ScatterGraph = ({ data, theme }) => <></>;

const LinearGraph = ({ data }) => (
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
        colors={{ datum: 'color' }}
        enableArea={true}
        enableCrosshair={false}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'lablel-left',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'label-right',
            legendOffset: -46,
            legendPosition: 'middle',
        }}
        // pointSize={10}
        // pointColor={{ theme: 'background' }}
        // pointBorderWidth={2}
        // pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
    />
);

const theme = {
    axis: {
        fontSize: '16px',
        ticks: {
            line: {
                stroke: '#555555',
            },
            text: {
                fill: '#FFFFFF80',
            },
        },
        legend: {
            text: {
                fill: '#FFFFFF50',
            },
        },
    },
    grid: {
        line: {
            stroke: '#FFFFFF20',
        },
    },
};

const data = [
    {
        id: 'japan',
        color: '#00CDB5',
        data: [
            {
                x: 'one',
                y: 266,
            },
            {
                x: 'two',
                y: 284,
            },
            {
                x: 'three',
                y: 289,
            },
            {
                x: 'four',
                y: 142,
            },
            {
                x: 'five',
                y: 58,
            },
            {
                x: 'six',
                y: 218,
            },
        ],
    },
];

const GraphChart = () => {
    const [currentChart, setCurrentChart] = useState(0);

    const returnChart = () => {
        if (currentChart === 0) return <LinearGraph data={data} theme={theme} />;
        if (currentChart === 1) return <ScatterGraph data={data} theme={theme} />;

        return <MapGraph data={data} theme={theme} />;
    };

    return (
        <div className="w-full flex flex-col gap-4">
            <section className="flex flex-row justify-between">
                <p>Graph</p>
                <div className="text-sm text-center">
                    <ul className="flex flex-wrap">
                        {['linear', 'scatter plot', 'tree map'].map((item, id) => (
                            <li key={id} className="mr-2">
                                <button
                                    onClick={() => setCurrentChart(id)}
                                    className={`inline-block p-2 border-b-2 ${
                                        currentChart === id
                                            ? 'text-[#00CDB5] border-[#00CDB5]'
                                            : 'border-transparent hover:border-white/20'
                                    }`}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className=" text-back-dark" style={{ height: '400px' }}>
                {returnChart()}
            </section>
        </div>
    );
};

export default GraphChart;
