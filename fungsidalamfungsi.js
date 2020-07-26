function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c=Math.sqrt(kuadrat(a)+kuadrat(b));
}

let a=3;
let b=4;

var c=hipotenusa(a,b);
console.log(`Sisi Miring = ${c}`);