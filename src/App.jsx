import React from "react";

import CardsBlock from "./Components/CardsBlock";
import GraphChart from "./Components/GraphBlock";
import PieChart from "./Components/PieChart";
import TableBlock from "./Components/TableBlock";

// https://www.bootstrapdash.com/demo/azia-react-free/template/preview/dashboard

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-16">
            <header className="w-full h-16 flex flex-row items-center justify-between">
                <div className="">Data</div>
                <div className="">Period</div>
            </header>

            <main className="w-full mt-4 flex flex-col gap-8">
                <section className="flex flex-col gap-8 md:flex-row">
                    <CardsBlock />
                </section>

                <section className="flex flex-col gap-8 lg:flex-row">
                    <div className="p-8 bg-back-medium shadow-xl">
                        <PieChart />
                    </div>
                    <div className="min-w-0 grow p-8 bg-back-medium shadow-xl">
                        <GraphChart />
                    </div>
                </section>

                <section className="flex flex-col gap-4 p-8 bg-back-medium shadow-xl">
                    <TableBlock />
                </section>
            </main>
        </div>
    );
};

export default App;
