setInterval(() => {
    var dt = new Date();
    var hours = dt.getHours() ; 
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    var minutes = dt.getMinutes() ;


    
    let hlen = String(hours)
    let mlen = String(minutes)
    console.log(hlen.length);
    console.log(mlen.length);


    if (hlen.length==1){
        var hours = [hlen.slice(0, 0), '0', hlen.slice(0)].join('');
        console.log(hours);
        console.log('dd');
    }
    if (mlen.length==1){
        var minutes = [mlen.slice(0, 0), '0', mlen.slice(0)].join('');
    }
    console.log(hours);
    document.getElementById("hrs").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    // document.getElementById("sec").innerHTML = mtimes
    document.getElementById("ampm").innerHTML = AmOrPm

}, 1000);