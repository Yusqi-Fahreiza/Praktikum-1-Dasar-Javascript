var a = 10;
var b = 4;

function PembagianBulat(a,b){
    var c=a/b;
    if(c>0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}

console.log(`${a}/${b}=${PembagianBulat(a,b)}`);