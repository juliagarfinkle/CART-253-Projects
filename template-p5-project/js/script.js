/**
Title of Project
Julia Garfinkle

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup (anything in here happens when your code first loads)
*/
function setup() {
  createCanvas (500,500); //create the canvas
  background(150,0,100) //make the background color here - the first number is the red hue, the second is green, third is blue to make rgb) - note that color range goes from 0-255
  fill(255, 204, 0) //fill middle -- set the color before making the shape
  // noStroke(); //get rid of stroke around circle
  stroke(0,200,50); //make stroke
  strokeWeight(20); //thickness of stroke
  ellipse(250,250,200,200); //draw circle in the middle
  noStroke (); //no stroke for triangle
  fill(0, 0, 250) //fill middle of triangle
  triangle (30, 75, 58, 20, 86, 75);

/*the numbers are the parameters*/

}


/**
Description of draw (the draw function happens again and again)
*/
function draw() {

}
