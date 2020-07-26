var x = 2;
var y = 0;
var z;

if(y==0){
    console.log('Kesalahan: Nilai y tidak boleh nol');
    process.exit(1);
}

z=x/y;
console.log(`${x}/${y}=${z}`);