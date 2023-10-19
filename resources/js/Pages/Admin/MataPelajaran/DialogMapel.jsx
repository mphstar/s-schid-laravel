import React, { useContext, useState } from "react";
import MapelContext from "./MapelContext";
import { BsFillPencilFill } from "react-icons/bs";
import CekIsEmpty from "../../../Utils/ValidateField";
import Swal from "sweetalert2";
import { mutate } from "swr";

const DialogMapel = ({ option }) => {
    const {
        isShow,
        setShow,
        isShowNilai,
        setShowNilai,
        dataSelected,
        setDataSelected,
        detail,
        setDetail,
        url,
    } = useContext(MapelContext);

    const handleClose = () => {
        resetForm();
        setShow(false);
    };

    const resetForm = () => {
        setDataSelected({
            option: "tambah",
            id: "",
            mapel: "",
            singkatan: "",
            kkm: "",
            detail: [],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let err = undefined;
        if (dataSelected.mapel == "") {
            err = "Field mapel wajib diisi";
        } else if (dataSelected.singkatan == "") {
            err = "Field singkatan wajib diisi";
        } else if (dataSelected.kkm == "") {
            err = "Field kkm wajib diisi";
        }

        if (err) {
            Swal.fire("Informasi", `${err}`, "warning");
        } else {
            Swal.fire({
                title: "Konfirmasi",
                text: `Apakah anda yakin ingin ${
                    dataSelected.option == "tambah" ? "menambah" : "mengubah"
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
                        `/api/mata-pelajaran/${
                            dataSelected.option == "tambah" ? "add" : "update"
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
                                dataSelected.option == "tambah"
                                    ? "menambahkan"
                                    : "mengubah"
                            } data`,
                            "error"
                        );
                    }
                }
            });
        }

        // console.log(dataSelected);
    };

    return (
        <>
            <div
                onClick={handleClose}
                className={`h-screen w-screen fixed bg-black ${
                    isShow
                        ? "opacity-30 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } duration-300 ease-in-out z-[300]`}
            ></div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div
                    className={`flex flex-col w-[90%] h-[90%] max-w-[500px] ${
                        isShow ? "scale-100" : "scale-0"
                    } duration-300 ease-in-out fixed bg-white z-[300] right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] rounded-lg`}
                >
                    <div className="flex w-full py-6 px-6 flex-row justify-between items-center border-b-[2px]">
                        <h1 className="font-semibold">
                            {dataSelected.option == "tambah"
                                ? "Tambah"
                                : "Ubah"}{" "}
                            Data
                        </h1>
                        <div
                            onClick={handleClose}
                            className="flex px-2 bg-red-600 h-fit w-fit text-white rounded-md"
                        >
                            <p>x</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 px-6 py-6 overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mapel">Mata Pelajaran</label>
                            <input
                                onChange={(e) =>
                                    setDataSelected({
                                        ...dataSelected,
                                        mapel: e.target.value,
                                    })
                                }
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="text"
                                name="mapel"
                                maxLength={30}
                                id="mapel"
                                value={dataSelected.mapel}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="singkatan">Singkatan</label>
                            <input
                                onChange={(e) =>
                                    setDataSelected({
                                        ...dataSelected,
                                        singkatan: e.target.value,
                                    })
                                }
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="text"
                                name="singkatan"
                                maxLength={30}
                                id="singkatan"
                                value={dataSelected.singkatan}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="kkm">KKM</label>
                            <input
                                onChange={(e) =>
                                    setDataSelected({
                                        ...dataSelected,
                                        kkm: e.target.value,
                                    })
                                }
                                className="outline-none px-4 py-2 border-[2px] rounded-md"
                                type="text"
                                name="kkm"
                                maxLength={30}
                                id="kkm"
                                value={dataSelected.kkm}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between items-center">
                                <label htmlFor="name">Nilai Pelajaran</label>
                                <p
                                    onClick={() => setShowNilai(true)}
                                    className="bg-green-500 text-white p-2 rounded-md"
                                >
                                    Tambah Nilai
                                </p>
                            </div>
                            <div className="border-2 w-full h-fit flex flex-row gap-3 border-md p-4 flex-wrap min-h-[150px]">
                                {dataSelected.detail.length == 0 ? (
                                    <div className="w-full h-full flex items-center justify-center">
                                        Tidak ada data
                                    </div>
                                ) : (
                                    dataSelected.detail.map((item, index) => {
                                        return (
                                            <div
                                                onClick={() => {
                                                    setShowNilai(true);
                                                    setDetail({
                                                        ...detail,
                                                        option: "ubah",
                                                        judul_nilai:
                                                            item.judul_nilai,
                                                        key: index,
                                                    });
                                                }}
                                                key={index}
                                                className="w-fit bg-gray-200 group hover:bg-gray-300 h-fit p-2 rounded-lg pr-14 relative"
                                            >
                                                <BsFillPencilFill className="absolute right-4 text-black bg-gray-200 group-hover:bg-gray-300 h-4 w-4" />
                                                {item.judul_nilai}
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4 mb-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 cursor-default w-full py-3 px-4 text-white justify-center items-center rounded-md"
                        >
                            <p className="text-center">
                                {dataSelected.option == "tambah"
                                    ? "Tambah"
                                    : "Ubah"}
                            </p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default DialogMapel;
