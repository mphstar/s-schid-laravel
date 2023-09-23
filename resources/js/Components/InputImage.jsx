import React, { useState } from "react";
import { MdFileOpen } from "react-icons/md";

const InputImage = ({ title = 'Gambar' }) => {
    const [PreviewImage, SetPreview] = useState();
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="name">{title}</label>
            <div className="bg-white w-full h-[200px] border-[2px] rounded-md flex flex-col overflow-hidden relative justify-center items-center">
                <input
                    onChange={(e) => {
                        const data = e.target.files[0];
                        const extensionName = data.name
                            .split(".")
                            .pop()
                            .toLowerCase();
                        if (
                            extensionName == "jpg" ||
                            extensionName == "png" ||
                            extensionName == "jpeg"
                        ) {
                            // SetImage(data);

                            const objectURL = URL.createObjectURL(data);
                            SetPreview(objectURL);

                            console.log(e.target.files[0]);
                        } else {
                            alert("error");
                        }
                    }}
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    className="h-full w-full absolute opacity-0"
                    type="file"
                />
                <div
                    className={`flex-col gap-2 items-center ${
                        PreviewImage ? "hidden" : "flex"
                    }`}
                >
                    <div className="h-12 w-12">
                        <MdFileOpen className="w-full h-full" />
                    </div>
                    <p>Select image</p>
                </div>
                <div
                    className={`w-full h-full absolute p-4 ${
                        PreviewImage ? "visible" : "invisible"
                    } pointer-events-none`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={PreviewImage ? PreviewImage : "#"}
                        alt="preview"
                    />
                </div>
            </div>
        </div>
    );
};

export default InputImage;
