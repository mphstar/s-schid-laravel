
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
import PanelAdminContext from "../Utils/PanelAdminContext";
import { Link } from "@inertiajs/react";

const Sidebar = ({ active }) => {
    const { IsShow, setShow } = useContext(PanelAdminContext);

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
                }  md:translate-x-0 duration-500 ease-in-out max-w-[400px] md:w-[320px] lg:w-[290px] h-full bg-white border-r-[1px] border-r-[#DCDADA] box-border fixed z-[100] pb-10 2xl:pb-10 overflow-y-auto md:scrollbar-hide`}
                id="sidebar"
            >
                <div className="flex flex-col w-full px-8 py-6 gap-3">
                    <div className="h-14 w-14 bg-black rounded-full"></div>
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
                <div className="flex flex-col px-4 gap-1 lg:mt-0 h-full">
                    <h1 className="mt-4 text-sm ml-4 py-2">Master Data</h1>
                    <Link
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Dashboard"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-200"
                        } px-4 rounded-md`}
                    >
                        <div className="flex flex-row items-center w-full">
                            <HiMiniUsers />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Data Siswa
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
                            <HiClipboardDocument />

                            <p className="ml-5 poppins-medium text-[15px] md:text-[16px] lg:text-[15px] transition ease-in-out">
                                Rapor
                            </p>
                        </div>
                    </Link>
                    <h1 className="mt-4 text-sm ml-4 py-2">Pencatatan</h1>
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
                        href="/dashboard"
                        className={`flex flex-row justify-between h-fit py-2 cursor-pointer menu flex-none ${
                            active == "Nilai"
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
                    <Link
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
                    </Link>
                </div>
            </div>
            <div
                onClick={() => setShow(false)}
                className={`w-screen fixed h-screen flex bg-black z-[98] ${
                    IsShow ? "opacity-30 pointer-events-auto" : "opacity-0"
                } duration-500 ease-in-out pointer-events-none`}
            ></div>
        </>
    );
};

export default Sidebar;
