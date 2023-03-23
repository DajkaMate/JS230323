function szamol()
{
    let m = (document.getElementById("cm").value)/100;
    let kg = document.getElementById("kg").value;
    let tti = kg / (m * m);
    tti = tti.toFixed(2);
    let message = "";

    if(tti < 16) message = "Súlyos soványság!";
    else if(tti < 16.99) message = "Mérsékelt soványság!";
    else if(tti < 17) message = "Enyhe soványság!";
    else if(tti < 25) message = "Normál testsúly!";
    else if(tti < 30) message = "I. elhízás!";
    else if(tti < 35) message = "II. elhízás!";
    else message = "III. elhízás!";

    document.getElementById("eredmeny").innerHTML = message + " (" + tti + ")";



}