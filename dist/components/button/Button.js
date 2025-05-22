var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
/** Primary UI component for user interaction */
const Button = (_a) => {
    var { size = "base", type = "button", label, disabled = false, buttonType = "primary" } = _a, props = __rest(_a, ["size", "type", "label", "disabled", "buttonType"]);
    const lightMode = buttonType === "primary"
        ? "bg-primary text-white hover:bg-primary-hover hover:text-white disabled:bg-disabled font-bold"
        : buttonType === "primaryDoctor"
            ? "bg-primary-doctor text-white hover:bg-primary-doctor-hover hover:text-white disabled:bg-disabled font-bold"
            : buttonType === "secondary"
                ? "bg-secondary text-primary hover:bg-secondary-hover hover:text-primary disabled:bg-disabled font-bold disabled:text-white"
                : buttonType === "outline"
                    ? "outline outline-primary text-primary hover:bg-primary hover:text-white disabled:bg-white font-bold disabled:text-disabled disabled:outline-disabled"
                    : buttonType === "text"
                        ? "font-medium text-primary hover:font-bold disabled:text-disabled disabled:font-medium"
                        : "bg-secondary text-primary hover:bg-secondary-hover hover:text-primary disabled:bg-disabled font-bold disabled:text-white";
    const sizeClasses = {
        xs: "text-xs px-4 py-2",
        sm: "text-sm px-4 py-3",
        base: "text-base px-6 py-4",
        lg: "text-lg px-8 py-5",
        xl: "text-xl px-10 py-6 ",
    };
    return (_jsx("button", Object.assign({ type: type, disabled: disabled, className: [
            "rounded-lg",
            sizeClasses[size],
            lightMode
        ].join(" ") }, props, { children: label })));
};
export default Button;
