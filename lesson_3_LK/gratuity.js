/**
 * Created by lkittogsuedu on 10/4/16.
 */

var billAmount = Math.random() * 100;
var gratuity = function(billAmt){
    if (typeof billAmt === 'number'){
        return (billAmt * 0.2)
    }
}

var totalWithGraty = function (billAmt) {
    return (billAmt+ gratuity(billAmt));

}
console.log("Your total including gratuity is: ", totalWithGraty(billAmount).toFixed(2));
