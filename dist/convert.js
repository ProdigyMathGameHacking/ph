"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToToggler = exports.ToHack = void 0;
function ToHack(category, name, description, _return, setClick, yaml) {
    let return_ = _return;
    let setClick_ = setClick;
    if (_return == "") {
        return_ = "return;";
    }
    else {
        return_ = `return Toast.fire("Success!", "${_return}", "success");`;
    }
    if (yaml == false) {
        return_ = return_ + "\n";
        setClick_ = setClick_ + "\n";
    }
    var toSend = `

new Hack (category.${category}, "${name}", "${description}").setClick(async () => {

    ${setClick_}
    ${return_}});
    `;
    return toSend;
}
exports.ToHack = ToHack;
function ToToggler(category, name, description, _enabledReturn, _disabledReturn, setEnabled, setDisabled, yaml) {
    let enabledReturn = _enabledReturn;
    let disabledReturn = _disabledReturn;
    if (_enabledReturn == "") {
        enabledReturn = "return;";
    }
    else {
        enabledReturn = `return Toast.fire("Enabled!", "${_enabledReturn}", "success");`;
    }
    if (_disabledReturn == "" || _disabledReturn == "\n") {
        disabledReturn = ";";
    }
    else {
        disabledReturn = `return Toast.fire("Disabled!", "${_disabledReturn}", "success");`;
    }
    if (yaml == false) {
        setEnabled = setEnabled + "\n";
        setDisabled = setDisabled + "\n";
        disabledReturn = disabledReturn + "\n";
        enabledReturn = enabledReturn + "\n";
    }
    var toSend = `

new Toggler (category.${category}, "${name}", "${description}").setEnabled(async () => {

    ${setEnabled}
    ${enabledReturn}}).setDisabled(() => {

    ${setDisabled}
    ${disabledReturn}});
    `;
    return toSend;
}
exports.ToToggler = ToToggler;
//# sourceMappingURL=convert.js.map