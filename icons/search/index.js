this.primereact = this.primereact || {};
this.primereact.icons = this.primereact.icons || {};
this.primereact.icons.search = (function (exports, React, iconbase) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var ObjectUtils = /*#__PURE__*/function () {
    function ObjectUtils() {
      _classCallCheck(this, ObjectUtils);
    }
    _createClass(ObjectUtils, null, [{
      key: "equals",
      value: function equals(obj1, obj2, field) {
        if (field && obj1 && _typeof(obj1) === 'object' && obj2 && _typeof(obj2) === 'object') return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
      }

      /**
       * Compares two JSON objects for deep equality recursively comparing both objects.
       * @param {*} a the first JSON object
       * @param {*} b the second JSON object
       * @returns true if equals, false it not
       */
    }, {
      key: "deepEquals",
      value: function deepEquals(a, b) {
        if (a === b) return true;
        if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
          var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i,
            length,
            key;
          if (arrA && arrB) {
            length = a.length;
            if (length !== b.length) return false;
            for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
            return true;
          }
          if (arrA !== arrB) return false;
          var dateA = a instanceof Date,
            dateB = b instanceof Date;
          if (dateA !== dateB) return false;
          if (dateA && dateB) return a.getTime() === b.getTime();
          var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp;
          if (regexpA !== regexpB) return false;
          if (regexpA && regexpB) return a.toString() === b.toString();
          var keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) return false;
          for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
          for (i = length; i-- !== 0;) {
            key = keys[i];
            if (!this.deepEquals(a[key], b[key])) return false;
          }
          return true;
        }

        /*eslint no-self-compare: "off"*/
        return a !== a && b !== b;
      }
    }, {
      key: "resolveFieldData",
      value: function resolveFieldData(data, field) {
        if (!data || !field) {
          // short circuit if there is nothing to resolve
          return null;
        }
        try {
          var value = data[field];
          if (this.isNotEmpty(value)) return value;
        } catch (_unused) {
          // Performance optimization: https://github.com/primefaces/primereact/issues/4797
          // do nothing and continue to other methods to resolve field data
        }
        if (Object.keys(data).length) {
          if (this.isFunction(field)) {
            return field(data);
          } else if (this.isNotEmpty(data[field])) {
            return data[field];
          } else if (field.indexOf('.') === -1) {
            return data[field];
          } else {
            var fields = field.split('.');
            var _value = data;
            for (var i = 0, len = fields.length; i < len; ++i) {
              if (_value == null) {
                return null;
              }
              _value = _value[fields[i]];
            }
            return _value;
          }
        }
        return null;
      }
    }, {
      key: "findDiffKeys",
      value: function findDiffKeys(obj1, obj2) {
        if (!obj1 || !obj2) {
          return {};
        }
        return Object.keys(obj1).filter(function (key) {
          return !obj2.hasOwnProperty(key);
        }).reduce(function (result, current) {
          result[current] = obj1[current];
          return result;
        }, {});
      }

      /**
       * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
       *
       * @param {any} obj the JSON object to reduce
       * @param {string[]} startsWiths the string(s) to check if the property starts with this key
       * @returns the JSON object containing only the key/values that match the startsWith string
       */
    }, {
      key: "reduceKeys",
      value: function reduceKeys(obj, startsWiths) {
        var result = {};
        if (!obj || !startsWiths || startsWiths.length === 0) {
          return result;
        }
        Object.keys(obj).filter(function (key) {
          return startsWiths.some(function (value) {
            return key.startsWith(value);
          });
        }).forEach(function (key) {
          result[key] = obj[key];
          delete obj[key];
        });
        return result;
      }
    }, {
      key: "reorderArray",
      value: function reorderArray(value, from, to) {
        if (value && from !== to) {
          if (to >= value.length) {
            to %= value.length;
            from %= value.length;
          }
          value.splice(to, 0, value.splice(from, 1)[0]);
        }
      }
    }, {
      key: "findIndexInList",
      value: function findIndexInList(value, list, dataKey) {
        var _this = this;
        if (list) {
          return dataKey ? list.findIndex(function (item) {
            return _this.equals(item, value, dataKey);
          }) : list.findIndex(function (item) {
            return item === value;
          });
        }
        return -1;
      }
    }, {
      key: "getJSXElement",
      value: function getJSXElement(obj) {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }
        return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
      }
    }, {
      key: "getItemValue",
      value: function getItemValue(obj) {
        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }
        return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
      }
    }, {
      key: "getProp",
      value: function getProp(props) {
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var value = props ? props[prop] : undefined;
        return value === undefined ? defaultProps[prop] : value;
      }
    }, {
      key: "getPropCaseInsensitive",
      value: function getPropCaseInsensitive(props, prop) {
        var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var fkey = this.toFlatCase(prop);
        for (var key in props) {
          if (props.hasOwnProperty(key) && this.toFlatCase(key) === fkey) {
            return props[key];
          }
        }
        for (var _key3 in defaultProps) {
          if (defaultProps.hasOwnProperty(_key3) && this.toFlatCase(_key3) === fkey) {
            return defaultProps[_key3];
          }
        }
        return undefined; // Property not found
      }
    }, {
      key: "getMergedProps",
      value: function getMergedProps(props, defaultProps) {
        return Object.assign({}, defaultProps, props);
      }
    }, {
      key: "getDiffProps",
      value: function getDiffProps(props, defaultProps) {
        return this.findDiffKeys(props, defaultProps);
      }
    }, {
      key: "getPropValue",
      value: function getPropValue(obj) {
        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
          params[_key4 - 1] = arguments[_key4];
        }
        return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
      }
    }, {
      key: "getComponentProp",
      value: function getComponentProp(component) {
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.isNotEmpty(component) ? this.getProp(component.props, prop, defaultProps) : undefined;
      }
    }, {
      key: "getComponentProps",
      value: function getComponentProps(component, defaultProps) {
        return this.isNotEmpty(component) ? this.getMergedProps(component.props, defaultProps) : undefined;
      }
    }, {
      key: "getComponentDiffProps",
      value: function getComponentDiffProps(component, defaultProps) {
        return this.isNotEmpty(component) ? this.getDiffProps(component.props, defaultProps) : undefined;
      }
    }, {
      key: "isValidChild",
      value: function isValidChild(child, type, validTypes) {
        /* eslint-disable */
        if (child) {
          var childType = this.getComponentProp(child, '__TYPE') || (child.type ? child.type.displayName : undefined);
          var isValid = childType === type;
          try {
            var messageTypes; if ("production" !== 'production' && !isValid) ;
          } catch (error) {
            // NOOP
          }
          return isValid;
        }
        return false;
        /* eslint-enable */
      }
    }, {
      key: "getRefElement",
      value: function getRefElement(ref) {
        if (ref) {
          return _typeof(ref) === 'object' && ref.hasOwnProperty('current') ? ref.current : ref;
        }
        return null;
      }
    }, {
      key: "combinedRefs",
      value: function combinedRefs(innerRef, forwardRef) {
        if (innerRef && forwardRef) {
          if (typeof forwardRef === 'function') {
            forwardRef(innerRef.current);
          } else {
            forwardRef.current = innerRef.current;
          }
        }
      }
    }, {
      key: "removeAccents",
      value: function removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
          str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
        }
        return str;
      }
    }, {
      key: "toFlatCase",
      value: function toFlatCase(str) {
        // convert snake, kebab, camel and pascal cases to flat case
        return this.isNotEmpty(str) && this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
      }
    }, {
      key: "toCapitalCase",
      value: function toCapitalCase(str) {
        return this.isNotEmpty(str) && this.isString(str) ? str[0].toUpperCase() + str.slice(1) : str;
      }
    }, {
      key: "trim",
      value: function trim(value) {
        // trim only if the value is actually a string
        return this.isNotEmpty(value) && this.isString(value) ? value.trim() : value;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(value) {
        return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof(value) === 'object' && Object.keys(value).length === 0;
      }
    }, {
      key: "isNotEmpty",
      value: function isNotEmpty(value) {
        return !this.isEmpty(value);
      }
    }, {
      key: "isFunction",
      value: function isFunction(value) {
        return !!(value && value.constructor && value.call && value.apply);
      }
    }, {
      key: "isObject",
      value: function isObject(value) {
        return value !== null && value instanceof Object && value.constructor === Object;
      }
    }, {
      key: "isDate",
      value: function isDate(value) {
        return value !== null && value instanceof Date && value.constructor === Date;
      }
    }, {
      key: "isArray",
      value: function isArray(value) {
        return value !== null && Array.isArray(value);
      }
    }, {
      key: "isString",
      value: function isString(value) {
        return value !== null && typeof value === 'string';
      }
    }, {
      key: "isPrintableCharacter",
      value: function isPrintableCharacter() {
        var _char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
      }
    }, {
      key: "isLetter",
      value: function isLetter(_char2) {
        return _char2 && (_char2.toUpperCase() != _char2.toLowerCase() || _char2.codePointAt(0) > 127);
      }

      /**
       * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
       * https://caniuse.com/mdn-javascript_builtins_array_findlast
       */
    }, {
      key: "findLast",
      value: function findLast(arr, callback) {
        var item;
        if (this.isNotEmpty(arr)) {
          try {
            item = arr.findLast(callback);
          } catch (_unused2) {
            item = _toConsumableArray(arr).reverse().find(callback);
          }
        }
        return item;
      }

      /**
       * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
       * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
       */
    }, {
      key: "findLastIndex",
      value: function findLastIndex(arr, callback) {
        var index = -1;
        if (this.isNotEmpty(arr)) {
          try {
            index = arr.findLastIndex(callback);
          } catch (_unused3) {
            index = arr.lastIndexOf(_toConsumableArray(arr).reverse().find(callback));
          }
        }
        return index;
      }
    }, {
      key: "sort",
      value: function sort(value1, value2) {
        var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var comparator = arguments.length > 3 ? arguments[3] : undefined;
        var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        var result = this.compare(value1, value2, comparator, order);
        var finalSortOrder = order;

        // nullSortOrder == 1 means Excel like sort nulls at bottom
        if (this.isEmpty(value1) || this.isEmpty(value2)) {
          finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
        }
        return finalSortOrder * result;
      }
    }, {
      key: "compare",
      value: function compare(value1, value2, comparator) {
        var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var result = -1;
        var emptyValue1 = this.isEmpty(value1);
        var emptyValue2 = this.isEmpty(value2);
        if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return result;
      }
    }, {
      key: "localeComparator",
      value: function localeComparator(locale) {
        //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
        return new Intl.Collator(locale, {
          numeric: true
        }).compare;
      }
    }, {
      key: "findChildrenByKey",
      value: function findChildrenByKey(data, key) {
        var _iterator = _createForOfIteratorHelper(data),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (item.key === key) {
              return item.children || [];
            } else if (item.children) {
              var result = this.findChildrenByKey(item.children, key);
              if (result.length > 0) {
                return result;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return [];
      }

      /**
       * This function takes mutates and object with a new value given
       * a specific field. This will handle deeply nested fields that
       * need to be modified or created.
       *
       * e.g:
       * data = {
       *  nested: {
       *      foo: "bar"
       *  }
       * }
       *
       * field = "nested.foo"
       * value = "baz"
       *
       * The function will mutate data to be
       * e.g:
       * data = {
       *  nested: {
       *      foo: "baz"
       *  }
       * }
       *
       * @param {object} data the object to be modified
       * @param {string} field the field in the object to replace
       * @param {any} value the value to have replaced in the field
       */
    }, {
      key: "mutateFieldData",
      value: function mutateFieldData(data, field, value) {
        if (_typeof(data) !== 'object' || typeof field !== 'string') {
          // short circuit if there is nothing to resolve
          return;
        }
        var fields = field.split('.');
        var obj = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          // Check if we are on the last field
          if (i + 1 - len === 0) {
            obj[fields[i]] = value;
            break;
          }
          if (!obj[fields[i]]) {
            obj[fields[i]] = {};
          }
          obj = obj[fields[i]];
        }
      }
    }]);
    return ObjectUtils;
  }();

  var lastId = 0;
  function UniqueComponentId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
    lastId++;
    return "".concat(prefix).concat(lastId);
  }

  var SearchIcon = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
    var pti = iconbase.IconBase.getPTI(inProps);
    var _React$useState = React__namespace.useState(inProps.id),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pathId = _React$useState2[0],
      setPathId = _React$useState2[1];
    React__namespace.useEffect(function () {
      if (ObjectUtils.isEmpty(pathId)) {
        setPathId(UniqueComponentId('pr_icon_clip_'));
      }
    }, [pathId]);
    return /*#__PURE__*/React__namespace.createElement("svg", _extends({
      ref: ref,
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, pti), /*#__PURE__*/React__namespace.createElement("g", {
      clipPath: "url(#".concat(pathId, ")")
    }, /*#__PURE__*/React__namespace.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
      fill: "currentColor"
    })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
      id: pathId
    }, /*#__PURE__*/React__namespace.createElement("rect", {
      width: "14",
      height: "14",
      fill: "white"
    }))));
  }));
  SearchIcon.displayName = 'SearchIcon';

  exports.SearchIcon = SearchIcon;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.iconbase);