import React, { useContext } from "react";
import Swal from "sweetalert2";
import { mutate } from "swr";
import SuratMasukContext from "./SuratMasukContext";

const ModalSuratMasuk = () => {
    const { option, setOption, dataSelected, setDataSelected, url } =
        useContext(SuratMasukContext);

    const resetForm = () => {
        setDataSelected({
            judul: "",
            pengirim: "",
            isAdd: true,
        });
    };

    const handleClose = () => {
        resetForm()
        setOption({ ...option, dialog: false });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataSelected);

        let err = undefined;
        if (dataSelected.judul == "") {
            err = "Field judul wajib diisi";
        } else if (dataSelected.pengirim == "") {
            err = "Field pengirim wajib diisi";
        }

        if (err) {
            Swal.fire("Informasi", `${err}`, "warning");
        } else {
            Swal.fire({
                title: "Konfirmasi",
                text: `Apakah anda yakin ingin ${
                    dataSelected.isAdd ? "menambah" : "mengubah"
                } data`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Loading",
                        html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
                        allowOutsideClick: false,
                        showConfirmButton: false,
                    });

                    const result = await fetch(
                        `/api/surat/masuk/${
                            dataSelected.isAdd ? "add" : "update"
                        }`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(dataSelected),
                        }
                    ).catch((e) => {
                        Swal.fire("Failed", `Failed Access Server`, "error");
                    });

                    if (result.ok) {
                        const data = await result.json();
                        if (data.status == "berhasil") {
                            Swal.fire(
                                "Berhasil",
                                `${data.messages}`,
                                "success"
                            ).then(() => {
                                mutate(url);
                                handleClose();
                            });
                        } else {
                            Swal.fire("Gagal", `${data.messages}`, "error");
                        }
                    } else {
                        Swal.fire(
                            "Gagal",
                            `Gagal ${
                                dataSelected.isAdd ? "menambahkan" : "mengubah"
                            } data`,
                            "error"
                        );
                    }
                }
            });
        }
    };

    return (
        <>
            <div
                onClick={handleClose}
                className={`h-screen w-screen fixed bg-black ${
                    option.dialog
                        ? "opacity-30 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } duration-300 ease-in-out z-[300]`}
            ></div>
            <form onSubmit={handleSubmit}>
                <div
                    className={`flex flex-col w-[90%] h-fit max-h-[90%] max-w-[500px] ${
                        option.dialog ? "scale-100" : "scale-0"
                    } duration-300 ease-in-out fixed bg-white z-[300] right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] rounded-lg`}
                >
                    <div className="flex w-full py-6 px-6 flex-row justify-between items-center border-b-[2px]">
                        <h1 className="font-semibold">
                            {dataSelected.isAdd ? "Tambah" : "Ubah"} Data
                        </h1>
                        <div
                            onClick={handleClose}
                            className="flex px-2 bg-red-600 h-fit w-fit text-white rounded-md"
                        >
                            <p>x</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 px-6 py-6 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="judul">Judul Surat</label>
                            <input
                                onChange={(e) => {
                                    setDataSelected({
                                        ...dataSelected,
                                        judul: e.target.value,
                                    });
                                }}
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="text"
                                name="judul"
                                maxLength={30}
                                id="judul"
                                value={dataSelected.judul}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="pengirim">Pengirim</label>
                            <input
                                onChange={(e) => {
                                    setDataSelected({
                                        ...dataSelected,
                                        pengirim: e.target.value,
                                    });
                                }}
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="text"
                                name="pengirim"
                                maxLength={30}
                                id="pengirim"
                                value={dataSelected.pengirim}
                            />
                        </div>
                    </div>
                    <div className="flex px-6 py-4 mb-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 cursor-default w-full py-3 px-4 text-white justify-center items-center rounded-md"
                        >
                            <p className="text-center">
                                {dataSelected.isAdd ? "Tambah" : "Ubah"} Data
                            </p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ModalSuratMasuk;
