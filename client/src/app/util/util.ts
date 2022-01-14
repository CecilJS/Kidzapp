// this function allows us to get the cookie from the browser
// Regex is used to get the cookie from the browser
export function getCookie(key: string) {
    const cookie = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return cookie ? cookie.pop() : ""; // if cookie is not found, return empty string. arr.pop() returns the last element of the array
  }


  export function currencyFormat(amount: any) {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
    }).format(amount);
}