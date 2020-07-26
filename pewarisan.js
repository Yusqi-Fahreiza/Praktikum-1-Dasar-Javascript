class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }

    luas(){
        return this.alas*this.tinggi/2;
    }

    cetakProperti(){
        console.log(`alas\t:${this.alas}`);
        console.log(`tinggi\t:${this.tinggi}`);
    }
}

class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);//memanggil konstruktor kelas segitiga 
        //mendefinisikan properti baru
        this.warna=w;
    }

    cetakProperti(){
        //memanggil segitiga.cetakProperti
        super.cetakProperti();
        console.log(`warna\t:${this.warna}`);
    }
}

let a=3;
let t=4;

//membuat objek dari kelas SegitigaWarna
let obj=new SegitigaWarna(a,t,'merah');
obj.cetakProperti;

//memanggil memtode luas 
console.log(`luas\t:${obj.luas()}`);