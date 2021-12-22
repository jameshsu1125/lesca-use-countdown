"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCountdown = exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultProps = new Date(2035, 0, 1, 0, 0, 0, 0);
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
  return [d, h, m, s];
};

var useCountdown = function useCountdown() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps;

  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(tranTimeToArray(date)),
      _useState6 = _slicedToArray(_useState5, 2),
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