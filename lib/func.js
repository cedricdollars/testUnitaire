function isProduct30(array) {
  let result = 30;
  let numberValids = [];
  for (let i = 0; i < array.length; i++) {
    if (result % array[i] === 0) {
      let finalNumber = numberValids.push(array[i]);
      if (finalNumber.length === 3) {
        console.log(
          "il existe 3 entiers dans ce tableau dont le produit fait 30"
        );
        console.log(finalNumber);
      } else {
        console.log("Il faut 3 éléments");
      }
    } else {
      return false;
    }
  }
}
isProduct30([3, 5, 5, 6, 8, 9, 7]);
