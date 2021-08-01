function dataHandling2(input) {
    let dataArray = input

    dataArray.splice(1, 4, 'Roman Alamsyah Elsharwy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro' );

    let hasilsplit = dataArray[3].split('/')

    let tanggal = 0
    let bulan = 'tidak di ketahui'
    let bulan2 = 'tidak di ketahui'
    let tahun = 0

// Tanggal
    for (let i = 1; i < 31; i++){
         switch (true) {
        case hasilsplit[0] == i:
            tanggal = i
            break;

        default:
            tanggal
            break;
        }

}   
        switch (true) {
        case hasilsplit[1] == 01:
            bulan = 'januari'
            break
        case hasilsplit[1] == 02:
            bulan = 'februari'
            break        
        case hasilsplit[1] == 03:
            bulan = 'maret'
            break          
        case hasilsplit[1] == 04:
            bulan = 'april'
             break          
        case hasilsplit[1] == 05:
            bulan = 'mei'
            break
        case hasilsplit[1] == 06:
            bulan = 'juni'
            break
        case hasilsplit[1] == 07:
            bulan = 'juli'
             break
        case hasilsplit[1] == 08:
            bulan = 'agustus'
            break
        case hasilsplit[1] == 09:
            bulan = 'september'
            break
        case hasilsplit[1] == 10:
            bulan = 'oktober'
            break
        case hasilsplit[1] == 11:
            bulan = 'november'
            break
        case hasilsplit[1] == 12:
            bulan = 'desember'
            break
        default:
            bulan 
            break;                                       
    }
// Bulan
    for (let i = 1; i <= 12; i++){

        switch (true){
            case hasilsplit[1] == i:
                bulan2 = '0' + i
                break;
            default:
                bulan2
                break;    
        }

    }
// Tahun    
    for (let i = 1; i <= new Date().getFullYear(); i++){
        switch (true) {
            case hasilsplit[2] == i:
                tahun 
                break;
            
            default:
                tahun
                break    
        }
    }
let hasilBalik = hasilsplit.sort(function(a, b){return b-a})

let hasilGabung = tanggal + '-' + bulan2 + '-' + tahun

let hasilConvert = dataArray[1].toString()

let hasilSlice = hasilConvert.slice(0, 14)


console.log(dataArray);
console.log(bulan);
console.log(hasilBalik);
console.log(hasilGabung);
console.log(hasilSlice);

}
let data = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];
dataHandling2(data)
