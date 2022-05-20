
// "use strict";
// var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     var desc = Object.getOwnPropertyDescriptor(m, k);
//     if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
//       desc = { enumerable: true, get: function() { return m[k]; } };
//     }
//     Object.defineProperty(o, k2, desc);
// }) : (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     o[k2] = m[k];
// }));
// var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
//     Object.defineProperty(o, "default", { enumerable: true, value: v });
// }) : function(o, v) {
//     o["default"] = v;
// });
// var __importStar = (this && this.__importStar) || function (mod) {
//     if (mod && mod.__esModule) return mod;
//     var result = {};
//     if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
//     __setModuleDefault(result, mod);
//     return result;
// };
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// exports.__esModule = true;
// var react_1 = __importDefault(require("react"));
// function HelloWorld(props) {
//     var x = [1, 2];
//     var y = _.cloneDeep(x);
//     return react_1["default"].createElement(react_1["default"].Fragment, null,
//         react_1["default"].createElement("h1", null, "Arumugam"),
//         react_1["default"].createElement("h1", null, "SP"));
// }
// exports["default"] = HelloWorld;
//# sourceMappingURL=HelloWorld.js.map



"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
function MyForm() {
    var _a = (0, react_2.useState)({}), inputs = _a[0], setInputs = _a[1];
    var handleChange = function (event) {
        var name = event.target.name;
        var value = event.target.value;
        setInputs(function (values) {
            var _a;
            return (__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        console.log(inputs);
    };
    return (react_1.default.createElement("form", { style: {textAlign: "center", backgroundColor: "#f9fae9"}, onSubmit: handleSubmit },
        react_1.default.createElement("br", null),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("label", null,
            "Enter your Full name :",
            react_1.default.createElement("input", { type: "text", name: "username", value: inputs.username || "", onChange: handleChange })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("label", null,
            "Enter your age:",
            react_1.default.createElement("input", { type: "number", name: "age", value: inputs.age || "", onChange: handleChange })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("input", { type: "submit" }),
        react_1.default.createElement("br", null),
        react_1.default.createElement("hr", null)));
}
exports.default = MyForm;
//# sourceMappingURL=RemoteComponent.js.map
