import axios from "axios";
import React from "react";

const CardsBlock = () => {
    const [value, setValue] = React.useState(0);
    const [size, setSize] = React.useState(120);

    const handleFormSubmit = () => {
        const cur_val = value;
        setValue(0);

        console.log("отправка запроса на бэк");
        axios.post("http://192.168.1.66:8000/rocks?limit=" + cur_val).then(response => console.log(response));
    };

    return (
        <>
            <div className="flex flex-col gap-2 p-8 bg-back-medium shadow-xl">
                <p className="">
                    Текущий пороговый <br />
                    размер
                </p>
                <p className="grow text-2xl font-bold">{size}</p>
                <p className="text-warning font-bold p-2 outline-dashed mt-2">ИДЕТ НЕГАБАРИТНЫЙ КАМЕНЬ</p>
            </div>
            <div className="grow p-8 bg-back-medium shadow-xl">
                <p>Изменить пороговый размер</p>

                <form className="mt-4 flex justify-start gap-4 flex-wrap">
                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        type="number"
                        className="form-control block px-3 py-2 text-basefont-normal text-white bg-white/10 bg-clip-padding border border-solid border-white/50 rounded-sm transition ease-in-out m-0 focus:text-back-dark focus:bg-white focus:outline-none "
                        id="exampleFormControlInput1"
                        placeholder="Размер (мм)"
                    />
                    <button
                        type="button"
                        onClick={handleFormSubmit}
                        className="bg-green-dark hover:bg-green-dark/60 transition text-back-light font-bold py-2 px-4 rounded-sm"
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <div className="grow p-8 bg-back-medium shadow-xl">
                <p>Прогресс</p>

                <div className="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                    <div className="bg-[#00CDB5] h-2.5" style={{ width: "42%" }}></div>
                </div>

                <div className="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                    <div className="bg-[#00CDB5] h-2.5" style={{ width: "67%" }}></div>
                </div>

                <div className="mt-4 w-full bg-white/20 h-2.5 dark:bg-gray-700">
                    <div className="bg-warning h-2.5" style={{ width: "20%" }}></div>
                </div>
            </div>
        </>
    );
};

export default CardsBlock;
