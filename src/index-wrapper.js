/* eslint-disable linebreak-style */
'use strict';
/* global Blob */
/* global URL */
import parseGeorasterOriginal from './index.js';

// Export as CommonJS default
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = parseGeorasterOriginal;
  module.exports.default = parseGeorasterOriginal;
}
