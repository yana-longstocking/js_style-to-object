'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const words = sourceString.split(';');

  words.forEach((word) => {
    const trimmed = word.trim();

    if (trimmed) {
      const [key, value] = trimmed.split(':');

      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
