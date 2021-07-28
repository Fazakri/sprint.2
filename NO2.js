var jualmobil = {
    nama : 'Tompel',
    merek : 'Avanza',
    tahun : 2017, 
    iklan:function(){
        document.write(`BU, saya${this.nama}, jualmobil${this.merek}, tahun${this.tahun}, bekas`)
    }
    //``=Agar dollar berfungsi
}
jualmobil.iklan();