import React from "react";
import "./local.css";
import LayoutInput from "./LayoutInput";
import { FiArrowDown } from "react-icons/fi";
import InputImage from "../../Components/InputImage";

const Ppdb = () => {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 pb-8">
            <div className="w-full bg-white border-b-[2px] px-6">
                <div className="h-fit py-6 px- container w-full mx-auto flex flex-row-reverse gap-4 justify-between items-center">
                    <div className="flex flex-col items-end">
                        <div className="flex flex-row gap-2 font-bold items-center">
                            <span>Siap</span>
                            <div className="px-4 text-white flex relative">
                                <div className="bg-primary rounded-sm -rotate-6 flex absolute z-[5] left-0 top-0 w-full h-full pointer-events-none"></div>
                                <span className="z-10 flex text-center">
                                    PPDB
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-600 text-md text-right">
                            Pendaftaran anak baru
                        </p>
                    </div>
                    <div className="h-16 w-16 object-contain">
                        <img
                            className="w-full h-full"
                            src="/assets/images/unej.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Data Siswa
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <LayoutInput id={"nama"} title={"Nama Lengkap"} />
                    <LayoutInput
                        id={"nama_panggilan"}
                        title={"Nama Panggilan"}
                    />
                    <LayoutInput
                        id={"nik"}
                        title={"NIK"}
                    />
                    <LayoutInput id={"tempat_lahir"} title={"Tempat Lahir"} />
                    <LayoutInput
                        id={"tanggal_lahir"}
                        title={"Tanggal Lahir"}
                        type="date"
                    />
                    <div className="relative">
                        <label className="font-medium">Jenis Kelamin</label>
                        <div className="flex flex-row gap-3 mt-2 py-2">
                            <input
                                value={"pria"}
                                type="radio"
                                name="jeniskelamin"
                                id="lakilaki"
                            />
                            <label htmlFor="lakilaki">Laki - laki</label>
                            <input
                                value={"wanita"}
                                type="radio"
                                name="jeniskelamin"
                                id="perempuan"
                            />
                            <label htmlFor="perempuan">Perempuan</label>
                        </div>
                    </div>
                    <div className="relative">
                        <label className="font-medium" htmlFor="agama">
                            Agama
                        </label>
                        <select
                            id="agama"
                            className="flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg appearance-none pr-10 bg-white"
                        >
                            <option value="islam">Islam</option>
                            <option value="kristen">Kristen</option>
                            <option value="hindu">Hindu</option>
                            <option value="budha">Budha</option>
                            <option value="katolik">Katolik</option>
                            <option value="konghucu">Konghucu</option>
                        </select>
                        <div className="absolute right-5 bottom-4">
                            <FiArrowDown />
                        </div>
                    </div>
                    <LayoutInput id={"anak_ke"} title={"Anak Ke"} onlyNumber />
                    <div className="relative">
                        <label
                            className="font-medium"
                            htmlFor="status_keluarga"
                        >
                            Status Keluarga
                        </label>
                        <select
                            id="status_keluarga"
                            className="flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg appearance-none pr-10 bg-white"
                        >
                            <option value="kandung">Kandung</option>
                            <option value="tiri">Tiri</option>
                        </select>
                        <div className="absolute right-5 bottom-4">
                            <FiArrowDown />
                        </div>
                    </div>

                    <LayoutInput
                        id={"saudara_kandung"}
                        title={"Jumlah Saudara Kandung"}
                        onlyNumber
                    />
                    <LayoutInput
                        id={"saudara_tiri"}
                        title={"Jumlah Saudara Tiri"}
                        onlyNumber
                        optional
                        description="Kosongkan jika tidak ada"
                    />
                    <LayoutInput
                        id={"saudara_angkat"}
                        title={"Jumlah Saudara Angkat"}
                        onlyNumber
                        optional
                        description="Kosongkan jika tidak ada"
                    />
                    <div className="relative">
                        <label
                            className="font-medium"
                            htmlFor="status_keluarga"
                        >
                            Anak Yatim Piatu
                        </label>
                        <select
                            id="status_keluarga"
                            className="flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg appearance-none pr-10 bg-white"
                        >
                            <option value=""></option>
                            <option value="yatim">Yatim</option>
                            <option value="piatu">Piatu</option>
                            <option value="yatimpiatu">Yatim Piatu</option>
                        </select>

                        <p className="text-xs py-1 font-medium text-orange-700">
                            Kosongkan jika tidak
                        </p>

                        <div className="absolute right-5 top-11">
                            <FiArrowDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Tempat Tinggal
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <div className="lg:row-span-2">
                        <LayoutInput
                            id={"alamat"}
                            title={"Alamat"}
                            asTextArea
                        />
                    </div>
                    <LayoutInput
                        id={"no_telepon"}
                        title={"Nomor Telepon"}
                        onlyNumber
                        description={"Contoh: 0895xxxxxxxx"}
                    />
                    <LayoutInput
                        id={"tempat_tinggal"}
                        title={"Tempat Tinggal"}
                    />
                    <LayoutInput
                        id={"jarak_rumah_kesekolah"}
                        title={"Jarak Rumah ke Sekolah"}
                        prefix={"Km"}
                    />
                    <LayoutInput
                        id={"Waktu_kesekolah"}
                        title={"Waktu Perjalanan ke Sekolah"}
                        prefix={"Menit"}
                        onlyNumber
                    />
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Kesehatan
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <div className="relative">
                        <label className="font-medium required" htmlFor="goldarah">
                            Golongan Darah
                        </label>
                        <select
                            id="goldarah"
                            className="flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg appearance-none pr-10 bg-white"
                        >
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                            <option value="rhnull">RH-Null</option>
                        </select>
                        <div className="absolute right-5 top-11">
                            <FiArrowDown />
                        </div>
                    </div>
                    <LayoutInput
                        id={"penyakit"}
                        title={"Penyakit yang Pernah diderita"}
                        description="Kosongkan jika tidak ada"
                        optional
                    />
                    <LayoutInput
                        id={"kelainan_jasmani"}
                        title={"Kelainan Jasmani"}
                        optional
                        description="Kosongkan jika tidak ada"
                    />
                    <LayoutInput
                        id={"tinggi_badan"}
                        title={"Tinggi Badan"}
                        prefix={"Cm"}
                    />
                    <LayoutInput
                        id={"berat_badan"}
                        title={"Berat Badan"}
                        prefix={"Kg"}
                    />
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Keterangan Ayah Kandung
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <LayoutInput id={"nama_ayah"} title={"Nama Lengkap"} />
                    <LayoutInput
                        id={"tempat_tanggal_lahir_ayah"}
                        title={"Tempat, Tanggal Lahir"}
                    />
                    <div className="relative">
                        <label className="font-medium" htmlFor="agama_ayah">
                            Agama
                        </label>
                        <select
                            id="agama_ayah"
                            className="flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg appearance-none pr-10 bg-white"
                        >
                            <option value="islam">Islam</option>
                            <option value="kristen">Kristen</option>
                            <option value="hindu">Hindu</option>
                            <option value="budha">Budha</option>
                            <option value="katolik">Katolik</option>
                            <option value="konghucu">Konghucu</option>
                        </select>
                        <div className="absolute right-5 bottom-4">
                            <FiArrowDown />
                        </div>
                    </div>
                    <LayoutInput id={"pendidikan_ayah"} title={"Pendidikan"} />
                    <LayoutInput id={"pekerjaan_ayah"} title={"Pekerjaan"} />
                    <LayoutInput
                        id={"penghasilan_ayah"}
                        title={"Penghasilan per Bulan"}
                    />
                    <div className="lg:row-span-2">
                        <LayoutInput
                            id={"alamat_ayah"}
                            title={"Alamat"}
                            asTextArea
                        />
                    </div>
                    <LayoutInput
                        id={"notelepon_ayah"}
                        title={"No Telepon"}
                        onlyNumber
                        description={"Contoh: 0895xxxxxxxx"}
                    />
                    <div className="relative">
                        <label className="font-medium">Masih Hidup / Meninggal</label>
                        <div className="flex flex-row gap-3 mt-2 py-2">
                            <input
                                value={"hidup"}
                                type="radio"
                                name="status_hidup_ayah"
                                id="hidup_ayah"
                            />
                            <label htmlFor="hidup_ayah">Hidup</label>
                            <input
                                value={"meninggal"}
                                type="radio"
                                name="status_hidup_ayah"
                                id="meninggal_ayah"
                            />
                            <label htmlFor="meninggal_ayah">Meninggal</label>
                        </div>
                    </div>
                    <LayoutInput
                        id={"kewarganegaraan_ayah"}
                        title={"Kewarganegaraan"}
                    />
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Keterangan Ibu Kandung
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <LayoutInput id={"nama_ibu"} title={"Nama Lengkap"} />
                    <LayoutInput
                        id={"tempat_tanggal_lahir_ibu"}
                        title={"Tempat, Tanggal Lahir"}
                    />
                    <div className="relative">
                        <label className="font-medium" htmlFor="agama_ibu">
                            Agama
                        </label>
                        <select
                            id="agama_ibu"
                            className="flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg appearance-none pr-10 bg-white"
                        >
                            <option value="islam">Islam</option>
                            <option value="kristen">Kristen</option>
                            <option value="hindu">Hindu</option>
                            <option value="budha">Budha</option>
                            <option value="katolik">Katolik</option>
                            <option value="konghucu">Konghucu</option>
                        </select>
                        <div className="absolute right-5 bottom-4">
                            <FiArrowDown />
                        </div>
                    </div>
                    <LayoutInput id={"pendidikan_ibu"} title={"Pendidikan"} />
                    <LayoutInput id={"pekerjaan_ibu"} title={"Pekerjaan"} />
                    <LayoutInput
                        id={"penghasilan_ibu"}
                        title={"Penghasilan per Bulan"}
                    />
                    <div className="lg:row-span-2">
                        <LayoutInput
                            id={"alamat_ibu"}
                            title={"Alamat"}
                            asTextArea
                        />
                    </div>
                    <LayoutInput
                        id={"notelepon_ibu"}
                        title={"No Telepon"}
                        onlyNumber
                        description={"Contoh: 0895xxxxxxxx"}
                    />
                    <div className="relative">
                        <label className="font-medium">Masih Hidup / Meninggal</label>
                        <div className="flex flex-row gap-3 mt-2 py-2">
                            <input
                                value={"hidup"}
                                type="radio"
                                name="status_hidup_ibu"
                                id="hidup_ibu"
                            />
                            <label htmlFor="hidup_ibu">Hidup</label>
                            <input
                                value={"meninggal"}
                                type="radio"
                                name="status_hidup_ibu"
                                id="meninggal_ibu"
                            />
                            <label htmlFor="meninggal_ibu">Meninggal</label>
                        </div>
                    </div>
                    <LayoutInput
                        id={"kewarganegaraan_ibu"}
                        title={"Kewarganegaraan"}
                    />
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Kegemaran
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <LayoutInput id={"kegemaran1"} title={"Kegemaran 1"} optional />
                    <LayoutInput id={"kegemaran2"} title={"Kegemaran 2"} optional />
                    <LayoutInput id={"kegemaran3"} title={"Kegemaran 3"} optional />
                </div>
            </div>
            <div className="flex flex-col flex-grow h-full w-full mt-6 container mx-auto px-6">
                <h1 className="font-semibold text-xl mt-4 border-b-2 pb-6 text-left">
                    Lampiran
                </h1>
                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md duration-300 mt-4 gap-3">
                    <InputImage title="Pas Photo 3x4cm" />
                    <InputImage title="Kartu Keluarga" />
                    <InputImage title="Ijazah PAUD / TK" />
                </div>
            </div>
            <div className="container mx-auto flex px-6 mt-12">
                <div className="px-3 py-2 w-full flex justify-center items-center h-fit bg-primary text-white rounded-md hover:bg-slate-900">
                    <p>Daftar</p>
                </div>
            </div>
        </div>
    );
};

export default Ppdb;
