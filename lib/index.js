"use strict";

var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// 새로운 루트를 생성
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(_App.default, null));