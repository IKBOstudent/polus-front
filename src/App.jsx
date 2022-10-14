import React from 'react';
import GraphChart from './Components/GraphChart';
import PieChart from './Components/PieChart';
import TableBlock from './Components/TableBlock';

// https://www.bootstrapdash.com/demo/azia-react-free/template/preview/dashboard

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-16">
            <header className="w-full h-16 flex flex-row items-center justify-between">
                <div className="">Data</div>
                <div className="">Period</div>
            </header>

            <main className="w-full mt-4 flex flex-col gap-8">
                <section className="flex flex-col gap-8 lg:flex-row">
                    <div className="shrink p-8 bg-back-medium shadow-xl">
                        <PieChart />
                    </div>
                    <div className="grow p-8 bg-back-medium shadow-xl">
                        <GraphChart />
                    </div>
                </section>

                <section className="flex flex-col gap-8 md:flex-row">
                    <div className="grow p-8 bg-back-medium shadow-xl">
                        <p>Progress</p>

                        <div className="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                            <div className="bg-[#00CDB5] h-2.5" style={{ width: '42%' }}></div>
                        </div>

                        <div className="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                            <div className="bg-[#00CDB5] h-2.5" style={{ width: '67%' }}></div>
                        </div>

                        <div className="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                            <div className="bg-[#00CDB5] h-2.5" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                    <div className="grow p-8 bg-back-medium shadow-xl">b</div>
                    <div className="grow p-8 bg-back-medium shadow-xl">c</div>
                </section>

                <section className="flex flex-col gap-4 p-8 bg-back-medium shadow-xl">
                    <TableBlock />
                </section>
            </main>
        </div>
    );
};

export default App;
