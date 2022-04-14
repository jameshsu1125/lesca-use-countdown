"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCountdown = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var defaultProps = new Date(2060, 0, 1, 0, 0, 0, 0);
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

var tranTimeToArray = function tranTimeToArray(date) {
  var dat = date.getTime();
  var now = new Date().getTime();
  var distance = dat - now;
  var d = Math.floor(distance / day);
  var h = Math.floor(distance % day / hour);
  var m = Math.floor(distance % hour / minute);
  var s = Math.floor(distance % minute / second);
  if (s < 0) return [0, 0, 0, 0];
  return [d, h, m, s];
};

var useCountdown = function useCountdown() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps;

  var _useState = (0, _react.useState)(initialState),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(tranTimeToArray(date)),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var timeouter = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (index !== 0) setState(tranTimeToArray(date));
    timeouter.current = setTimeout(function () {
      return setIndex(function (c) {
        return c + 1;
      });
    }, 1000);
    return function () {
      clearTimeout(timeouter.current);
    };
  }, [index]);
  return [state, function (newDate) {
    setDate(newDate);
  }];
};

exports.useCountdown = useCountdown;
var _default = useCountdown;
exports["default"] = _default;