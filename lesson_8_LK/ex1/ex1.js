/**
 * Created by lkittogsuedu on 10/20/16.
 */
//
// <!--Get the header element-->
// <!--Get all the section elements-->
// <!--Get the section element with class="current"-->
// <!--Get the section that comes after the current section-->
// <!--Get the h2 node from the section before the 'current' section-->
// <!--Get the div that contains the section that has an h2 with a class of 'highlight'-->
// <!--Get all the sections that contain an H2 (using a single statement);-->

var header = document.getElementsByTagName('header');
var sections = document.getElementsByTagName('section');
var currentSection = document.querySelector("section.current");
var sectionAfter = currentSection.nextElementSibling;
var h2FromCurrent = sectionAfter.previousElementSibling.children[0];
var div = document.querySelector('h2.highlight').parentElement.parentElement;
var h2Secs = Array.from(document.querySelectorAll('section h2')).map(function(kid){
    return kid.parentElement;
});

console.log(header, sections, currentSection, sectionAfter, h2FromCurrent, div, h2Secs);