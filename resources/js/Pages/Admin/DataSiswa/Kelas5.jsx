import React from "react";
import PanelAdmin from "@/Components/PanelAdmin";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { usePage } from "@inertiajs/react";

const Kelas5 = () => {
    const { props } = usePage()
    return (
        <PanelAdmin actived={`kelas${props.kelas}`}>
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
                                    Data Siswa
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
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
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                    Kelas 5
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="flex flex-col md:flex-row w-full h-fit mt-2 justify-between gap-4">
                    <input
                        onChange={(e) => {}}
                        className="py-2 px-6 border-[2px] rounded-lg outline-none w-full md:flex-1 md:max-w-[400px]"
                        placeholder="Search..."
                        type="text"
                    />
                    <div className="flex flex-row gap-2 cursor-default mt-4 md:mt-0">
                        <div
                            onClick={() => {}}
                            className="bg-red-500 hover:bg-red-600 px-3 py-2 text-white rounded-md items-center justify-center"
                        >
                            <p>Delete</p>
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
                                        />
                                    </div>
                                </th>
                                <th className="px-4 py-4 text-left">NIS</th>
                                <th className="px-4 py-4 text-left">NISN</th>
                                <th className="px-4 py-4 text-left">
                                    Nama Lengkap
                                </th>
                                <th className="px-4 py-4 text-left">Kelas</th>
                                <th className="px-4 py-4 text-left">
                                    Tempat, Tanggal Lahir
                                </th>
                                <th className="px-4 py-4 text-left">
                                    Jenis Kelamin
                                </th>
                                <th className="px-4 py-4 text-left">Agama</th>
                                <th className="px-4 py-4 text-left">Alamat</th>
                                <th className="px-4 py-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100 rounded-xl">
                            <tr>
                                <td className="px-4 w-16 text-center">
                                    <div className="">
                                        <input
                                            className="h-4 w-4"
                                            type="checkbox"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                </td>
                                <td className="text-left px-4">32310</td>
                                <td className="text-left px-4">20012002120</td>
                                <td className="text-left px-4">Renaldi Dwi</td>
                                <td className="text-left px-4">3</td>
                                <td className="text-left px-4">
                                    Jember, 3 Mei 2013
                                </td>
                                <td className="text-left px-4">Laki-laki</td>
                                <td className="text-left px-4">Islam</td>
                                <td className="text-left px-4">
                                    Jln Mastrip Gg 21 No 44
                                </td>
                                <td className="px-4 py-2 flex items-center justify-center">
                                    <div className="flex flex-row gap-2 items-center justify-center h-full">
                                        <div
                                            onClick={() => {}}
                                            className="flex bg-orange-400 px-3 py-3 rounded-md"
                                        >
                                            <MdEditDocument color="white" />
                                        </div>
                                        <div
                                            onClick={() => {}}
                                            className="flex bg-red-600 px-3 py-3 rounded-md"
                                        >
                                            <MdDelete color="white" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </PanelAdmin>
    );
};

export default Kelas5;
