/**
 * Created by lkittogsuedu on 10/20/16.
 */
var list = document.getElementById('list');
var coffee = list.children[1];
coffee.innerHTML = 'Fair Trade Coffee';
var twink = list.lastElementChild.remove();
var cw = document.createElement('li');
cw.innerHTML = 'Cheese Wiz';
list.appendChild(cw);
Array.from(document.querySelectorAll('li')).forEach(function (rm) {
    rm.remove();
});

var newItems = ['protein powder', 'muscle milk', 'power bars'];
newItems.forEach(function (item) {
    var li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
})
