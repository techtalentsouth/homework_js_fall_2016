/**
 * Created by lkittogsuedu on 10/6/16.
 */
function outer() {
    var a = 'a';
    var b = { name: 'b'};

    function inner(a, b) {
        a = 'new a';
        b = {name: 'new b'};
        b.prop = 'new prop';
        console.log(a, b);
    }

    inner(a, b);
    console.log(a, b);
}

outer();