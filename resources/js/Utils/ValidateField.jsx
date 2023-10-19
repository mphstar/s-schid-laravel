import Swal from "sweetalert2";

const CekIsEmpty = (field) => {
    console.log(field);
    field.forEach((element) => {
        if (element.value == "") {
            // Swal.fire("Informasi", `Field ${element.key} wajib diisi`, "warning");
            console.log(element);
            return true;
        } 
    });

    return false
};

export default CekIsEmpty;
