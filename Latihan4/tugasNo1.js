var introduce = {
    perkenalkan : function() {
        console.log("nama saya " + " " + this.name, "umur saya" + " " + this.age + " " +"tahun,", "alamat saya" + " " + this.address,"dan saya punya hobby" + " " + this.hobby);

    }   
}

var data = Object.create(introduce);
data.name = 'agus,'
data.age = 30
data.address = 'jl, Malioboro, Yogyakarta,'
data.hobby = 'gaming!'

data.perkenalkan()
     