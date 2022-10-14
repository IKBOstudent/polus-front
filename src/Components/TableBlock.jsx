import React from 'react';

const table = [
    { name: 'asdf', size: 345, count: 12 },
    { name: 'afc', size: 315, count: 124 },
    { name: 'bbrr', size: 343, count: 152 },
    { name: 'sadfh', size: 335, count: 112 },
    { name: 'fasdg', size: 311, count: 512 },
];

const TableBlock = () => {
    return (
        <>
            <div className="">
                <p>Total text</p>
                <ul className="mt-4 flex flex-row gap-4">
                    <li className="w-24 p-4 bg-white/5">
                        <p className="font-bold">814</p>
                        <span>good</span>
                    </li>
                    <li className="w-24 p-4 bg-white/5">
                        <p className="font-bold">142</p>
                        <span>bad</span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b border-white/20">
                                    <tr className="text-white">
                                        <th scope="col" className="font-medium px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-left">
                                            First
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-left">
                                            Last
                                        </th>
                                        <th scope="col" className="font-medium px-6 py-4 text-left">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table.map((item, id) => (
                                        <tr
                                            key={id}
                                            className="border-b text-white border-white/20">
                                            <td className="px-6 py-4 whitespace-nowrap font-medium ">
                                                {id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.size}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.count}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableBlock;
