import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import MapelContext from "./MapelContext";

const InputNilaiMapel = ({ option }) => {
    const {
        isShowNilai,
        setShowNilai,
        dataSelected,
        setDataSelected,
        detail,
        setDetail,
    } = useContext(MapelContext);

    const handleClose = () => {
        setDetail({
            option: "tambah",
            judul_nilai: "",
        });
        setShowNilai(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(detail.judul_nilai == ''){
            Swal.fire("Informasi", `Judul nilai harus diisi`, "warning");
        } else {
            if(detail.option == 'tambah'){
                setDataSelected({
                    ...dataSelected,
                    detail: [
                        ...dataSelected.detail,
                        {
                            judul_nilai: detail.judul_nilai,
                        },
                    ],
                });
            } else {

                const newData = [...dataSelected.detail]

                newData[detail.key].judul_nilai = detail.judul_nilai
                setDataSelected({
                    ...dataSelected,
                    detail: newData
                });
            }
    
            handleClose();
        }
    };

    return (
        <>
            <div
                onClick={handleClose}
                className={`h-screen w-screen fixed bg-black ${
                    isShowNilai
                        ? "opacity-30 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } duration-300 ease-in-out z-[300]`}
            ></div>
            <form onSubmit={handleSubmit}>
                <div
                    className={`flex flex-col w-[90%] h-fit max-w-[500px] ${
                        isShowNilai ? "scale-100" : "scale-0"
                    } duration-300 ease-in-out fixed bg-white z-[300] right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] rounded-lg`}
                >
                    <div className="flex w-full py-6 px-6 flex-row justify-between items-center border-b-[2px]">
                        <h1 className="font-semibold">{detail.option == 'tambah' ? 'Tambah' : 'Ubah'} Data</h1>
                        <div
                            onClick={handleClose}
                            className="flex px-2 bg-red-600 h-fit w-fit text-white rounded-md"
                        >
                            <p>x</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 px-6 py-6 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="judul">Judul Nilai</label>
                            <input
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        judul_nilai: e.target.value,
                                    })
                                }
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="text"
                                name="judul"
                                maxLength={30}
                                id="judul"
                                value={detail.judul_nilai}
                            />
                        </div>
                    </div>
                    <div className="flex px-6 py-4 mb-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 cursor-default w-full py-3 px-4 text-white justify-center items-center rounded-md"
                        >
                            <p className="text-center">{detail.option == 'tambah' ? 'Tambah' : 'Ubah'}</p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default InputNilaiMapel;
