function printWordTable(palabra) {
    let palabrita = palabra.split('');

    console.log(palabrita.join(' '));

    for (let i = 1; i < palabrita.length-1; i++) {
        console.log(palabrita[i] + palabrita[palabrita.length - 1 - i]);

    }

    console.log(palabrita.reverse().join(' '));
}

printWordTable('ornitorrinco');