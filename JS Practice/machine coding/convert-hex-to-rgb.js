// if hex value is only of length = 4 , so need to convert in length to 7 , we'll use this code.

const fullHex = (hex) => {
  let r = hex.slice(1, 2);
  let g = hex.slice(2, 3);
  let b = hex.slice(3, 4);

  r = parseInt(r + r, 16);
  g = parseInt(g + g, 16);
  b = parseInt(b + b, 16);

  return { r, g, b };
};

// console.log(fullHex("#f3f"));

//hex to rgb

const hexToRgb = (hex) => {
  if (hex.length === 4) {
    return fullHex(hex);
  }

  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
};

console.log(hexToRgb("#d4f"));

//2nd method to convert hex to rgb is using regex.

const hexToRgbWithRegex = (hexValue) => {
  const rgbChar = ["r", "g", "b"];

  // ^ denotes the start of the string and after that matching of 2 character takes place for 3 times , $ denotes the end of string
  // and i denotes both uppercase and lowercase letters are allowed.
  const normal = hexValue.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) {
    return normal.slice(1).reduce((a, e, i) => {
      a[rgbChar[i]] = parseInt(e, 16);
      return a;
    }, {});
  }
  return null;
};

console.log(hexToRgbWithRegex("#ff33ff"));
