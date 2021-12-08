
/**
 * 
 * @param {number} b 
 * @returns 
 */
function checkDiv(b) {
    if (parseInt(b) === 0) {
        console.log("Le denominateur doit etre inférieur à zero (0)");
        return false
    } else {
        return true
    }
}

/**
 * Fonction pour effectuer les calculs avec deux operandes
 * @param {number} a 
 * @param {number} b 
 * @param {string} op 
 */

function calculatrice(a, b, op) {

    let aint = parseInt(a)
    let bint = parseInt(b)

    switch (op) {
        case "+": return aint + bint;
        case "-": return aint - bint;
        case "x": return aint * bint;
        case "/": return checkDiv(bint) ? parseFloat((aint / bint).toFixed(2)) : Infinity;
        default: console.log("Operation inconnu"); return null;
    }


}

module.exports = calculatrice