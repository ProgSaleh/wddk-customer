/**
 * @param event ............ value to be verified.. might be $event(to be handled later)
 *
 * @return true if ALL input chars are of number, else otherwise.
 */
export function isOnlyNums(event: any): boolean {
  if (event) {
    if (event.length) {
      let value = event.target.value;
      let regEx = /^\d+$/; // unlimited digits.. [max] and [min] are to be defined in the template.
      if (value.match(regEx)) {
        // event.preventDefault();
        return true;
      }
    }
  }

  return false;
}

// TODO: READY FOR TESTING
/**
 * @param digit ar digits to be converted.
 *
 * @returns number in english format.
 */
export function arDigitsToEn(digit: string): number {
  let enDigit: string = '';

  let ar = ['١', '٢', , '٤', '٥', '٦', '٧', '٨', '٩', '٠']; // DO NOT CHANGE ORDER
  let en = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; // DO NOT CHANGE ORDER

  if (digit) {
    for (let i = 0; i < ar.length; i++) {
      if (ar[i] === digit) {
        enDigit = en[i];
      }
    }
  } else {
    return -1;
  }
  return Number(enDigit);
}
