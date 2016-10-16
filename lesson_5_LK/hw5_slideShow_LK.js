/**
 * Created by lkittogsuedu on 10/6/16.
 */
var Slideshow = function () {

    this.photoList = ['pic0', 'pic1', 'pic2', 'pic3', 'pic4'];
    this.currentPhotoIndex = 0;
    var _this = this;

    this.nextPhoto = function () {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of show.');
            this.pause();
        }
    }.bind(this);

    this.prevPhoto = function () {
        if (this.currentPhotoIndex >= 1) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Beginning of show.');
            this.pause();
        }

    }.bind(this);

    this.getCurrentPhoto = function () {
        return this.photoList[this.currentPhotoIndex];
    }.bind(this);

    this.playInterval = function () {
        setInterval(_this.nextPhoto, 200);
    };

    this.pause = function () {
        clearInterval(_this.playInterval);
    };
};

var slideshow = new Slideshow();
slideshow.playInterval();

