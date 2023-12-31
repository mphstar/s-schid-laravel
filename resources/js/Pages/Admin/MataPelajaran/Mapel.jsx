import React, { useState } from "react";
import PanelAdmin from "@/Components/PanelAdmin";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { usePage } from "@inertiajs/react";
import DialogMapel from "./DialogMapel";
import MapelContext from "./MapelContext";
import InputNilaiMapel from "./InputNilaiMapel";
import useSWR, { mutate } from "swr";
import { fetcher } from "../../../Utils/Fetcher";
import Swal from "sweetalert2";
import Pagination from "../../../Components/Pagination";

const Mapel = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const url = `/api/mata-pelajaran?page=${page}&search=${search}`;
    const { data, isLoading, error } = useSWR(url, fetcher);

    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const { props } = usePage();
    const [isShow, setShow] = useState(false);
    const [isShowNilai, setShowNilai] = useState(false);
    const [dataSelected, setDataSelected] = useState({
        option: "tambah",
        id: "",
        mapel: "",
        singkatan: "",
        kkm: "",
        detail: [],
    });

    const [detail, setDetail] = useState({
        option: "tambah",
        judul_nilai: "",
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Konfirmasi?",
            text: `Apakah yakin ingin menghapus data`,
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

                const result = await fetch(`/api/mata-pelajaran/delete`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: id }), // Ganti dengan data yang ingin Anda kirim
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
                        });
                    } else {
                        Swal.fire("Gagal", `${data.messages}`, "error");
                    }
                } else {
                    Swal.fire("Gagal", `Gagal menghapus data`, "error");
                }
            }
        });
    };

    const handleCheckboxChange = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handleSelectAll = () => {
        if (data) {
            if (selectAll) {
                setSelectedRows([]);
            } else {
                setSelectedRows(data.data.data.map((item) => item.id));
            }
            setSelectAll(!selectAll);
        }
    };

    const handleDeleteSelection = () => {
        if (selectedRows.length == 0) {
            Swal.fire("Informasi", `Pilih data yang ingin dihapus`, "warning");
        } else {
            Swal.fire({
                title: "Konfirmasi?",
                text: `Apakah yakin ingin menghapus data`,
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
                        "/api/mata-pelajaran/deleteSelection",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ id: selectedRows }), // Ganti dengan data yang ingin Anda kirim
                        }
                    );

                    if (result.ok) {
                        const data = await result.json();
                        if (data.status == "berhasil") {
                            Swal.fire(
                                "Berhasil",
                                `${data.messages}`,
                                "success"
                            ).then(() => {
                                setSelectedRows([]);
                                setSelectAll(false);
                                mutate(url);
                            });
                        } else {
                            Swal.fire("Gagal", `${data.messages}`, "error");
                        }
                    } else {
                        Swal.fire("Gagal", `Gagal menghapus data`, "error");
                    }
                }
            });
        }
    };

    return (
        <MapelContext.Provider
            value={{
                isShow,
                setShow,
                isShowNilai,
                setShowNilai,
                dataSelected,
                setDataSelected,
                detail,
                setDetail,
                url,
            }}
        >
            <DialogMapel option={"Tambah"} />
            <InputNilaiMapel option={"Tambah"} />
            <PanelAdmin actived={props.route}>
                <div className="h-fit flex-grow flex flex-col py-4 px-6 md:px-12 bg-gray-100">
                    <nav
                        className="flex mt-0 overflow-x-auto py-4"
                        aria-label="Breadcrumb"
                    >
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3 mr-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Master Data
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                        className="w-3 h-3 text-gray-400 mx-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <a
                                        href="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-orange-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        Mata Pelajaran
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="flex flex-col md:flex-row w-full h-fit mt-2 justify-between gap-4">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className="py-2 px-6 border-[2px] rounded-lg outline-none w-full md:flex-1 md:max-w-[400px]"
                            placeholder="Search..."
                            type="text"
                        />
                        <div className="flex flex-row gap-2 cursor-default mt-4 md:mt-0">
                            <div
                                onClick={() => {
                                    handleDeleteSelection();
                                }}
                                className="bg-red-500 hover:bg-red-600 px-3 py-2 text-white rounded-md items-center justify-center"
                            >
                                <p>Delete</p>
                            </div>
                            <div
                                onClick={() => {
                                    setShow(true);
                                }}
                                className="bg-green-500 hover:bg-green-600 px-3 py-2 text-white rounded-md items-center justify-center"
                            >
                                <p>Tambah</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col bg-white flex-grow mt-8 rounded-lg px-6 py-4 border-[2px] overflow-x-auto">
                        <table className="border-separate border-spacing-y-3">
                            <thead>
                                <tr>
                                    <th className="px-4 py-4 text-center">
                                        <div className="">
                                            <input
                                                className="h-4 w-4"
                                                type="checkbox"
                                                name=""
                                                id=""
                                                onChange={handleSelectAll}
                                                checked={selectAll}
                                            />
                                        </div>
                                    </th>
                                    <th className="px-4 py-4 text-left">No</th>
                                    <th className="px-4 py-4 text-left">
                                        Mata Pelajaran
                                    </th>
                                    <th className="px-4 py-4 text-left">
                                        Singkatan
                                    </th>
                                    <th className="px-4 py-4 text-left">KKM</th>

                                    <th className="px-4 py-4 text-center">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100 rounded-xl">
                                {error ? (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="text-center px-4 py-4"
                                        >
                                            Tidak ada koneksi
                                        </td>
                                    </tr>
                                ) : undefined}
                                {isLoading ? (
                                    <>
                                        <tr>
                                            <td
                                                className="line loading-shimmer"
                                                colSpan="6"
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="line loading-shimmer"
                                                colSpan="6"
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="line loading-shimmer"
                                                colSpan="6"
                                            ></td>
                                        </tr>
                                    </>
                                ) : undefined}
                                {data ? (
                                    data.data.data.length == 0 ? (
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="text-center px-4 py-4"
                                            >
                                                Tidak ada data
                                            </td>
                                        </tr>
                                    ) : (
                                        data.data.data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-4 w-16 text-center">
                                                        <div className="">
                                                            <input
                                                                className="h-4 w-4"
                                                                type="checkbox"
                                                                name=""
                                                                id=""
                                                                onChange={() =>
                                                                    handleCheckboxChange(
                                                                        item.id
                                                                    )
                                                                }
                                                                checked={selectedRows.includes(
                                                                    item.id
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="text-left px-4">
                                                        {index + 1}
                                                    </td>
                                                    <td className="text-left px-4">
                                                        {item.nama_mapel}
                                                    </td>
                                                    <td className="text-left px-4">
                                                        {item.singkatan}
                                                    </td>
                                                    <td className="text-left px-4">
                                                        {item.kkm}
                                                    </td>
                                                    <td className="px-4 py-2 flex items-center justify-center">
                                                        <div className="flex flex-row gap-2 items-center justify-center h-full">
                                                            <div
                                                                onClick={() => {
                                                                    setDataSelected(
                                                                        {
                                                                            ...dataSelected,
                                                                            option: "ubah",
                                                                            id: item.id,
                                                                            mapel: item.nama_mapel,
                                                                            singkatan:
                                                                                item.singkatan,
                                                                            kkm: item.kkm,
                                                                            detail: item.detail,
                                                                        }
                                                                    );
                                                                    setShow(
                                                                        true
                                                                    );
                                                                }}
                                                                className="flex bg-orange-400 px-3 py-3 rounded-md"
                                                            >
                                                                <MdEditDocument color="white" />
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleDelete(
                                                                        item.id
                                                                    );
                                                                }}
                                                                className="flex bg-red-600 px-3 py-3 rounded-md"
                                                            >
                                                                <MdDelete color="white" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )
                                ) : undefined}
                            </tbody>
                        </table>
                    </div>
                    {/* paginate */}
                    {data ? (
                        <Pagination
                            page={page}
                            setPage={setPage}
                            lastPage={data.data.last_page}
                            total={data.data.total}
                            showItem={data.data.per_page}
                        />
                    ) : undefined}
                </div>
            </PanelAdmin>
        </MapelContext.Provider>
    );
};

export default Mapel;
