import React from 'react';

import { ResponsivePie } from '@nivo/pie';

const Doughnut = ({ height, width, data }) => (
    <ResponsivePie
        height={height}
        // width={width}
        margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
        data={data}
        innerRadius={0.5}
        padAngle={3}
        activeOuterRadiusOffset={6}
        enableArcLinkLabels={false}
        colors={{ datum: 'data.color' }}
    />
);

const data = [
    {
        id: '1',
        value: 15,
        color: '#00CDB5',
    },
    {
        id: '2',
        value: 12,
        color: '#00B3B4',
    },
    {
        id: '3',
        value: 5,
        color: '#4492B5',
    },
];

const PieChart = () => {
    return (
        <div className="w-full flex flex-col gap-8">
            <section className="">Doughnut chart</section>
            <section className="self-center flex flex-col items-center gap-1">
                <p className="text-xl">124 223</p>
                <p className="text-sm">Total rocks</p>
                <div className="text-back-dark" style={{ height: '200px', width: '200px' }}>
                    <Doughnut height={200} width={200} data={data} />
                </div>
            </section>
            <section className="grow items-center">
                <table className="w-full table-auto divide-y divide-white/10">
                    {data.map((item) => (
                        <tr className="">
                            <th>
                                <p
                                    style={{
                                        width: '1rem',
                                        height: '1rem',
                                        backgroundColor: item.color,
                                    }}></p>
                            </th>
                            <td className="py-2 px-6">{item.id}</td>
                            <td className="py-2 px-6">{item.value}</td>
                            <td className="py-2 px-6">{item.value / 0.32}%</td>
                        </tr>
                    ))}
                </table>
            </section>
        </div>
    );
};

export default PieChart;
