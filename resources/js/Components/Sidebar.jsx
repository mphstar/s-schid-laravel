import React, { useContext, useEffect, useState } from "react";
import {
    HiBookOpen,
    HiClipboardDocument,
    HiEnvelope,
    HiMiniBookOpen,
    HiMiniFingerPrint,
    HiMiniNewspaper,
    HiMiniUser,
    HiMiniUsers,
    HiNewspaper,
    HiPresentationChartBar,
    HiRectangleGroup,
} from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";
import PanelAdminContext from "../Utils/PanelAdminContext";
import { Link } from "@inertiajs/react";

const Sidebar = ({ active }) => {
    const { IsShow, setShow } = useContext(PanelAdminContext);
    const [isCollapseDataSiswa, setCollapseDataSiswa] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 768 ? setShow(false) : undefined;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div
                className={`flex flex-col w-[80%] ${
                    IsShow ? "translate-x-0" : "-translate-x-[400px]"
                }  md:translate-x-0 duration-500 font-poppins-regular ease-in-out max-w-[400px] md:w-[320px] lg:w-[290px] h-full bg-white border-r-[1px] border-r-[#DCDADA] box-border fixed z-[105] pb-10 2xl:pb-10 overflow-y-auto md:scrollbar-hide`}
                id="sidebar"
            >
                <div className="flex flex-col w-full px-8 py-6 gap-3">
                    <div className="h-14 w-14 rounded-full">
                        <img
                            className="w-full h-full object-contain"
                            src="/assets/images/unej.png"
                            alt="unej"
                        />
                    </div>
                    <div className="flex flex-row 2xl:flex-col justify-between items-center 2xl:items-start w-full gap-3">
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[15px] md:text-[18px] text-gray-800 font-bold lg:text-[16px] w-full2xl:w-full whitespace-nowrap text-ellipsis overflow-hidden">
                                Sistem Sekolah
                            </h3>

                            <p className="text-[#535353] text-sm">
                                Administrator
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-4 gap-1 lg:mt-0 h-fit">
                    <h1 className="mt-4 text-sm ml-4 py-2">Master Data</h1>

                    <div
                        className={`${
                            isCollapseDataSiswa
                                ? "h-64"
                                : "h-9 hover:bg-gray-200"
                        }  flex flex-col w-full duration-300 px-4 ease-in-out rounded-md py-2 overflow-hidden`}
                    >
                        <div
                            id="master_data"
                            className="flex flex-row w-full justify-between h-fit cursor-pointer"
                            onClick={() =>
                                setCollapseDataSiswa((callback) => !callback)
                            }
                        >
                            <div className="flex flex-row items-center w-full relative">
                                <HiMiniUsers />

                                <p className="ml-5 text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                    Data Siswa
                                </p>
                                <HiChevronDown
                                    className={`absolute right-0 ${
                                        isCollapseDataSiswa
                                            ? "rotate-180"
                                            : "rotate-0"
                                    } duration-300 ease-in-out`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row w-full mt-2">
                            <div className="px-3">
                                <div className="bg-gray-300 w-[1px] h-full"></div>
                            </div>
                            <div className="flex w-full h-full flex-col px-0 cursor-default">
                                <Link href="/admin/data-siswa/kelas1">
                                    <div
                                        className={`${
                                            active == "kelas1"
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                        } text-primary  text-sm py-2 px-2 rounded-md w-full`}
                                    >
                                        <div className="flex flex-row justify-between items-center">
                                            <p>Kelas 1</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/admin/data-siswa/kelas2">
                                    <div
                                        className={`${
                                            active == "kelas2"
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                        } text-primary  text-sm py-2 px-2 rounded-md w-full`}
                                    >
                                        <div className="flex flex-row justify-between items-center">
                                            <p>Kelas 2</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/admin/data-siswa/kelas3">
                                    <div
                                        className={`${
                                            active == "kelas3"
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                        } text-primary  text-sm py-2 px-2 rounded-md w-full`}
                                    >
                                        <div className="flex flex-row justify-between items-center">
                                            <p>Kelas 3</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/admin/data-siswa/kelas4">
                                    <div
                                        className={`${
                                            active == "kelas4"
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                        } text-primary  text-sm py-2 px-2 rounded-md w-full`}
                                    >
                                        <div className="flex flex-row justify-between items-center">
                                            <p>Kelas 4</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/admin/data-siswa/kelas5">
                                    <div
                                        className={`${
                                            active == "kelas5"
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                        } text-primary  text-sm py-2 px-2 rounded-md w-full`}
                                    >
                                        <div className="flex flex-row justify-between items-center">
                                            <p>Kelas 5</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/admin/data-siswa/kelas6">
                                    <div
                                        className={`${
                                            active == "kelas6"
                                                ? "bg-gray-200"
                                                : "hover:bg-gray-100"
                                        } text-primary  text-sm py-2 px-2 rounded-md w-full`}
                                    >
                                        <div className="flex flex-row justify-between items-center">
                                            <p>Kelas 6</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/admin/mata-pelajaran"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "mapel"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiMiniBookOpen />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Mata Pelajaran
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiNewspaper />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Data Nilai
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiClipboardDocument />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Rapor
                            </p>
                        </div>
                    </Link>
                    <h1 className="mt-4 text-sm ml-4 py-2">Laporan</h1>
                    <Link
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiMiniFingerPrint />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Presensi
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiPresentationChartBar />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Keuangan
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/admin/surat/masuk"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "surat"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiEnvelope />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Surat
                            </p>
                        </div>
                    </Link>
                    <h1 className="mt-4 text-sm ml-4 py-2">Lainnya</h1>
                    <Link
                        href="/ppdb"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiRectangleGroup />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                PPDB
                            </p>
                        </div>
                    </Link>
                    {/* <Link
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiMiniNewspaper />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Buku Penghubung
                            </p>
                        </div>
                    </Link> */}
                </div>
            </div>
            <div
                onClick={() => setShow(false)}
                className={`w-screen fixed h-screen flex bg-black z-[101] ${
                    IsShow ? "opacity-30 pointer-events-auto" : "opacity-0"
                } duration-500 ease-in-out pointer-events-none`}
            ></div>
        </>
    );
};

export default Sidebar;
