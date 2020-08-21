console.log("Selamat datang di website buah");

window.alert("Selamat datang di wesbite Buah");

const Nama = prompt("Siapa namamu?");
const pilih = prompt("Mau buah anggur atau apel?");
const makan = prompt("Mau buahnya? (iya/tidak)");

const buah =
    {

    nama:{
    
        namaa: Nama,
        makann: pilih,
    },

    makan: makan
    };

if(Nama === null, pilih === null, makan===null)
{
    alert("anda tidak sopan");

if(pilih === "anggur")
{    
if (buah.makan === "iya")
    {
        alert("ini buahnya selamat menikmati" + buah.nama.namaa+""+"!");
    }else if(buah.makan === "tidak")
    {
        alert("Ini buahnya kembali lagi yaa");
    }
}else if(pilih === "apel")
{
if (buah.makan === "iya")
    {
        alert("Selamat menikmati" + buah.nama.namaa+""+"!");
    }else if(buah.makan === "tidak")
    {
        alert("Ini buahnya kembali lagi yaa");
    }
}
else if (pilih != "apel")
{
    alert("datang lagi kembali yaa");
}
else if(pilih != "anggur")
{
    alert("datang lagi kembali yaa");
}
}