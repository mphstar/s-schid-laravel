import React from "react";

const LayoutInput = ({
    title,
    id,
    type,
    onlyNumber,
    optional,
    description,
    prefix,
    asTextArea,
}) => {
    const validateNumberInput = (input) => {
        var inputValue = input.target.value;

        // Menghilangkan semua karakter selain angka dan titik (.)
        inputValue = inputValue.replace(/[^0-9]/g, "");

        // Mengganti nilai input dengan hasil yang sudah diubah
        input.target.value = inputValue;
    };

    return (
        <div className="relative">
            <label
                className={`font-medium ${optional ? "" : "required"}`}
                htmlFor={id}
            >
                {title}
            </label>

            {asTextArea ? (
                <textarea
                    id={id}
                    className={`flex px-3 py-2 border-2 w-full h-40 outline-none mt-2 rounded-lg flex-grow ${
                        prefix ? "pr-20" : ""
                    }`}
                    placeholder="Isi disini"
                ></textarea>
            ) : (
                <input
                    id={id}
                    className={`flex px-3 py-2 border-2 w-full outline-none mt-2 rounded-lg ${
                        prefix ? "pr-20" : ""
                    }`}
                    placeholder="Isi disini"
                    onInput={onlyNumber ? validateNumberInput : undefined}
                    type={type ? type : "text"}
                ></input>
            )}
            {description ? (
                <p className="text-xs py-1 font-medium text-orange-700">
                    {description}
                </p>
            ) : undefined}
            {prefix ? (
                <p className="absolute right-5 top-12 text-xs font-poppins-semibold">
                    {prefix}
                </p>
            ) : undefined}
        </div>
    );
};

export default LayoutInput;
