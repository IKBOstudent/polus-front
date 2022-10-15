import React, { useState } from "react";

import MyLinearChart from "./Charts/MyLinearChart";
import MyScatterChart from "./Charts/MyScatterChart";
import MyMapChart from "./Charts/MyMapChart";

const theme_linear = {
    axis: {
        fontSize: "16px",
        ticks: {
            line: {
                stroke: "#555555",
            },
            text: {
                fill: "#FFFFFF80",
            },
        },
        legend: {
            text: {
                fill: "#FFFFFF50",
            },
        },
    },
    grid: {
        line: {
            stroke: "#FFFFFF20",
        },
    },
};

const data_linear = [
    {
        id: "japan",
        color: "#00CDB5",
        data: [
            {
                x: "one",
                y: 266,
            },
            {
                x: "two",
                y: 284,
            },
            {
                x: "three",
                y: 289,
            },
            {
                x: "four",
                y: 142,
            },
            {
                x: "five",
                y: 58,
            },
            {
                x: "six",
                y: 218,
            },
        ],
    },
];

const GraphBlock = () => {
    const [currentChart, setCurrentChart] = useState(0);

    const returnChart = () => {
        if (currentChart === 0) return <MyLinearChart data={data_linear} theme={theme_linear} />;
        if (currentChart === 1) return <MyScatterChart />;

        return <MyMapChart />;
    };

    return (
        <div className="w-full flex flex-col gap-4">
            <section className="flex flex-row justify-between">
                <p>Graph</p>
                <div className="text-sm text-center">
                    <ul className="flex flex-wrap">
                        {["linear", "scatter plot", "tree map"].map((item, id) => (
                            <li key={id} className="mr-2">
                                <button
                                    onClick={() => setCurrentChart(id)}
                                    className={`inline-block p-2 border-b-2 ${
                                        currentChart === id
                                            ? "text-[#00CDB5] border-[#00CDB5]"
                                            : "border-transparent hover:border-white/20"
                                    }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className=" text-back-dark " style={{ height: "400px" }}>
                {returnChart()}
            </section>
        </div>
    );
};

export default GraphBlock;
