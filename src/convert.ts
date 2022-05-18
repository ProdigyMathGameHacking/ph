// Functions




// Convert to hack
export function ToHack (type : String, category : String, name : String, description : String, _return : String, setClick : String) {

    let return_ = _return;


    if (_return == "") {
        return_ = ";";
    } else {
        return_ = " " + _return;
    }


    var toSend : String = `

new ${type} (${category}, "${name}", "${description}").setClick(async () => {

    ${setClick}
    return${return_}});
    `;

    return toSend;
}
// Convert to hack









// Convert to toggler
export function ToToggler (type : String, category : String, name : String, description : String, _enabledReturn : String, _disabledReturn : String, setEnabled : String, setDisabled : String) {

    let enabledReturn = _enabledReturn;
    let disabledReturn = _disabledReturn;


    if (_enabledReturn == "") {
        enabledReturn = ";";
    } else {
        enabledReturn = " " + enabledReturn;
    }


    if (_disabledReturn == "" || _disabledReturn == "\n") {
        disabledReturn = ";";
    } else {
        disabledReturn = " " + disabledReturn;
    }


    var toSend : String = `

new ${type} (${category}, "${name}", "${description}").setEnabled(async () => {

    ${setEnabled}
    return${enabledReturn}}).setDisabled(() => {

    ${setDisabled}
    return${disabledReturn}});
    `;

    return toSend;
}
// Convert to toggler