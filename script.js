const urlParams = new URLSearchParams(window.location.search);

for (const fieldName of ["name", "number", "email", "city", "postCode", "destType", "address", "info"]) {
    const valueName = urlParams.get(fieldName);
    if (valueName) document.getElementById(fieldName).innerHTML = valueName;
}

if (urlParams.has("supplies")) {
    const supplyList = urlParams.get("supplies").split("_");
    
    let suppliesString = "";
    for (const supply of supplyList) {
        if (supply) suppliesString += `<li>${supply}</li>\n`;
    }
    document.getElementById("supplies").innerHTML = suppliesString;
}