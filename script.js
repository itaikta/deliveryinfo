const urlParams = new URLSearchParams(window.location.search);
for (const entry of urlParams.entries()) console.log(entry);

for (const fieldName of ["name", "number", "email", "city", "postCode", "destType", "address", "info"]) {
    const valueName = urlParams.get(fieldName);
    if (valueName) document.getElementById(fieldName).innerHTML = valueName;
}