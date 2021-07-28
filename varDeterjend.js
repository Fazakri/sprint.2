var mobil = {
    'nama' : 'Avanza',
    'berat' : '850',
    'warna' : 'biru',
    'beli' : function(nama){
        console.log('saya mau beli' + ' ' + nama);
    }
}
mobil.beli('Avanza warna biru')


var motor = {
    'nama' : 'honda',
    'berat' : '550',
    'warna' : 'hitam',
    'jual' : function (nama){
        console.log('ana mau jual' + ' ' + nama);
    }
}
motor.jual('honda warna hitam')

var sabun = {
    'merek' : 'lifeboy',
    'berat' : '250',
    'rasa' : 'lemon',
    'jual' : function (nama){
        console.log('ana mau jual' + ' ' + nama);
    }
}
sabun.jual('lifeboy rasa lemon')

var laptop = {
    'merek' : 'asus',
    'berat' : '900',
    'warna' : 'putih',
    'jual' : function (nama){
        console.log('ana mau jual' + ' ' + nama);
    }
}
laptop.jual('laptop warna putih')

var senjata = {
    'jenis' : 'granat',
    'berat' : '20',
    'daya' : 'besar',
    'jual' : function (nama){
        console.log('ana mau jual' + ' ' + nama);
    }
}
senjata.jual('senjata daya besar')