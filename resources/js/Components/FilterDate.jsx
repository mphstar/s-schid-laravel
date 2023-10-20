import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import React, { useState } from "react";
import Swal from "sweetalert2";

const FilterDate = ({ option, setOption }) => {
    const [awal, setAwal] = useState("");
    const [akhir, setAkhir] = useState("");

    const handleClose = () => {
        setOption({ ...option, filter: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let err = undefined;
        if (awal == "") {
            err = "Tanggal awal wajib diisi";
        } else if (akhir == "") {
            err = "Tanggal akhir wajib diisi";
        }

        if (err) {
            Swal.fire("Informasi", `${err}`, "warning");
        } else {
            
            setOption({
                ...option,
                filter: false,
                date: btoa(JSON.stringify({
                    awal: awal,
                    akhir: akhir
                }))
            });

        }
    };
    return (
        <>
            <div
                onClick={handleClose}
                className={`h-screen w-screen fixed bg-black ${
                    option.filter
                        ? "opacity-30 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } duration-300 ease-in-out z-[300]`}
            ></div>
            <form onSubmit={handleSubmit}>
                <div
                    className={`flex flex-col w-[90%] h-fit max-h-[90%] max-w-[500px] ${
                        option.filter ? "scale-100" : "scale-0"
                    } duration-300 ease-in-out fixed bg-white z-[300] right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] rounded-lg`}
                >
                    <div className="flex w-full py-6 px-6 flex-row justify-between items-center border-b-[2px]">
                        <h1 className="font-semibold">Filter Date</h1>
                        <div
                            onClick={handleClose}
                            className="flex px-2 bg-red-600 h-fit w-fit text-white rounded-md"
                        >
                            <p>x</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 px-6 py-6 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="awal">Tanggal Awal</label>
                            <input
                                onChange={(e) => {
                                    setAwal(e.target.value);
                                }}
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="date"
                                name="awal"
                                id="awal"
                                value={awal}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="akhir">Tanggal Akhir</label>
                            <input
                                onChange={(e) => {
                                    setAkhir(e.target.value);
                                }}
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="date"
                                name="akhir"
                                id="akhir"
                                value={akhir}
                            />
                        </div>
                    </div>
                    <div className="flex px-6 py-4 mb-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 cursor-default w-full py-3 px-4 text-white justify-center items-center rounded-md"
                        >
                            <p className="text-center">Filter</p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FilterDate;
