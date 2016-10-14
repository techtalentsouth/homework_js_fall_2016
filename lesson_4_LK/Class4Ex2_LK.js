/**
 * Created by lkittogsuedu on 10/6/16.
 */
var slideshow = {
    photoList: ['pic0','pic1', 'pic2', 'pic3', 'pic4'],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of show.')
        }

    },
    prevPhoto: function () {
        if (this.currentPhotoIndex >= 1) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Beginning of show.')
        }

    },
    getCurrentPhoto: function () {
        return this.photoList[this.currentPhotoIndex];
    }
};
slideshow.currentPhotoIndex = 2;
console.log(slideshow.getCurrentPhoto());
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();