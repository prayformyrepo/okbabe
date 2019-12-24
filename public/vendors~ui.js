(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~ui"],{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/quill/dist/quill.bubble.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/quill/dist/quill.bubble.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-bubble.ql-toolbar:after,\n.ql-bubble .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble.ql-toolbar button,\n.ql-bubble .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-bubble.ql-toolbar button svg,\n.ql-bubble .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-bubble.ql-toolbar button:active:hover,\n.ql-bubble .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-bubble.ql-toolbar input.ql-image[type=file],\n.ql-bubble .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-bubble.ql-toolbar button:hover,\n.ql-bubble .ql-toolbar button:hover,\n.ql-bubble.ql-toolbar button:focus,\n.ql-bubble .ql-toolbar button:focus,\n.ql-bubble.ql-toolbar button.ql-active,\n.ql-bubble .ql-toolbar button.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-label:hover,\n.ql-bubble .ql-toolbar .ql-picker-label:hover,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active,\n.ql-bubble.ql-toolbar .ql-picker-item:hover,\n.ql-bubble .ql-toolbar .ql-picker-item:hover,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected {\n  color: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #fff;\n}\n.ql-bubble.ql-toolbar button:hover .ql-stroke,\n.ql-bubble .ql-toolbar button:hover .ql-stroke,\n.ql-bubble.ql-toolbar button:focus .ql-stroke,\n.ql-bubble .ql-toolbar button:focus .ql-stroke,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-bubble.ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble .ql-toolbar button:focus .ql-stroke-miter,\n.ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #fff;\n}\n@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active),\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #ccc;\n  }\n}\n.ql-bubble {\n  box-sizing: border-box;\n}\n.ql-bubble * {\n  box-sizing: border-box;\n}\n.ql-bubble .ql-hidden {\n  display: none;\n}\n.ql-bubble .ql-out-bottom,\n.ql-bubble .ql-out-top {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}\n.ql-bubble .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-bubble .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.ql-bubble .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-bubble .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble .ql-stroke {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-bubble .ql-stroke-miter {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-bubble .ql-fill,\n.ql-bubble .ql-stroke.ql-fill {\n  fill: #ccc;\n}\n.ql-bubble .ql-empty {\n  fill: none;\n}\n.ql-bubble .ql-even {\n  fill-rule: evenodd;\n}\n.ql-bubble .ql-thin,\n.ql-bubble .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-bubble .ql-transparent {\n  opacity: 0.4;\n}\n.ql-bubble .ql-direction svg:last-child {\n  display: none;\n}\n.ql-bubble .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-bubble .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-bubble .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-bubble .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-bubble .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-editor a {\n  text-decoration: underline;\n}\n.ql-bubble .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-bubble .ql-editor code,\n.ql-bubble .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-bubble .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-bubble .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-bubble .ql-editor img {\n  max-width: 100%;\n}\n.ql-bubble .ql-picker {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-bubble .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-bubble .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-bubble .ql-picker-options {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-bubble .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label {\n  color: #777;\n  z-index: 2;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #777;\n}\n.ql-bubble .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-bubble .ql-color-picker,\n.ql-bubble .ql-icon-picker {\n  width: 28px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label,\n.ql-bubble .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-label svg,\n.ql-bubble .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-bubble .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-bubble .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-bubble .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-bubble .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-bubble .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-bubble .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-bubble .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-bubble .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-bubble .ql-toolbar .ql-formats {\n  margin: 8px 12px 8px 0px;\n}\n.ql-bubble .ql-toolbar .ql-formats:first-child {\n  margin-left: 12px;\n}\n.ql-bubble .ql-color-picker svg {\n  margin: 1px;\n}\n.ql-bubble .ql-color-picker .ql-picker-item.ql-selected,\n.ql-bubble .ql-color-picker .ql-picker-item:hover {\n  border-color: #fff;\n}\n.ql-bubble .ql-tooltip {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}\n.ql-bubble .ql-tooltip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}\n.ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}\n.ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {\n  display: block;\n}\n.ql-bubble .ql-tooltip.ql-editing .ql-formats {\n  visibility: hidden;\n}\n.ql-bubble .ql-tooltip-editor {\n  display: none;\n}\n.ql-bubble .ql-tooltip-editor input[type=text] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}\n.ql-bubble .ql-tooltip-editor a {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}\n.ql-bubble .ql-tooltip-editor a:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a {\n  position: relative;\n  white-space: nowrap;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a::before,\n.ql-container.ql-bubble:not(.ql-disabled) a::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%);\n  -webkit-transition: visibility 0s ease 200ms;\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::before,\n.ql-container.ql-bubble:not(.ql-disabled) a:hover::after {\n  visibility: visible;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/quill/dist/quill.core.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/quill/dist/quill.core.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/quill/dist/quill.snow.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/quill/dist/quill.snow.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  -o-tab-size: 4;\n     tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=file],\n.ql-snow .ql-toolbar input.ql-image[type=file] {\n  display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n  color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar button:hover:not(.ql-active),\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n    stroke: #444;\n  }\n}\n.ql-snow {\n  box-sizing: border-box;\n}\n.ql-snow * {\n  box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n  display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n  visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n  position: absolute;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow .ql-stroke {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n  fill: #444;\n}\n.ql-snow .ql-empty {\n  fill: none;\n}\n.ql-snow .ql-even {\n  fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n  stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n  opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n  display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n  display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n  display: none;\n}\n.ql-snow .ql-editor h1 {\n  font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n  font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n  font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n  font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n  font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n  font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n  text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow .ql-editor img {\n  max-width: 100%;\n}\n.ql-snow .ql-picker {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n  fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n  stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n  width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n  right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n  padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n  font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n  font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n  font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n  font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n  font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n  font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n  width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n  content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n  width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n  content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\n  font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\n  font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\n  font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n  background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n  border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=text] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n  line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n  display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\n  display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=link]::before {\n  content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=formula]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=video]::before {\n  content: \"Enter video:\";\n}\n.ql-snow a {\n  color: #06c;\n}\n.ql-container.ql-snow {\n  border: 1px solid #ccc;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-map-container {\n  position: relative;\n}\n.vue-map-container .vue-map {\n  left: 0; right: 0; top: 0; bottom: 0;\n  position: absolute;\n}\n.vue-map-hidden {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-street-view-pano-container {\n  position: relative;\n}\n.vue-street-view-pano-container .vue-street-view-pano {\n  left: 0; right: 0; top: 0; bottom: 0;\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Default\n */\n/**\n * Bulma\n */\n/**\n * Bootstrap\n */\n.vue-switcher {\n  position: relative;\n  display: inline-block;\n}\n.vue-switcher__label {\n    display: block;\n    font-size: 10px;\n    margin-bottom: 5px;\n}\n.vue-switcher input {\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer;\n}\n.vue-switcher div {\n    height: 15px;\n    width: 36px;\n    position: relative;\n    border-radius: 30px;\n    display: -ms-flex;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    cursor: pointer;\n    -webkit-transition: linear .2s, background-color linear .2s;\n    transition: linear .2s, background-color linear .2s;\n}\n.vue-switcher div:after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      border-radius: 100px;\n      display: block;\n      -webkit-transition: linear .15s, background-color linear .15s;\n      transition: linear .15s, background-color linear .15s;\n      position: absolute;\n      left: 100%;\n      margin-left: -18px;\n      cursor: pointer;\n      top: -3px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.vue-switcher--unchecked div {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n}\n.vue-switcher--unchecked div:after {\n      left: 15px;\n}\n.vue-switcher--disabled div {\n    opacity: .3;\n}\n.vue-switcher--disabled input {\n    cursor: not-allowed;\n}\n.vue-switcher--bold div {\n    top: -8px;\n    height: 26px;\n    width: 51px;\n}\n.vue-switcher--bold div:after {\n      margin-left: -24px;\n      top: 3px;\n}\n.vue-switcher--bold--unchecked div:after {\n    left: 28px;\n}\n.vue-switcher--bold .vue-switcher__label span {\n    padding-bottom: 7px;\n    display: inline-block;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div {\n    background-color: #b7b7b7;\n}\n.vue-switcher-theme--default.vue-switcher-color--default div:after {\n      background-color: #9d9d9d;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #aaa;\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #c4c4c4;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div {\n    background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div:after {\n      background-color: #539bb9;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #c0dae5;\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #77b0c8;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div {\n    background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--red div:after {\n      background-color: #b95353;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #e5c0c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #c87777;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div {\n    background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div:after {\n      background-color: #bab353;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #e6e3c0;\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #c9c377;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div {\n    background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div:after {\n      background-color: #b97953;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div {\n    background-color: #e5cec0;\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after {\n      background-color: #c89577;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div {\n    background-color: #77c88d;\n}\n.vue-switcher-theme--default.vue-switcher-color--green div:after {\n      background-color: #53b96e;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #c0e5ca;\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #77c88d;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div {\n    background-color: gainsboro;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: #e8e8e8;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f5f5f5;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div {\n    background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div:after {\n      background-color: #00d1b2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #6bffe9;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #05ffda;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div {\n    background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div:after {\n      background-color: #3273dc;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div {\n    background-color: #b5ccf2;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after {\n      background-color: #5e91e3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div {\n    background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div:after {\n      background-color: #ff3860;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div {\n    background-color: #ffd1da;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after {\n      background-color: #ff6b89;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div {\n    background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after {\n      background-color: #ffdd57;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div {\n    background-color: #fffcf0;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after {\n      background-color: #ffe78a;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div {\n    background-color: #3dde75;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div:after {\n      background-color: #22c65b;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div {\n    background-color: #94edb3;\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after {\n      background-color: #3dde75;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div {\n    background-color: #e6e6e6;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div {\n    background-color: whitesmoke;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after {\n      background-color: #f0f0f0;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div {\n    background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after {\n      background-color: #337ab7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div {\n    background-color: #9fc4e4;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after {\n      background-color: #4f93ce;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div {\n    background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after {\n      background-color: #5cb85c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div {\n    background-color: #c7e6c7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after {\n      background-color: #80c780;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div {\n    background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after {\n      background-color: #5bc0de;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div {\n    background-color: #daf1f8;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after {\n      background-color: #85d0e7;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div {\n    background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after {\n      background-color: #f0ad4e;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div {\n    background-color: #fceedb;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after {\n      background-color: #f4c37d;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div {\n    background-color: #d9534f;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after {\n      background-color: #c9302c;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div {\n    background-color: #eba5a3;\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after {\n      background-color: #d9534f;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/quill/dist/quill.bubble.css":
/*!**************************************************!*\
  !*** ./node_modules/quill/dist/quill.bubble.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./quill.bubble.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/quill/dist/quill.bubble.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/quill/dist/quill.core.css":
/*!************************************************!*\
  !*** ./node_modules/quill/dist/quill.core.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./quill.core.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/quill/dist/quill.core.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/quill/dist/quill.js":
/*!******************************************!*\
  !*** ./node_modules/quill/dist/quill.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var format_1 = __webpack_require__(18);
var leaf_1 = __webpack_require__(19);
var scroll_1 = __webpack_require__(45);
var inline_1 = __webpack_require__(46);
var block_1 = __webpack_require__(47);
var embed_1 = __webpack_require__(48);
var text_1 = __webpack_require__(49);
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var store_1 = __webpack_require__(31);
var Registry = __webpack_require__(1);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(51);
var equal = __webpack_require__(11);
var extend = __webpack_require__(3);
var op = __webpack_require__(20);


var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};


Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({ 'delete': length });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = { retain: length };
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);
  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
      return this;
    }
    // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first
    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];
      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }
    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      }
    }
  }
  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }
  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];
  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }
  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [], failed = [];
  this.forEach(function(op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }
    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;
  while (index < end && iter.hasNext()) {
    var nextOp;
    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }
    index += op.length(nextOp);
  }
  return new Delta(ops);
};


Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var ops = [];
  var firstOther = otherIter.peek();
  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
    var firstLeft = firstOther.retain;
    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
      firstLeft -= thisIter.peekLength();
      ops.push(thisIter.next());
    }
    if (firstOther.retain - firstLeft > 0) {
      otherIter.next(firstOther.retain - firstLeft);
    }
  }
  var delta = new Delta(ops);
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (typeof otherOp.retain === 'number') {
        var newOp = {};
        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        }
        // Preserve null when composing with a retain, otherwise remove it for inserts
        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp);

        // Optimization if rest of other is just retain
        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
          var rest = new Delta(thisIter.rest());
          return delta.concat(rest).chop();
        }

      // Other op should be delete, we could be an insert or retain
      // Insert + delete cancels out
      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }
  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());
  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }
  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }
  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }
      var prep = (delta === other) ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;
    while (length > 0) {
      var opLength = 0;
      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;
        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;
        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);
          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }
          break;
      }
      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;
  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ?
      thisOp.insert.indexOf(newline, start) - start : -1;
    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }
      i += 1;
      line = new Delta();
    }
  }
  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;
  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }
  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;
  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();
    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }
    offset += length;
  }
  return index;
};


module.exports = Delta;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWLINE_LENGTH = 1;

var BlockEmbed = function (_Parchment$Embed) {
  _inherits(BlockEmbed, _Parchment$Embed);

  function BlockEmbed() {
    _classCallCheck(this, BlockEmbed);

    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
  }

  _createClass(BlockEmbed, [{
    key: 'attach',
    value: function attach() {
      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
    }
  }, {
    key: 'delta',
    value: function delta() {
      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
      if (attribute != null) {
        this.attributes.attribute(attribute, value);
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      this.format(name, value);
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (typeof value === 'string' && value.endsWith('\n')) {
        var block = _parchment2.default.create(Block.blotName);
        this.parent.insertBefore(block, index === 0 ? this : this.next);
        block.insertAt(0, value.slice(0, -1));
      } else {
        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
      }
    }
  }]);

  return BlockEmbed;
}(_parchment2.default.Embed);

BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements


var Block = function (_Parchment$Block) {
  _inherits(Block, _Parchment$Block);

  function Block(domNode) {
    _classCallCheck(this, Block);

    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

    _this2.cache = {};
    return _this2;
  }

  _createClass(Block, [{
    key: 'delta',
    value: function delta() {
      if (this.cache.delta == null) {
        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
      }
      return this.cache.delta;
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
      this.cache = {};
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length <= 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
        if (index + length === this.length()) {
          this.format(name, value);
        }
      } else {
        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
      }
      this.cache = {};
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
      if (value.length === 0) return;
      var lines = value.split('\n');
      var text = lines.shift();
      if (text.length > 0) {
        if (index < this.length() - 1 || this.children.tail == null) {
          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
        } else {
          this.children.tail.insertAt(this.children.tail.length(), text);
        }
        this.cache = {};
      }
      var block = this;
      lines.reduce(function (index, line) {
        block = block.split(index, true);
        block.insertAt(0, line);
        return line.length;
      }, index + text.length);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      var head = this.children.head;
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
      if (head instanceof _break2.default) {
        head.remove();
      }
      this.cache = {};
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.cache.length == null) {
        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
      return this.cache.length;
    }
  }, {
    key: 'moveChildren',
    value: function moveChildren(target, ref) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
      this.cache = {};
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
      this.cache = {};
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
      this.cache = {};
    }
  }, {
    key: 'split',
    value: function split(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
        var clone = this.clone();
        if (index === 0) {
          this.parent.insertBefore(clone, this);
          return this;
        } else {
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
      } else {
        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        this.cache = {};
        return next;
      }
    }
  }]);

  return Block;
}(_parchment2.default.Block);

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

function bubbleFormats(blot) {
  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = (0, _extend2.default)(formats, blot.formats());
  }
  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats);
}

exports.bubbleFormats = bubbleFormats;
exports.BlockEmbed = BlockEmbed;
exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overload = exports.expandConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _editor = __webpack_require__(14);

var _editor2 = _interopRequireDefault(_editor);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _selection = __webpack_require__(15);

var _selection2 = _interopRequireDefault(_selection);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill');

var Quill = function () {
  _createClass(Quill, null, [{
    key: 'debug',
    value: function debug(limit) {
      if (limit === true) {
        limit = 'log';
      }
      _logger2.default.level(limit);
    }
  }, {
    key: 'find',
    value: function find(node) {
      return node.__quill || _parchment2.default.find(node);
    }
  }, {
    key: 'import',
    value: function _import(name) {
      if (this.imports[name] == null) {
        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
      }
      return this.imports[name];
    }
  }, {
    key: 'register',
    value: function register(path, target) {
      var _this = this;

      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof path !== 'string') {
        var name = path.attrName || path.blotName;
        if (typeof name === 'string') {
          // register(Blot | Attributor, overwrite)
          this.register('formats/' + name, path, target);
        } else {
          Object.keys(path).forEach(function (key) {
            _this.register(key, path[key], target);
          });
        }
      } else {
        if (this.imports[path] != null && !overwrite) {
          debug.warn('Overwriting ' + path + ' with', target);
        }
        this.imports[path] = target;
        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
          _parchment2.default.register(target);
        } else if (path.startsWith('modules') && typeof target.register === 'function') {
          target.register();
        }
      }
    }
  }]);

  function Quill(container) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Quill);

    this.options = expandConfig(container, options);
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    var html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter4.default();
    this.scroll = _parchment2.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor2.default(this.scroll);
    this.selection = new _selection2.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
      if (type === _emitter4.default.events.TEXT_CHANGE) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
      var range = _this2.selection.lastRange;
      var index = range && range.length === 0 ? range.index : undefined;
      modify.call(_this2, function () {
        return _this2.editor.update(null, mutations, index);
      }, source);
    });
    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
  }

  _createClass(Quill, [{
    key: 'addContainer',
    value: function addContainer(container) {
      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof container === 'string') {
        var className = container;
        container = document.createElement('div');
        container.classList.add(className);
      }
      this.container.insertBefore(container, refNode);
      return container;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selection.setRange(null);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length, source) {
      var _this3 = this;

      var _overload = overload(index, length, source);

      var _overload2 = _slicedToArray(_overload, 4);

      index = _overload2[0];
      length = _overload2[1];
      source = _overload2[3];

      return modify.call(this, function () {
        return _this3.editor.deleteText(index, length);
      }, source, index, -1 * length);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enable(false);
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scroll.enable(enabled);
      this.container.classList.toggle('ql-disabled', !enabled);
    }
  }, {
    key: 'focus',
    value: function focus() {
      var scrollTop = this.scrollingContainer.scrollTop;
      this.selection.focus();
      this.scrollingContainer.scrollTop = scrollTop;
      this.scrollIntoView();
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var _this4 = this;

      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        var range = _this4.getSelection(true);
        var change = new _quillDelta2.default();
        if (range == null) {
          return change;
        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
        } else if (range.length === 0) {
          _this4.selection.format(name, value);
          return change;
        } else {
          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
        }
        _this4.setSelection(range, _emitter4.default.sources.SILENT);
        return change;
      }, source);
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length, name, value, source) {
      var _this5 = this;

      var formats = void 0;

      var _overload3 = overload(index, length, name, value, source);

      var _overload4 = _slicedToArray(_overload3, 4);

      index = _overload4[0];
      length = _overload4[1];
      formats = _overload4[2];
      source = _overload4[3];

      return modify.call(this, function () {
        return _this5.editor.formatLine(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length, name, value, source) {
      var _this6 = this;

      var formats = void 0;

      var _overload5 = overload(index, length, name, value, source);

      var _overload6 = _slicedToArray(_overload5, 4);

      index = _overload6[0];
      length = _overload6[1];
      formats = _overload6[2];
      source = _overload6[3];

      return modify.call(this, function () {
        return _this6.editor.formatText(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var bounds = void 0;
      if (typeof index === 'number') {
        bounds = this.selection.getBounds(index, length);
      } else {
        bounds = this.selection.getBounds(index.index, index.length);
      }
      var containerBounds = this.container.getBoundingClientRect();
      return {
        bottom: bounds.bottom - containerBounds.top,
        height: bounds.height,
        left: bounds.left - containerBounds.left,
        right: bounds.right - containerBounds.left,
        top: bounds.top - containerBounds.top,
        width: bounds.width
      };
    }
  }, {
    key: 'getContents',
    value: function getContents() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload7 = overload(index, length);

      var _overload8 = _slicedToArray(_overload7, 2);

      index = _overload8[0];
      length = _overload8[1];

      return this.editor.getContents(index, length);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof index === 'number') {
        return this.editor.getFormat(index, length);
      } else {
        return this.editor.getFormat(index.index, index.length);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(blot) {
      return blot.offset(this.scroll);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.scroll.length();
    }
  }, {
    key: 'getLeaf',
    value: function getLeaf(index) {
      return this.scroll.leaf(index);
    }
  }, {
    key: 'getLine',
    value: function getLine(index) {
      return this.scroll.line(index);
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      if (typeof index !== 'number') {
        return this.scroll.lines(index.index, index.length);
      } else {
        return this.scroll.lines(index, length);
      }
    }
  }, {
    key: 'getModule',
    value: function getModule(name) {
      return this.theme.modules[name];
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (focus) this.focus();
      this.update(); // Make sure we access getRange with editor in consistent state
      return this.selection.getRange()[0];
    }
  }, {
    key: 'getText',
    value: function getText() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload9 = overload(index, length);

      var _overload10 = _slicedToArray(_overload9, 2);

      index = _overload10[0];
      length = _overload10[1];

      return this.editor.getText(index, length);
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return this.selection.hasFocus();
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      var _this7 = this;

      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

      return modify.call(this, function () {
        return _this7.editor.insertEmbed(index, embed, value);
      }, source, index);
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text, name, value, source) {
      var _this8 = this;

      var formats = void 0;

      var _overload11 = overload(index, 0, name, value, source);

      var _overload12 = _slicedToArray(_overload11, 4);

      index = _overload12[0];
      formats = _overload12[2];
      source = _overload12[3];

      return modify.call(this, function () {
        return _this8.editor.insertText(index, text, formats);
      }, source, index, text.length);
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this.container.classList.contains('ql-disabled');
    }
  }, {
    key: 'off',
    value: function off() {
      return this.emitter.off.apply(this.emitter, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.emitter.on.apply(this.emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      return this.emitter.once.apply(this.emitter, arguments);
    }
  }, {
    key: 'pasteHTML',
    value: function pasteHTML(index, html, source) {
      this.clipboard.dangerouslyPasteHTML(index, html, source);
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length, source) {
      var _this9 = this;

      var _overload13 = overload(index, length, source);

      var _overload14 = _slicedToArray(_overload13, 4);

      index = _overload14[0];
      length = _overload14[1];
      source = _overload14[3];

      return modify.call(this, function () {
        return _this9.editor.removeFormat(index, length);
      }, source, index);
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      this.selection.scrollIntoView(this.scrollingContainer);
    }
  }, {
    key: 'setContents',
    value: function setContents(delta) {
      var _this10 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        var length = _this10.getLength();
        var deleted = _this10.editor.deleteText(0, length);
        var applied = _this10.editor.applyDelta(delta);
        var lastOp = applied.ops[applied.ops.length - 1];
        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
          _this10.editor.deleteText(_this10.getLength() - 1, 1);
          applied.delete(1);
        }
        var ret = deleted.compose(applied);
        return ret;
      }, source);
    }
  }, {
    key: 'setSelection',
    value: function setSelection(index, length, source) {
      if (index == null) {
        this.selection.setRange(null, length || Quill.sources.API);
      } else {
        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
        if (source !== _emitter4.default.sources.SILENT) {
          this.selection.scrollIntoView(this.scrollingContainer);
        }
      }
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      var delta = new _quillDelta2.default().insert(text);
      return this.setContents(delta, source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
      this.selection.update(source);
      return change;
    }
  }, {
    key: 'updateContents',
    value: function updateContents(delta) {
      var _this11 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        return _this11.editor.applyDelta(delta, source);
      }, source, true);
    }
  }]);

  return Quill;
}();

Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter4.default.events;
Quill.sources = _emitter4.default.sources;
// eslint-disable-next-line no-undef
Quill.version =  false ? undefined : "1.3.7";

Quill.imports = {
  'delta': _quillDelta2.default,
  'parchment': _parchment2.default,
  'core/module': _module2.default,
  'core/theme': _theme2.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend2.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme2.default;
  } else {
    userConfig.theme = Quill.import('themes/' + userConfig.theme);
    if (userConfig.theme == null) {
      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
    }
  }
  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  var moduleConfig = moduleNames.reduce(function (config, name) {
    var moduleClass = Quill.import('modules/' + name);
    if (moduleClass == null) {
      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }
  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }
    return config;
  }, {});
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
    return new _quillDelta2.default();
  }
  var range = index == null ? null : this.getSelection();
  var oldDelta = this.editor.delta;
  var change = modifier();
  if (range != null) {
    if (index === true) index = range.index;
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter4.default.sources.SILENT);
  }
  if (change.length() > 0) {
    var _emitter;

    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
    if (source !== _emitter4.default.sources.SILENT) {
      var _emitter2;

      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  var formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter4.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  var start = void 0,
      end = void 0;
  if (index instanceof _quillDelta2.default) {
    var _map = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
    });

    var _map2 = _slicedToArray(_map, 2);

    start = _map2[0];
    end = _map2[1];
  } else {
    var _map3 = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });

    var _map4 = _slicedToArray(_map3, 2);

    start = _map4[0];
    end = _map4[1];
  }
  return new _selection.Range(start, end - start);
}

exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = Quill;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Parchment$Inline) {
  _inherits(Inline, _Parchment$Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
        var blot = this.isolate(index, length);
        if (value) {
          blot.wrap(name, value);
        }
      } else {
        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
        var parent = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(parent);
        parent.wrap(this);
      }
    }
  }], [{
    key: 'compare',
    value: function compare(self, other) {
      var selfIndex = Inline.order.indexOf(self);
      var otherIndex = Inline.order.indexOf(other);
      if (selfIndex >= 0 || otherIndex >= 0) {
        return selfIndex - otherIndex;
      } else if (self === other) {
        return 0;
      } else if (self < other) {
        return -1;
      } else {
        return 1;
      }
    }
  }]);

  return Inline;
}(_parchment2.default.Inline);

Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];

exports.default = Inline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlot = function (_Parchment$Text) {
  _inherits(TextBlot, _Parchment$Text);

  function TextBlot() {
    _classCallCheck(this, TextBlot);

    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
  }

  return TextBlot;
}(_parchment2.default.Text);

exports.default = TextBlot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventemitter = __webpack_require__(54);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:events');

var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        var _node$__quill$emitter;

        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
      }
    });
  });
});

var Emitter = function (_EventEmitter) {
  _inherits(Emitter, _EventEmitter);

  function Emitter() {
    _classCallCheck(this, Emitter);

    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

    _this.listeners = {};
    _this.on('error', debug.error);
    return _this;
  }

  _createClass(Emitter, [{
    key: 'emit',
    value: function emit() {
      debug.log.apply(debug, arguments);
      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
    }
  }, {
    key: 'handleDOM',
    value: function handleDOM(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (this.listeners[event.type] || []).forEach(function (_ref) {
        var node = _ref.node,
            handler = _ref.handler;

        if (event.target === node || node.contains(event.target)) {
          handler.apply(undefined, [event].concat(args));
        }
      });
    }
  }, {
    key: 'listenDOM',
    value: function listenDOM(eventName, node, handler) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push({ node: node, handler: handler });
    }
  }]);

  return Emitter;
}(_eventemitter2.default);

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};

exports.default = Emitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(quill) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Module);

  this.quill = quill;
  this.options = options;
};

Module.DEFAULTS = {};

exports.default = Module;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levels = ['error', 'warn', 'log', 'info'];
var level = 'warn';

function debug(method) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

exports.default = namespace;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(52);
var isArguments = __webpack_require__(53);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Inline) {
  _inherits(Code, _Inline);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_inline2.default);

Code.blotName = 'code';
Code.tagName = 'CODE';

var CodeBlock = function (_Block) {
  _inherits(CodeBlock, _Block);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
  }

  _createClass(CodeBlock, [{
    key: 'delta',
    value: function delta() {
      var _this3 = this;

      var text = this.domNode.textContent;
      if (text.endsWith('\n')) {
        // Should always be true
        text = text.slice(0, -1);
      }
      return text.split('\n').reduce(function (delta, frag) {
        return delta.insert(frag).insert('\n', _this3.formats());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) return;

      var _descendant = this.descendant(_text2.default, this.length() - 1),
          _descendant2 = _slicedToArray(_descendant, 1),
          text = _descendant2[0];

      if (text != null) {
        text.deleteAt(text.length() - 1, 1);
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length === 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
        return;
      }
      var nextNewline = this.newlineIndex(index);
      if (nextNewline < 0 || nextNewline >= index + length) return;
      var prevNewline = this.newlineIndex(index, true) + 1;
      var isolateLength = nextNewline - prevNewline + 1;
      var blot = this.isolate(prevNewline, isolateLength);
      var next = blot.next;
      blot.format(name, value);
      if (next instanceof CodeBlock) {
        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
      }
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return;

      var _descendant3 = this.descendant(_text2.default, index),
          _descendant4 = _slicedToArray(_descendant3, 2),
          text = _descendant4[0],
          offset = _descendant4[1];

      text.insertAt(offset, value);
    }
  }, {
    key: 'length',
    value: function length() {
      var length = this.domNode.textContent.length;
      if (!this.domNode.textContent.endsWith('\n')) {
        return length + 1;
      }
      return length;
    }
  }, {
    key: 'newlineIndex',
    value: function newlineIndex(searchIndex) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!reverse) {
        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
        return offset > -1 ? searchIndex + offset : -1;
      } else {
        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      if (!this.domNode.textContent.endsWith('\n')) {
        this.appendChild(_parchment2.default.create('text', '\n'));
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
        next.optimize(context);
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
        var blot = _parchment2.default.find(node);
        if (blot == null) {
          node.parentNode.removeChild(node);
        } else if (blot instanceof _parchment2.default.Embed) {
          blot.remove();
        } else {
          blot.unwrap();
        }
      });
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
      domNode.setAttribute('spellcheck', false);
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return CodeBlock;
}(_block2.default);

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';

exports.Code = Code;
exports.default = CodeBlock;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASCII = /^[ -~]*$/;

var Editor = function () {
  function Editor(scroll) {
    _classCallCheck(this, Editor);

    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  _createClass(Editor, [{
    key: 'applyDelta',
    value: function applyDelta(delta) {
      var _this = this;

      var consumeNextNewline = false;
      this.scroll.update();
      var scrollLength = this.scroll.length();
      this.scroll.batchStart();
      delta = normalizeDelta(delta);
      delta.reduce(function (index, op) {
        var length = op.retain || op.delete || op.insert.length || 1;
        var attributes = op.attributes || {};
        if (op.insert != null) {
          if (typeof op.insert === 'string') {
            var text = op.insert;
            if (text.endsWith('\n') && consumeNextNewline) {
              consumeNextNewline = false;
              text = text.slice(0, -1);
            }
            if (index >= scrollLength && !text.endsWith('\n')) {
              consumeNextNewline = true;
            }
            _this.scroll.insertAt(index, text);

            var _scroll$line = _this.scroll.line(index),
                _scroll$line2 = _slicedToArray(_scroll$line, 2),
                line = _scroll$line2[0],
                offset = _scroll$line2[1];

            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
            if (line instanceof _block2.default) {
              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
                  leaf = _line$descendant2[0];

              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
            }
            attributes = _op2.default.attributes.diff(formats, attributes) || {};
          } else if (_typeof(op.insert) === 'object') {
            var key = Object.keys(op.insert)[0]; // There should only be one key
            if (key == null) return index;
            _this.scroll.insertAt(index, key, op.insert[key]);
          }
          scrollLength += length;
        }
        Object.keys(attributes).forEach(function (name) {
          _this.scroll.formatAt(index, length, name, attributes[name]);
        });
        return index + length;
      }, 0);
      delta.reduce(function (index, op) {
        if (typeof op.delete === 'number') {
          _this.scroll.deleteAt(index, op.delete);
          return index;
        }
        return index + (op.retain || op.insert.length || 1);
      }, 0);
      this.scroll.batchEnd();
      return this.update(delta);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length) {
      this.scroll.deleteAt(index, length);
      return this.update(new _quillDelta2.default().retain(index).delete(length));
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length) {
      var _this2 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.scroll.update();
      Object.keys(formats).forEach(function (format) {
        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
        var lines = _this2.scroll.lines(index, Math.max(length, 1));
        var lengthRemaining = length;
        lines.forEach(function (line) {
          var lineLength = line.length();
          if (!(line instanceof _code2.default)) {
            line.format(format, formats[format]);
          } else {
            var codeIndex = index - line.offset(_this2.scroll);
            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
            line.formatAt(codeIndex, codeLength, format, formats[format]);
          }
          lengthRemaining -= lineLength;
        });
      });
      this.scroll.optimize();
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length) {
      var _this3 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(formats).forEach(function (format) {
        _this3.scroll.formatAt(index, length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'getContents',
    value: function getContents(index, length) {
      return this.delta.slice(index, index + length);
    }
  }, {
    key: 'getDelta',
    value: function getDelta() {
      return this.scroll.lines().reduce(function (delta, line) {
        return delta.concat(line.delta());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'getFormat',
    value: function getFormat(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var lines = [],
          leaves = [];
      if (length === 0) {
        this.scroll.path(index).forEach(function (path) {
          var _path = _slicedToArray(path, 1),
              blot = _path[0];

          if (blot instanceof _block2.default) {
            lines.push(blot);
          } else if (blot instanceof _parchment2.default.Leaf) {
            leaves.push(blot);
          }
        });
      } else {
        lines = this.scroll.lines(index, length);
        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
      }
      var formatsArr = [lines, leaves].map(function (blots) {
        if (blots.length === 0) return {};
        var formats = (0, _block.bubbleFormats)(blots.shift());
        while (Object.keys(formats).length > 0) {
          var blot = blots.shift();
          if (blot == null) return formats;
          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
        }
        return formats;
      });
      return _extend2.default.apply(_extend2.default, formatsArr);
    }
  }, {
    key: 'getText',
    value: function getText(index, length) {
      return this.getContents(index, length).filter(function (op) {
        return typeof op.insert === 'string';
      }).map(function (op) {
        return op.insert;
      }).join('');
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      this.scroll.insertAt(index, embed, value);
      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text) {
      var _this4 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      this.scroll.insertAt(index, text);
      Object.keys(formats).forEach(function (format) {
        _this4.scroll.formatAt(index, text.length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'isBlank',
    value: function isBlank() {
      if (this.scroll.children.length == 0) return true;
      if (this.scroll.children.length > 1) return false;
      var block = this.scroll.children.head;
      if (block.statics.blotName !== _block2.default.blotName) return false;
      if (block.children.length > 1) return false;
      return block.children.head instanceof _break2.default;
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length) {
      var text = this.getText(index, length);

      var _scroll$line3 = this.scroll.line(index + length),
          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
          line = _scroll$line4[0],
          offset = _scroll$line4[1];

      var suffixLength = 0,
          suffix = new _quillDelta2.default();
      if (line != null) {
        if (!(line instanceof _code2.default)) {
          suffixLength = line.length() - offset;
        } else {
          suffixLength = line.newlineIndex(offset) - offset + 1;
        }
        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
      }
      var contents = this.getContents(index, length + suffixLength);
      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
      var delta = new _quillDelta2.default().retain(index).concat(diff);
      return this.applyDelta(delta);
    }
  }, {
    key: 'update',
    value: function update(change) {
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var oldDelta = this.delta;
      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
        // Optimization for character changes
        var textBlot = _parchment2.default.find(mutations[0].target);
        var formats = (0, _block.bubbleFormats)(textBlot);
        var index = textBlot.offset(this.scroll);
        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
        var oldText = new _quillDelta2.default().insert(oldValue);
        var newText = new _quillDelta2.default().insert(textBlot.value());
        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
        change = diffDelta.reduce(function (delta, op) {
          if (op.insert) {
            return delta.insert(op.insert, formats);
          } else {
            return delta.push(op);
          }
        }, new _quillDelta2.default());
        this.delta = oldDelta.compose(change);
      } else {
        this.delta = this.getDelta();
        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
          change = oldDelta.diff(this.delta, cursorIndex);
        }
      }
      return change;
    }
  }]);

  return Editor;
}();

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      var attributes = (0, _clone2.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({ image: op.attributes.image }, attributes);
    }
    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone2.default)(op);
      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }
    if (typeof op.insert === 'string') {
      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }
    return delta.push(op);
  }, new _quillDelta2.default());
}

exports.default = Editor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill:selection');

var Range = function Range(index) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Range);

  this.index = index;
  this.length = length;
};

var Selection = function () {
  function Selection(scroll, emitter) {
    var _this = this;

    _classCallCheck(this, Selection);

    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment2.default.create('cursor', this);
    // savedRange is last non-null range
    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, function () {
      if (!_this.mouseDown) {
        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
        _this.update(_emitter4.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
      if (!_this.hasFocus()) return;
      var native = _this.getNativeRange();
      if (native == null) return;
      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects
      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
        try {
          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
      if (context.range) {
        var _context$range = context.range,
            startNode = _context$range.startNode,
            startOffset = _context$range.startOffset,
            endNode = _context$range.endNode,
            endOffset = _context$range.endOffset;

        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter4.default.sources.SILENT);
  }

  _createClass(Selection, [{
    key: 'handleComposition',
    value: function handleComposition() {
      var _this2 = this;

      this.root.addEventListener('compositionstart', function () {
        _this2.composing = true;
      });
      this.root.addEventListener('compositionend', function () {
        _this2.composing = false;
        if (_this2.cursor.parent) {
          var range = _this2.cursor.restore();
          if (!range) return;
          setTimeout(function () {
            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
          }, 1);
        }
      });
    }
  }, {
    key: 'handleDragging',
    value: function handleDragging() {
      var _this3 = this;

      this.emitter.listenDOM('mousedown', document.body, function () {
        _this3.mouseDown = true;
      });
      this.emitter.listenDOM('mouseup', document.body, function () {
        _this3.mouseDown = false;
        _this3.update(_emitter4.default.sources.USER);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.hasFocus()) return;
      this.root.focus();
      this.setRange(this.savedRange);
    }
  }, {
    key: 'format',
    value: function format(_format, value) {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
      this.scroll.update();
      var nativeRange = this.getNativeRange();
      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
      if (nativeRange.start.node !== this.cursor.textNode) {
        var blot = _parchment2.default.find(nativeRange.start.node, false);
        if (blot == null) return;
        // TODO Give blot ability to not split
        if (blot instanceof _parchment2.default.Leaf) {
          var after = blot.split(nativeRange.start.offset);
          blot.parent.insertBefore(this.cursor, after);
        } else {
          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
        }
        this.cursor.attach();
      }
      this.cursor.format(_format, value);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var scrollLength = this.scroll.length();
      index = Math.min(index, scrollLength - 1);
      length = Math.min(index + length, scrollLength - 1) - index;
      var node = void 0,
          _scroll$leaf = this.scroll.leaf(index),
          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
          leaf = _scroll$leaf2[0],
          offset = _scroll$leaf2[1];
      if (leaf == null) return null;

      var _leaf$position = leaf.position(offset, true);

      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

      node = _leaf$position2[0];
      offset = _leaf$position2[1];

      var range = document.createRange();
      if (length > 0) {
        range.setStart(node, offset);

        var _scroll$leaf3 = this.scroll.leaf(index + length);

        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

        leaf = _scroll$leaf4[0];
        offset = _scroll$leaf4[1];

        if (leaf == null) return null;

        var _leaf$position3 = leaf.position(offset, true);

        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

        node = _leaf$position4[0];
        offset = _leaf$position4[1];

        range.setEnd(node, offset);
        return range.getBoundingClientRect();
      } else {
        var side = 'left';
        var rect = void 0;
        if (node instanceof Text) {
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = 'right';
          }
          rect = range.getBoundingClientRect();
        } else {
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = 'right';
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
    }
  }, {
    key: 'getNativeRange',
    value: function getNativeRange() {
      var selection = document.getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      var nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      var range = this.normalizeNative(nativeRange);
      debug.info('getNativeRange', range);
      return range;
    }
  }, {
    key: 'getRange',
    value: function getRange() {
      var normalized = this.getNativeRange();
      if (normalized == null) return [null, null];
      var range = this.normalizedToRange(normalized);
      return [range, normalized];
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return document.activeElement === this.root;
    }
  }, {
    key: 'normalizedToRange',
    value: function normalizedToRange(range) {
      var _this4 = this;

      var positions = [[range.start.node, range.start.offset]];
      if (!range.native.collapsed) {
        positions.push([range.end.node, range.end.offset]);
      }
      var indexes = positions.map(function (position) {
        var _position = _slicedToArray(position, 2),
            node = _position[0],
            offset = _position[1];

        var blot = _parchment2.default.find(node, true);
        var index = blot.offset(_this4.scroll);
        if (offset === 0) {
          return index;
        } else if (blot instanceof _parchment2.default.Container) {
          return index + blot.length();
        } else {
          return index + blot.index(node, offset);
        }
      });
      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
      return new Range(start, end - start);
    }
  }, {
    key: 'normalizeNative',
    value: function normalizeNative(nativeRange) {
      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
        return null;
      }
      var range = {
        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
        native: nativeRange
      };
      [range.start, range.end].forEach(function (position) {
        var node = position.node,
            offset = position.offset;
        while (!(node instanceof Text) && node.childNodes.length > 0) {
          if (node.childNodes.length > offset) {
            node = node.childNodes[offset];
            offset = 0;
          } else if (node.childNodes.length === offset) {
            node = node.lastChild;
            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
          } else {
            break;
          }
        }
        position.node = node, position.offset = offset;
      });
      return range;
    }
  }, {
    key: 'rangeToNative',
    value: function rangeToNative(range) {
      var _this5 = this;

      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
      var args = [];
      var scrollLength = this.scroll.length();
      indexes.forEach(function (index, i) {
        index = Math.min(scrollLength - 1, index);
        var node = void 0,
            _scroll$leaf5 = _this5.scroll.leaf(index),
            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
            leaf = _scroll$leaf6[0],
            offset = _scroll$leaf6[1];
        var _leaf$position5 = leaf.position(offset, i !== 0);

        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

        node = _leaf$position6[0];
        offset = _leaf$position6[1];

        args.push(node, offset);
      });
      if (args.length < 2) {
        args = args.concat(args);
      }
      return args;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(scrollingContainer) {
      var range = this.lastRange;
      if (range == null) return;
      var bounds = this.getBounds(range.index, range.length);
      if (bounds == null) return;
      var limit = this.scroll.length() - 1;

      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
          _scroll$line2 = _slicedToArray(_scroll$line, 1),
          first = _scroll$line2[0];

      var last = first;
      if (range.length > 0) {
        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

        last = _scroll$line4[0];
      }
      if (first == null || last == null) return;
      var scrollBounds = scrollingContainer.getBoundingClientRect();
      if (bounds.top < scrollBounds.top) {
        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
      } else if (bounds.bottom > scrollBounds.bottom) {
        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
      }
    }
  }, {
    key: 'setNativeRange',
    value: function setNativeRange(startNode, startOffset) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
        return;
      }
      var selection = document.getSelection();
      if (selection == null) return;
      if (startNode != null) {
        if (!this.hasFocus()) this.root.focus();
        var native = (this.getNativeRange() || {}).native;
        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

          if (startNode.tagName == "BR") {
            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
            startNode = startNode.parentNode;
          }
          if (endNode.tagName == "BR") {
            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
            endNode = endNode.parentNode;
          }
          var range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        selection.removeAllRanges();
        this.root.blur();
        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
      }
    }
  }, {
    key: 'setRange',
    value: function setRange(range) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      if (typeof force === 'string') {
        source = force;
        force = false;
      }
      debug.info('setRange', range);
      if (range != null) {
        var args = this.rangeToNative(range);
        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
      } else {
        this.setNativeRange(null);
      }
      this.update(source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var oldRange = this.lastRange;

      var _getRange = this.getRange(),
          _getRange2 = _slicedToArray(_getRange, 2),
          lastRange = _getRange2[0],
          nativeRange = _getRange2[1];

      this.lastRange = lastRange;
      if (this.lastRange != null) {
        this.savedRange = this.lastRange;
      }
      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
        var _emitter;

        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
          this.cursor.restore();
        }
        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
        if (source !== _emitter4.default.sources.SILENT) {
          var _emitter2;

          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
        }
      }
    }
  }]);

  return Selection;
}();

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }
  return parent.contains(descendant);
}

exports.Range = Range;
exports.default = Selection;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_Parchment$Embed) {
  _inherits(Break, _Parchment$Embed);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'insertInto',
    value: function insertInto(parent, ref) {
      if (parent.children.length === 0) {
        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
      } else {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment2.default.Embed);

Break.blotName = 'break';
Break.tagName = 'BR';

exports.default = Break;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(44);
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var store_1 = __webpack_require__(31);
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        var _a;
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__(11);
var extend = __webpack_require__(3);


var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);
      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }
          return copy;
        }, {});
      }
      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    diff: function(a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b;  // b simply overwrites us without priority
      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },

  iterator: function (ops) {
    return new Iterator(ops);
  },

  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};


function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
};

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];
  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp)
    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }
    if (typeof nextOp['delete'] === 'number') {
      return { 'delete': length };
    } else {
      var retOp = {};
      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }
      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }
      return retOp;
    }
  } else {
    return { retain: Infinity };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }
  return 'retain';
};

Iterator.prototype.rest = function () {
  if (!this.hasNext()) {
    return [];
  } else if (this.offset === 0) {
    return this.ops.slice(this.index);
  } else {
    var offset = this.offset;
    var index = this.index;
    var next = this.next();
    var rest = this.ops.slice(this.index);
    this.offset = offset;
    this.index = index;
    return [next].concat(rest);
  }
};


module.exports = lib;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isLine(blot) {
  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
}

var Scroll = function (_Parchment$Scroll) {
  _inherits(Scroll, _Parchment$Scroll);

  function Scroll(domNode, config) {
    _classCallCheck(this, Scroll);

    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

    _this.emitter = config.emitter;
    if (Array.isArray(config.whitelist)) {
      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    }
    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
    _this.domNode.addEventListener('DOMNodeInserted', function () {});
    _this.optimize();
    _this.enable();
    return _this;
  }

  _createClass(Scroll, [{
    key: 'batchStart',
    value: function batchStart() {
      this.batch = true;
    }
  }, {
    key: 'batchEnd',
    value: function batchEnd() {
      this.batch = false;
      this.optimize();
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      var _line = this.line(index),
          _line2 = _slicedToArray(_line, 2),
          first = _line2[0],
          offset = _line2[1];

      var _line3 = this.line(index + length),
          _line4 = _slicedToArray(_line3, 1),
          last = _line4[0];

      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
      if (last != null && first !== last && offset > 0) {
        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
          this.optimize();
          return;
        }
        if (first instanceof _code2.default) {
          var newlineIndex = first.newlineIndex(first.length(), true);
          if (newlineIndex > -1) {
            first = first.split(newlineIndex + 1);
            if (first === last) {
              this.optimize();
              return;
            }
          }
        } else if (last instanceof _code2.default) {
          var _newlineIndex = last.newlineIndex(0);
          if (_newlineIndex > -1) {
            last.split(_newlineIndex + 1);
          }
        }
        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
        first.moveChildren(last, ref);
        first.remove();
      }
      this.optimize();
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.domNode.setAttribute('contenteditable', enabled);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, format, value) {
      if (this.whitelist != null && !this.whitelist[format]) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      this.optimize();
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
      if (index >= this.length()) {
        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
          var blot = _parchment2.default.create(this.statics.defaultChild);
          this.appendChild(blot);
          if (def == null && value.endsWith('\n')) {
            value = value.slice(0, -1);
          }
          blot.insertAt(0, value, def);
        } else {
          var embed = _parchment2.default.create(value, def);
          this.appendChild(embed);
        }
      } else {
        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
      }
      this.optimize();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
        var wrapper = _parchment2.default.create(this.statics.defaultChild);
        wrapper.appendChild(blot);
        blot = wrapper;
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
    }
  }, {
    key: 'leaf',
    value: function leaf(index) {
      return this.path(index).pop() || [null, -1];
    }
  }, {
    key: 'line',
    value: function line(index) {
      if (index === this.length()) {
        return this.line(index - 1);
      }
      return this.descendant(isLine, index);
    }
  }, {
    key: 'lines',
    value: function lines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      var getLines = function getLines(blot, index, length) {
        var lines = [],
            lengthLeft = length;
        blot.children.forEachAt(index, length, function (child, index, length) {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof _parchment2.default.Container) {
            lines = lines.concat(getLines(child, index, lengthLeft));
          }
          lengthLeft -= length;
        });
        return lines;
      };
      return getLines(this, index, length);
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.batch === true) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
      }
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
    }
  }, {
    key: 'update',
    value: function update(mutations) {
      if (this.batch === true) return;
      var source = _emitter2.default.sources.USER;
      if (typeof mutations === 'string') {
        source = mutations;
      }
      if (!Array.isArray(mutations)) {
        mutations = this.observer.takeRecords();
      }
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
      }
    }
  }]);

  return Scroll;
}(_parchment2.default.Scroll);

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

exports.default = Scroll;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:keyboard');

var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

var Keyboard = function (_Module) {
  _inherits(Keyboard, _Module);

  _createClass(Keyboard, null, [{
    key: 'match',
    value: function match(evt, binding) {
      binding = normalize(binding);
      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })) {
        return false;
      }
      return binding.key === (evt.which || evt.keyCode);
    }
  }]);

  function Keyboard(quill, options) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

    _this.bindings = {};
    Object.keys(_this.options.bindings).forEach(function (name) {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }
      if (_this.options.bindings[name]) {
        _this.addBinding(_this.options.bindings[name]);
      }
    });
    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
    } else {
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
    }
    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
    _this.listen();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'addBinding',
    value: function addBinding(key) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var binding = normalize(key);
      if (binding == null || binding.key == null) {
        return debug.warn('Attempted to add invalid keyboard binding', binding);
      }
      if (typeof context === 'function') {
        context = { handler: context };
      }
      if (typeof handler === 'function') {
        handler = { handler: handler };
      }
      binding = (0, _extend2.default)(binding, context, handler);
      this.bindings[binding.key] = this.bindings[binding.key] || [];
      this.bindings[binding.key].push(binding);
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.quill.root.addEventListener('keydown', function (evt) {
        if (evt.defaultPrevented) return;
        var which = evt.which || evt.keyCode;
        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
          return Keyboard.match(evt, binding);
        });
        if (bindings.length === 0) return;
        var range = _this2.quill.getSelection();
        if (range == null || !_this2.quill.hasFocus()) return;

        var _quill$getLine = _this2.quill.getLine(range.index),
            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
            line = _quill$getLine2[0],
            offset = _quill$getLine2[1];

        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
            leafStart = _quill$getLeaf2[0],
            offsetStart = _quill$getLeaf2[1];

        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
            _ref2 = _slicedToArray(_ref, 2),
            leafEnd = _ref2[0],
            offsetEnd = _ref2[1];

        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
        var curContext = {
          collapsed: range.length === 0,
          empty: range.length === 0 && line.length() <= 1,
          format: _this2.quill.getFormat(range),
          offset: offset,
          prefix: prefixText,
          suffix: suffixText
        };
        var prevented = bindings.some(function (binding) {
          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
          if (binding.empty != null && binding.empty !== curContext.empty) return false;
          if (binding.offset != null && binding.offset !== curContext.offset) return false;
          if (Array.isArray(binding.format)) {
            // any format is present
            if (binding.format.every(function (name) {
              return curContext.format[name] == null;
            })) {
              return false;
            }
          } else if (_typeof(binding.format) === 'object') {
            // all formats must match
            if (!Object.keys(binding.format).every(function (name) {
              if (binding.format[name] === true) return curContext.format[name] != null;
              if (binding.format[name] === false) return curContext.format[name] == null;
              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
            })) {
              return false;
            }
          }
          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
          return binding.handler.call(_this2, range, curContext) !== true;
        });
        if (prevented) {
          evt.preventDefault();
        }
      });
    }
  }]);

  return Keyboard;
}(_module2.default);

Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function handler(range) {
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function handler(range) {
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function handler(range, context) {
        this.quill.format('list', false, _quill2.default.sources.USER);
        if (context.format.indent) {
          this.quill.format('indent', false, _quill2.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: { list: 'checked' },
      handler: function handler(range) {
        var _quill$getLine3 = this.quill.getLine(range.index),
            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
            line = _quill$getLine4[0],
            offset = _quill$getLine4[1];

        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function handler(range, context) {
        var _quill$getLine5 = this.quill.getLine(range.index),
            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
            line = _quill$getLine6[0],
            offset = _quill$getLine6[1];

        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: { list: false },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function handler(range, context) {
        var length = context.prefix.length;

        var _quill$getLine7 = this.quill.getLine(range.index),
            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
            line = _quill$getLine8[0],
            offset = _quill$getLine8[1];

        if (offset > length) return true;
        var value = void 0;
        switch (context.prefix.trim()) {
          case '[]':case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function handler(range) {
        var _quill$getLine9 = this.quill.getLine(range.index),
            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
            line = _quill$getLine10[0],
            offset = _quill$getLine10[1];

        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
        this.quill.updateContents(delta, _quill2.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  var _ref3;

  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return _ref3 = {
    key: key,
    shiftKey: shiftKey,
    altKey: null
  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
    var index = range.index;
    if (key === Keyboard.keys.RIGHT) {
      index += range.length + 1;
    }

    var _quill$getLeaf3 = this.quill.getLeaf(index),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        leaf = _quill$getLeaf4[0];

    if (!(leaf instanceof _parchment2.default.Embed)) return true;
    if (key === Keyboard.keys.LEFT) {
      if (shiftKey) {
        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
      }
    } else {
      if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
      }
    }
    return false;
  }), _ref3;
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;

  var _quill$getLine11 = this.quill.getLine(range.index),
      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
      line = _quill$getLine12[0];

  var formats = {};
  if (context.offset === 0) {
    var _quill$getLine13 = this.quill.getLine(range.index - 1),
        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
        prev = _quill$getLine14[0];

    if (prev != null && prev.length() > 1) {
      var curFormats = line.formats();
      var prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
    }
  }
  // Check for astral symbols
  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
  }
  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  var formats = {},
      nextLength = 0;

  var _quill$getLine15 = this.quill.getLine(range.index),
      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
      line = _quill$getLine16[0];

  if (context.offset >= line.length() - 1) {
    var _quill$getLine17 = this.quill.getLine(range.index + 1),
        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
        next = _quill$getLine18[0];

    if (next) {
      var curFormats = line.formats();
      var nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }
  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  var lines = this.quill.getLines(range);
  var formats = {};
  if (lines.length > 1) {
    var firstFormats = lines[0].formats();
    var lastFormats = lines[lines.length - 1].formats();
    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
  }
  this.quill.deleteText(range, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
  }
  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  var _this3 = this;

  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }
  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }
    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
  // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable
  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(function (name) {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: { 'code-block': true },
    handler: function handler(range) {
      var CodeBlock = _parchment2.default.query('code-block');
      var index = range.index,
          length = range.length;

      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
          block = _quill$scroll$descend2[0],
          offset = _quill$scroll$descend2[1];

      if (block == null) return;
      var scrollIndex = this.quill.getIndex(block);
      var start = block.newlineIndex(offset, true) + 1;
      var end = block.newlineIndex(scrollIndex + offset + length);
      var lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach(function (line, i) {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
        offset += line.length + 1;
      });
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function handler(range, context) {
      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({ key: binding });
  }
  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
    binding = (0, _clone2.default)(binding, false);
  }
  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

exports.default = Keyboard;
exports.SHORTKEY = SHORTKEY;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_Parchment$Embed) {
  _inherits(Cursor, _Parchment$Embed);

  _createClass(Cursor, null, [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  function Cursor(domNode, selection) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

    _this.selection = selection;
    _this.textNode = document.createTextNode(Cursor.CONTENTS);
    _this.domNode.appendChild(_this.textNode);
    _this._length = 0;
    return _this;
  }

  _createClass(Cursor, [{
    key: 'detach',
    value: function detach() {
      // super.detach() will also clear domNode.__blot
      if (this.parent != null) this.parent.removeChild(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (this._length !== 0) {
        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
      }
      var target = this,
          index = 0;
      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
        index += target.offset(target.parent);
        target = target.parent;
      }
      if (target != null) {
        this._length = Cursor.CONTENTS.length;
        target.optimize();
        target.formatAt(index, Cursor.CONTENTS.length, name, value);
        this._length = 0;
      }
    }
  }, {
    key: 'index',
    value: function index(node, offset) {
      if (node === this.textNode) return 0;
      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'position',
    value: function position() {
      return [this.textNode, this.textNode.data.length];
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
      this.parent = null;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this.selection.composing || this.parent == null) return;
      var textNode = this.textNode;
      var range = this.selection.getNativeRange();
      var restoreText = void 0,
          start = void 0,
          end = void 0;
      if (range != null && range.start.node === textNode && range.end.node === textNode) {
        var _ref = [textNode, range.start.offset, range.end.offset];
        restoreText = _ref[0];
        start = _ref[1];
        end = _ref[2];
      }
      // Link format will insert text outside of anchor tag
      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
      }
      if (this.textNode.data !== Cursor.CONTENTS) {
        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
        if (this.next instanceof _text2.default) {
          restoreText = this.next.domNode;
          this.next.insertAt(0, text);
          this.textNode.data = Cursor.CONTENTS;
        } else {
          this.textNode.data = text;
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
      }
      this.remove();
      if (start != null) {
        var _map = [start, end].map(function (offset) {
          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
        });

        var _map2 = _slicedToArray(_map, 2);

        start = _map2[0];
        end = _map2[1];

        return {
          startNode: restoreText,
          startOffset: start,
          endNode: restoreText,
          endOffset: end
        };
      }
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      if (mutations.some(function (mutation) {
        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
      })) {
        var range = this.restore();
        if (range) context.range = range;
      }
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }]);

  return Cursor;
}(_parchment2.default.Embed);

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


exports.default = Cursor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Parchment$Container) {
  _inherits(Container, _Parchment$Container);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment2.default.Container);

Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

exports.default = Container;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_Parchment$Attributor) {
  _inherits(ColorAttributor, _Parchment$Attributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      return '#' + value.split(',').map(function (component) {
        return ('00' + parseInt(component).toString(16)).slice(-2);
      }).join('');
    }
  }]);

  return ColorAttributor;
}(_parchment2.default.Attributor.Style);

var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment2.default.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Inline) {
  _inherits(Link, _Inline);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'format',
    value: function format(name, value) {
      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
      value = this.constructor.sanitize(value);
      this.domNode.setAttribute('href', value);
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
      value = this.sanitize(value);
      node.setAttribute('href', value);
      node.setAttribute('rel', 'noopener noreferrer');
      node.setAttribute('target', '_blank');
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return domNode.getAttribute('href');
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    }
  }]);

  return Link;
}(_inline2.default);

Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function _sanitize(url, protocols) {
  var anchor = document.createElement('a');
  anchor.href = url;
  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

exports.default = Link;
exports.sanitize = _sanitize;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _dropdown = __webpack_require__(107);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

var Picker = function () {
  function Picker(select) {
    var _this = this;

    _classCallCheck(this, Picker);

    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', function () {
      _this.togglePicker();
    });
    this.label.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        // Allows the "Enter" key to open the picker
        case _keyboard2.default.keys.ENTER:
          _this.togglePicker();
          break;

        // Allows the "Escape" key to close the picker
        case _keyboard2.default.keys.ESCAPE:
          _this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  _createClass(Picker, [{
    key: 'togglePicker',
    value: function togglePicker() {
      this.container.classList.toggle('ql-expanded');
      // Toggle aria-expanded and aria-hidden to make the picker accessible
      toggleAriaAttribute(this.label, 'aria-expanded');
      toggleAriaAttribute(this.options, 'aria-hidden');
    }
  }, {
    key: 'buildItem',
    value: function buildItem(option) {
      var _this2 = this;

      var item = document.createElement('span');
      item.tabIndex = '0';
      item.setAttribute('role', 'button');

      item.classList.add('ql-picker-item');
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', function () {
        _this2.selectItem(item, true);
      });
      item.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          // Allows the "Enter" key to select an item
          case _keyboard2.default.keys.ENTER:
            _this2.selectItem(item, true);
            event.preventDefault();
            break;

          // Allows the "Escape" key to close the picker
          case _keyboard2.default.keys.ESCAPE:
            _this2.escape();
            event.preventDefault();
            break;
          default:
        }
      });

      return item;
    }
  }, {
    key: 'buildLabel',
    value: function buildLabel() {
      var label = document.createElement('span');
      label.classList.add('ql-picker-label');
      label.innerHTML = _dropdown2.default;
      label.tabIndex = '0';
      label.setAttribute('role', 'button');
      label.setAttribute('aria-expanded', 'false');
      this.container.appendChild(label);
      return label;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions() {
      var _this3 = this;

      var options = document.createElement('span');
      options.classList.add('ql-picker-options');

      // Don't want screen readers to read this until options are visible
      options.setAttribute('aria-hidden', 'true');
      options.tabIndex = '-1';

      // Need a unique id for aria-controls
      options.id = 'ql-picker-options-' + optionsCounter;
      optionsCounter += 1;
      this.label.setAttribute('aria-controls', options.id);

      this.options = options;

      [].slice.call(this.select.options).forEach(function (option) {
        var item = _this3.buildItem(option);
        options.appendChild(item);
        if (option.selected === true) {
          _this3.selectItem(item);
        }
      });
      this.container.appendChild(options);
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var _this4 = this;

      [].slice.call(this.select.attributes).forEach(function (item) {
        _this4.container.setAttribute(item.name, item.value);
      });
      this.container.classList.add('ql-picker');
      this.label = this.buildLabel();
      this.buildOptions();
    }
  }, {
    key: 'escape',
    value: function escape() {
      var _this5 = this;

      // Close menu and return focus to trigger label
      this.close();
      // Need setTimeout for accessibility to ensure that the browser executes
      // focus on the next process thread and after any DOM content changes
      setTimeout(function () {
        return _this5.label.focus();
      }, 1);
    }
  }, {
    key: 'close',
    value: function close() {
      this.container.classList.remove('ql-expanded');
      this.label.setAttribute('aria-expanded', 'false');
      this.options.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selected = this.container.querySelector('.ql-selected');
      if (item === selected) return;
      if (selected != null) {
        selected.classList.remove('ql-selected');
      }
      if (item == null) return;
      item.classList.add('ql-selected');
      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
      if (item.hasAttribute('data-value')) {
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
      } else {
        this.label.removeAttribute('data-value');
      }
      if (item.hasAttribute('data-label')) {
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
      } else {
        this.label.removeAttribute('data-label');
      }
      if (trigger) {
        if (typeof Event === 'function') {
          this.select.dispatchEvent(new Event('change'));
        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
          // IE11
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          this.select.dispatchEvent(event);
        }
        this.close();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var option = void 0;
      if (this.select.selectedIndex > -1) {
        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
        option = this.select.options[this.select.selectedIndex];
        this.selectItem(item);
      } else {
        this.selectItem(null);
      }
      var isActive = option != null && option !== this.select.querySelector('option[selected]');
      this.label.classList.toggle('ql-active', isActive);
    }
  }]);

  return Picker;
}();

exports.default = Picker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __webpack_require__(22);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __webpack_require__(55);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __webpack_require__(42);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,

  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default
});

_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

exports.default = _quill2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent = Registry.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var Registry = __webpack_require__(1);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(quill, options) {
    _classCallCheck(this, Theme);

    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  _createClass(Theme, [{
    key: 'init',
    value: function init() {
      var _this = this;

      Object.keys(this.options.modules).forEach(function (name) {
        if (_this.modules[name] == null) {
          _this.addModule(name);
        }
      });
    }
  }, {
    key: 'addModule',
    value: function addModule(name) {
      var moduleClass = this.quill.constructor.import('modules/' + name);
      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
      return this.modules[name];
    }
  }]);

  return Theme;
}();

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};

exports.default = Theme;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_Parchment$Embed) {
  _inherits(Embed, _Parchment$Embed);

  function Embed(node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = void 0,
          textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment2.default.Embed);

exports.default = Embed;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};

var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _color = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment2.default.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['rtl']
};

var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};

var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

var FontStyleAttributor = function (_Parchment$Attributor) {
  _inherits(FontStyleAttributor, _Parchment$Attributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment2.default.Attributor.Style);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);

exports.FontStyle = FontStyle;
exports.FontClass = FontClass;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'align': {
    '': __webpack_require__(76),
    'center': __webpack_require__(77),
    'right': __webpack_require__(78),
    'justify': __webpack_require__(79)
  },
  'background': __webpack_require__(80),
  'blockquote': __webpack_require__(81),
  'bold': __webpack_require__(82),
  'clean': __webpack_require__(83),
  'code': __webpack_require__(58),
  'code-block': __webpack_require__(58),
  'color': __webpack_require__(84),
  'direction': {
    '': __webpack_require__(85),
    'rtl': __webpack_require__(86)
  },
  'float': {
    'center': __webpack_require__(87),
    'full': __webpack_require__(88),
    'left': __webpack_require__(89),
    'right': __webpack_require__(90)
  },
  'formula': __webpack_require__(91),
  'header': {
    '1': __webpack_require__(92),
    '2': __webpack_require__(93)
  },
  'italic': __webpack_require__(94),
  'image': __webpack_require__(95),
  'indent': {
    '+1': __webpack_require__(96),
    '-1': __webpack_require__(97)
  },
  'link': __webpack_require__(98),
  'list': {
    'ordered': __webpack_require__(99),
    'bullet': __webpack_require__(100),
    'check': __webpack_require__(101)
  },
  'script': {
    'sub': __webpack_require__(102),
    'super': __webpack_require__(103)
  },
  'strike': __webpack_require__(104),
  'underline': __webpack_require__(105),
  'video': __webpack_require__(106)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Module) {
  _inherits(History, _Module);

  function History(quill, options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

    _this.lastRecorded = 0;
    _this.ignoreChange = false;
    _this.clear();
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
        _this.record(delta, oldDelta);
      } else {
        _this.transform(delta);
      }
    });
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
    if (/Win/i.test(navigator.platform)) {
      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
    }
    return _this;
  }

  _createClass(History, [{
    key: 'change',
    value: function change(source, dest) {
      if (this.stack[source].length === 0) return;
      var delta = this.stack[source].pop();
      this.stack[dest].push(delta);
      this.lastRecorded = 0;
      this.ignoreChange = true;
      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
      this.ignoreChange = false;
      var index = getLastChangeIndex(delta[source]);
      this.quill.setSelection(index);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.stack = { undo: [], redo: [] };
    }
  }, {
    key: 'cutoff',
    value: function cutoff() {
      this.lastRecorded = 0;
    }
  }, {
    key: 'record',
    value: function record(changeDelta, oldDelta) {
      if (changeDelta.ops.length === 0) return;
      this.stack.redo = [];
      var undoDelta = this.quill.getContents().diff(oldDelta);
      var timestamp = Date.now();
      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
        var delta = this.stack.undo.pop();
        undoDelta = undoDelta.compose(delta.undo);
        changeDelta = delta.redo.compose(changeDelta);
      } else {
        this.lastRecorded = timestamp;
      }
      this.stack.undo.push({
        redo: changeDelta,
        undo: undoDelta
      });
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.change('redo', 'undo');
    }
  }, {
    key: 'transform',
    value: function transform(delta) {
      this.stack.undo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
      this.stack.redo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.change('undo', 'redo');
    }
  }]);

  return History;
}(_module2.default);

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  var lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(delta) {
  var deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  var changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}

exports.default = History;
exports.getLastChangeIndex = getLastChangeIndex;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseTooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALIGNS = [false, 'center', 'right', 'justify'];

var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

var FONTS = [false, 'serif', 'monospace'];

var HEADERS = ['1', '2', '3', false];

var SIZES = ['small', false, 'large', 'huge'];

var BaseTheme = function (_Theme) {
  _inherits(BaseTheme, _Theme);

  function BaseTheme(quill, options) {
    _classCallCheck(this, BaseTheme);

    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

    var listener = function listener(e) {
      if (!document.body.contains(quill.root)) {
        return document.body.removeEventListener('click', listener);
      }
      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
        _this.tooltip.hide();
      }
      if (_this.pickers != null) {
        _this.pickers.forEach(function (picker) {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };
    quill.emitter.listenDOM('click', document.body, listener);
    return _this;
  }

  _createClass(BaseTheme, [{
    key: 'addModule',
    value: function addModule(name) {
      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
      if (name === 'toolbar') {
        this.extendToolbar(module);
      }
      return module;
    }
  }, {
    key: 'buildButtons',
    value: function buildButtons(buttons, icons) {
      buttons.forEach(function (button) {
        var className = button.getAttribute('class') || '';
        className.split(/\s+/).forEach(function (name) {
          if (!name.startsWith('ql-')) return;
          name = name.slice('ql-'.length);
          if (icons[name] == null) return;
          if (name === 'direction') {
            button.innerHTML = icons[name][''] + icons[name]['rtl'];
          } else if (typeof icons[name] === 'string') {
            button.innerHTML = icons[name];
          } else {
            var value = button.value || '';
            if (value != null && icons[name][value]) {
              button.innerHTML = icons[name][value];
            }
          }
        });
      });
    }
  }, {
    key: 'buildPickers',
    value: function buildPickers(selects, icons) {
      var _this2 = this;

      this.pickers = selects.map(function (select) {
        if (select.classList.contains('ql-align')) {
          if (select.querySelector('option') == null) {
            fillSelect(select, ALIGNS);
          }
          return new _iconPicker2.default(select, icons.align);
        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
          var format = select.classList.contains('ql-background') ? 'background' : 'color';
          if (select.querySelector('option') == null) {
            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
          }
          return new _colorPicker2.default(select, icons[format]);
        } else {
          if (select.querySelector('option') == null) {
            if (select.classList.contains('ql-font')) {
              fillSelect(select, FONTS);
            } else if (select.classList.contains('ql-header')) {
              fillSelect(select, HEADERS);
            } else if (select.classList.contains('ql-size')) {
              fillSelect(select, SIZES);
            }
          }
          return new _picker2.default(select);
        }
      });
      var update = function update() {
        _this2.pickers.forEach(function (picker) {
          picker.update();
        });
      };
      this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
    }
  }]);

  return BaseTheme;
}(_theme2.default);

BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula: function formula() {
          this.quill.theme.tooltip.edit('formula');
        },
        image: function image() {
          var _this3 = this;

          var fileInput = this.container.querySelector('input.ql-image[type=file]');
          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', function () {
              if (fileInput.files != null && fileInput.files[0] != null) {
                var reader = new FileReader();
                reader.onload = function (e) {
                  var range = _this3.quill.getSelection(true);
                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                  _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                  fileInput.value = "";
                };
                reader.readAsDataURL(fileInput.files[0]);
              }
            });
            this.container.appendChild(fileInput);
          }
          fileInput.click();
        },
        video: function video() {
          this.quill.theme.tooltip.edit('video');
        }
      }
    }
  }
});

var BaseTooltip = function (_Tooltip) {
  _inherits(BaseTooltip, _Tooltip);

  function BaseTooltip(quill, boundsContainer) {
    _classCallCheck(this, BaseTooltip);

    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

    _this4.textbox = _this4.root.querySelector('input[type="text"]');
    _this4.listen();
    return _this4;
  }

  _createClass(BaseTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this5 = this;

      this.textbox.addEventListener('keydown', function (event) {
        if (_keyboard2.default.match(event, 'enter')) {
          _this5.save();
          event.preventDefault();
        } else if (_keyboard2.default.match(event, 'escape')) {
          _this5.cancel();
          event.preventDefault();
        }
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.hide();
    }
  }, {
    key: 'edit',
    value: function edit() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.root.classList.remove('ql-hidden');
      this.root.classList.add('ql-editing');
      if (preview != null) {
        this.textbox.value = preview;
      } else if (mode !== this.root.getAttribute('data-mode')) {
        this.textbox.value = '';
      }
      this.position(this.quill.getBounds(this.quill.selection.savedRange));
      this.textbox.select();
      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
      this.root.setAttribute('data-mode', mode);
    }
  }, {
    key: 'restoreFocus',
    value: function restoreFocus() {
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.quill.focus();
      this.quill.scrollingContainer.scrollTop = scrollTop;
    }
  }, {
    key: 'save',
    value: function save() {
      var value = this.textbox.value;
      switch (this.root.getAttribute('data-mode')) {
        case 'link':
          {
            var scrollTop = this.quill.root.scrollTop;
            if (this.linkRange) {
              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
              delete this.linkRange;
            } else {
              this.restoreFocus();
              this.quill.format('link', value, _emitter2.default.sources.USER);
            }
            this.quill.root.scrollTop = scrollTop;
            break;
          }
        case 'video':
          {
            value = extractVideoUrl(value);
          } // eslint-disable-next-line no-fallthrough
        case 'formula':
          {
            if (!value) break;
            var range = this.quill.getSelection(true);
            if (range != null) {
              var index = range.index + range.length;
              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
              if (this.root.getAttribute('data-mode') === 'formula') {
                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
              }
              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
            }
            break;
          }
        default:
      }
      this.textbox.value = '';
      this.hide();
    }
  }]);

  return BaseTooltip;
}(_tooltip2.default);

function extractVideoUrl(url) {
  var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
  }
  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    // eslint-disable-line no-cond-assign
    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
  }
  return url;
}

function fillSelect(select, values) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}

exports.BaseTooltip = BaseTooltip;
exports.default = BaseTheme;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length = cur.length();
            if (index < length ||
                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var Registry = __webpack_require__(1);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  var _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function (token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend2 = __webpack_require__(3);

var _extend3 = _interopRequireDefault(_extend2);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _align = __webpack_require__(36);

var _background = __webpack_require__(37);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _color = __webpack_require__(26);

var _direction = __webpack_require__(38);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:clipboard');

var DOM_KEY = '__ql-matcher';

var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var Clipboard = function (_Module) {
  _inherits(Clipboard, _Module);

  function Clipboard(quill, options) {
    _classCallCheck(this, Clipboard);

    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
    _this.container = _this.quill.addContainer('ql-clipboard');
    _this.container.setAttribute('contenteditable', true);
    _this.container.setAttribute('tabindex', -1);
    _this.matchers = [];
    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          selector = _ref2[0],
          matcher = _ref2[1];

      if (!options.matchVisual && matcher === matchSpacing) return;
      _this.addMatcher(selector, matcher);
    });
    return _this;
  }

  _createClass(Clipboard, [{
    key: 'addMatcher',
    value: function addMatcher(selector, matcher) {
      this.matchers.push([selector, matcher]);
    }
  }, {
    key: 'convert',
    value: function convert(html) {
      if (typeof html === 'string') {
        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
        return this.convert();
      }
      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
      if (formats[_code2.default.blotName]) {
        var text = this.container.innerText;
        this.container.innerHTML = '';
        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
      }

      var _prepareMatching = this.prepareMatching(),
          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
          elementMatchers = _prepareMatching2[0],
          textMatchers = _prepareMatching2[1];

      var delta = traverse(this.container, elementMatchers, textMatchers);
      // Remove trailing newline
      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
      }
      debug.log('convert', this.container.innerHTML, delta);
      this.container.innerHTML = '';
      return delta;
    }
  }, {
    key: 'dangerouslyPasteHTML',
    value: function dangerouslyPasteHTML(index, html) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

      if (typeof index === 'string') {
        this.quill.setContents(this.convert(index), html);
        this.quill.setSelection(0, _quill2.default.sources.SILENT);
      } else {
        var paste = this.convert(html);
        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'onPaste',
    value: function onPaste(e) {
      var _this2 = this;

      if (e.defaultPrevented || !this.quill.isEnabled()) return;
      var range = this.quill.getSelection();
      var delta = new _quillDelta2.default().retain(range.index);
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.container.focus();
      this.quill.selection.update(_quill2.default.sources.SILENT);
      setTimeout(function () {
        delta = delta.concat(_this2.convert()).delete(range.length);
        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
        // range.length contributes to delta.length()
        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
        _this2.quill.scrollingContainer.scrollTop = scrollTop;
        _this2.quill.focus();
      }, 1);
    }
  }, {
    key: 'prepareMatching',
    value: function prepareMatching() {
      var _this3 = this;

      var elementMatchers = [],
          textMatchers = [];
      this.matchers.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            selector = _pair[0],
            matcher = _pair[1];

        switch (selector) {
          case Node.TEXT_NODE:
            textMatchers.push(matcher);
            break;
          case Node.ELEMENT_NODE:
            elementMatchers.push(matcher);
            break;
          default:
            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
            break;
        }
      });
      return [elementMatchers, textMatchers];
    }
  }]);

  return Clipboard;
}(_module2.default);

Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
      }
    }, new _quillDelta2.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  var DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  var endText = "";
  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    var op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  var style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta2.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new _quillDelta2.default());
  } else {
    return new _quillDelta2.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
  var classes = _parchment2.default.Attributor.Class.keys(node);
  var styles = _parchment2.default.Attributor.Style.keys(node);
  var formats = {};
  attributes.concat(classes).concat(styles).forEach(function (name) {
    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof _parchment2.default.Embed) {
    var embed = {};
    var value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta2.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchIgnore() {
  return new _quillDelta2.default();
}

function matchIndent(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }
  var indent = -1,
      parent = node.parentNode;
  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  var formats = {};
  var style = node.style || {};
  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }
  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta2.default().insert('\t').concat(delta);
  }
  return delta;
}

function matchText(node, delta) {
  var text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }
  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    var replacer = function replacer(collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return match.length < 1 && collapse ? ' ' : match;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}

exports.default = Clipboard;
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bold = function (_Inline) {
  _inherits(Bold, _Inline);

  function Bold() {
    _classCallCheck(this, Bold);

    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
  }

  _createClass(Bold, [{
    key: 'optimize',
    value: function optimize(context) {
      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);
      if (this.domNode.tagName !== this.statics.tagName[0]) {
        this.replaceWith(this.statics.blotName);
      }
    }
  }], [{
    key: 'create',
    value: function create() {
      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return Bold;
}(_inline2.default);

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];

exports.default = Bold;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addControls = exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:toolbar');

var Toolbar = function (_Module) {
  _inherits(Toolbar, _Module);

  function Toolbar(quill, options) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

    if (Array.isArray(_this.options.container)) {
      var container = document.createElement('div');
      addControls(container, _this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      _this.container = container;
    } else if (typeof _this.options.container === 'string') {
      _this.container = document.querySelector(_this.options.container);
    } else {
      _this.container = _this.options.container;
    }
    if (!(_this.container instanceof HTMLElement)) {
      var _ret;

      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
    }
    _this.container.classList.add('ql-toolbar');
    _this.controls = [];
    _this.handlers = {};
    Object.keys(_this.options.handlers).forEach(function (format) {
      _this.addHandler(format, _this.options.handlers[format]);
    });
    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
      _this.attach(input);
    });
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
      if (type === _quill2.default.events.SELECTION_CHANGE) {
        _this.update(range);
      }
    });
    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      var _this$quill$selection = _this.quill.selection.getRange(),
          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
          range = _this$quill$selection2[0]; // quill.getSelection triggers update


      _this.update(range);
    });
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'addHandler',
    value: function addHandler(format, handler) {
      this.handlers[format] = handler;
    }
  }, {
    key: 'attach',
    value: function attach(input) {
      var _this2 = this;

      var format = [].find.call(input.classList, function (className) {
        return className.indexOf('ql-') === 0;
      });
      if (!format) return;
      format = format.slice('ql-'.length);
      if (input.tagName === 'BUTTON') {
        input.setAttribute('type', 'button');
      }
      if (this.handlers[format] == null) {
        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
          debug.warn('ignoring attaching to disabled format', format, input);
          return;
        }
        if (_parchment2.default.query(format) == null) {
          debug.warn('ignoring attaching to nonexistent format', format, input);
          return;
        }
      }
      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
      input.addEventListener(eventName, function (e) {
        var value = void 0;
        if (input.tagName === 'SELECT') {
          if (input.selectedIndex < 0) return;
          var selected = input.options[input.selectedIndex];
          if (selected.hasAttribute('selected')) {
            value = false;
          } else {
            value = selected.value || false;
          }
        } else {
          if (input.classList.contains('ql-active')) {
            value = false;
          } else {
            value = input.value || !input.hasAttribute('value');
          }
          e.preventDefault();
        }
        _this2.quill.focus();

        var _quill$selection$getR = _this2.quill.selection.getRange(),
            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
            range = _quill$selection$getR2[0];

        if (_this2.handlers[format] != null) {
          _this2.handlers[format].call(_this2, value);
        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
          value = prompt('Enter ' + format);
          if (!value) return;
          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
        } else {
          _this2.quill.format(format, value, _quill2.default.sources.USER);
        }
        _this2.update(range);
      });
      // TODO use weakmap
      this.controls.push([format, input]);
    }
  }, {
    key: 'update',
    value: function update(range) {
      var formats = range == null ? {} : this.quill.getFormat(range);
      this.controls.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            format = _pair[0],
            input = _pair[1];

        if (input.tagName === 'SELECT') {
          var option = void 0;
          if (range == null) {
            option = null;
          } else if (formats[format] == null) {
            option = input.querySelector('option[selected]');
          } else if (!Array.isArray(formats[format])) {
            var value = formats[format];
            if (typeof value === 'string') {
              value = value.replace(/\"/g, '\\"');
            }
            option = input.querySelector('option[value="' + value + '"]');
          }
          if (option == null) {
            input.value = ''; // TODO make configurable?
            input.selectedIndex = -1;
          } else {
            option.selected = true;
          }
        } else {
          if (range == null) {
            input.classList.remove('ql-active');
          } else if (input.hasAttribute('value')) {
            // both being null should match (default values)
            // '1' should match with 1 (headers)
            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
            input.classList.toggle('ql-active', isActive);
          } else {
            input.classList.toggle('ql-active', formats[format] != null);
          }
        }
      });
    }
  }]);

  return Toolbar;
}(_module2.default);

Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  var input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add('ql-' + format);
  if (value != null) {
    input.value = value;
  }
  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach(function (controls) {
    var group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(function (control) {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        var format = Object.keys(control)[0];
        var value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  var input = document.createElement('select');
  input.classList.add('ql-' + format);
  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean: function clean() {
      var _this3 = this;

      var range = this.quill.getSelection();
      if (range == null) return;
      if (range.length == 0) {
        var formats = this.quill.getFormat();
        Object.keys(formats).forEach(function (name) {
          // Clean functionality in existing apps only clean inline formats
          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
            _this3.quill.format(name, false);
          }
        });
      } else {
        this.quill.removeFormat(range, _quill2.default.sources.USER);
      }
    },
    direction: function direction(value) {
      var align = this.quill.getFormat()['align'];
      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _quill2.default.sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _quill2.default.sources.USER);
      }
      this.quill.format('direction', value, _quill2.default.sources.USER);
    },
    indent: function indent(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      var indent = parseInt(formats.indent || 0);
      if (value === '+1' || value === '-1') {
        var modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
      }
    },
    link: function link(value) {
      if (value === true) {
        value = prompt('Enter link URL:');
      }
      this.quill.format('link', value, _quill2.default.sources.USER);
    },
    list: function list(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      if (value === 'check') {
        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
          this.quill.format('list', false, _quill2.default.sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
        }
      } else {
        this.quill.format('list', value, _quill2.default.sources.USER);
      }
    }
  }
};

exports.default = Toolbar;
exports.addControls = addControls;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Picker) {
  _inherits(ColorPicker, _Picker);

  function ColorPicker(select, label) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

    _this.label.innerHTML = label;
    _this.container.classList.add('ql-color-picker');
    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'buildItem',
    value: function buildItem(option) {
      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
      var colorLabel = this.label.querySelector('.ql-color-label');
      var value = item ? item.getAttribute('data-value') || '' : '';
      if (colorLabel) {
        if (colorLabel.tagName === 'line') {
          colorLabel.style.stroke = value;
        } else {
          colorLabel.style.fill = value;
        }
      }
    }
  }]);

  return ColorPicker;
}(_picker2.default);

exports.default = ColorPicker;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconPicker = function (_Picker) {
  _inherits(IconPicker, _Picker);

  function IconPicker(select, icons) {
    _classCallCheck(this, IconPicker);

    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

    _this.container.classList.add('ql-icon-picker');
    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    _this.defaultItem = _this.container.querySelector('.ql-selected');
    _this.selectItem(_this.defaultItem);
    return _this;
  }

  _createClass(IconPicker, [{
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
      item = item || this.defaultItem;
      this.label.innerHTML = item.innerHTML;
    }
  }]);

  return IconPicker;
}(_picker2.default);

exports.default = IconPicker;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip(quill, boundsContainer) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', function () {
        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
      });
    }
    this.hide();
  }

  _createClass(Tooltip, [{
    key: 'hide',
    value: function hide() {
      this.root.classList.add('ql-hidden');
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
      // root.scrollTop should be 0 if scrollContainer !== root
      var top = reference.bottom + this.quill.root.scrollTop;
      this.root.style.left = left + 'px';
      this.root.style.top = top + 'px';
      this.root.classList.remove('ql-flip');
      var containerBounds = this.boundsContainer.getBoundingClientRect();
      var rootBounds = this.root.getBoundingClientRect();
      var shift = 0;
      if (rootBounds.right > containerBounds.right) {
        shift = containerBounds.right - rootBounds.right;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.left < containerBounds.left) {
        shift = containerBounds.left - rootBounds.left;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.bottom > containerBounds.bottom) {
        var height = rootBounds.bottom - rootBounds.top;
        var verticalShift = reference.bottom - reference.top + height;
        this.root.style.top = top - verticalShift + 'px';
        this.root.classList.add('ql-flip');
      }
      return shift;
    }
  }, {
    key: 'show',
    value: function show() {
      this.root.classList.remove('ql-editing');
      this.root.classList.remove('ql-hidden');
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

var SnowTheme = function (_BaseTheme) {
  _inherits(SnowTheme, _BaseTheme);

  function SnowTheme(quill, options) {
    _classCallCheck(this, SnowTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-snow');
    return _this;
  }

  _createClass(SnowTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      toolbar.container.classList.add('ql-snow');
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
      if (toolbar.container.querySelector('.ql-link')) {
        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
          toolbar.handlers['link'].call(toolbar, !context.format.link);
        });
      }
    }
  }]);

  return SnowTheme;
}(_base2.default);

SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (value) {
            var range = this.quill.getSelection();
            if (range == null || range.length == 0) return;
            var preview = this.quill.getText(range);
            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = 'mailto:' + preview;
            }
            var tooltip = this.quill.theme.tooltip;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
  }
});

var SnowTooltip = function (_BaseTooltip) {
  _inherits(SnowTooltip, _BaseTooltip);

  function SnowTooltip(quill, bounds) {
    _classCallCheck(this, SnowTooltip);

    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

    _this2.preview = _this2.root.querySelector('a.ql-preview');
    return _this2;
  }

  _createClass(SnowTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
        if (_this3.root.classList.contains('ql-editing')) {
          _this3.save();
        } else {
          _this3.edit('link', _this3.preview.textContent);
        }
        event.preventDefault();
      });
      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
        if (_this3.linkRange != null) {
          var range = _this3.linkRange;
          _this3.restoreFocus();
          _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);
          delete _this3.linkRange;
        }
        event.preventDefault();
        _this3.hide();
      });
      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
        if (range == null) return;
        if (range.length === 0 && source === _emitter2.default.sources.USER) {
          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
              link = _quill$scroll$descend2[0],
              offset = _quill$scroll$descend2[1];

          if (link != null) {
            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
            var preview = _link2.default.formats(link.domNode);
            _this3.preview.textContent = preview;
            _this3.preview.setAttribute('href', preview);
            _this3.show();
            _this3.position(_this3.quill.getBounds(_this3.linkRange));
            return;
          }
        } else {
          delete _this3.linkRange;
        }
        _this3.hide();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
      this.root.removeAttribute('data-mode');
    }
  }]);

  return SnowTooltip;
}(_base.BaseTooltip);

SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

exports.default = SnowTheme;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(29);

var _core2 = _interopRequireDefault(_core);

var _align = __webpack_require__(36);

var _direction = __webpack_require__(38);

var _indent = __webpack_require__(64);

var _blockquote = __webpack_require__(65);

var _blockquote2 = _interopRequireDefault(_blockquote);

var _header = __webpack_require__(66);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(67);

var _list2 = _interopRequireDefault(_list);

var _background = __webpack_require__(37);

var _color = __webpack_require__(26);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(68);

var _italic2 = _interopRequireDefault(_italic);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _script = __webpack_require__(69);

var _script2 = _interopRequireDefault(_script);

var _strike = __webpack_require__(70);

var _strike2 = _interopRequireDefault(_strike);

var _underline = __webpack_require__(71);

var _underline2 = _interopRequireDefault(_underline);

var _image = __webpack_require__(72);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(73);

var _video2 = _interopRequireDefault(_video);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _formula = __webpack_require__(74);

var _formula2 = _interopRequireDefault(_formula);

var _syntax = __webpack_require__(75);

var _syntax2 = _interopRequireDefault(_syntax);

var _toolbar = __webpack_require__(57);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _bubble = __webpack_require__(108);

var _bubble2 = _interopRequireDefault(_bubble);

var _snow = __webpack_require__(62);

var _snow2 = _interopRequireDefault(_snow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,

  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,

  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);

_core2.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent.IndentClass,

  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,

  'formats/blockquote': _blockquote2.default,
  'formats/code-block': _code2.default,
  'formats/header': _header2.default,
  'formats/list': _list2.default,

  'formats/bold': _bold2.default,
  'formats/code': _code.Code,
  'formats/italic': _italic2.default,
  'formats/link': _link2.default,
  'formats/script': _script2.default,
  'formats/strike': _strike2.default,
  'formats/underline': _underline2.default,

  'formats/image': _image2.default,
  'formats/video': _video2.default,

  'formats/list/item': _list.ListItem,

  'modules/formula': _formula2.default,
  'modules/syntax': _syntax2.default,
  'modules/toolbar': _toolbar2.default,

  'themes/bubble': _bubble2.default,
  'themes/snow': _snow2.default,

  'ui/icons': _icons2.default,
  'ui/picker': _picker2.default,
  'ui/icon-picker': _iconPicker2.default,
  'ui/color-picker': _colorPicker2.default,
  'ui/tooltip': _tooltip2.default
}, true);

exports.default = _core2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IdentAttributor = function (_Parchment$Attributor) {
  _inherits(IdentAttributor, _Parchment$Attributor);

  function IdentAttributor() {
    _classCallCheck(this, IdentAttributor);

    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
  }

  _createClass(IdentAttributor, [{
    key: 'add',
    value: function add(node, value) {
      if (value === '+1' || value === '-1') {
        var indent = this.value(node) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }
      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
      }
    }
  }, {
    key: 'canAdd',
    value: function canAdd(node, value) {
      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
    }
  }, {
    key: 'value',
    value: function value(node) {
      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
    }
  }]);

  return IdentAttributor;
}(_parchment2.default.Attributor.Class);

var IndentClass = new IdentAttributor('indent', 'ql-indent', {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

exports.IndentClass = IndentClass;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blockquote = function (_Block) {
  _inherits(Blockquote, _Block);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  return Blockquote;
}(_block2.default);

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';

exports.default = Blockquote;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Block) {
  _inherits(Header, _Block);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, null, [{
    key: 'formats',
    value: function formats(domNode) {
      return this.tagName.indexOf(domNode.tagName) + 1;
    }
  }]);

  return Header;
}(_block2.default);

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

exports.default = Header;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Block) {
  _inherits(ListItem, _Block);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'format',
    value: function format(name, value) {
      if (name === List.blotName && !value) {
        this.replaceWith(_parchment2.default.create(this.statics.scope));
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.prev == null && this.next == null) {
        this.parent.remove();
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(name, value) {
      this.parent.isolate(this.offset(this.parent), this.length());
      if (name === this.parent.statics.blotName) {
        this.parent.replaceWith(name, value);
        return this;
      } else {
        this.parent.unwrap();
        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
      }
    }
  }], [{
    key: 'formats',
    value: function formats(domNode) {
      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
    }
  }]);

  return ListItem;
}(_block2.default);

ListItem.blotName = 'list-item';
ListItem.tagName = 'LI';

var List = function (_Container) {
  _inherits(List, _Container);

  _createClass(List, null, [{
    key: 'create',
    value: function create(value) {
      var tagName = value === 'ordered' ? 'OL' : 'UL';
      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
      if (value === 'checked' || value === 'unchecked') {
        node.setAttribute('data-checked', value === 'checked');
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'OL') return 'ordered';
      if (domNode.tagName === 'UL') {
        if (domNode.hasAttribute('data-checked')) {
          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
        } else {
          return 'bullet';
        }
      }
      return undefined;
    }
  }]);

  function List(domNode) {
    _classCallCheck(this, List);

    var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

    var listEventHandler = function listEventHandler(e) {
      if (e.target.parentNode !== domNode) return;
      var format = _this2.statics.formats(domNode);
      var blot = _parchment2.default.find(e.target);
      if (format === 'checked') {
        blot.format('list', 'unchecked');
      } else if (format === 'unchecked') {
        blot.format('list', 'checked');
      }
    };

    domNode.addEventListener('touchstart', listEventHandler);
    domNode.addEventListener('mousedown', listEventHandler);
    return _this2;
  }

  _createClass(List, [{
    key: 'format',
    value: function format(name, value) {
      if (this.children.length > 0) {
        this.children.tail.format(name, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats() {
      // We don't inherit from FormatBlot
      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot instanceof ListItem) {
        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
      } else {
        var index = ref == null ? this.length() : ref.offset(this);
        var after = this.split(index);
        after.parent.insertBefore(blot, after);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      if (target.statics.blotName !== this.statics.blotName) {
        var item = _parchment2.default.create(this.statics.defaultChild);
        target.moveChildren(item);
        this.appendChild(item);
      }
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
    }
  }]);

  return List;
}(_container2.default);

List.blotName = 'list';
List.scope = _parchment2.default.Scope.BLOCK_BLOT;
List.tagName = ['OL', 'UL'];
List.defaultChild = 'list-item';
List.allowedChildren = [ListItem];

exports.ListItem = ListItem;
exports.default = List;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Italic = function (_Bold) {
  _inherits(Italic, _Bold);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
  }

  return Italic;
}(_bold2.default);

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];

exports.default = Italic;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_Inline) {
  _inherits(Script, _Inline);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  _createClass(Script, null, [{
    key: 'create',
    value: function create(value) {
      if (value === 'super') {
        return document.createElement('sup');
      } else if (value === 'sub') {
        return document.createElement('sub');
      } else {
        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'SUB') return 'sub';
      if (domNode.tagName === 'SUP') return 'super';
      return undefined;
    }
  }]);

  return Script;
}(_inline2.default);

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];

exports.default = Script;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Strike = function (_Inline) {
  _inherits(Strike, _Inline);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
  }

  return Strike;
}(_inline2.default);

Strike.blotName = 'strike';
Strike.tagName = 'S';

exports.default = Strike;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Underline = function (_Inline) {
  _inherits(Underline, _Inline);

  function Underline() {
    _classCallCheck(this, Underline);

    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
  }

  return Underline;
}(_inline2.default);

Underline.blotName = 'underline';
Underline.tagName = 'U';

exports.default = Underline;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _link = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['alt', 'height', 'width'];

var Image = function (_Parchment$Embed) {
  _inherits(Image, _Parchment$Embed);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
      if (typeof value === 'string') {
        node.setAttribute('src', this.sanitize(value));
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'match',
    value: function match(url) {
      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
      );
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Image;
}(_parchment2.default.Embed);

Image.blotName = 'image';
Image.tagName = 'IMG';

exports.default = Image;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = __webpack_require__(4);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['height', 'width'];

var Video = function (_BlockEmbed) {
  _inherits(Video, _BlockEmbed);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
      node.setAttribute('frameborder', '0');
      node.setAttribute('allowfullscreen', true);
      node.setAttribute('src', this.sanitize(value));
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _link2.default.sanitize(url);
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Video;
}(_block.BlockEmbed);

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';

exports.default = Video;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormulaBlot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormulaBlot = function (_Embed) {
  _inherits(FormulaBlot, _Embed);

  function FormulaBlot() {
    _classCallCheck(this, FormulaBlot);

    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
  }

  _createClass(FormulaBlot, null, [{
    key: 'create',
    value: function create(value) {
      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
      if (typeof value === 'string') {
        window.katex.render(value, node, {
          throwOnError: false,
          errorColor: '#f00'
        });
        node.setAttribute('data-value', value);
      }
      return node;
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('data-value');
    }
  }]);

  return FormulaBlot;
}(_embed2.default);

FormulaBlot.blotName = 'formula';
FormulaBlot.className = 'ql-formula';
FormulaBlot.tagName = 'SPAN';

var Formula = function (_Module) {
  _inherits(Formula, _Module);

  _createClass(Formula, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(FormulaBlot, true);
    }
  }]);

  function Formula() {
    _classCallCheck(this, Formula);

    var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
    return _this2;
  }

  return Formula;
}(_module2.default);

exports.FormulaBlot = FormulaBlot;
exports.default = Formula;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyntaxCodeBlock = function (_CodeBlock) {
  _inherits(SyntaxCodeBlock, _CodeBlock);

  function SyntaxCodeBlock() {
    _classCallCheck(this, SyntaxCodeBlock);

    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlock, [{
    key: 'replaceWith',
    value: function replaceWith(block) {
      this.domNode.textContent = this.domNode.textContent;
      this.attach();
      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
    }
  }, {
    key: 'highlight',
    value: function highlight(_highlight) {
      var text = this.domNode.textContent;
      if (this.cachedText !== text) {
        if (text.trim().length > 0 || this.cachedText == null) {
          this.domNode.innerHTML = _highlight(text);
          this.domNode.normalize();
          this.attach();
        }
        this.cachedText = text;
      }
    }
  }]);

  return SyntaxCodeBlock;
}(_code2.default);

SyntaxCodeBlock.className = 'ql-syntax';

var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
  scope: _parchment2.default.Scope.INLINE
});

var Syntax = function (_Module) {
  _inherits(Syntax, _Module);

  _createClass(Syntax, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(CodeToken, true);
      _quill2.default.register(SyntaxCodeBlock, true);
    }
  }]);

  function Syntax(quill, options) {
    _classCallCheck(this, Syntax);

    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

    if (typeof _this2.options.highlight !== 'function') {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }
    var timer = null;
    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.highlight();
        timer = null;
      }, _this2.options.interval);
    });
    _this2.highlight();
    return _this2;
  }

  _createClass(Syntax, [{
    key: 'highlight',
    value: function highlight() {
      var _this3 = this;

      if (this.quill.selection.composing) return;
      this.quill.update(_quill2.default.sources.USER);
      var range = this.quill.getSelection();
      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
        code.highlight(_this3.options.highlight);
      });
      this.quill.update(_quill2.default.sources.SILENT);
      if (range != null) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      }
    }
  }]);

  return Syntax;
}(_module2.default);

Syntax.DEFAULTS = {
  highlight: function () {
    if (window.hljs == null) return null;
    return function (text) {
      var result = window.hljs.highlightAuto(text);
      return result.value;
    };
  }(),
  interval: 1000
};

exports.CodeBlock = SyntaxCodeBlock;
exports.CodeToken = CodeToken;
exports.default = Syntax;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleTooltip = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

var BubbleTheme = function (_BaseTheme) {
  _inherits(BubbleTheme, _BaseTheme);

  function BubbleTheme(quill, options) {
    _classCallCheck(this, BubbleTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-bubble');
    return _this;
  }

  _createClass(BubbleTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
      this.tooltip.root.appendChild(toolbar.container);
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
    }
  }]);

  return BubbleTheme;
}(_base2.default);

BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }
      }
    }
  }
});

var BubbleTooltip = function (_BaseTooltip) {
  _inherits(BubbleTooltip, _BaseTooltip);

  function BubbleTooltip(quill, bounds) {
    _classCallCheck(this, BubbleTooltip);

    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
        _this2.show();
        // Lock our width so we will expand beyond our offsetParent boundaries
        _this2.root.style.left = '0px';
        _this2.root.style.width = '';
        _this2.root.style.width = _this2.root.offsetWidth + 'px';
        var lines = _this2.quill.getLines(range.index, range.length);
        if (lines.length === 1) {
          _this2.position(_this2.quill.getBounds(range));
        } else {
          var lastLine = lines[lines.length - 1];
          var index = _this2.quill.getIndex(lastLine);
          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
          _this2.position(_bounds);
        }
      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
        _this2.hide();
      }
    });
    return _this2;
  }

  _createClass(BubbleTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('.ql-close').addEventListener('click', function () {
        _this3.root.classList.remove('ql-editing');
      });
      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
        // Let selection be restored by toolbar handlers before repositioning
        setTimeout(function () {
          if (_this3.root.classList.contains('ql-hidden')) return;
          var range = _this3.quill.getSelection();
          if (range != null) {
            _this3.position(_this3.quill.getBounds(range));
          }
        }, 1);
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.show();
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
      var arrow = this.root.querySelector('.ql-tooltip-arrow');
      arrow.style.marginLeft = '';
      if (shift === 0) return shift;
      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
    }
  }]);

  return BubbleTooltip;
}(_base.BaseTooltip);

BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

exports.BubbleTooltip = BubbleTooltip;
exports.default = BubbleTheme;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ })
/******/ ])["default"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/quill/dist/quill.snow.css":
/*!************************************************!*\
  !*** ./node_modules/quill/dist/quill.snow.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./quill.snow.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/quill/dist/quill.snow.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--6-2!../../../vue-loader/lib??vue-loader-options!./map.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--6-2!../../../vue-loader/lib??vue-loader-options!./streetViewPanorama.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js ***!
  \******************************************************************/
/*! exports provided: default, VueAutosuggest, DefaultSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueAutosuggest", function() { return VueAutosuggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSection", function() { return DefaultSection; });
var DefaultSection={name:"default-section",props:{section:{type:Object,required:!0},currentIndex:{type:[Number,String],required:!1,default:1/0},updateCurrentIndex:{type:Function,required:!0},searchInput:{type:[String,Number],required:!1,default:""},renderSuggestion:{type:Function,required:!1},normalizeItemFunction:{type:Function,required:!0}},computed:{list:function(){var e=this.section,t=e.limit,n=e.data;return n.length<t&&(t=n.length),n.slice(0,t)},className:function(){return"autosuggest__results_title autosuggest__results_title_"+this.section.name}},methods:{getItemIndex:function(e){return this.section.start_index+e},getItemByIndex:function(e){return this.section.data[e]},getLabelByIndex:function(e){return this.section.data[e]},onMouseEnter:function(e){this.updateCurrentIndex(e.currentTarget.getAttribute("data-suggestion-index"))},onMouseLeave:function(){this.updateCurrentIndex(null)}},render:function(e){var t=this,n=this.section.label?e("li",{class:this.className},this.section.label):"";return e("ul",{attrs:{role:"listbox","aria-labelledby":"autosuggest"}},[n,this.list.map(function(n,s){var i=t.normalizeItemFunction(t.section.name,t.section.type,t.getLabelByIndex(s),n);return e("li",{attrs:{role:"option","data-suggestion-index":t.getItemIndex(s),"data-section-name":t.section.name,id:"autosuggest__results_item-"+t.getItemIndex(s)},key:t.getItemIndex(s),class:{"autosuggest__results_item-highlighted":t.getItemIndex(s)==t.currentIndex,autosuggest__results_item:!0},on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[t.renderSuggestion?t.renderSuggestion(i):t.$scopedSlots.default&&t.$scopedSlots.default({key:s,suggestion:i})])})])}};function hasClass(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){e.classList&&e.classList.remove(t)}var VueAutosuggest={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.componentAttrIdAutosuggest}},[n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],class:[e.isOpen?"autosuggest__input-open":"",e.inputProps.class],attrs:{type:"text",autocomplete:e.inputProps.autocomplete,role:"combobox","aria-autocomplete":"list","aria-owns":"autosuggest__results","aria-activedescendant":e.isOpen&&null!==e.currentIndex?"autosuggest__results_item-"+e.currentIndex:"","aria-haspopup":e.isOpen?"true":"false","aria-expanded":e.isOpen?"true":"false"},domProps:{value:e.searchInput},on:{keydown:e.handleKeyStroke,input:function(t){t.target.composing||(e.searchInput=t.target.value)}}},"input",e.inputProps,!1),e.listeners)),e._v(" "),n("div",{class:e.componentAttrClassAutosuggestResultsContainer},[e.getSize()>0&&!e.loading?n("div",{class:e.componentAttrClassAutosuggestResults,attrs:{"aria-labelledby":e.componentAttrIdAutosuggest}},[e._t("header"),e._v(" "),e._l(e.computedSections,function(t,s){return n(t.type,{key:e.getSectionRef(s),ref:e.getSectionRef(s),refInFor:!0,tag:"component",attrs:{"current-index":e.currentIndex,"normalize-item-function":e.normalizeItem,"render-suggestion":e.renderSuggestion,section:t,"update-current-index":e.updateCurrentIndex,"search-input":e.searchInput},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.suggestion,s=t._key;return[e._t("default",[e._v(" "+e._s(n.item)+" ")],{suggestion:n,index:s})]}}])})}),e._v(" "),e._t("footer")],2):e._e()])])},staticRenderFns:[],name:"Autosuggest",components:{DefaultSection:DefaultSection},props:{inputProps:{type:Object,required:!0,default:function(){return{id:{type:String,default:"autosuggest__input"},onInputChange:{type:Function,required:!0},initialValue:{type:String,required:!1},onClick:{type:Function,required:!1}}}},limit:{type:Number,required:!1,default:1/0},suggestions:{type:Array,required:!0,default:function(){return[]}},renderSuggestion:{type:Function,required:!1,default:null},getSuggestionValue:{type:Function,required:!1,default:function(e){var t=e.item;return"object"==typeof t&&t.hasOwnProperty("name")?t.name:t}},shouldRenderSuggestions:{type:Function,required:!1,default:function(){return!0}},sectionConfigs:{type:Object,required:!1,default:function(){return{default:{onSelected:null}}}},onSelected:{type:Function,required:!1,default:null},componentAttrIdAutosuggest:{type:String,required:!1,default:"autosuggest"},componentAttrClassAutosuggestResultsContainer:{type:String,required:!1,default:"autosuggest__results-container"},componentAttrClassAutosuggestResults:{type:String,required:!1,default:"autosuggest__results"}},data:function(){return{searchInput:"",searchInputOriginal:null,currentIndex:null,currentItem:null,loading:!1,didSelectFromOptions:!1,computedSections:[],computedSize:0,internal_inputProps:{},defaultInputProps:{name:"q",initialValue:"",autocomplete:"off",class:"form-control"},defaultSectionConfig:{name:"default",type:"default-section"},clientXMouseDownInitial:null}},computed:{listeners:function(){var e=this;return Object.assign({},this.$listeners,{focus:function(t){e.$listeners.focus&&e.$listeners.focus(t),e.inputProps.onFocus&&e.onFocus(t)},blur:function(t){e.$listeners.blur&&e.$listeners.blur(t),e.inputProps.onBlur&&e.onBlur(t)},click:function(){e.loading=!1,e.$listeners.click&&e.$listeners.click(e.currentItem),e.inputProps.onClick&&e.onClick(e.currentItem),e.$nextTick(function(){e.ensureItemVisible(e.currentItem,e.currentIndex)})},selected:function(){e.currentItem&&e.sectionConfigs[e.currentItem.name]&&e.sectionConfigs[e.currentItem.name].onSelected?e.sectionConfigs[e.currentItem.name].onSelected(e.currentItem,e.searchInputOriginal):e.sectionConfigs.default.onSelected?e.sectionConfigs.default.onSelected(null,e.searchInputOriginal):e.$listeners.selected?e.$emit("selected",e.currentItem):e.onSelected&&e._onSelected(e.currentItem),e.setChangeItem(null)}})},isOpen:function(){return this.getSize()>0&&this.shouldRenderSuggestions()&&!this.loading}},watch:{searchInput:function(e,t){this.value=e,this.didSelectFromOptions||(this.searchInputOriginal=this.value,this.currentIndex=null,this.internal_inputProps.onInputChange(e,t))},suggestions:{immediate:!0,handler:function(){var e=this;this.computedSections=[],this.computedSize=0,this.suggestions.forEach(function(t){if(t.data){var n=t.name?t.name:e.defaultSectionConfig.name,s=e.sectionConfigs[n],i=s.type,u=s.limit,o=s.label;u=u||e.limit,i=i||e.defaultSectionConfig.type,u=u||1/0,u=t.data.length<u?t.data.length:u;var r={name:n,label:o=o||t.label,type:i,limit:u,data:t.data,start_index:e.computedSize,end_index:e.computedSize+u-1};e.computedSections.push(r),e.computedSize+=u}},this)}}},created:function(){this.internal_inputProps=Object.assign({},this.defaultInputProps,this.inputProps),this.inputProps.autocomplete=this.internal_inputProps.autocomplete,this.inputProps.name=this.internal_inputProps.name,this.inputProps.class=this.internal_inputProps.class,this.searchInput=this.internal_inputProps.initialValue,this.loading=this.shouldRenderSuggestions()},mounted:function(){document.addEventListener("mouseup",this.onDocumentMouseUp),document.addEventListener("mousedown",this.onDocumentMouseDown)},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousedown",this.onDocumentMouseDown)},methods:{getSectionRef:function(e){return"computed_section_"+e},getSize:function(){return this.computedSize},getItemByIndex:function(e){var t=!1;if(null===e)return t;for(var n=0;n<this.computedSections.length;n++)if(e>=this.computedSections[n].start_index&&e<=this.computedSections[n].end_index){var s=e-this.computedSections[n].start_index,i=this.$refs["computed_section_"+n][0];if(i){t=this.normalizeItem(this.computedSections[n].name,this.computedSections[n].type,i.getLabelByIndex(s),i.getItemByIndex(s));break}}return t},handleKeyStroke:function(e){var t=e.keyCode;if(!([16,9,18,91,93].indexOf(t)>-1))switch(this.loading=!1,this.didSelectFromOptions=!1,t){case 40:case 38:if(e.preventDefault(),this.isOpen){if(38===t&&null===this.currentIndex)break;var n=40===t?1:-1,s=parseInt(this.currentIndex)+n;this.setCurrentIndex(s,this.getSize(),n),this.didSelectFromOptions=!0,this.getSize()>0&&this.currentIndex>=0?(this.setChangeItem(this.getItemByIndex(this.currentIndex)),this.didSelectFromOptions=!0):-1==this.currentIndex&&(this.currentIndex=null,this.searchInput=this.searchInputOriginal,e.preventDefault())}break;case 13:if(e.preventDefault(),229===t)break;this.getSize()>0&&this.currentIndex>=0&&(this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.didSelectFromOptions=!0),this.loading=!0,this.listeners.selected(this.didSelectFromOptions);break;case 27:this.isOpen&&(this.loading=!0,this.currentIndex=null,this.searchInput=this.searchInputOriginal,e.preventDefault())}},setChangeItem:function(e,t){void 0===t&&(t=!1),null!==this.currentIndex&&e?e&&(this.searchInput=this.getSuggestionValue(e),this.currentItem=e,t&&(this.searchInputOriginal=this.getSuggestionValue(e)),this.ensureItemVisible(e,this.currentIndex)):this.currentItem=null},normalizeItem:function(e,t,n,s){return{name:e,type:t,label:n,item:s}},ensureItemVisible:function(e,t){var n=this.$el.querySelector("."+this.componentAttrClassAutosuggestResults);if(e&&(t||0===t)&&n){var s=this.$el.querySelector("#autosuggest__results_item-"+t);if(s){var i=n.clientHeight,u=n.scrollTop,o=s.clientHeight,r=s.offsetTop;o+r>=u+i?n.scrollTop=o+r-i:r<u&&u>0&&(n.scrollTop=r)}}},updateCurrentIndex:function(e){this.currentIndex=e},clickedOnScrollbar:function(e,t){var n=this.$el.querySelector("."+this.componentAttrClassAutosuggestResults),s=n&&n.clientWidth<=t+17&&t+17<=n.clientWidth+34;return"DIV"===e.target.tagName&&n&&s||!1},onDocumentMouseDown:function(e){var t=e.target.getBoundingClientRect?e.target.getBoundingClientRect():0;this.clientXMouseDownInitial=e.clientX-t.left},onDocumentMouseUp:function(e){var t=this;this.$el.contains(e.target)&&"INPUT"===e.target.tagName||this.clickedOnScrollbar(e,this.clientXMouseDownInitial)||(null!==this.currentIndex&&this.isOpen?(this.loading=!0,this.didSelectFromOptions=!0,this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.$nextTick(function(){t.listeners.selected(!0)})):this.loading=this.shouldRenderSuggestions())},setCurrentIndex:function(e,t,n){void 0===t&&(t=-1);var s=e;null===this.currentIndex&&(s=0),this.currentIndex<0&&1===n&&(s=0),e>=t&&(s=0),this.currentIndex=s;var i=this.$el.querySelector("#autosuggest__results_item-"+this.currentIndex),u="autosuggest__results_item-highlighted";this.$el.querySelector("."+u)&&removeClass(this.$el.querySelector("."+u),u),i&&addClass(i,u)},_onSelected:function(e){console.warn('onSelected is deprecated. Please use click event listener \n\ne.g. <vue-autosuggest ... @selected="onSelectedMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.onSelected&&this.onSelected(e)},onClick:function(e){console.warn('inputProps.onClick is deprecated. Please use native click event listener \n\ne.g. <vue-autosuggest ... @click="clickMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.internal_inputProps.onClick&&this.internal_inputProps.onClick(e)},onBlur:function(e){console.warn('inputProps.onBlur is deprecated. Please use native blur event listener \n\ne.g. <vue-autosuggest ... @blur="blurMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.internal_inputProps.onBlur&&this.internal_inputProps.onBlur(e)},onFocus:function(e){console.warn('inputProps.onFocus is deprecated. Please use native focus event listener \n\ne.g. <vue-autosuggest ... @focus="focusMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.internal_inputProps.onFocus&&this.internal_inputProps.onFocus(e)}}},VueAutosuggestPlugin={install:function(e){e.component("vue-autosuggest-default-section",DefaultSection),e.component("vue-autosuggest",VueAutosuggest)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(VueAutosuggestPlugin);/* harmony default export */ __webpack_exports__["default"] = (VueAutosuggestPlugin);


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'switches',

    props: {
        typeBold: {
            default: false
        },

        value: {
            default: false
        },

        disabled: {
            default: false
        },

        label: {
            default: ''
        },

        textEnabled: {
            default: ''
        },

        textDisabled: {
            default: ''
        },

        color: {
            default: 'default'
        },

        theme: {
            default: 'default'
        },

        emitOnMount: {
            default: true
        }
    },

    mounted () {
        if(this.emitOnMount) {
            this.$emit('input', this.value)
        }
    },

    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },

    computed: {
        classObject () {

            const { color, value, theme, typeBold, disabled } = this;

            return {
                'vue-switcher' : true,
                ['vue-switcher--unchecked'] : !value,
                ['vue-switcher--disabled'] : disabled,
                ['vue-switcher--bold']: typeBold,
                ['vue-switcher--bold--unchecked']: typeBold && !value,
                [`vue-switcher-theme--${theme}`] : color,
                [`vue-switcher-color--${color}`] : color,
            };

        },

        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
});



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ((function (x) { return x.default || x })(__webpack_require__(/*! ./autocompleteImpl.js */ "./node_modules/vue2-google-maps/dist/components/autocompleteImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ((function (x) { return x.default || x })(__webpack_require__(/*! ./infoWindowImpl.js */ "./node_modules/vue2-google-maps/dist/components/infoWindowImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ((function (x) { return x.default || x })(__webpack_require__(/*! ./mapImpl.js */ "./node_modules/vue2-google-maps/dist/components/mapImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ((function (x) { return x.default || x })(__webpack_require__(/*! ./streetViewPanoramaImpl.js */ "./node_modules/vue2-google-maps/dist/components/streetViewPanoramaImpl.js")));


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { class: _vm.classObject }, [
    _vm.shouldShowLabel
      ? _c("span", { staticClass: "vue-switcher__label" }, [
          _vm.label
            ? _c("span", { domProps: { textContent: _vm._s(_vm.label) } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.label && _vm.value
            ? _c("span", { domProps: { textContent: _vm._s(_vm.textEnabled) } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.label && !_vm.value
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.textDisabled) }
              })
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      attrs: { type: "checkbox", disabled: _vm.disabled },
      domProps: { checked: _vm.value },
      on: { change: _vm.trigger }
    }),
    _vm._v(" "),
    _c("div")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "input",
    _vm._g(_vm._b({ ref: "input" }, "input", _vm.$attrs, false), _vm.$listeners)
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("div", { ref: "flyaway" }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-map-container" },
    [
      _c("div", { ref: "vue-map", staticClass: "vue-map" }),
      _vm._v(" "),
      _c("div", { staticClass: "vue-map-hidden" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm._t("visible")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", [
    _c("span", { domProps: { textContent: _vm._s(_vm.label) } }),
    _vm._v(" "),
    _c("input", {
      ref: "input",
      class: _vm.className,
      attrs: { type: "text", placeholder: _vm.placeholder }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-street-view-pano-container" },
    [
      _c("div", {
        ref: "vue-street-view-pano",
        staticClass: "vue-street-view-pano"
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-quill-editor/dist/vue-quill-editor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js")):undefined}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,e),l.l=!0,l.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=2)}([function(e,n){e.exports=t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),l=n.n(i),o=n(6),r=n(5),u=r(l.a,o.a,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.quillEditor=e.Quill=void 0;var l=n(0),o=i(l),r=n(1),u=i(r),s=window.Quill||o.default,a=function(t,e){e&&(u.default.props.globalOptions.default=function(){return e}),t.component(u.default.name,u.default)},c={Quill:s,quillEditor:u.default,install:a};e.default=c,e.Quill=s,e.quillEditor=u.default,e.install=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={theme:"snow",boundary:document.body,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"Insert text here ...",readOnly:!1}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),o=i(l),r=n(3),u=i(r),s=window.Quill||o.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var l=arguments[i];if(null!=l)for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},writable:!0,configurable:!0}),e.default={name:"quill-editor",data:function(){return{_options:{},_content:"",defaultOptions:u.default}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initialize:function(){var t=this;this.$el&&(this._options=Object.assign({},this.defaultOptions,this.globalOptions,this.options),this.quill=new s(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on("selection-change",function(e){e?t.$emit("focus",t.quill):t.$emit("blur",t.quill)}),this.quill.on("text-change",function(e,n,i){var l=t.$refs.editor.children[0].innerHTML,o=t.quill,r=t.quill.getText();"<p><br></p>"===l&&(l=""),t._content=l,t.$emit("input",t._content),t.$emit("change",{html:l,text:r,quill:o})}),this.$emit("ready",this.quill))}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}}},function(t,e){t.exports=function(t,e,n,i,l,o){var r,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,u=t.default);var a="function"==typeof u?u.options:u;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),l&&(a._scopeId=l);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},a._ssrRegister=c):i&&(c=i),c){var d=a.functional,f=d?a.render:a.beforeCreate;d?(a._injectStyles=c,a.render=function(t,e){return c.call(e),f(t,e)}):a.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:u,options:a}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quill-editor"},[t._t("toolbar"),t._v(" "),n("div",{ref:"editor"})],2)},l=[],o={render:i,staticRenderFns:l};e.a=o}])});

/***/ }),

/***/ "./node_modules/vue-slider-component/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-slider-component/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){i(7);var s=i(5)(i(1),i(6),null,null);t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t="undefined"!=typeof window?window.devicePixelRatio||1:1;return function(e){return Math.round(e*t)/t}}();e.default={name:"VueSliderComponent",props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},dotWidth:{type:Number,required:!1},dotHeight:{type:Number,required:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:[Boolean,Array],default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},staticValue:{type:[String,Number]},staticLabel:{type:String},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1},value:{type:[String,Number,Array,Object],default:0},piecewiseLabel:{type:Boolean,default:!1},debug:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},minRange:{type:Number},maxRange:{type:Number},processDragable:{type:Boolean,default:!1},useKeyboard:{type:Boolean,default:!1},actionsKeyboard:{type:Array,default:function(){return[function(t){return t-1},function(t){return t+1}]}},piecewiseFilter:{type:Function},tooltipMerge:{type:Boolean,default:!0},startAnimation:{type:Boolean,default:!1},enableCross:{type:Boolean,default:!0},sliderStyle:[Array,Object,Function],focusStyle:[Array,Object,Function],tooltipDir:[Array,String],formatter:[String,Function],mergeFormatter:[String,Function],piecewiseStyle:Object,disabledStyle:Object,piecewiseActiveStyle:Object,processStyle:Object,processClass:String,bgStyle:Object,tooltipStyle:[Array,Object,Function],tooltipClass:String,disabledDotStyle:[Array,Object,Function],labelStyle:Object,labelActiveStyle:Object},data:function(){return{flag:!1,dragFlag:!1,crossFlag:!1,keydownFlag:null,focusFlag:!1,processFlag:!1,processSign:null,size:0,fixedValue:0,focusSlider:0,currentValue:0,currentSlider:0,isComponentExists:!0,isMounted:!1}},computed:{staticPosition:function(){var t=(this.staticValue-this.minimum)/this.spacing*this.gap,e=s(("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1)),i="vertical"===this.direction?"translateY("+e+"px)":"translateX("+e+"px)";return{transform:i,WebkitTransform:i,msTransform:i}},dotWidthVal:function(){return"number"==typeof this.dotWidth?this.dotWidth:this.dotSize},dotHeightVal:function(){return"number"==typeof this.dotHeight?this.dotHeight:this.dotSize},flowDirection:function(){return"vue-slider-"+this.direction+(this.reverse?"-reverse":"")},tooltipMergedPosition:function(){if(!this.isMounted)return{};var t=this.tooltipDirection[0];if(this.$refs.dot0){if("vertical"===this.direction){var e={};return e[t]="-"+(this.dotHeightVal/2-this.width/2+9)+"px",e}var i={};return i[t]="-"+(this.dotWidthVal/2-this.height/2+9)+"px",i.left="50%",i}},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},disabledArray:function(){return Array.isArray(this.disabled)?this.disabled:[this.disabled,this.disabled]},boolDisabled:function(){return this.disabledArray.every(function(t){return!0===t})},isDisabled:function(){return"none"===this.eventType||this.boolDisabled},disabledClass:function(){return this.boolDisabled?"vue-slider-disabled":""},stateClass:function(){return{"vue-slider-state-process-drag":this.processFlag,"vue-slider-state-drag":this.flag&&!this.processFlag&&!this.keydownFlag,"vue-slider-state-focus":this.focusFlag}},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},currentIndex:function(){return this.isRange?this.data?this.currentValue:[this.getIndexByValue(this.currentValue[0]),this.getIndexByValue(this.currentValue[1])]:this.data?this.currentValue:this.getIndexByValue(this.currentValue)},indexRange:function(){return this.isRange?this.currentIndex:[0,this.currentIndex]},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},isFixed:function(){return this.fixed||this.minRange},limit:function(){return this.isRange?this.isFixed?[[0,(this.total-this.fixedValue)*this.gap],[this.fixedValue*this.gap,this.size]]:[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?this.isFixed?[[this.minimum,this.maximum-this.fixedValue*(this.spacing*this.multiple)/this.multiple],[this.minimum+this.fixedValue*(this.spacing*this.multiple)/this.multiple,this.maximum]]:[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},idleSlider:function(){return 0===this.currentSlider?1:0},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotHeightVal/2+"px "+this.dotWidthVal/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:"function"==typeof this.sliderStyle?this.sliderStyle(this.val,this.currentIndex):this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},focusStyles:function(){return Array.isArray(this.focusStyle)?this.isRange?this.focusStyle:this.focusStyle[1]:"function"==typeof this.focusStyle?this.focusStyle(this.val,this.currentIndex):this.isRange?[this.focusStyle,this.focusStyle]:this.focusStyle},disabledDotStyles:function(){var t=this.disabledDotStyle;if(Array.isArray(t))return t;if("function"==typeof t){var e=t(this.val,this.currentIndex);return Array.isArray(e)?e:[e,e]}return t?[t,t]:[{backgroundColor:"#ccc"},{backgroundColor:"#ccc"}]},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:"function"==typeof this.tooltipStyle?this.tooltipStyle(this.val,this.currentIndex):this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",left:-(this.dotWidthVal-this.width)/2+"px"}:{width:this.dotWidthVal+"px",height:this.dotHeightVal+"px",top:-(this.dotHeightVal-this.height)/2+"px"}},piecewiseDotStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotWrap:function(){if(!this.piecewise&&!this.piecewiseLabel)return!1;for(var t=[],e=0;e<=this.total;e++){var i="vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:0}:{left:this.gap*e-this.height/2+"px",top:0},s=this.reverse?this.total-e:e,r=this.data?this.data[s]:this.spacing*s+this.min;this.piecewiseFilter&&!this.piecewiseFilter({index:s,label:r})||t.push({style:i,index:s,label:this.formatter?this.formatting(r):r})}return t}},watch:{value:function(t){this.flag||this.setValue(t,!0)},max:function(t){if(t<this.min)return this.printError("The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh()})},fixed:function(){this.computedFixedValue()},minRange:function(){this.computedFixedValue()},reverse:function(){this.$refs.process.style.cssText="",this.refresh()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousedown",this.blurSlider),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),document.addEventListener("keydown",this.handleKeydown),document.addEventListener("keyup",this.handleKeyup),window.addEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.addEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.addEventListener("transitionend",this.handleOverlapTooltip))},unbindEvents:function(){document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousedown",this.blurSlider),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd),document.removeEventListener("keydown",this.handleKeydown),document.removeEventListener("keyup",this.handleKeyup),window.removeEventListener("resize",this.refresh),this.isRange&&this.tooltipMerge&&(this.$refs.dot0.removeEventListener("transitionend",this.handleOverlapTooltip),this.$refs.dot1.removeEventListener("transitionend",this.handleOverlapTooltip))},handleKeydown:function(t){if(!this.useKeyboard||!this.focusFlag)return!1;switch(t.keyCode){case 37:case 40:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[0]);break;case 38:case 39:t.preventDefault(),this.keydownFlag=!0,this.flag=!0,this.changeFocusSlider(this.actionsKeyboard[1])}},handleKeyup:function(){this.keydownFlag&&(this.keydownFlag=!1,this.flag=!1)},changeFocusSlider:function(t){var e=this;if(this.isRange){var i=this.currentIndex.map(function(i,s){if(s===e.focusSlider||e.fixed){var r=t(i),o=e.fixed?e.valueLimit[s]:[0,e.total];if(r<=o[1]&&r>=o[0])return r}return i});i[0]>i[1]&&(this.focusSlider=0===this.focusSlider?1:0,i=i.reverse()),this.setIndex(i)}else this.setIndex(t(this.currentIndex))},blurSlider:function(t){var e=this.isRange?this.$refs["dot"+this.focusSlider]:this.$refs.dot;if(!e||e===t.target||e.contains(t.target))return!1;this.focusFlag=!1},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},mergeFormatting:function(t,e){return"string"==typeof this.mergeFormatter?this.mergeFormatter.replace(/\{(value1|value2)\}/g,function(i,s){return"value1"===s?t:e}):this.mergeFormatter(t,e)},getPos:function(t){return this.realTime&&this.getStaticData(),"vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},processClick:function(t){this.fixed&&t.stopPropagation()},wrapClick:function(t){var e=this;if(this.isDisabled||!this.clickable||this.processFlag||this.dragFlag)return!1;var i=this.getPos(t);if(this.isRange)if(this.disabledArray.every(function(t){return!1===t}))this.currentSlider=i>(this.position[1]-this.position[0])/2+this.position[0]?1:0;else if(this.disabledArray[0]){if(i<this.position[0])return!1;this.currentSlider=1}else if(this.disabledArray[1]){if(i>this.position[1])return!1;this.currentSlider=0}if(this.disabledArray[this.currentSlider])return!1;if(this.setValueOnPos(i),this.isRange&&this.tooltipMerge){var s=setInterval(function(){return e.handleOverlapTooltip()},16.7);setTimeout(function(){return window.clearInterval(s)},1e3*this.speed)}},moveStart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2];if(this.disabledArray[e])return!1;if(this.stopPropagation&&t.stopPropagation(),this.isRange){if(this.currentSlider=e,i){if(!this.processDragable)return!1;this.processFlag=!0,this.processSign={pos:this.position,start:this.getPos(t.targetTouches&&t.targetTouches[0]?t.targetTouches[0]:t)}}this.enableCross||this.val[0]!==this.val[1]||(this.crossFlag=!0)}!i&&this.useKeyboard&&(this.focusFlag=!0,this.focusSlider=e),this.flag=!0,this.$emit("drag-start",this)},moving:function(t){if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.processFlag?(this.currentSlider=0,this.setValueOnPos(this.processSign.pos[0]+this.getPos(t)-this.processSign.start,!0),this.currentSlider=1,this.setValueOnPos(this.processSign.pos[1]+this.getPos(t)-this.processSign.start,!0)):(this.dragFlag=!0,this.setValueOnPos(this.getPos(t),!0)),this.isRange&&this.tooltipMerge&&this.handleOverlapTooltip(),this.$emit("drag",this)},moveEnd:function(t){var e=this;if(this.stopPropagation&&t.stopPropagation(),!this.flag)return!1;this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,window.setTimeout(function(){e.crossFlag=!1,e.dragFlag=!1,e.processFlag=!1},0),this.setPosition()},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit,r=Math.round(t/this.gap);if(t>=i[0]&&t<=i[1]){var o=this.getValueByIndex(r);this.setTransform(t),this.setCurrentValue(o,e),this.isRange&&(this.fixed||this.isLessRange(t,r))&&(this.setTransform(t+this.fixedValue*this.gap*(0===this.currentSlider?1:-1),!0),this.setCurrentValue((o*this.multiple+this.fixedValue*this.spacing*this.multiple*(0===this.currentSlider?1:-1))/this.multiple,e,!0))}else{var n=t<i[0]?0:1,l=0===n?1:0;this.setTransform(i[n]),this.setCurrentValue(s[n]),this.isRange&&(this.fixed||this.isLessRange(t,r))?(this.setTransform(this.limit[this.idleSlider][n],!0),this.setCurrentValue(this.valueLimit[this.idleSlider][n],e,!0)):!this.isRange||!this.enableCross&&!this.crossFlag||this.isFixed||this.disabledArray[n]||this.currentSlider!==l||(this.focusSlider=n,this.currentSlider=n)}this.crossFlag=!1},isLessRange:function(t,e){if(!this.isRange||!this.minRange&&!this.maxRange)return!1;var i=0===this.currentSlider?this.currentIndex[1]-e:e-this.currentIndex[0];return this.minRange&&i<=this.minRange?(this.fixedValue=this.minRange,!0):this.maxRange&&i>=this.maxRange?(this.fixedValue=this.maxRange,!0):(this.computedFixedValue(),!1)},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e,i){var s=i?this.idleSlider:this.currentSlider;if(t<this.minimum||t>this.maximum)return!1;this.isRange?this.isDiff(this.currentValue[s],t)&&(this.currentValue.splice(s,1,t),this.lazy&&this.flag&&!this.keydownFlag||this.syncValue()):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag&&!this.keydownFlag||this.syncValue()),e||this.setPosition()},getValueByIndex:function(t){return(this.spacing*this.multiple*t+this.minimum*this.multiple)/this.multiple},getIndexByValue:function(t){return this.data?this.data.indexOf(t):Math.round((t-this.minimum)*this.multiple)/(this.spacing*this.multiple)},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.getValueByIndex(t[0]),this.getValueByIndex(t[1])],this.setValue(e)}else t=this.getValueByIndex(t),this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var r=this.limitValue(t);this.val=this.isRange?r.concat():r,this.computedFixedValue(),this.syncValue(e)}this.$nextTick(function(){return s.setPosition(i)})},computedFixedValue:function(){if(!this.isFixed)return this.fixedValue=0,!1;this.fixedValue=Math.max(this.fixed?this.currentIndex[1]-this.currentIndex[0]:0,this.minRange||0)},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t),this.isRange?(this.setTransform(this.position[0],1===this.currentSlider),this.setTransform(this.position[1],0===this.currentSlider)):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t,e){var i=e?this.idleSlider:this.currentSlider,r=s(("vertical"===this.direction?this.dotHeightVal/2-t:t-this.dotWidthVal/2)*(this.reverse?-1:1)),o="vertical"===this.direction?"translateY("+r+"px)":"translateX("+r+"px)",n=this.fixed?this.fixedValue*this.gap+"px":(0===i?this.position[1]-t:t-this.position[0])+"px",l=this.fixed?(0===i?t:t-this.fixedValue*this.gap)+"px":(0===i?t:this.position[0])+"px";this.isRange?(this.slider[i].style.transform=o,this.slider[i].style.WebkitTransform=o,this.slider[i].style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=n,this.$refs.process.style[this.reverse?"top":"bottom"]=l):(this.$refs.process.style.width=n,this.$refs.process.style[this.reverse?"right":"left"]=l)):(this.slider.style.transform=o,this.slider.style.WebkitTransform=o,this.slider.style.msTransform=o,"vertical"===this.direction?(this.$refs.process.style.height=t+"px",this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px",this.$refs.process.style[this.reverse?"right":"left"]=0))},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i=function(i){return i<e.min?(e.printError("The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i};return this.isRange?t.map(function(t){return i(t)}):i(t)},isActive:function(t){return t>=this.indexRange[0]&&t<=this.indexRange[1]},syncValue:function(t){var e=this.isRange?this.val.concat():this.val;this.$emit("input",e),this.keydownFlag&&this.$emit("on-keypress",e),t||this.$emit("callback",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.computedFixedValue(),this.setPosition(0))},printError:function(t){this.debug&&console.error("[VueSlider error]: "+t)},handleOverlapTooltip:function(){var t=this.tooltipDirection[0]===this.tooltipDirection[1];if(this.isRange&&t){var e=this.reverse?this.$refs.tooltip1:this.$refs.tooltip0,i=this.reverse?this.$refs.tooltip0:this.$refs.tooltip1,s=e.getBoundingClientRect(),r=i.getBoundingClientRect(),o=s.right,n=r.left,l=s.top,a=r.top+r.height,d="horizontal"===this.direction&&o>n,u="vertical"===this.direction&&a>l;d||u?this.handleDisplayMergedTooltip(!0):this.handleDisplayMergedTooltip(!1)}},handleDisplayMergedTooltip:function(t){var e=this.$refs.tooltip0,i=this.$refs.tooltip1,s=this.$refs.process.getElementsByClassName("vue-merged-tooltip")[0];t?(e.style.visibility="hidden",i.style.visibility="hidden",s.style.visibility="inherit"):(e.style.visibility="inherit",i.style.visibility="inherit",s.style.visibility="hidden")}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),!0,t.startAnimation?t.speed:0),t.bindEvents(),t.isRange&&t.tooltipMerge&&!t.startAnimation&&t.$nextTick(function(){t.handleOverlapTooltip()}))}),this.isMounted=!0},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}}},function(t,e,i){"use strict";var s=i(0);t.exports=s},function(t,e,i){e=t.exports=i(4)(),e.push([t.i,'.vue-slider-component{position:relative;box-sizing:border-box;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none}.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-component.vue-slider-has-label{margin-bottom:15px}.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed}.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-component .vue-slider:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1}.vue-slider-component .vue-slider-process.vue-slider-process-dragable{cursor:pointer;z-index:3}.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0}.vue-slider-component .vue-slider-dot{position:absolute;transition:all 0s;will-change:transform;cursor:pointer;z-index:5}.vue-slider-component .vue-slider-dot .vue-slider-dot-handle{width:100%;height:100%;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32)}.vue-slider-component .vue-slider-dot.vue-slider-dot-focus .vue-slider-dot-handle{box-shadow:0 0 2px 1px #3498db}.vue-slider-component .vue-slider-dot--static .vue-slider-dot-handle--static{width:100%;height:100%;border-radius:50%;background-color:#ccc;transform:scale(.85)}.vue-slider-component .vue-slider-dot--static.vue-slider-dot-active .vue-slider-dot-handle--static{width:100%;height:100%;border-radius:50%;background-color:#3498db;transform:scale(.85)}.vue-slider-component .vue-slider-dot.vue-slider-dot-dragging{z-index:5}.vue-slider-component .vue-slider-dot.vue-slider-dot-disabled{z-index:4}.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0}.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0}.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9}.vue-slider-component .vue-slider-dot--static:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;transform:translate(-50%,-100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;transform:translate(-50%,100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;transform:translate(-100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;transform:translate(100%,-50%)}.vue-slider-component .vue-slider-tooltip-top .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-merged-tooltip{display:block;visibility:hidden}.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-left .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;transform:translateY(-50%)}.vue-slider-component .vue-slider-tooltip-right .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;transform:translateY(-50%)}.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important}.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px}.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;transform:translate(-50%,8px);visibility:visible}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;transform:translate(8px,-50%);visibility:visible}.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<e.length;r++){var n=e[r];"number"==typeof n[0]&&s[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(t,e){t.exports=function(t,e,i,s){var r,o=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(r=t,o=t.default);var l="function"==typeof o?o.options:o;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s){var a=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var e=s[t];a[t]=function(){return e}}),l.computed=a}return{esModule:r,exports:o,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"wrap",class:["vue-slider-component",t.flowDirection,t.disabledClass,t.stateClass,{"vue-slider-has-label":t.piecewiseLabel}],style:[t.wrapStyles,t.boolDisabled?t.disabledStyle:null],on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slider",style:[t.elemStyles,t.bgStyle],attrs:{"aria-hidden":"true"}},[t.isRange?[i("div",{key:"dot0",ref:"dot0",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider,"vue-slider-dot-disabled":!t.boolDisabled&&t.disabledArray[0]}],style:t.dotStyles,on:{mousedown:function(e){t.moveStart(e,0)},touchstart:function(e){t.moveStart(e,0)}}},[t._t("dot",[i("div",{staticClass:"vue-slider-dot-handle",style:[!t.boolDisabled&&t.disabledArray[0]?t.disabledDotStyles[0]:null,t.sliderStyles[0],t.focusFlag&&0===t.focusSlider?t.focusStyles[0]:null]})],{value:t.val[0],index:0,disabled:t.disabledArray[0]}),t._v(" "),i("div",{ref:"tooltip0",class:["vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",class:t.tooltipClass,style:t.tooltipStyles[0]},[t._v(t._s(t.formatter?t.formatting(t.val[0]):t.val[0]))])],{value:t.val[0],index:0,disabled:!t.boolDisabled&&t.disabledArray[0]})],2)],2),t._v(" "),i("div",{key:"dot1",ref:"dot1",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&1===t.focusSlider,"vue-slider-dot-dragging":t.flag&&1===t.currentSlider,"vue-slider-dot-disabled":!t.boolDisabled&&t.disabledArray[1]}],style:t.dotStyles,on:{mousedown:function(e){t.moveStart(e,1)},touchstart:function(e){t.moveStart(e,1)}}},[t._t("dot",[i("div",{staticClass:"vue-slider-dot-handle",style:[!t.boolDisabled&&t.disabledArray[1]?t.disabledDotStyles[1]:null,t.sliderStyles[1],t.focusFlag&&1===t.focusSlider?t.focusStyles[1]:null]})],{value:t.val[1],index:1,disabled:t.disabledArray[1]}),t._v(" "),i("div",{ref:"tooltip1",class:["vue-slider-tooltip-"+t.tooltipDirection[1],"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",class:t.tooltipClass,style:t.tooltipStyles[1]},[t._v(t._s(t.formatter?t.formatting(t.val[1]):t.val[1]))])],{value:t.val[1],index:1,disabled:!t.boolDisabled&&t.disabledArray[1]})],2)],2)]:[void 0!==t.staticValue?i("div",{key:"static-dot",ref:"static-dot",staticClass:"vue-slider-dot static-dot",class:["vue-slider-dot","vue-slider-dot--static",{"vue-slider-dot-active":t.isActive(t.getIndexByValue(t.staticValue))}],style:[t.staticPosition,t.dotStyles],on:{click:function(e){return e.stopPropagation(),function(){return t.clickable&&t.setValue(t.staticValue)}()}}},[t._t("static-dot",[i("div",{staticClass:"vue-slider-dot-handle--static"})],{value:t.staticValue}),t._v(" "),t.val!==t.staticValue?i("div",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("static-tooltip",[i("span",{staticClass:"vue-slider-tooltip",class:t.tooltipClass},[t.staticLabel?[t._v("\n                "+t._s(t.staticLabel)+"\n              ")]:[t._v("\n                "+t._s(t.formatter?t.formatting(t.staticValue):t.staticValue)+"\n              ")]],2)],{value:t.staticValue})],2):t._e()],2):t._e(),t._v(" "),i("div",{key:"dot",ref:"dot",class:[t.tooltipStatus,"vue-slider-dot",{"vue-slider-dot-focus":t.focusFlag&&0===t.focusSlider,"vue-slider-dot-dragging":t.flag&&0===t.currentSlider}],style:t.dotStyles,on:{mousedown:t.moveStart,touchstart:t.moveStart}},[t._t("dot",[i("div",{staticClass:"vue-slider-dot-handle",style:[t.sliderStyles,t.focusFlag&&0===t.focusSlider?t.focusStyles:null]})],{value:t.val,disabled:t.boolDisabled}),t._v(" "),i("div",{class:["vue-slider-tooltip-"+t.tooltipDirection,"vue-slider-tooltip-wrap"]},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",class:t.tooltipClass,style:t.tooltipStyles},[t._v(t._s(t.formatter?t.formatting(t.val):t.val))])],{value:t.val})],2)],2)],t._v(" "),i("ul",{staticClass:"vue-slider-piecewise"},t._l(t.piecewiseDotWrap,function(e,s){return i("li",{key:s,staticClass:"vue-slider-piecewise-item",style:[t.piecewiseDotStyle,e.style]},[t._t("piecewise",[t.piecewise?i("span",{class:["vue-slider-piecewise-dot",{"vue-slider-piecewise-dot-active":t.isActive(e.index)}],style:[t.piecewiseStyle,t.isActive(e.index)?t.piecewiseActiveStyle:null]}):t._e()],{value:t.val,label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:t.isActive(e.index),total:t.piecewiseDotWrap.length}),t._v(" "),t._t("label",[t.piecewiseLabel?i("span",{staticClass:"vue-slider-piecewise-label",style:[t.labelStyle,t.isActive(e.index)?t.labelActiveStyle:null]},[t._v("\n            "+t._s(e.label)+"\n          ")]):t._e()],{value:t.val,label:e.label,index:s,first:0===s,last:s===t.piecewiseDotWrap.length-1,active:t.isActive(e.index),total:t.piecewiseDotWrap.length})],2)})),t._v(" "),i("div",{ref:"process",class:["vue-slider-process",{"vue-slider-process-dragable":t.isRange&&t.processDragable},t.processClass],style:t.processStyle,on:{click:t.processClick,mousedown:function(e){t.moveStart(e,0,!0)},touchstart:function(e){t.moveStart(e,0,!0)}}},[i("div",{ref:"mergedTooltip",class:["vue-merged-tooltip","vue-slider-tooltip-"+t.tooltipDirection[0],"vue-slider-tooltip-wrap"],style:t.tooltipMergedPosition},[t._t("tooltip",[i("span",{staticClass:"vue-slider-tooltip",class:t.tooltipClass,style:t.tooltipStyles},[t._v("\n            "+t._s(t.mergeFormatter?t.mergeFormatting(t.val[0],t.val[1]):t.formatter?t.val[0]===t.val[1]?t.formatting(t.val[0]):t.formatting(t.val[0])+" - "+t.formatting(t.val[1]):t.val[0]===t.val[1]?t.val[0]:t.val[0]+" - "+t.val[1])+"\n          ")])],{value:t.val,merge:!0})],2)]),t._v(" "),t.isRange||t.data?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.val},on:{__r:function(e){t.val=e.target.value}}})],2)])},staticRenderFns:[]}},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(8)("c0739572",s,!0)},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=u[i.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](i.parts[r]);for(;r<i.parts.length;r++)s.parts.push(o(i.parts[r]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{for(var n=[],r=0;r<i.parts.length;r++)n.push(o(i.parts[r]));u[i.id]={id:i.id,refs:1,parts:n}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function o(t){var e,i,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(v)return f;s.parentNode.removeChild(s)}if(m){var o=p++;s=c||(c=r()),e=n.bind(null,s,o,!1),i=n.bind(null,s,o,!0)}else s=r(),e=l.bind(null,s),i=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else i()}}function n(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function l(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(9),u={},h=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,v=!1,f=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){v=i;var r=d(t,e);return s(r),function(e){for(var i=[],o=0;o<r.length;o++){var n=r[o],l=u[n.id];l.refs--,i.push(l)}e?(r=d(t,e),s(r)):r=[];for(var o=0;o<i.length;o++){var l=i[o];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete u[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],s={},r=0;r<e.length;r++){var o=e[r],n=o[0],l=o[1],a=o[2],d=o[3],u={id:t+":"+r,css:l,media:a,sourceMap:d};s[n]?s[n].parts.push(u):i.push(s[n]={id:n,parts:[u]})}return i}}])});

/***/ }),

/***/ "./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue":
/*!****************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switches.vue?vue&type=template&id=f8bdc788& */ "./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&");
/* harmony import */ var _switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switches.vue?vue&type=script&lang=js& */ "./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dist_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dist/switches.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__["render"],
  _switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-switches/src/switches.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./switches.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./switches.vue?vue&type=template&id=f8bdc788& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=f8bdc788&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_switches_vue_vue_type_template_id_f8bdc788___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-yandex-maps/dist/vue-yandex-maps.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-yandex-maps/dist/vue-yandex-maps.js ***!
  \**************************************************************/
/*! exports provided: default, loadYmap, yandexMap, ymapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadYmap", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yandexMap", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ymapMarker", function() { return k; });
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t){return(t.icon.color||"blue")+(t.icon.glyph?n(t.icon.glyph):t.icon.content?"Stretchy":"")}function i(t){return t.map(function(t){return Array.isArray(t)?i(t):+t})}function s(e,r){var o=[];return function e(r,n){if(r===n)return!0;if(r instanceof Date&&n instanceof Date)return+r==+n;if("object"!==t(r)||"object"!==t(n))return!1;if(function(t,e){for(var r=o.length;r--;)if(!(o[r][0]!==t&&o[r][0]!==e||o[r][1]!==e&&o[r][1]!==t))return!0;return!1}(r,n))return!0;o.push([r,n]);var a=Object.keys(r),i=a.length;if(Object.keys(n).length!==i)return!1;for(;i--;)if(!e(r[a[i]],n[a[i]]))return!1;return!0}(e,r)}var c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var r,o,n;return r=t,(o=[{key:"$on",value:function(t,e){var r=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(e),function(){r.events[t]=r.events[t].filter(function(t){return e!==t})}}},{key:"$emit",value:function(t,e){var r=this.events[t];r&&r.forEach(function(t){return t(e)})}}])&&e(r.prototype,o),n&&e(r,n),t}()),l=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routePanelControl"];function u(t){return 0===t.filter(function(t){return![].concat(l,["default"]).includes(t)}).length}function p(t,e){var r=n(t);if(!e)return r;switch(r){case"Placemark":return"Point";case"Polyline":return"LineString";default:return r}}function m(e,r){var o,n,a=r?{type:"Feature",id:e.properties.markerId,geometry:{type:e.markerType,coordinates:e.coords},properties:e.properties,options:e.options}:new ymaps[e.markerType](e.coords,e.properties,e.options);return a.clusterName=e.clusterName,r||(o=e.callbacks,n=a,o&&"object"===t(o)&&Object.keys(o).forEach(function(t){n.events.add(t,o[t])})),a}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,r){var o=document.createElement("SCRIPT"),n=t.apiKey,a=void 0===n?"":n,i=t.lang,s=void 0===i?"ru_RU":i,l=t.version,u=void 0===l?"2.1":l,p=t.coordorder,m=void 0===p?"latlong":p,f=t.debug,y=void 0!==f&&f?"debug":"release",d="lang=".concat(s).concat(a&&"&apikey=".concat(a),"&mode=").concat(y,"&coordorder=").concat(m),h="https://api-maps.yandex.ru/".concat(u,"/?").concat(d);o.setAttribute("src",h),o.setAttribute("async",""),o.setAttribute("defer",""),document.body.appendChild(o),c.scriptIsNotAttached=!1,o.onload=function(){c.ymapReady=!0,c.$emit("scriptIsLoaded"),e()},o.onerror=r})}var y={pluginOptions:{},data:function(){return{ymapEventBus:c,ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;"}},props:{coords:{type:Array,validator:function(t){return!t.filter(function(t){return Number.isNaN(t)}).length},required:!0},zoom:{validator:function(t){return!Number.isNaN(t)},default:18},clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(t){return u(t)}},detailedControls:{type:Object,validator:function(t){return u(Object.keys(t))}},scrollZoom:{type:Boolean,default:!0},zoomControl:Object,mapType:{type:String,default:"map",validator:function(t){return["map","satellite","hybrid"].includes(t)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},computed:{coordinates:function(){return this.coords.map(function(t){return+t})}},methods:{getMarkersFromSlots:function(){return this.$slots.default?this.$slots.default.map(function(t){var e=t.componentOptions&&t.componentOptions.propsData;if(e){var r={};if(e.balloonTemplate)r={balloonContentLayout:ymaps.templateLayoutFactory.createClass(e.balloonTemplate)};var o={markerId:e.markerId,markerType:e.markerType||"placemark",coords:i(e.coords),hintContent:e.hintContent,markerFill:e.markerFill,circleRadius:+e.circleRadius,clusterName:e.clusterName,markerStroke:e.markerStroke,balloon:e.balloon,callbacks:e.callbacks,properties:e.properties,options:e.options,balloonOptions:r};return e.icon&&["default#image","default#imageWithContent"].includes(e.icon.layout)?(o.iconContent=e.icon.content,o.iconLayout=e.icon.layout,o.iconImageHref=e.icon.imageHref,o.iconImageSize=e.icon.imageSize,o.iconImageOffset=e.icon.imageOffset,o.iconContentOffset=e.icon.contentOffset,e.icon.contentLayout&&"string"==typeof e.icon.contentLayout&&(o.iconContentLayout=ymaps.templateLayoutFactory.createClass(e.icon.contentLayout))):o.icon=e.icon,o}}).filter(function(t){return t&&t.markerType}):[]},createMarkers:function(){for(var t=this,e=[],r=this.getMarkersFromSlots(),o=0;o<r.length;o++){var n=r[o],i=p(n.markerType,this.useObjectManager),s={hintContent:n.hintContent,iconContent:n.icon?n.icon.content:n.iconContent,markerId:n.markerId},c=n.balloon?{balloonContentHeader:n.balloon.header,balloonContentBody:n.balloon.body,balloonContentFooter:n.balloon.footer}:{},l=Object.assign(s,c,n.properties),u=n.iconLayout?{iconLayout:n.iconLayout,iconImageHref:n.iconImageHref,iconImageSize:n.iconImageSize,iconImageOffset:n.iconImageOffset,iconContentOffset:n.iconContentOffset,iconContentLayout:n.iconContentLayout}:{preset:n.icon&&"islands#".concat(a(n),"Icon")},f=n.markerStroke?{strokeColor:n.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(n.markerStroke.opacity)>=0?parseFloat(n.markerStroke.opacity):1,strokeStyle:n.markerStroke.style,strokeWidth:parseFloat(n.markerStroke.width)>=0?parseFloat(n.markerStroke.width):1}:{},y=n.markerFill?{fill:n.markerFill.enabled||!0,fillColor:n.markerFill.color||"0066ff99",fillOpacity:parseFloat(n.markerFill.opacity)>=0?parseFloat(n.markerFill.opacity):1,fillImageHref:n.markerFill.imageHref||""}:{},d=Object.assign(u,f,y,n.balloonOptions,n.options);"Circle"===i&&(n.coords=[n.coords,n.circleRadius]);var h=m({properties:l,options:d,markerType:i,coords:n.coords,clusterName:n.clusterName,callbacks:n.callbacks},this.useObjectManager);e.push(h)}return this.placemarks&&this.placemarks.forEach(function(r){var o=r.markerType,n=void 0===o?"Placemark":o,a=r.properties,i=r.options,s=void 0===i?{}:i,c=r.coords,l=r.clusterName,u=r.callbacks,f=r.balloonTemplate,y=p(n,t.useObjectManager);if(f){var d=ymaps.templateLayoutFactory.createClass(f);s.balloonContentLayout=d}var h=m({properties:a,options:s,markerType:y,coords:c,clusterName:l,callbacks:u},t.useObjectManager);e.push(h)}),e},setMarkers:function(){var t={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};!function(t,e){var r=e.options,n=e.callbacks,a=e.map,i=e.useObjectManager,s=e.objectManagerClusterize,c={},l=[];if(t.forEach(function(t){t.clusterName?c[t.clusterName]=c[t.clusterName]?[].concat(o(c[t.clusterName]),[t]):[t]:l.push(t)}),Object.keys(c).forEach(function(t){var e=r[t]||{},o=n[t]||{},l=e.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";e.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(l);var u=e.clusterLayout?ymaps.templateLayoutFactory.createClass(e.clusterLayout):e.clusterBalloonContentLayout||"cluster#balloonTwoColumns";e.clusterBalloonContentLayout=u;var p=e.clusterIconContentLayout;if(e.clusterIconContentLayout=p&&ymaps.templateLayoutFactory.createClass(p),i){var m=new ymaps.ObjectManager(Object.assign({clusterize:s},e));Object.keys(o).forEach(function(t){m.clusters.events.add(t,o[t])}),m.add(c[t]),a.geoObjects.add(m)}else{var f=new ymaps.Clusterer(e);Object.keys(o).forEach(function(t){f.events.add(t,o[t])}),e.createCluster&&(f.createCluster=e.createCluster),f.add(c[t]),a.geoObjects.add(f)}}),l.length){var u=i?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;l.forEach(function(t){return u.add(t)}),a.geoObjects.add(u)}}(this.createMarkers(),t)},init:function(){var t=this;if(window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)){if(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),this.myMap.events.add("click",function(e){return t.$emit("click",e)}),this.zoomControl&&(this.myMap.controls.remove("zoomControl"),this.myMap.controls.add(new ymaps.control.ZoomControl(this.zoomControl))),this.detailedControls)Object.keys(this.detailedControls).forEach(function(e){t.myMap.controls.remove(e),t.myMap.controls.add(e,t.detailedControls[e])});!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.setMarkers(),this.$emit("map-was-initialized",this.myMap)}}},watch:{coordinates:function(t){this.myMap.panTo&&this.myMap.panTo(t)},placemarks:function(){window.ymaps&&(this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.setMarkers())},zoom:function(){this.myMap.setZoom(this.zoom)}},render:function(t){return t("section",{class:"ymap-container",ref:"mapContainer"},[t("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),t("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var t=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");this.markerObserver=new MutationObserver(function(){t.myMap.geoObjects&&t.myMap.geoObjects.removeAll(),t.setMarkers()}),this.mapObserver=new MutationObserver(function(){t.myMap.container.fitToViewport()});var e=this.$refs,o=e.markersContainer,n=e.mapContainer;if(this.markerObserver.observe(o,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.mapObserver.observe(n,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),this.ymapEventBus.scriptIsNotAttached){var a=this.debug;f(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){r(t,e,o[e])})}return t}({},this.$options.pluginOptions,this.settings,{debug:a}))}this.ymapEventBus.ymapReady?ymaps.ready(this.init):this.ymapEventBus.$on("scriptIsLoaded",function(){t.ymapEventBus.updateMap=function(){t.myMap.geoObjects&&t.myMap.geoObjects.removeAll(),t.setMarkers()},ymaps.ready(t.init)})},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.markerObserver.disconnect()}},d=["placemark","polyline","rectangle","polygon","circle"],h={data:function(){return{ymapEventBus:c,unwatchArr:[]}},props:{coords:{type:Array,required:!0,validator:function(t){return!t.filter(function(t){return Number.isNaN(t)}).length}},hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(t){return d.includes(t.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:String,circleRadius:{validator:function(t){return!Number.isNaN(t)},default:1e3},callbacks:Object,balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},render:function(){},mounted:function(){var t=this;Object.keys(this.$props).forEach(function(e){t.unwatchArr.push(t.$watch(e,function(e,r){return function(t,e,r){s(t,e)||(r.rerender&&clearTimeout(r.rerender),r.rerender=setTimeout(function(){return r.updateMap&&r.updateMap()},10))}(e,r,t.ymapEventBus)}))})},beforeDestroy:function(){this.unwatchArr.forEach(function(t){return t()})}};y.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.pluginOptions=e,t.component("yandex-map",y),t.component("ymap-marker",h)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(y);var b=f,v=y,k=h;/* harmony default export */ __webpack_exports__["default"] = (y);


/***/ }),

/***/ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue2-dropzone/dist/vue2Dropzone.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e,t=(function(e){var t=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){n(this,e)}return t(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var i=arguments.length,n=Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o=0,s=s=t;;){if(o>=s.length)break;s[o++].apply(this,n)}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var n=0;n<i.length;n++){if(i[n]===t){i.splice(n,1);break}}return this}}]),e}(),o=function(e){function o(e,t){n(this,o);var r,s=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),a=void 0;if(s.element=e,s.version=o.version,s.defaultOptions.previewTemplate=s.defaultOptions.previewTemplate.replace(/\n*/g,""),s.clickableElements=[],s.listeners=[],s.files=[],"string"==typeof s.element&&(s.element=document.querySelector(s.element)),!s.element||null==s.element.nodeType)throw new Error("Invalid dropzone element.");if(s.element.dropzone)throw new Error("Dropzone already attached.");o.instances.push(s),s.element.dropzone=s;var l,u=null!=(r=o.optionsForElement(s.element))?r:{};if(s.options=o.extend({},s.defaultOptions,u,null!=t?t:{}),s.options.forceFallback||!o.isBrowserSupported())return l=s.options.fallback.call(s),i(s,l);if(null==s.options.url&&(s.options.url=s.element.getAttribute("action")),!s.options.url)throw new Error("No URL provided.");if(s.options.acceptedFiles&&s.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(s.options.uploadMultiple&&s.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return s.options.acceptedMimeTypes&&(s.options.acceptedFiles=s.options.acceptedMimeTypes,delete s.options.acceptedMimeTypes),null!=s.options.renameFilename&&(s.options.renameFile=function(e){return s.options.renameFilename.call(s,e.name,e)}),s.options.method=s.options.method.toUpperCase(),(a=s.getExistingFallback())&&a.parentNode&&a.parentNode.removeChild(a),!1!==s.options.previewsContainer&&(s.options.previewsContainer?s.previewsContainer=o.getElement(s.options.previewsContainer,"previewsContainer"):s.previewsContainer=s.element),s.options.clickable&&(!0===s.options.clickable?s.clickableElements=[s.element]:s.clickableElements=o.getElements(s.options.clickable,"clickable")),s.init(),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,r),t(o,null,[{key:"initClass",value:function(){this.prototype.Emitter=r,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var t=0,i=i=this.element.getElementsByTagName("div");;){if(t>=i.length)break;var n=i[t++];if(/(^| )dz-message($| )/.test(n.className)){e=n,n.className="dz-message";break}}e||(e=o.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var r=e.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==i?(t=r.srcWidth,i=r.srcHeight):null==t?t=i*o:null==i&&(i=t/o);var s=(t=Math.min(t,r.srcWidth))/(i=Math.min(i,r.srcHeight));if(r.srcWidth>t||r.srcHeight>i)if("crop"===n)o>s?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*s):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/s);else{if("contain"!==n)throw new Error("Unknown resizeMethod '"+n+"'");o>s?i=t/o:t=i*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=i,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){e.previewElement=o.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-name]");;){if(i>=n.length)break;var r=n[i++];r.textContent=e.name}for(var s=0,a=a=e.previewElement.querySelectorAll("[data-dz-size]");!(s>=a.length);)(r=a[s++]).innerHTML=this.filesize(e.size);this.options.addRemoveLinks&&(e._removeLink=o.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink));for(var l=function(i){return i.preventDefault(),i.stopPropagation(),e.status===o.UPLOADING?o.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?o.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)},u=0,d=d=e.previewElement.querySelectorAll("[data-dz-remove]");;){if(u>=d.length)break;d[u++].addEventListener("click",l)}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-thumbnail]");;){if(i>=n.length)break;var r=n[i++];r.alt=e.name,r.src=t}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-errormessage]");;){if(i>=n.length)break;n[i++].textContent=t}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,i){if(e.previewElement)for(var n=0,r=r=e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;){if(n>=r.length)break;var o=r[n++];"PROGRESS"===o.nodeName?o.value=t:o.style.width=t+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(var r=0,o=o=i;;){if(r>=o.length)break;var s=o[r++];for(var a in s){var l=s[a];e[a]=l}}return e}}]),t(o,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(e){return this.files.filter(function(t){return t.status===e}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(o.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(o.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(o.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===o.UPLOADING||e.status===o.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var e=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(o.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length){!function t(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",o.getElement(e.options.hiddenInputContainer,"hiddenInputContainer").appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var i=e.hiddenFileInput.files;if(i.length)for(var n=0,r=r=i;!(n>=r.length);){var o=r[n++];e.addFile(o)}return e.emit("addedfiles",i),t()})}()}this.URL=null!==window.URL?window.URL:window.webkitURL;for(var t=0,i=i=this.events;;){if(t>=i.length)break;var n=i[t++];this.on(n,this.options[n])}this.on("uploadprogress",function(){return e.updateTotalUploadProgress()}),this.on("removedfile",function(){return e.updateTotalUploadProgress()}),this.on("canceled",function(t){return e.emit("complete",t)}),this.on("complete",function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)});var r=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return r(t),e.emit("dragenter",t)},dragover:function(t){var i=void 0;try{i=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",r(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return r(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach(function(t){return e.listeners.push({element:t,events:{click:function(i){return(t!==e.element||i.target===e.element||o.elementInside(i.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,o.instances.splice(o.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e=void 0,t=0,i=0;if(this.getActiveFiles().length){for(var n=0,r=r=this.getActiveFiles();;){if(n>=r.length)break;var o=r[n++];t+=o.upload.bytesSent,i+=o.upload.total}e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t=void 0;if(e=this.getExistingFallback())return e;var i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var n=o.createElement(i);return"FORM"!==this.element.tagName?(t=o.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(n):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:n}},{key:"getExistingFallback",value:function(){for(var e=function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];if(/(^| )fallback($| )/.test(n.className))return n}},t=["div","form"],i=0;i<t.length;i++){var n,r=t[i];if(n=e(this.element.getElementsByTagName(r)))return n}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.addEventListener(i,n,!1))}return t}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.removeEventListener(i,n,!1))}return t}()})}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.disabled=!0,this.files.map(function(t){return e.cancelUpload(t)})}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,i="b";if(e>0){for(var n=["tb","gb","mb","kb","b"],r=0;r<n.length;r++){var o=n[r];if(e>=Math.pow(this.options.filesizeBase,4-r)/10){t=e/Math.pow(this.options.filesizeBase,4-r),i=o;break}}t=Math.round(10*t)/10}return"<strong>"+t+"</strong> "+this.options.dictFileSizeUnits[i]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(this.emit("addedfiles",t),t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}}}},{key:"paste",value:function(e){if(null!=(t=null!=e?e.clipboardData:void 0,i=function(e){return e.items},null!=t?i(t):void 0)){var t,i;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.addFile(n)}}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){for(var i=[],n=0,r=r=e;;){if(n>=r.length)break;var o,s=r[n++];null!=s.webkitGetAsEntry&&(o=s.webkitGetAsEntry())?o.isFile?i.push(t.addFile(s.getAsFile())):o.isDirectory?i.push(t._addFilesFromDirectory(o,o.name)):i.push(void 0):null!=s.getAsFile&&(null==s.kind||"file"===s.kind)?i.push(t.addFile(s.getAsFile())):i.push(void 0)}return i}()}},{key:"_addFilesFromDirectory",value:function(e,t){var i=this,n=e.createReader(),r=function(e){return t=console,i="log",n=function(t){return t.log(e)},null!=t&&"function"==typeof t[i]?n(t,i):void 0;var t,i,n};return function e(){return n.readEntries(function(n){if(n.length>0){for(var r=0,o=o=n;!(r>=o.length);){var s=o[r++];s.isFile?s.file(function(e){if(!i.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=t+"/"+e.name,i.addFile(e)}):s.isDirectory&&i._addFilesFromDirectory(s,t+"/"+s.name)}e()}return null},r)}()}},{key:"accept",value:function(e,t){return this.options.maxFilesize&&e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):o.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;return e.upload={uuid:o.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e),chunked:this.options.chunking&&(this.options.forceChunking||e.size>this.options.chunkSize),totalChunkCount:Math.ceil(e.size/this.options.chunkSize)},this.files.push(e),e.status=o.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.enqueueFile(n)}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==o.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=o.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(i){return e.emit("thumbnail",t,i),e._processingThumbnail=!1,e._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===o.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);for(var t=0,i=i=this.files.slice();;){if(t>=i.length)break;var n=i[t++];(n.status!==o.UPLOADING||e)&&this.removeFile(n)}return null}},{key:"resizeImage",value:function(e,t,i,n,r){var s=this;return this.createThumbnail(e,t,i,n,!0,function(t,i){if(null==i)return r(e);var n=s.options.resizeMimeType;null==n&&(n=e.type);var a=i.toDataURL(n,s.options.resizeQuality);return"image/jpeg"!==n&&"image/jpg"!==n||(a=u.restore(e.dataURL,a)),r(o.dataURItoBlob(a))})}},{key:"createThumbnail",value:function(e,t,i,n,r,o){var s=this,a=new FileReader;return a.onload=function(){if(e.dataURL=a.result,"image/svg+xml"!==e.type)return s.createThumbnailFromUrl(e,t,i,n,r,o);null!=o&&o(a.result)},a.readAsDataURL(e)}},{key:"createThumbnailFromUrl",value:function(e,t,i,n,r,o,s){var a=this,u=document.createElement("img");return s&&(u.crossOrigin=s),u.onload=function(){var s=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(s=function(e){return EXIF.getData(u,function(){return e(EXIF.getTag(this,"Orientation"))})}),s(function(r){e.width=u.width,e.height=u.height;var s=a.options.resize.call(a,e,t,i,n),d=document.createElement("canvas"),c=d.getContext("2d");switch(d.width=s.trgWidth,d.height=s.trgHeight,r>4&&(d.width=s.trgHeight,d.height=s.trgWidth),r){case 2:c.translate(d.width,0),c.scale(-1,1);break;case 3:c.translate(d.width,d.height),c.rotate(Math.PI);break;case 4:c.translate(0,d.height),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-d.width);break;case 7:c.rotate(.5*Math.PI),c.translate(d.height,-d.width),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-d.height,0)}l(c,u,null!=s.srcX?s.srcX:0,null!=s.srcY?s.srcY:0,s.srcWidth,s.srcHeight,null!=s.trgX?s.trgX:0,null!=s.trgY?s.trgY:0,s.trgWidth,s.trgHeight);var p=d.toDataURL("image/png");if(null!=o)return o(p,d)})},null!=o&&(u.onerror=o),u.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,i=t;if(!(t>=e)){var n=this.getQueuedFiles();if(n.length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,e-t));for(;i<e;){if(!n.length)return;this.processFile(n.shift()),i++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];n.processing=!0,n.status=o.UPLOADING,this.emit("processing",n)}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter(function(t){return t.xhr===e}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===o.UPLOADING){for(var t=this._getFilesWithXhr(e.xhr),i=0,n=n=t;;){if(i>=n.length)break;n[i++].status=o.CANCELED}void 0!==e.xhr&&e.xhr.abort();for(var r=0,s=s=t;;){if(r>=s.length)break;var a=s[r++];this.emit("canceled",a)}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==o.ADDED&&e.status!==o.QUEUED||(e.status=o.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e.apply(this,i)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,function(i){if(e[0].upload.chunked){var n=e[0],r=i[0];n.upload.chunks=[];var s=function(){for(var i=0;void 0!==n.upload.chunks[i];)i++;if(!(i>=n.upload.totalChunkCount)){var s=i*t.options.chunkSize,a=Math.min(s+t.options.chunkSize,n.size),l={name:t._getParamName(0),data:r.webkitSlice?r.webkitSlice(s,a):r.slice(s,a),filename:n.upload.filename,chunkIndex:i};n.upload.chunks[i]={file:n,index:i,dataBlock:l,status:o.UPLOADING,progress:0,retries:0},t._uploadData(e,[l])}};if(n.upload.finishedChunkUpload=function(i){var r=!0;i.status=o.SUCCESS,i.dataBlock=null,i.xhr=null;for(var a=0;a<n.upload.totalChunkCount;a++){if(void 0===n.upload.chunks[a])return s();n.upload.chunks[a].status!==o.SUCCESS&&(r=!1)}r&&t.options.chunksUploaded(n,function(){t._finished(e,"",null)})},t.options.parallelChunkUploads)for(var a=0;a<n.upload.totalChunkCount;a++)s();else s()}else{for(var l=[],u=0;u<e.length;u++)l[u]={name:t._getParamName(u),data:i[u],filename:e[u].upload.filename};t._uploadData(e,l)}})}},{key:"_getChunk",value:function(e,t){for(var i=0;i<e.upload.totalChunkCount;i++)if(void 0!==e.upload.chunks[i]&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}},{key:"_uploadData",value:function(e,t){for(var i=this,n=new XMLHttpRequest,r=0,s=s=e;;){if(r>=s.length)break;s[r++].xhr=n}e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=n);var a=this.resolveOption(this.options.method,e),l=this.resolveOption(this.options.url,e);n.open(a,l,!0),n.timeout=this.resolveOption(this.options.timeout,e),n.withCredentials=!!this.options.withCredentials,n.onload=function(t){i._finishedUploading(e,n,t)},n.onerror=function(){i._handleUploadError(e,n)},(null!=n.upload?n.upload:n).onprogress=function(t){return i._updateFilesUploadProgress(e,n,t)};var u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var d in this.options.headers&&o.extend(u,this.options.headers),u){var c=u[d];c&&n.setRequestHeader(d,c)}var p=new FormData;if(this.options.params){var h=this.options.params;for(var f in"function"==typeof h&&(h=h.call(this,e,n,e[0].upload.chunked?this._getChunk(e[0],n):null)),h){var m=h[f];p.append(f,m)}}for(var v=0,g=g=e;;){if(v>=g.length)break;var k=g[v++];this.emit("sending",k,n,p)}this.options.uploadMultiple&&this.emit("sendingmultiple",e,n,p),this._addFormElementData(p);for(var y=0;y<t.length;y++){var b=t[y];p.append(b.name,b.data,b.filename)}this.submitRequest(n,p,e)}},{key:"_transformFiles",value:function(e,t){for(var i=this,n=[],r=0,o=function(o){i.options.transformFile.call(i,e[o],function(i){n[o]=i,++r===e.length&&t(n)})},s=0;s<e.length;s++)o(s)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName)for(var t=0,i=i=this.element.querySelectorAll("input, textarea, select, button");;){if(t>=i.length)break;var n=i[t++],r=n.getAttribute("name"),o=n.getAttribute("type");if(o&&(o=o.toLowerCase()),null!=r)if("SELECT"===n.tagName&&n.hasAttribute("multiple"))for(var s=0,a=a=n.options;;){if(s>=a.length)break;var l=a[s++];l.selected&&e.append(r,l.value)}else(!o||"checkbox"!==o&&"radio"!==o||n.checked)&&e.append(r,n.value)}}},{key:"_updateFilesUploadProgress",value:function(e,t,i){var n=void 0;if(void 0!==i){if(n=100*i.loaded/i.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t);o.progress=n,o.total=i.total,o.bytesSent=i.loaded,r.upload.progress=0,r.upload.total=0,r.upload.bytesSent=0;for(var s=0;s<r.upload.totalChunkCount;s++)void 0!==r.upload.chunks[s]&&void 0!==r.upload.chunks[s].progress&&(r.upload.progress+=r.upload.chunks[s].progress,r.upload.total+=r.upload.chunks[s].total,r.upload.bytesSent+=r.upload.chunks[s].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else for(var a=0,l=l=e;;){if(a>=l.length)break;var u=l[a++];u.upload.progress=n,u.upload.total=i.total,u.upload.bytesSent=i.loaded}for(var d=0,c=c=e;;){if(d>=c.length)break;var p=c[d++];this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}else{var h=!0;n=100;for(var f=0,m=m=e;;){if(f>=m.length)break;var v=m[f++];100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=n,v.upload.bytesSent=v.upload.total}if(h)return;for(var g=0,k=k=e;;){if(g>=k.length)break;var y=k[g++];this.emit("uploadprogress",y,n,y.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(e,t,i){var n=void 0;if(e[0].status!==o.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(n=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{n=JSON.parse(n)}catch(e){i=e,n="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,n,i):this._handleUploadError(e,t,n)}}},{key:"_handleUploadError",value:function(e,t,i){if(e[0].status!==o.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var n=this._getChunk(e[0],t);if(n.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[n.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var r=0,s=s=e;;){if(r>=s.length)break;s[r++],this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}}},{key:"submitRequest",value:function(e,t,i){e.send(t)}},{key:"_finished",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var s=r[n++];s.status=o.SUCCESS,this.emit("success",s,t,i),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var s=r[n++];s.status=o.ERROR,this.emit("error",s,t,i),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),o}();o.initClass(),o.version="5.5.1",o.options={},o.optionsForElement=function(e){return e.getAttribute("id")?o.options[a(e.getAttribute("id"))]:void 0},o.instances=[],o.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},o.autoDiscover=!0,o.discover=function(){var e=void 0;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){for(var i=[],n=0,r=r=t;;){if(n>=r.length)break;var o=r[n++];/(^| )dropzone($| )/.test(o.className)?i.push(e.push(o)):i.push(void 0)}return i}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){for(var t=[],i=0,n=n=e;;){if(i>=n.length)break;var r=n[i++];!1!==o.optionsForElement(r)?t.push(new o(r)):t.push(void 0)}return t}()},o.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],o.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var t=0,i=i=o.blacklistedBrowsers;;){if(t>=i.length)break;i[t++].test(navigator.userAgent)&&(e=!1)}else e=!1;else e=!1;return e},o.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),r=new Uint8Array(n),o=0,s=t.length,a=0<=s;a?o<=s:o>=s;a?o++:o--)r[o]=t.charCodeAt(o);return new Blob([n],{type:i})};var s=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},a=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};o.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},o.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},o.getElement=function(e,t){var i=void 0;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},o.getElements=function(e,t){var i=void 0,n=void 0;if(e instanceof Array){n=[];try{for(var r=0,o=o=e;!(r>=o.length);)i=o[r++],n.push(this.getElement(i,t))}catch(e){n=null}}else if("string"==typeof e){n=[];for(var s=0,a=a=document.querySelectorAll(e);!(s>=a.length);)i=a[s++],n.push(i)}else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},o.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},o.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");for(var i=e.type,n=i.replace(/\/.*$/,""),r=0,o=o=t;;){if(r>=o.length)break;var s=o[r++];if("."===(s=s.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(n===s.replace(/\/.*$/,""))return!0}else if(i===s)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new o(this,e)})}),null!==e?e.exports=o:window.Dropzone=o,o.ADDED="added",o.QUEUED="queued",o.ACCEPTED=o.QUEUED,o.UPLOADING="uploading",o.PROCESSING=o.UPLOADING,o.CANCELED="canceled",o.ERROR="error",o.SUCCESS="success";var l=function(e,t,i,n,r,o,s,a,l,u){var d=function(e){e.naturalWidth;var t=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=t;var n=i.getContext("2d");n.drawImage(e,0,0);for(var r=n.getImageData(1,0,1,t).data,o=0,s=t,a=t;a>o;)0===r[4*(a-1)+3]?s=a:o=a,a=s+o>>1;var l=a/t;return 0===l?1:l}(t);return e.drawImage(t,i,n,r,o,s,a,l,u/d)},u=function(){function e(){n(this,e)}return t(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",i=void 0,n=void 0,r="",o=void 0,s=void 0,a=void 0,l="",u=0;o=(i=e[u++])>>2,s=(3&i)<<4|(n=e[u++])>>4,a=(15&n)<<2|(r=e[u++])>>6,l=63&r,isNaN(n)?a=l=64:isNaN(r)&&(l=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l),i=n=r="",o=s=a=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var i=this.decode64(e.replace("data:image/jpeg;base64,","")),n=this.slice2Segments(i),r=this.exifManipulation(t,n);return"data:image/jpeg;base64,"+this.encode64(r)}},{key:"exifManipulation",value:function(e,t){var i=this.getExifArray(t),n=this.insertExif(e,i);return new Uint8Array(n)}},{key:"getExifArray",value:function(e){for(var t=void 0,i=0;i<e.length;){if(255===(t=e[i])[0]&225===t[1])return t;i++}return[]}},{key:"insertExif",value:function(e,t){var i=e.replace("data:image/jpeg;base64,",""),n=this.decode64(i),r=n.indexOf(255,3),o=n.slice(0,r),s=n.slice(r),a=o;return a=(a=a.concat(t)).concat(s)}},{key:"slice2Segments",value:function(e){for(var t=0,i=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var n=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,n);i.push(r),t=n}if(t>e.length)break}return i}},{key:"decode64",value:function(e){var t=void 0,i=void 0,n="",r=void 0,o=void 0,s="",a=0,l=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(a++))<<2|(r=this.KEY_STR.indexOf(e.charAt(a++)))>>4,i=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(a++)))>>2,n=(3&o)<<6|(s=this.KEY_STR.indexOf(e.charAt(a++))),l.push(t),64!==o&&l.push(i),64!==s&&l.push(n),t=i=n="",r=o=s="",a<e.length;);return l}}]),e}();u.initClass(),o._autoDiscoverFunction=function(){if(o.autoDiscover)return o.discover()},function(e,t){var i=!1,n=!0,r=e.document,o=r.documentElement,s=r.addEventListener?"addEventListener":"attachEvent",a=r.addEventListener?"removeEventListener":"detachEvent",l=r.addEventListener?"":"on",u=function n(o){if("readystatechange"!==o.type||"complete"===r.readyState)return("load"===o.type?e:r)[a](l+o.type,n,!1),!i&&(i=!0)?t.call(e,o.type||o):void 0};if("complete"!==r.readyState){if(r.createEventObject&&o.doScroll){try{n=!e.frameElement}catch(e){}n&&function e(){try{o.doScroll("left")}catch(t){return void setTimeout(e,50)}return u("poll")}()}r[s](l+"DOMContentLoaded",u,!1),r[s](l+"readystatechange",u,!1),e[s](l+"load",u,!1)}}(window,o._autoDiscoverFunction)}(e={exports:{}},e.exports),e.exports),i={getSignedURL(e,t){let i={filePath:e.name,contentType:e.type};return new Promise((n,r)=>{var o=new FormData;let s=new XMLHttpRequest,a="function"==typeof t.signingURL?t.signingURL(e):t.signingURL;s.open("POST",a),s.onload=function(){200==s.status?n(JSON.parse(s.response)):r(s.statusText)},s.onerror=function(e){console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"),r(e)},!0===t.withCredentials&&(s.withCredentials=!0),Object.entries(t.headers||{}).forEach(([e,t])=>{s.setRequestHeader(e,t)}),i=Object.assign(i,t.params||{}),Object.entries(i).forEach(([e,t])=>{o.append(e,t)}),s.send(o)})},sendFile(e,t,i){var n=i?this.setResponseHandler:this.sendS3Handler;return this.getSignedURL(e,t).then(t=>n(t,e)).catch(e=>e)},setResponseHandler(e,t){t.s3Signature=e.signature,t.s3Url=e.postEndpoint},sendS3Handler(e,t){let i=new FormData,n=e.signature;return Object.keys(n).forEach(function(e){i.append(e,n[e])}),i.append("file",t),new Promise((t,n)=>{let r=new XMLHttpRequest;r.open("POST",e.postEndpoint),r.onload=function(){if(201==r.status){var e=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;t({success:!0,message:e})}else{var i=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;n({success:!1,message:i+". Request is marked as resolved when returns as status 201"})}},r.onerror=function(e){var t=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[1].innerHTML;n({success:!1,message:t})},r.send(i)})}};t.autoDiscover=!1;return function(e,t,i,n,r,o,s,a,l,u){"boolean"!=typeof s&&(l=a,a=s,s=!1);var d,c="function"==typeof i?i.options:i;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),n&&(c._scopeId=n),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):t&&(d=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(c.functional){var p=c.render;c.render=function(e,t){return d.call(t),p(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,d):[d]}return i}({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"dropzoneElement",class:{"vue-dropzone dropzone":this.includeStyling},attrs:{id:this.id}},[this.useCustomSlot?t("div",{staticClass:"dz-message"},[this._t("default",[this._v("Drop files here to upload")])],2):this._e()])},staticRenderFns:[]},void 0,{props:{id:{type:String,required:!0,default:"dropzone"},options:{type:Object,required:!0},includeStyling:{type:Boolean,default:!0,required:!1},awss3:{type:Object,required:!1,default:null},destroyDropzone:{type:Boolean,default:!0,required:!1},duplicateCheck:{type:Boolean,default:!1,required:!1},useCustomSlot:{type:Boolean,default:!1,required:!1}},data:()=>({isS3:!1,isS3OverridesServerPropagation:!1,wasQueueAutoProcess:!0}),computed:{dropzoneSettings(){let e={thumbnailWidth:200,thumbnailHeight:200};return Object.keys(this.options).forEach(function(t){e[t]=this.options[t]},this),null!==this.awss3&&(e.autoProcessQueue=!1,this.isS3=!0,this.isS3OverridesServerPropagation=!1===this.awss3.sendFileToServer,void 0!==this.options.autoProcessQueue&&(this.wasQueueAutoProcess=this.options.autoProcessQueue),this.isS3OverridesServerPropagation&&(e.url=(e=>e[0].s3Url))),e}},mounted(){if(this.$isServer&&this.hasBeenMounted)return;this.hasBeenMounted=!0,this.dropzone=new t(this.$refs.dropzoneElement,this.dropzoneSettings);let e=this;this.dropzone.on("thumbnail",function(t,i){e.$emit("vdropzone-thumbnail",t,i)}),this.dropzone.on("addedfile",function(t){var i,n;if(e.duplicateCheck&&this.files.length)for(i=0,n=this.files.length;i<n-1;i++)this.files[i].name===t.name&&this.files[i].size===t.size&&this.files[i].lastModifiedDate.toString()===t.lastModifiedDate.toString()&&(this.removeFile(t),e.$emit("vdropzone-duplicate-file",t));e.$emit("vdropzone-file-added",t),e.isS3&&e.wasQueueAutoProcess&&!t.manuallyAdded&&e.getSignedAndUploadToS3(t)}),this.dropzone.on("addedfiles",function(t){e.$emit("vdropzone-files-added",t)}),this.dropzone.on("removedfile",function(t){e.$emit("vdropzone-removed-file",t),t.manuallyAdded&&null!==e.dropzone.options.maxFiles&&e.dropzone.options.maxFiles++}),this.dropzone.on("success",function(t,i){if(e.$emit("vdropzone-success",t,i),e.isS3){if(e.isS3OverridesServerPropagation){var n=(new window.DOMParser).parseFromString(i,"text/xml").firstChild.children[0].innerHTML;e.$emit("vdropzone-s3-upload-success",n)}e.wasQueueAutoProcess&&e.setOption("autoProcessQueue",!1)}}),this.dropzone.on("successmultiple",function(t,i){e.$emit("vdropzone-success-multiple",t,i)}),this.dropzone.on("error",function(t,i,n){e.$emit("vdropzone-error",t,i,n),this.isS3&&e.$emit("vdropzone-s3-upload-error")}),this.dropzone.on("errormultiple",function(t,i,n){e.$emit("vdropzone-error-multiple",t,i,n)}),this.dropzone.on("sending",function(t,i,n){if(e.isS3)if(e.isS3OverridesServerPropagation){let e=t.s3Signature;Object.keys(e).forEach(function(t){n.append(t,e[t])})}else n.append("s3ObjectLocation",t.s3ObjectLocation);e.$emit("vdropzone-sending",t,i,n)}),this.dropzone.on("sendingmultiple",function(t,i,n){e.$emit("vdropzone-sending-multiple",t,i,n)}),this.dropzone.on("complete",function(t){e.$emit("vdropzone-complete",t)}),this.dropzone.on("completemultiple",function(t){e.$emit("vdropzone-complete-multiple",t)}),this.dropzone.on("canceled",function(t){e.$emit("vdropzone-canceled",t)}),this.dropzone.on("canceledmultiple",function(t){e.$emit("vdropzone-canceled-multiple",t)}),this.dropzone.on("maxfilesreached",function(t){e.$emit("vdropzone-max-files-reached",t)}),this.dropzone.on("maxfilesexceeded",function(t){e.$emit("vdropzone-max-files-exceeded",t)}),this.dropzone.on("processing",function(t){e.$emit("vdropzone-processing",t)}),this.dropzone.on("processingmultiple",function(t){e.$emit("vdropzone-processing-multiple",t)}),this.dropzone.on("uploadprogress",function(t,i,n){e.$emit("vdropzone-upload-progress",t,i,n)}),this.dropzone.on("totaluploadprogress",function(t,i,n){e.$emit("vdropzone-total-upload-progress",t,i,n)}),this.dropzone.on("reset",function(){e.$emit("vdropzone-reset")}),this.dropzone.on("queuecomplete",function(){e.$emit("vdropzone-queue-complete")}),this.dropzone.on("drop",function(t){e.$emit("vdropzone-drop",t)}),this.dropzone.on("dragstart",function(t){e.$emit("vdropzone-drag-start",t)}),this.dropzone.on("dragend",function(t){e.$emit("vdropzone-drag-end",t)}),this.dropzone.on("dragenter",function(t){e.$emit("vdropzone-drag-enter",t)}),this.dropzone.on("dragover",function(t){e.$emit("vdropzone-drag-over",t)}),this.dropzone.on("dragleave",function(t){e.$emit("vdropzone-drag-leave",t)}),e.$emit("vdropzone-mounted")},beforeDestroy(){this.destroyDropzone&&this.dropzone.destroy()},methods:{manuallyAddFile:function(e,t){e.manuallyAdded=!0,this.dropzone.emit("addedfile",e);let i=!1;if((t.indexOf(".svg")>-1||t.indexOf(".png")>-1||t.indexOf(".jpg")>-1||t.indexOf(".jpeg")>-1||t.indexOf(".gif")>-1||t.indexOf(".webp")>-1)&&(i=!0),this.dropzone.options.createImageThumbnails&&i&&e.size<=1024*this.dropzone.options.maxThumbnailFilesize*1024){t&&this.dropzone.emit("thumbnail",e,t);for(var n=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),r=0;r<n.length;r++)n[r].style.width=this.dropzoneSettings.thumbnailWidth+"px",n[r].style.height=this.dropzoneSettings.thumbnailHeight+"px",n[r].style["object-fit"]="contain"}this.dropzone.emit("complete",e),this.dropzone.options.maxFiles&&this.dropzone.options.maxFiles--,this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(e){this.dropzone.removeAllFiles(e)},processQueue:function(){let e=this.dropzone;this.isS3&&!this.wasQueueAutoProcess?this.getQueuedFiles().forEach(e=>{this.getSignedAndUploadToS3(e)}):this.dropzone.processQueue(),this.dropzone.on("success",function(){e.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){e.options.autoProcessQueue=!1})},init:function(){return this.dropzone.init()},destroy:function(){return this.dropzone.destroy()},updateTotalUploadProgress:function(){return this.dropzone.updateTotalUploadProgress()},getFallbackForm:function(){return this.dropzone.getFallbackForm()},getExistingFallback:function(){return this.dropzone.getExistingFallback()},setupEventListeners:function(){return this.dropzone.setupEventListeners()},removeEventListeners:function(){return this.dropzone.removeEventListeners()},disable:function(){return this.dropzone.disable()},enable:function(){return this.dropzone.enable()},filesize:function(e){return this.dropzone.filesize(e)},accept:function(e,t){return this.dropzone.accept(e,t)},addFile:function(e){return this.dropzone.addFile(e)},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getFilesWithStatus:function(){return this.dropzone.getFilesWithStatus()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getAddedFiles:function(){return this.dropzone.getAddedFiles()},getActiveFiles:function(){return this.dropzone.getActiveFiles()},getSignedAndUploadToS3(e){var t=i.sendFile(e,this.awss3,this.isS3OverridesServerPropagation);this.isS3OverridesServerPropagation?t.then(()=>{setTimeout(()=>this.dropzone.processFile(e))}):t.then(t=>{t.success?(e.s3ObjectLocation=t.message,setTimeout(()=>this.dropzone.processFile(e)),this.$emit("vdropzone-s3-upload-success",t.message)):void 0!==t.message?this.$emit("vdropzone-s3-upload-error",t.message):this.$emit("vdropzone-s3-upload-error","Network Error : Could not send request to AWS. (Maybe CORS error)")}),t.catch(e=>{alert(e)})},setAWSSigningURL(e){this.isS3&&(this.awss3.signingURL=e)}}},void 0,!1,void 0,void 0,void 0)});
//# sourceMappingURL=vue2Dropzone.js.map


/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue":
/*!************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/autocomplete.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_vue_vue_type_template_id_2c922d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=template&id=2c922d06& */ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&");
/* harmony import */ var _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=script&lang=js& */ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _autocomplete_vue_vue_type_template_id_2c922d06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _autocomplete_vue_vue_type_template_id_2c922d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue2-google-maps/dist/components/autocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./autocomplete.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_2c922d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./autocomplete.vue?vue&type=template&id=2c922d06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=2c922d06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_2c922d06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_template_id_2c922d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/autocompleteImpl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/autocompleteImpl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindProps = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _simulateArrowDown = __webpack_require__(/*! ../utils/simulateArrowDown.js */ "./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js");

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$gmapApiPromiseLazy().then(function () {
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      /* eslint-disable no-unused-vars */
      var finalOptions = _extends({}, (0, _bindProps.getPropsValues)(_this, mappedProps), _this.options);

      _this.$autocomplete = new google.maps.places.Autocomplete(_this.$refs.input, finalOptions);
      (0, _bindProps.bindProps)(_this, _this.$autocomplete, mappedProps);

      _this.$watch('componentRestrictions', function (v) {
        if (v !== undefined) {
          _this.$autocomplete.setComponentRestrictions(v);
        }
      });

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      _this.$autocomplete.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.$autocomplete.getPlace());
      });
    });
  },

  props: _extends({}, (0, _mapElementFactory.mappedPropsToVueProps)(mappedProps), props)
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/circle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/circle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'circle',
  ctr: function ctr() {
    return google.maps.Circle;
  },
  events: events
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue":
/*!**********************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/infoWindow.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infoWindow_vue_vue_type_template_id_17fc7ddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoWindow.vue?vue&type=template&id=17fc7ddc& */ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&");
/* harmony import */ var _infoWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoWindow.vue?vue&type=script&lang=js& */ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _infoWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infoWindow_vue_vue_type_template_id_17fc7ddc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _infoWindow_vue_vue_type_template_id_17fc7ddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue2-google-maps/dist/components/infoWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./infoWindow.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_template_id_17fc7ddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./infoWindow.vue?vue&type=template&id=17fc7ddc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=17fc7ddc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_template_id_17fc7ddc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_infoWindow_vue_vue_type_template_id_17fc7ddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/infoWindowImpl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/infoWindowImpl.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: {
    type: Object,
    required: false,
    default: function _default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};

var events = ['domready', 'closeclick', 'content_changed'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'infoWindow',
  ctr: function ctr() {
    return google.maps.InfoWindow;
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },

  inject: {
    '$markerPromise': {
      default: null
    }
  },

  mounted: function mounted() {
    var el = this.$refs.flyaway;
    el.parentNode.removeChild(el);
  },
  beforeCreate: function beforeCreate(options) {
    var _this = this;

    options.content = this.$refs.flyaway;

    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then(function (mo) {
        _this.$markerObject = mo;
        return mo;
      });
    }
  },


  methods: {
    _openInfoWindow: function _openInfoWindow() {
      if (this.opened) {
        if (this.$markerObject !== null) {
          this.$infoWindowObject.open(this.$map, this.$markerObject);
        } else {
          this.$infoWindowObject.open(this.$map);
        }
      } else {
        this.$infoWindowObject.close();
      }
    }
  },

  afterCreate: function afterCreate() {
    var _this2 = this;

    this._openInfoWindow();
    this.$watch('opened', function () {
      _this2._openInfoWindow();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/map.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_85ca06a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=85ca06a4& */ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&");
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_85ca06a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_85ca06a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue2-google-maps/dist/components/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./map.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader!../../../css-loader??ref--6-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--6-2!../../../vue-loader/lib??vue-loader-options!./map.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_85ca06a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./map.vue?vue&type=template&id=85ca06a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=85ca06a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_85ca06a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_85ca06a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/mapElementFactory.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var mappedProps = options.mappedProps,
      name = options.name,
      ctr = options.ctr,
      ctrArgs = options.ctrArgs,
      events = options.events,
      beforeCreate = options.beforeCreate,
      afterCreate = options.afterCreate,
      props = options.props,
      rest = _objectWithoutProperties(options, ['mappedProps', 'name', 'ctr', 'ctrArgs', 'events', 'beforeCreate', 'afterCreate', 'props']);

  var promiseName = '$' + name + 'Promise';
  var instanceName = '$' + name + 'Object';

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array');

  return _extends({}, typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}, {
    mixins: [_mapElementMixin2.default],
    props: _extends({}, props, mappedPropsToVueProps(mappedProps)),
    render: function render() {
      return '';
    },
    provide: function provide() {
      var _this = this;

      var promise = this.$mapPromise.then(function (map) {
        // Infowindow needs this to be immediately available
        _this.$map = map;

        // Initialize the maps with the given options
        var options = _extends({}, _this.options, {
          map: map
        }, (0, _bindProps.getPropsValues)(_this, mappedProps));
        delete options.options; // delete the extra options

        if (beforeCreate) {
          var result = beforeCreate.bind(_this)(options);

          if (result instanceof Promise) {
            return result.then(function () {
              return { options: options };
            });
          }
        }
        return { options: options };
      }).then(function (_ref) {
        var _Function$prototype$b;

        var options = _ref.options;

        var ConstructorObject = ctr();
        // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, (0, _bindProps.getPropsValues)(_this, props || {}))))))() : new ConstructorObject(options);

        (0, _bindProps.bindProps)(_this, _this[instanceName], mappedProps);
        (0, _bindEvents2.default)(_this, _this[instanceName], events);

        if (afterCreate) {
          afterCreate.bind(_this)(_this[instanceName]);
        }
        return _this[instanceName];
      });
      this[promiseName] = promise;
      return _defineProperty({}, promiseName, promise);
    },
    destroyed: function destroyed() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    }
  }, rest);
};

exports.mappedPropsToVueProps = mappedPropsToVueProps;

var _bindEvents = __webpack_require__(/*! ../utils/bindEvents.js */ "./node_modules/vue2-google-maps/dist/utils/bindEvents.js");

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _mapElementMixin = __webpack_require__(/*! ./mapElementMixin */ "./node_modules/vue2-google-maps/dist/components/mapElementMixin.js");

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */


function assert(v, message) {
  if (!v) throw new Error(message);
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        prop = _ref4[1];

    var value = {};

    if ('type' in prop) value.type = prop.type;
    if ('default' in prop) value.default = prop.default;
    if ('required' in prop) value.required = prop.required;

    return [key, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    acc[key] = val;
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/mapElementMixin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/mapElementMixin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
exports.default = {
  inject: {
    '$mapPromise': { default: 'abcdef' }
  },

  provide: function provide() {
    var _this = this;

    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then(function (map) {
      _this.$map = map;
    });

    return {};
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/mapImpl.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/mapImpl.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(/*! ../utils/bindEvents.js */ "./node_modules/vue2-google-maps/dist/utils/bindEvents.js");

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _mountableMixin = __webpack_require__(/*! ../utils/mountableMixin.js */ "./node_modules/vue2-google-maps/dist/utils/mountableMixin.js");

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(/*! ../utils/TwoWayBindingWrapper.js */ "./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js");

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(/*! ../utils/WatchPrimitiveProperties.js */ "./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js");

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['bounds_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

// Plain Google Maps methods exposed here for convenience
var linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce(function (all, methodName) {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});

// Other convenience methods exposed by Vue Google Maps
var customMethods = {
  resize: function resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter: function resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }

    var oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  },


  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback: function _resizeCallback() {
    this.resizePreserveCenter();
  }
};

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),

  provide: function provide() {
    var _this = this;

    this.$mapPromise = new Promise(function (resolve, reject) {
      _this.$mapPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$mapPromise': this.$mapPromise
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.center && typeof this.center.lat === 'function' ? this.center.lat() : this.center.lat;
    },
    finalLng: function finalLng() {
      return this.center && typeof this.center.lng === 'function' ? this.center.lng() : this.center.lng;
    },
    finalLatLng: function finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-map'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;
      _this2.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$mapObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$mapObject, events);

      // manually trigger center and zoom
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        _this2.$mapObject.addListener('center_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('center_changed', _this2.$mapObject.getCenter());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$mapObject.setCenter(_this2.finalLatLng);
        });
      });
      _this2.$mapObject.addListener('zoom_changed', function () {
        _this2.$emit('zoom_changed', _this2.$mapObject.getZoom());
      });
      _this2.$mapObject.addListener('bounds_changed', function () {
        _this2.$emit('bounds_changed', _this2.$mapObject.getBounds());
      });

      _this2.$mapPromiseDeferred.resolve(_this2.$mapObject);

      return _this2.$mapObject;
    }).catch(function (error) {
      throw error;
    });
  },

  methods: _extends({}, customMethods, linkedMethods)
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/marker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/marker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};

var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/**
 * @class Marker
 *
 * Marker class with extra support for
 *
 * - Embedded info windows
 * - Clustered markers
 *
 * Support for clustered markers is for backward-compatability
 * reasons. Otherwise we should use a cluster-marker mixin or
 * subclass.
 */
exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'marker',
  ctr: function ctr() {
    return google.maps.Marker;
  },

  inject: {
    '$clusterPromise': {
      default: null
    }
  },

  render: function render(h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return '';
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0];
    } else {
      return h('div', this.$slots.default);
    }
  },
  destroyed: function destroyed() {
    if (!this.$markerObject) {
      return;
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate: function beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }

    return this.$clusterPromise;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    if (this.$clusterPromise) {
      this.$clusterPromise.then(function (co) {
        co.addMarker(inst);
        _this.$clusterObject = co;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInput.vue":
/*!**********************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/placeInput.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInput_vue_vue_type_template_id_c1ab87be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeInput.vue?vue&type=template&id=c1ab87be& */ "./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&");
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeInputImpl.js?vue&type=script&lang=js& */ "./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&?bfef");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeInput_vue_vue_type_template_id_c1ab87be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _placeInput_vue_vue_type_template_id_c1ab87be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue2-google-maps/dist/components/placeInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_placeInput_vue_vue_type_template_id_c1ab87be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./placeInput.vue?vue&type=template&id=c1ab87be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=c1ab87be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_placeInput_vue_vue_type_template_id_c1ab87be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_placeInput_vue_vue_type_template_id_c1ab87be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&?0c5e":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindProps = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _simulateArrowDown = __webpack_require__(/*! ../utils/simulateArrowDown.js */ "./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js");

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var props = {
  bounds: {
    type: Object
  },
  defaultPlace: {
    type: String,
    default: ''
  },
  componentRestrictions: {
    type: Object,
    default: null
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  placeholder: {
    required: false,
    type: String
  },
  className: {
    required: false,
    type: String
  },
  label: {
    required: false,
    type: String,
    default: null
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    // Allow default place to be set
    input.value = this.defaultPlace;
    this.$watch('defaultPlace', function () {
      input.value = _this.defaultPlace;
    });

    this.$gmapApiPromiseLazy().then(function () {
      var options = (0, _bindProps.getPropsValues)(_this, props);
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);

      var placeholder = props.placeholder,
          place = props.place,
          defaultPlace = props.defaultPlace,
          className = props.className,
          label = props.label,
          selectFirstOnEnter = props.selectFirstOnEnter,
          rest = _objectWithoutProperties(props, ['placeholder', 'place', 'defaultPlace', 'className', 'label', 'selectFirstOnEnter']); // eslint-disable-line


      (0, _bindProps.bindProps)(_this, _this.autoCompleter, rest);

      _this.autoCompleter.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.autoCompleter.getPlace());
      });
    });
  },
  created: function created() {
    console.warn('The PlaceInput class is deprecated! Please consider using the Autocomplete input instead'); // eslint-disable-line no-console
  },

  props: props
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&?bfef":
/*!**************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./placeInputImpl.js?vue&type=script&lang=js& */ "./node_modules/vue2-google-maps/dist/components/placeInputImpl.js?vue&type=script&lang=js&?0c5e");
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/polygon.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/polygon.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,
  mappedProps: props,
  name: 'polygon',
  ctr: function ctr() {
    return google.maps.Polygon;
  },

  beforeCreate: function beforeCreate(options) {
    if (!options.path) delete options.path;
    if (!options.paths) delete options.paths;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    var clearEvents = function () {};

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch('paths', function (paths) {
      if (paths) {
        clearEvents();

        inst.setPaths(paths);

        var updatePaths = function () {
          _this.$emit('paths_changed', inst.getPaths());
        };
        var eventListeners = [];

        var mvcArray = inst.getPaths();
        for (var i = 0; i < mvcArray.getLength(); i++) {
          var mvcPath = mvcArray.getAt(i);
          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
        }
        eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        inst.setPaths(path);

        var mvcPath = inst.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', inst.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                obj = _ref4[0],
                listenerHandle = _ref4[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/polyline.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/polyline.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,

  name: 'polyline',
  ctr: function ctr() {
    return google.maps.Polyline;
  },

  afterCreate: function afterCreate() {
    var _this = this;

    var clearEvents = function () {};

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        _this.$polylineObject.setPath(path);

        var mvcPath = _this.$polylineObject.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', _this.$polylineObject.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/rectangle.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/rectangle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'rectangle',
  ctr: function ctr() {
    return google.maps.Rectangle;
  },
  events: events
});

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _streetViewPanorama_vue_vue_type_template_id_ed35740a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streetViewPanorama.vue?vue&type=template&id=ed35740a& */ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&");
/* harmony import */ var _streetViewPanorama_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streetViewPanorama.vue?vue&type=script&lang=js& */ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./streetViewPanorama.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _streetViewPanorama_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _streetViewPanorama_vue_vue_type_template_id_ed35740a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _streetViewPanorama_vue_vue_type_template_id_ed35740a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./streetViewPanorama.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader!../../../css-loader??ref--6-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--6-2!../../../vue-loader/lib??vue-loader-options!./streetViewPanorama.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_template_id_ed35740a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./streetViewPanorama.vue?vue&type=template&id=ed35740a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=ed35740a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_template_id_ed35740a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_template_id_ed35740a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/components/streetViewPanoramaImpl.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/components/streetViewPanoramaImpl.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(/*! ../utils/bindEvents.js */ "./node_modules/vue2-google-maps/dist/utils/bindEvents.js");

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/vue2-google-maps/dist/utils/bindProps.js");

var _mountableMixin = __webpack_require__(/*! ../utils/mountableMixin.js */ "./node_modules/vue2-google-maps/dist/utils/mountableMixin.js");

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(/*! ../utils/TwoWayBindingWrapper.js */ "./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js");

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(/*! ../utils/WatchPrimitiveProperties.js */ "./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js");

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(/*! ./mapElementFactory.js */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
    noBind: true
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true
  },
  options: {
    twoWay: false,
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['closeclick', 'status_changed'];

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),
  replace: false, // necessary for css styles
  methods: {
    resize: function resize() {
      if (this.$panoObject) {
        google.maps.event.trigger(this.$panoObject, 'resize');
      }
    }
  },

  provide: function provide() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this.$panoPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$panoPromise': promise,
      '$mapPromise': promise // so that we can use it with markers
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.position && typeof this.position.lat === 'function' ? this.position.lat() : this.position.lat;
    },
    finalLng: function finalLng() {
      return this.position && typeof this.position.lng === 'function' ? this.position.lng() : this.position.lng;
    },
    finalLatLng: function finalLatLng() {
      return {
        lat: this.finalLat,
        lng: this.finalLng
      };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-street-view-pano'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;

      _this2.$panoObject = new google.maps.StreetViewPanorama(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$panoObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$panoObject, events);

      // manually trigger position
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        // Panos take a while to load
        increment();

        _this2.$panoObject.addListener('position_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('position_changed', _this2.$panoObject.getPosition());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$panoObject.setPosition(_this2.finalLatLng);
        });
      });

      _this2.$panoPromiseDeferred.resolve(_this2.$panoObject);

      return _this2.$panoPromise;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/main.js":
/*!****************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreetViewPanorama = exports.MountableMixin = exports.Autocomplete = exports.MapElementFactory = exports.MapElementMixin = exports.PlaceInput = exports.Map = exports.InfoWindow = exports.Rectangle = exports.Cluster = exports.Circle = exports.Polygon = exports.Polyline = exports.Marker = exports.loadGmapApi = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Vue component imports


exports.install = install;
exports.gmapApi = gmapApi;

var _lazyValue = __webpack_require__(/*! ./utils/lazyValue */ "./node_modules/vue2-google-maps/dist/utils/lazyValue.js");

var _lazyValue2 = _interopRequireDefault(_lazyValue);

var _manager = __webpack_require__(/*! ./manager */ "./node_modules/vue2-google-maps/dist/manager.js");

var _marker = __webpack_require__(/*! ./components/marker */ "./node_modules/vue2-google-maps/dist/components/marker.js");

var _marker2 = _interopRequireDefault(_marker);

var _polyline = __webpack_require__(/*! ./components/polyline */ "./node_modules/vue2-google-maps/dist/components/polyline.js");

var _polyline2 = _interopRequireDefault(_polyline);

var _polygon = __webpack_require__(/*! ./components/polygon */ "./node_modules/vue2-google-maps/dist/components/polygon.js");

var _polygon2 = _interopRequireDefault(_polygon);

var _circle = __webpack_require__(/*! ./components/circle */ "./node_modules/vue2-google-maps/dist/components/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = __webpack_require__(/*! ./components/rectangle */ "./node_modules/vue2-google-maps/dist/components/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _infoWindow = __webpack_require__(/*! ./components/infoWindow.vue */ "./node_modules/vue2-google-maps/dist/components/infoWindow.vue");

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = __webpack_require__(/*! ./components/map.vue */ "./node_modules/vue2-google-maps/dist/components/map.vue");

var _map2 = _interopRequireDefault(_map);

var _streetViewPanorama = __webpack_require__(/*! ./components/streetViewPanorama.vue */ "./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue");

var _streetViewPanorama2 = _interopRequireDefault(_streetViewPanorama);

var _placeInput = __webpack_require__(/*! ./components/placeInput.vue */ "./node_modules/vue2-google-maps/dist/components/placeInput.vue");

var _placeInput2 = _interopRequireDefault(_placeInput);

var _autocomplete = __webpack_require__(/*! ./components/autocomplete.vue */ "./node_modules/vue2-google-maps/dist/components/autocomplete.vue");

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = __webpack_require__(/*! ./components/mapElementMixin */ "./node_modules/vue2-google-maps/dist/components/mapElementMixin.js");

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mapElementFactory = __webpack_require__(/*! ./components/mapElementFactory */ "./node_modules/vue2-google-maps/dist/components/mapElementFactory.js");

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

var _mountableMixin = __webpack_require__(/*! ./utils/mountableMixin */ "./node_modules/vue2-google-maps/dist/utils/mountableMixin.js");

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Cluster should be loaded conditionally
// However in the web version, it's not possible to write
// `import 'vue2-google-maps/src/components/cluster'`, so we need to
// import it anyway (but we don't have to register it)
// Therefore we use babel-plugin-transform-inline-environment-variables to
// set BUILD_DEV to truthy / falsy
var Cluster = undefined;

var GmapApi = null;

// export everything
exports.loadGmapApi = _manager.loadGmapApi;
exports.Marker = _marker2.default;
exports.Polyline = _polyline2.default;
exports.Polygon = _polygon2.default;
exports.Circle = _circle2.default;
exports.Cluster = Cluster;
exports.Rectangle = _rectangle2.default;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.PlaceInput = _placeInput2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.MapElementFactory = _mapElementFactory2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.StreetViewPanorama = _streetViewPanorama2.default;
function install(Vue, options) {
  // Set defaults
  options = _extends({
    installComponents: true,
    autobindAllEvents: false
  }, options);

  // Update the global `GmapApi`. This will allow
  // components to use the `google` global reactively
  // via:
  //   import {gmapApi} from 'vue2-google-maps'
  //   export default {  computed: { google: gmapApi }  }
  GmapApi = new Vue({ data: { gmapApi: null } });

  var defaultResizeBus = new Vue();

  // Use a lazy to only load the API when
  // a VGM component is loaded
  var gmapApiPromiseLazy = makeGmapApiPromiseLazy(options);

  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapMarker', _marker2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapPolyline', _polyline2.default);
    Vue.component('GmapPolygon', _polygon2.default);
    Vue.component('GmapCircle', _circle2.default);
    Vue.component('GmapRectangle', _rectangle2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
    Vue.component('GmapPlaceInput', _placeInput2.default);
    Vue.component('GmapStreetViewPanorama', _streetViewPanorama2.default);
  }
}

function makeGmapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GmapApi.gmapApi = {};
    return window.google;
  }

  if (options.load) {
    // If library should load the API
    return (0, _lazyValue2.default)(function () {
      // Load the
      // This will only be evaluated once
      if (typeof window === 'undefined') {
        // server side -- never resolve this promise
        return new Promise(function () {}).then(onApiLoaded);
      } else {
        return new Promise(function (resolve, reject) {
          try {
            window['vueGoogleMapsInit'] = resolve;
            (0, _manager.loadGmapApi)(options.load, options.loadCn);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    var promise = new Promise(function (resolve) {
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return;
      }
      window['vueGoogleMapsInit'] = resolve;
    }).then(onApiLoaded);

    return (0, _lazyValue2.default)(function () {
      return promise;
    });
  }
}

function gmapApi() {
  return GmapApi.gmapApi && window.google;
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isApiSetUp = false;

/**
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the libraries and/or version (as `v`) parameter into
 *                  this parameter and skip the next two parameters
 * @param version   Google Maps version
 * @param libraries Libraries to load (@see
 *                  https://developers.google.com/maps/documentation/javascript/libraries)
 * @param loadCn    Boolean. If set to true, the map will be loaded from google maps China
 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
 *
 * Example:
 * ```
 *      import {load} from 'vue-google-maps'
 *
 *      load(<YOUR-API-KEY>)
 *
 *      load({
 *              key: <YOUR-API-KEY>,
 *      })
 *
 *      load({
 *              client: <YOUR-CLIENT-ID>,
 *              channel: <YOUR CHANNEL>
 *      })
 * ```
 */
var loadGmapApi = exports.loadGmapApi = function (options, loadCn) {
  if (typeof document === 'undefined') {
    // Do nothing if run from server-side
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;

    var googleMapScript = document.createElement('SCRIPT');

    // Allow options to be an object.
    // This is to support more esoteric means of loading Google Maps,
    // such as Google for business
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('options should  be an object');
    }

    // libraries
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }
    options['callback'] = 'vueGoogleMapsInit';

    var baseUrl = 'https://maps.googleapis.com/';

    if (typeof loadCn === 'boolean' && loadCn === true) {
      baseUrl = 'https://maps.google.cn/';
    }

    var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    }).join('&');

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error('You already started the loading of google maps');
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/TwoWayBindingWrapper.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TwoWayBindingWrapper;
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  var counter = 0;

  fn(function () {
    counter += 1;
  }, function () {
    counter = Math.max(0, counter - 1);
  }, function () {
    return counter === 0;
  });
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WatchPrimitiveProperties;
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
  var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var isHandled = false;

  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(function () {
        isHandled = false;
        handler();
      });
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propertiesToTrack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      vueInst.$watch(prop, requestHandle, { immediate: immediate });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/bindEvents.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/bindEvents.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vueInst, googleMapsInst, events) {
  var _loop = function (eventName) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, function (ev) {
        vueInst.$emit(eventName, ev);
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/bindProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/bindProps.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropsValues = getPropsValues;
exports.bindProps = bindProps;

var _WatchPrimitiveProperties = __webpack_require__(/*! ../utils/WatchPrimitiveProperties */ "./node_modules/vue2-google-maps/dist/utils/WatchPrimitiveProperties.js");

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce(function (acc, prop) {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}

/**
  * Binds the properties defined in props to the google maps instance.
  * If the prop is an Object type, and we wish to track the properties
  * of the object (e.g. the lat and lng of a LatLng), then we do a deep
  * watch. For deep watch, we also prevent the _changed event from being
  * emitted if the data source was external.
  */
function bindProps(vueInst, googleMapsInst, props) {
  var _loop = function (attribute) {
    var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;


    if (noBind) return 'continue';

    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
    var eventName = attribute.toLowerCase() + '_changed';
    var initialValue = vueInst[attribute];

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(setMethodName + ' is not a method of (the Maps object corresponding to) ' + vueInst.$options._componentTag);
    }

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute, function () {
        var attributeValue = vueInst[attribute];

        googleMapsInst[setMethodName](attributeValue);
      }, {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      });
    } else {
      (0, _WatchPrimitiveProperties2.default)(vueInst, trackProperties.map(function (prop) {
        return attribute + '.' + prop;
      }), function () {
        googleMapsInst[setMethodName](vueInst[attribute]);
      }, vueInst[attribute] !== undefined);
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName])) {
      googleMapsInst.addListener(eventName, function () {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  };

  for (var attribute in props) {
    var _ret = _loop(attribute);

    if (_ret === 'continue') continue;
  }
}

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/lazyValue.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/lazyValue.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by sindresorhus and can be seen here
// https://github.com/sindresorhus/lazy-value/blob/master/index.js

exports.default = function (fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/mountableMixin.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/mountableMixin.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

exports.default = {
  props: ['resizeBus'],

  data: function data() {
    return {
      _actualResizeBus: null
    };
  },
  created: function created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },


  methods: {
    _resizeCallback: function _resizeCallback() {
      this.resize();
    },
    _delayedResizeCallback: function _delayedResizeCallback() {
      var _this = this;

      this.$nextTick(function () {
        return _this._resizeCallback();
      });
    }
  },

  watch: {
    resizeBus: function resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal;
    },
    '$data._actualResizeBus': function $data_actualResizeBus(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback);
      }
      if (newVal) {
        newVal.$on('resize', this._delayedResizeCallback);
      }
    }
  },

  destroyed: function destroyed() {
    if (this.$data._actualResizeBus) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
    }
  }
};

/***/ }),

/***/ "./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue2-google-maps/dist/utils/simulateArrowDown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
exports.default = function (input) {
  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      var origListener = listener;
      listener = function (event) {
        var suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0;
        if (event.which === 13 && !suggestionSelected) {
          var simulatedEvent = document.createEvent('Event');
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }

  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vuelidate/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vuelidate = Vuelidate;
Object.defineProperty(exports, "withParams", {
  enumerable: true,
  get: function get() {
    return _params.withParams;
  }
});
exports.default = exports.validationMixin = void 0;

var _vval = __webpack_require__(/*! ./vval */ "./node_modules/vuelidate/lib/vval.js");

var _params = __webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var NIL = function NIL() {
  return null;
};

var buildFromKeys = function buildFromKeys(keys, fn, keyFn) {
  return keys.reduce(function (build, key) {
    build[keyFn ? keyFn(key) : key] = fn(key);
    return build;
  }, {});
};

function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && (_typeof(val) === 'object' || isFunction(val));
}

function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}

var getPath = function getPath(ctx, obj, path, fallback) {
  if (typeof path === 'function') {
    return path.call(ctx, obj, fallback);
  }

  path = Array.isArray(path) ? path : path.split('.');

  for (var i = 0; i < path.length; i++) {
    if (obj && _typeof(obj) === 'object') {
      obj = obj[path[i]];
    } else {
      return fallback;
    }
  }

  return typeof obj === 'undefined' ? fallback : obj;
};

var __isVuelidateAsyncVm = '__isVuelidateAsyncVm';

function makePendingAsyncVm(Vue, promise) {
  var asyncVm = new Vue({
    data: {
      p: true,
      v: false
    }
  });
  promise.then(function (value) {
    asyncVm.p = false;
    asyncVm.v = value;
  }, function (error) {
    asyncVm.p = false;
    asyncVm.v = false;
    throw error;
  });
  asyncVm[__isVuelidateAsyncVm] = true;
  return asyncVm;
}

var validationGetters = {
  $invalid: function $invalid() {
    var _this = this;

    var proxy = this.proxy;
    return this.nestedKeys.some(function (nested) {
      return _this.refProxy(nested).$invalid;
    }) || this.ruleKeys.some(function (rule) {
      return !proxy[rule];
    });
  },
  $dirty: function $dirty() {
    var _this2 = this;

    if (this.dirty) {
      return true;
    }

    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.every(function (key) {
      return _this2.refProxy(key).$dirty;
    });
  },
  $anyDirty: function $anyDirty() {
    var _this3 = this;

    if (this.dirty) {
      return true;
    }

    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.some(function (key) {
      return _this3.refProxy(key).$anyDirty;
    });
  },
  $error: function $error() {
    return this.$dirty && !this.$pending && this.$invalid;
  },
  $anyError: function $anyError() {
    return this.$anyDirty && !this.$pending && this.$invalid;
  },
  $pending: function $pending() {
    var _this4 = this;

    return this.ruleKeys.some(function (key) {
      return _this4.getRef(key).$pending;
    }) || this.nestedKeys.some(function (key) {
      return _this4.refProxy(key).$pending;
    });
  },
  $params: function $params() {
    var _this5 = this;

    var vals = this.validations;
    return _objectSpread({}, buildFromKeys(this.nestedKeys, function (key) {
      return vals[key] && vals[key].$params || null;
    }), buildFromKeys(this.ruleKeys, function (key) {
      return _this5.getRef(key).$params;
    }));
  }
};

function setDirtyRecursive(newState) {
  this.dirty = newState;
  var proxy = this.proxy;
  var method = newState ? '$touch' : '$reset';
  this.nestedKeys.forEach(function (key) {
    proxy[key][method]();
  });
}

var validationMethods = {
  $touch: function $touch() {
    setDirtyRecursive.call(this, true);
  },
  $reset: function $reset() {
    setDirtyRecursive.call(this, false);
  },
  $flattenParams: function $flattenParams() {
    var proxy = this.proxy;
    var params = [];

    for (var key in this.$params) {
      if (this.isNested(key)) {
        var childParams = proxy[key].$flattenParams();

        for (var j = 0; j < childParams.length; j++) {
          childParams[j].path.unshift(key);
        }

        params = params.concat(childParams);
      } else {
        params.push({
          path: [],
          name: key,
          params: this.$params[key]
        });
      }
    }

    return params;
  }
};
var getterNames = Object.keys(validationGetters);
var methodNames = Object.keys(validationMethods);
var _cachedComponent = null;

var getComponent = function getComponent(Vue) {
  if (_cachedComponent) {
    return _cachedComponent;
  }

  var VBase = Vue.extend({
    computed: {
      refs: function refs() {
        var oldVval = this._vval;
        this._vval = this.children;
        (0, _vval.patchChildren)(oldVval, this._vval);
        var refs = {};

        this._vval.forEach(function (c) {
          refs[c.key] = c.vm;
        });

        return refs;
      }
    },
    beforeCreate: function beforeCreate() {
      this._vval = null;
    },
    beforeDestroy: function beforeDestroy() {
      if (this._vval) {
        (0, _vval.patchChildren)(this._vval);
        this._vval = null;
      }
    },
    methods: {
      getModel: function getModel() {
        return this.lazyModel ? this.lazyModel(this.prop) : this.model;
      },
      getModelKey: function getModelKey(key) {
        var model = this.getModel();

        if (model) {
          return model[key];
        }
      },
      hasIter: function hasIter() {
        return false;
      }
    }
  });
  var ValidationRule = VBase.extend({
    data: function data() {
      return {
        rule: null,
        lazyModel: null,
        model: null,
        lazyParentModel: null,
        rootModel: null
      };
    },
    methods: {
      runRule: function runRule(parent) {
        var model = this.getModel();
        (0, _params.pushParams)();
        var rawOutput = this.rule.call(this.rootModel, model, parent);
        var output = isPromise(rawOutput) ? makePendingAsyncVm(Vue, rawOutput) : rawOutput;
        var rawParams = (0, _params.popParams)();
        var params = rawParams && rawParams.$sub ? rawParams.$sub.length > 1 ? rawParams : rawParams.$sub[0] : null;
        return {
          output: output,
          params: params
        };
      }
    },
    computed: {
      run: function run() {
        var _this6 = this;

        var parent = this.lazyParentModel();

        var isArrayDependant = Array.isArray(parent) && parent.__ob__;

        if (isArrayDependant) {
          var arrayDep = parent.__ob__.dep;
          arrayDep.depend();
          var target = arrayDep.constructor.target;

          if (!this._indirectWatcher) {
            var Watcher = target.constructor;
            this._indirectWatcher = new Watcher(this, function () {
              return _this6.runRule(parent);
            }, null, {
              lazy: true
            });
          }

          var model = this.getModel();

          if (!this._indirectWatcher.dirty && this._lastModel === model) {
            this._indirectWatcher.depend();

            return target.value;
          }

          this._lastModel = model;

          this._indirectWatcher.evaluate();

          this._indirectWatcher.depend();
        } else if (this._indirectWatcher) {
          this._indirectWatcher.teardown();

          this._indirectWatcher = null;
        }

        return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(parent);
      },
      $params: function $params() {
        return this.run.params;
      },
      proxy: function proxy() {
        var output = this.run.output;

        if (output[__isVuelidateAsyncVm]) {
          return !!output.v;
        }

        return !!output;
      },
      $pending: function $pending() {
        var output = this.run.output;

        if (output[__isVuelidateAsyncVm]) {
          return output.p;
        }

        return false;
      }
    },
    destroyed: function destroyed() {
      if (this._indirectWatcher) {
        this._indirectWatcher.teardown();

        this._indirectWatcher = null;
      }
    }
  });
  var Validation = VBase.extend({
    data: function data() {
      return {
        dirty: false,
        validations: null,
        lazyModel: null,
        model: null,
        prop: null,
        lazyParentModel: null,
        rootModel: null
      };
    },
    methods: _objectSpread({}, validationMethods, {
      refProxy: function refProxy(key) {
        return this.getRef(key).proxy;
      },
      getRef: function getRef(key) {
        return this.refs[key];
      },
      isNested: function isNested(key) {
        return typeof this.validations[key] !== 'function';
      }
    }),
    computed: _objectSpread({}, validationGetters, {
      nestedKeys: function nestedKeys() {
        return this.keys.filter(this.isNested);
      },
      ruleKeys: function ruleKeys() {
        var _this7 = this;

        return this.keys.filter(function (k) {
          return !_this7.isNested(k);
        });
      },
      keys: function keys() {
        return Object.keys(this.validations).filter(function (k) {
          return k !== '$params';
        });
      },
      proxy: function proxy() {
        var _this8 = this;

        var keyDefs = buildFromKeys(this.keys, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this8.refProxy(key);
            }
          };
        });
        var getterDefs = buildFromKeys(getterNames, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this8[key];
            }
          };
        });
        var methodDefs = buildFromKeys(methodNames, function (key) {
          return {
            enumerable: false,
            configurable: true,
            get: function get() {
              return _this8[key];
            }
          };
        });
        var iterDefs = this.hasIter() ? {
          $iter: {
            enumerable: true,
            value: Object.defineProperties({}, _objectSpread({}, keyDefs))
          }
        } : {};
        return Object.defineProperties({}, _objectSpread({}, keyDefs, iterDefs, {
          $model: {
            enumerable: true,
            get: function get() {
              var parent = _this8.lazyParentModel();

              if (parent != null) {
                return parent[_this8.prop];
              } else {
                return null;
              }
            },
            set: function set(value) {
              var parent = _this8.lazyParentModel();

              if (parent != null) {
                parent[_this8.prop] = value;

                _this8.$touch();
              }
            }
          }
        }, getterDefs, methodDefs));
      },
      children: function children() {
        var _this9 = this;

        return _toConsumableArray(this.nestedKeys.map(function (key) {
          return renderNested(_this9, key);
        })).concat(_toConsumableArray(this.ruleKeys.map(function (key) {
          return renderRule(_this9, key);
        }))).filter(Boolean);
      }
    })
  });
  var GroupValidation = Validation.extend({
    methods: {
      isNested: function isNested(key) {
        return typeof this.validations[key]() !== 'undefined';
      },
      getRef: function getRef(key) {
        var vm = this;
        return {
          get proxy() {
            return vm.validations[key]() || false;
          }

        };
      }
    }
  });
  var EachValidation = Validation.extend({
    computed: {
      keys: function keys() {
        var model = this.getModel();

        if (isObject(model)) {
          return Object.keys(model);
        } else {
          return [];
        }
      },
      tracker: function tracker() {
        var _this10 = this;

        var trackBy = this.validations.$trackBy;
        return trackBy ? function (key) {
          return "".concat(getPath(_this10.rootModel, _this10.getModelKey(key), trackBy));
        } : function (x) {
          return "".concat(x);
        };
      },
      getModelLazy: function getModelLazy() {
        var _this11 = this;

        return function () {
          return _this11.getModel();
        };
      },
      children: function children() {
        var _this12 = this;

        var def = this.validations;
        var model = this.getModel();

        var validations = _objectSpread({}, def);

        delete validations['$trackBy'];
        var usedTracks = {};
        return this.keys.map(function (key) {
          var track = _this12.tracker(key);

          if (usedTracks.hasOwnProperty(track)) {
            return null;
          }

          usedTracks[track] = true;
          return (0, _vval.h)(Validation, track, {
            validations: validations,
            prop: key,
            lazyParentModel: _this12.getModelLazy,
            model: model[key],
            rootModel: _this12.rootModel
          });
        }).filter(Boolean);
      }
    },
    methods: {
      isNested: function isNested() {
        return true;
      },
      getRef: function getRef(key) {
        return this.refs[this.tracker(key)];
      },
      hasIter: function hasIter() {
        return true;
      }
    }
  });

  var renderNested = function renderNested(vm, key) {
    if (key === '$each') {
      return (0, _vval.h)(EachValidation, key, {
        validations: vm.validations[key],
        lazyParentModel: vm.lazyParentModel,
        prop: key,
        lazyModel: vm.getModel,
        rootModel: vm.rootModel
      });
    }

    var validations = vm.validations[key];

    if (Array.isArray(validations)) {
      var root = vm.rootModel;
      var refVals = buildFromKeys(validations, function (path) {
        return function () {
          return getPath(root, root.$v, path);
        };
      }, function (v) {
        return Array.isArray(v) ? v.join('.') : v;
      });
      return (0, _vval.h)(GroupValidation, key, {
        validations: refVals,
        lazyParentModel: NIL,
        prop: key,
        lazyModel: NIL,
        rootModel: root
      });
    }

    return (0, _vval.h)(Validation, key, {
      validations: validations,
      lazyParentModel: vm.getModel,
      prop: key,
      lazyModel: vm.getModelKey,
      rootModel: vm.rootModel
    });
  };

  var renderRule = function renderRule(vm, key) {
    return (0, _vval.h)(ValidationRule, key, {
      rule: vm.validations[key],
      lazyParentModel: vm.lazyParentModel,
      lazyModel: vm.getModel,
      rootModel: vm.rootModel
    });
  };

  _cachedComponent = {
    VBase: VBase,
    Validation: Validation
  };
  return _cachedComponent;
};

var _cachedVue = null;

function getVue(rootVm) {
  if (_cachedVue) return _cachedVue;
  var Vue = rootVm.constructor;

  while (Vue.super) {
    Vue = Vue.super;
  }

  _cachedVue = Vue;
  return Vue;
}

var validateModel = function validateModel(model, validations) {
  var Vue = getVue(model);

  var _getComponent = getComponent(Vue),
      Validation = _getComponent.Validation,
      VBase = _getComponent.VBase;

  var root = new VBase({
    computed: {
      children: function children() {
        var vals = typeof validations === 'function' ? validations.call(model) : validations;
        return [(0, _vval.h)(Validation, '$v', {
          validations: vals,
          lazyParentModel: NIL,
          prop: '$v',
          model: model,
          rootModel: model
        })];
      }
    }
  });
  return root;
};

var validationMixin = {
  data: function data() {
    var vals = this.$options.validations;

    if (vals) {
      this._vuelidate = validateModel(this, vals);
    }

    return {};
  },
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    var vals = options.validations;
    if (!vals) return;
    if (!options.computed) options.computed = {};
    if (options.computed.$v) return;

    options.computed.$v = function () {
      return this._vuelidate ? this._vuelidate.refs.$v.proxy : null;
    };
  },
  beforeDestroy: function beforeDestroy() {
    if (this._vuelidate) {
      this._vuelidate.$destroy();

      this._vuelidate = null;
    }
  }
};
exports.validationMixin = validationMixin;

function Vuelidate(Vue) {
  Vue.mixin(validationMixin);
}

var _default = Vuelidate;
exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/params.js":
/*!**********************************************!*\
  !*** ./node_modules/vuelidate/lib/params.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushParams = pushParams;
exports.popParams = popParams;
exports.withParams = withParams;
exports._setTarget = exports.target = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stack = [];
var target = null;
exports.target = target;

var _setTarget = function _setTarget(x) {
  exports.target = target = x;
};

exports._setTarget = _setTarget;

function pushParams() {
  if (target !== null) {
    stack.push(target);
  }

  exports.target = target = {};
}

function popParams() {
  var lastTarget = target;
  var newTarget = exports.target = target = stack.pop() || null;

  if (newTarget) {
    if (!Array.isArray(newTarget.$sub)) {
      newTarget.$sub = [];
    }

    newTarget.$sub.push(lastTarget);
  }

  return lastTarget;
}

function addParams(params) {
  if (_typeof(params) === 'object' && !Array.isArray(params)) {
    exports.target = target = _objectSpread({}, target, params);
  } else {
    throw new Error('params must be an object');
  }
}

function withParamsDirect(params, validator) {
  return withParamsClosure(function (add) {
    return function () {
      add(params);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return validator.apply(this, args);
    };
  });
}

function withParamsClosure(closure) {
  var validator = closure(addParams);
  return function () {
    pushParams();

    try {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validator.apply(this, args);
    } finally {
      popParams();
    }
  };
}

function withParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return withParamsDirect(paramsOrClosure, maybeValidator);
  }

  return withParamsClosure(paramsOrClosure);
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withParams", {
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
});
exports.regex = exports.ref = exports.len = exports.req = void 0;

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

var _default = (0, _common.regex)('email', emailRegex);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alpha", {
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
});
Object.defineProperty(exports, "alphaNum", {
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
});
Object.defineProperty(exports, "numeric", {
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
});
Object.defineProperty(exports, "between", {
  enumerable: true,
  get: function get() {
    return _between.default;
  }
});
Object.defineProperty(exports, "email", {
  enumerable: true,
  get: function get() {
    return _email.default;
  }
});
Object.defineProperty(exports, "ipAddress", {
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
});
Object.defineProperty(exports, "macAddress", {
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
});
Object.defineProperty(exports, "maxLength", {
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
});
Object.defineProperty(exports, "minLength", {
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
});
Object.defineProperty(exports, "required", {
  enumerable: true,
  get: function get() {
    return _required.default;
  }
});
Object.defineProperty(exports, "requiredIf", {
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
});
Object.defineProperty(exports, "requiredUnless", {
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
});
Object.defineProperty(exports, "sameAs", {
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
});
Object.defineProperty(exports, "url", {
  enumerable: true,
  get: function get() {
    return _url.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function get() {
    return _or.default;
  }
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function get() {
    return _and.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function get() {
    return _not.default;
  }
});
Object.defineProperty(exports, "minValue", {
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
});
Object.defineProperty(exports, "maxValue", {
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
});
Object.defineProperty(exports, "decimal", {
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
});
exports.helpers = void 0;

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /^-?[0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports.default = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports.default = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, _common.req);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports.default = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/vval.js":
/*!********************************************!*\
  !*** ./node_modules/vuelidate/lib/vval.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchChildren = patchChildren;
exports.h = h;

function isUndef(v) {
  return v === null || v === undefined;
}

function isDef(v) {
  return v !== null && v !== undefined;
}

function sameVval(oldVval, vval) {
  return vval.tag === oldVval.tag && vval.key === oldVval.key;
}

function createVm(vval) {
  var Vm = vval.tag;
  vval.vm = new Vm({
    data: vval.args
  });
}

function updateVval(vval) {
  var keys = Object.keys(vval.args);

  for (var i = 0; i < keys.length; i++) {
    keys.forEach(function (k) {
      vval.vm[k] = vval.args[k];
    });
  }
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }

  return map;
}

function updateChildren(oldCh, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVval = oldCh[0];
  var oldEndVval = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVval = newCh[0];
  var newEndVval = newCh[newEndIdx];
  var oldKeyToIdx, idxInOld, elmToMove;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVval)) {
      oldStartVval = oldCh[++oldStartIdx];
    } else if (isUndef(oldEndVval)) {
      oldEndVval = oldCh[--oldEndIdx];
    } else if (sameVval(oldStartVval, newStartVval)) {
      patchVval(oldStartVval, newStartVval);
      oldStartVval = oldCh[++oldStartIdx];
      newStartVval = newCh[++newStartIdx];
    } else if (sameVval(oldEndVval, newEndVval)) {
      patchVval(oldEndVval, newEndVval);
      oldEndVval = oldCh[--oldEndIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldStartVval, newEndVval)) {
      patchVval(oldStartVval, newEndVval);
      oldStartVval = oldCh[++oldStartIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldEndVval, newStartVval)) {
      patchVval(oldEndVval, newStartVval);
      oldEndVval = oldCh[--oldEndIdx];
      newStartVval = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVval.key) ? oldKeyToIdx[newStartVval.key] : null;

      if (isUndef(idxInOld)) {
        createVm(newStartVval);
        newStartVval = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];

        if (sameVval(elmToMove, newStartVval)) {
          patchVval(elmToMove, newStartVval);
          oldCh[idxInOld] = undefined;
          newStartVval = newCh[++newStartIdx];
        } else {
          createVm(newStartVval);
          newStartVval = newCh[++newStartIdx];
        }
      }
    }
  }

  if (oldStartIdx > oldEndIdx) {
    addVvals(newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVvals(oldCh, oldStartIdx, oldEndIdx);
  }
}

function addVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createVm(vvals[startIdx]);
  }
}

function removeVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vvals[startIdx];

    if (isDef(ch)) {
      ch.vm.$destroy();
      ch.vm = null;
    }
  }
}

function patchVval(oldVval, vval) {
  if (oldVval === vval) {
    return;
  }

  vval.vm = oldVval.vm;
  updateVval(vval);
}

function patchChildren(oldCh, ch) {
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch) updateChildren(oldCh, ch);
  } else if (isDef(ch)) {
    addVvals(ch, 0, ch.length - 1);
  } else if (isDef(oldCh)) {
    removeVvals(oldCh, 0, oldCh.length - 1);
  }
}

function h(tag, key, args) {
  return {
    tag: tag,
    key: key,
    args: args
  };
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var withParams = process.env.BUILD === 'web' ? __webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams : __webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams;
var _default = withParams;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withParams = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);