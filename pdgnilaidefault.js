function cetak(s, n=3, newLine=true){
    for(let i=0;i<n;i++){
        process.stdout.write(s);
        if(newLine)process.stdout.write('\n');
    }
}

// memanggil fungsi cetak() dengan satu parameter
console.log('Memanggil fungsi dengan satu parameter: ');
cetak('RPL');

// memanggil fungsi cetak() dengan dua parameter
console.log('\nMemanggil fungsi dengan dua parameter: ');
cetak('RPL',2);

// memanggil fungsi cetak() dengan tiga parameter
console.log("\nMemanggil fungsi dengan tiga parameter: ");
cetak('RPL',1,true);
cetak('TKJ',1,false);