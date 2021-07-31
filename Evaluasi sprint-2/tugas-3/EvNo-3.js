function luaspersegipanjang(panjang, lebar){
    luas = panjang * lebar 
    Documents.write("panjang : " + panjang + "<br>")
    Documents.write("lebar : " + lebar + "<br/>")
    Documents.write("luas persegi panjang: "+ luas)
}

inputpanjang = prompt("masukan nilai panjang")
inputlebar = prompt("masukan nilai  lebar")
luaspersegipanjang(inputpanjang, inputlebar)
