//Eğer ki parametre olarak aldığı dğer tanımlıysa o değeri geri döndüren ama tanımsız ise "Bilinmiyor" metni döndüren fonksiyon

const checkValid = (value)  => {
    return !value ? "Bilinmiyor" : value;
}

export default checkValid;