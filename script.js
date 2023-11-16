const urlParams = new URLSearchParams(window.location.search);

for (const fieldName of ["name", "number", "email", "city", "postCode", "destType", "address", "info"]) {
    const valueName = urlParams.get(fieldName);
    if (valueName) {
        document.getElementById(fieldName).innerHTML = fieldName != "info" 
            ? `<b>${valueName}</b>` 
            : valueName;
    }
}

if (urlParams.has("supplies")) {
    const supplyStr = urlParams.get("supplies");
    let supplyList = [];

    // Does't really matter if it contains a mix of these, this order is the priority
    if (supplyStr.includes("_")){
        supplyList = supplyStr.split("_");
    }
    else if (supplyStr.includes("\n")) {
        supplyList = supplyStr.includes("\n");
    }
    else {
        supplyList = supplyStr.split(",");
    }
    
    console.log(supplyList);

    let suppliesString = "";
    for (const supply of supplyList) {
        if (supply) suppliesString += `<li>${supply}</li>\n`;
    }

    document.getElementById("supplies").innerHTML = suppliesString;
}