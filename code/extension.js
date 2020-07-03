/**
 *
 * @param filename
 * @returns {string}
 */
function extension(filename) {
    return filename.split("?")[0].split("#")[0].split('.').pop();
}
