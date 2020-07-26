var x = 6;
var y = 8;
var z;

if(y==0){
    console.log('Kesalahan: Nilai y tidak boleh 0');
    //process.exit(1);
}else{
    z=x/y;
    console.log(`${x}/${y}=${z}`);
}