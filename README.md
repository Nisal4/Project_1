Nisal Attanayake - SEI Project 1- Flappy Bird

Flappy Bird - Game Description

Flappy bird is a very simple game, initially created for phones/tablets. The point of the game is to tap on the screen, or in this case press the spacebar or up arrow key, in order to make the flappy bird jump through the gap in pipes. The score is at the top and each time the flappy bird passes through a set of pipes, the score will go up by an increment of 1. If the bird collides with a pipe or the ground, it's game over. Flappy bird was made to be a game that could be played over and over again, so even if you do lose, simply clicking on the screen will restart the game. Flappy bird is infamously known as being a game so difficult that it had to be taken off the app store, and while this version may not be as difficult, it's still equally frustrating. Players must time their jumps to go through the pipe, while simultaneously fighting the gravity that pulls the bird down. This game as made for those that love to torture themselves.



Game Picture - You Only Need One


![flappyBirdGameOver](https://github.com/Nisal4/Project_1/assets/145291849/a1235af3-3a65-451b-8165-47e645963e8b)

The game over screen. You will be seeing that a lot.

Technologies Used

For this project we were supposed to use DOM manipulation and not canvas, however I didn't realize this so I ended up using canvas. I'm not great at CSS nor do I enjoy it, but I do like Javascript, so I stuck mainly with that. I didn't really have any code in either my HTML or my CSS, and rather did everything in Javascript. I even added the canvas using DOM manipulation. Otherwise all the functions, images, and text displays were done through Javascript. This game also required many loops and functions that regularly had to be embedded into each other. It was frustrating at times to figure out what I was doing because we haven't really gone over canvas yet, however I enjoyed the challenege.


Challenging Code Parts

![image_2023-10-13_094956079](https://github.com/Nisal4/Project_1/assets/145291849/9080084b-9e92-4a36-a129-b0416b52980e)


This one piece of code took me a very long time to figure out. I was trying to create a function that would allow me to reset the game once the flappy bird collided with either a pipe or the ground. I tried many different things over the course of 2 days such as using an event listener that would run the function if a key were pressed, a click event listener, embedding/calling the function in another function, creating a reset game button through DOM manipulation. No matter what I tried the game would only restart sometimes, or in the case of the button would keep resetting the game when you tried to make the bird jump. Finally I realized that I had to use the requestAnimationFram() function within the reset game function, in order to redraw my canvas once the game was over.


Link to Game
https://nisal4.github.io/Project_1/


Next Steps

There are definitely things I can work on with this project. For one I would like to remake this game before the end of the course, however this time I would do it only using DOM manipulation. I also wanted to add animations to the flappy bird so that it cycles between a few image assets that are in the repo. I also want to add sound effects to the game to make it a little more engaging; and finally I would want to remove the text for the score and game over and replace them with images of the numbers/gameover screen that will appear/change dynamically as the game progresses. 

