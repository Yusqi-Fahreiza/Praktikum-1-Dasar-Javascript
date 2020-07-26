class Segitiga{
    //konstruktor
    constructor(a,t){
        //mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }

    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;
    }

    //metode statis
    static buatObjek(a,t){
        return new Segitiga(a,t);
    }
}

let a=6;
let t=8;

//memanggil metode statis
let obj=Segitiga.buatObjek(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);