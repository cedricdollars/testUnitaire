exports.maskify = function (cc) {
  return Array.from(cc)
    .map((item, idx) => (idx = idx < cc.length - 4 ? "#" : item))
    .join("");
};
