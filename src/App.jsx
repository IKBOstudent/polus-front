import React from 'react';
import GraphChart from './Components/GraphChart';
import PieChart from './Components/PieChart';

// https://www.bootstrapdash.com/demo/azia-react-free/template/preview/dashboard

const App = () => {
    return (
        <div className="px-16 w-full h-full mx-auto">
            <header className="h-16 flex flex-row items-center justify-between">
                <div className="">Data</div>
                <div className="">Period</div>
            </header>

            <main className="mt-4 grid grid-rows-auto grid-cols-4 gap-8">
                <section className="w-60 min-w-full row-span-3 col-span-1 p-8 bg-back-medium shadow-xl">
                    <PieChart />
                </section>
                <section className="w-full min-w-full row-span-2 col-span-3 xl:col-span-2 p-8 bg-back-medium shadow-xl">
                    <GraphChart />
                </section>
                <section className="row-span-1 col-span-3 xl:col-span-2 flex flex-row gap-8">
                    <div className="flex-grow p-8 bg-back-medium shadow-xl">
                        <p>Progress</p>

                        <div class="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                            <div className="bg-[#00CDB5] h-2.5" style={{ width: '42%' }}></div>
                        </div>

                        <div class="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                            <div className="bg-[#00CDB5] h-2.5" style={{ width: '67%' }}></div>
                        </div>

                        <div class="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                            <div className="bg-[#00CDB5] h-2.5" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                    <div className="flex-grow p-8 bg-back-medium shadow-xl">b</div>
                </section>

                <section className="w-80 min-w-full col-span-4 xl:row-start-1 xl:row-span-3 xl:col-end-5 xl:col-span-1 p-8 bg-back-medium shadow-xl">
                    d
                </section>
            </main>
        </div>
    );
};

export default App;
