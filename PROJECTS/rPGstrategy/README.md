MENU
RPG Strategy
20 MARCH 2017
The colossal RPG is our first really big project. It's great practice for how to approach big things. For those of you who don't know how to start, here is how I would do it.

First, I would write a list of all the small actions that need to be taken.

character creation  
walking  
running from a fight  
fighting  
enemy creation  
attacking enemy  
enemy attacking  
enemy dying (including dropping an item)  
character dying  
The assignment write up already has a list of requirements. You could also use that as your list. I would then write empty functions that will include code in the future, but not yet.

function walk(){

}

function run(){

}

function fight(){

}

function attackEnemy(){

}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}

function enemyCreation(){

}
I didn't put the character creation stuff in a function, but you defiantly could.

I would then start writing pseudo code.

//ask user for name and give greeting

function walk(){  
   //ask user to push "w" to walk
    if (user pushed w){
        if(1 in 4){
            fight();
        } else {
            //tell user they didn't run into a monster
            //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
        }
    } else {
        //tell user what's in their inventory, and their health, and then tell them to push w to walk
}

function run(){  
    if(1 in 2){
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    } else {
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
}

function fight(){  
    ask user to either fight or run
    enemyCreation()
    if (user is trying to run){
        run()
    } else {
        attackEnemy
    }
}

//****you get the idea****

function attackEnemy(){

}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}
The reason that you do not want to call those functions that I warned about in the code is because you do not want to create loops by having functions call functions. Having functions call functions is fine, just so it isn't circular.

walk() calling fight() calling run() calling walk() = bad

walk() calling fight() calling attack() calling die() = OK

Do you see how the first one is circular and the second is linear?

The circular one causes recursion and an eventual stack overflow. Both of which are hard to deal with. Recursion can be useful if a very few situations. This is not one of them.

So, how to we continue walking after we fight a monster or run away with it?

A while loop.

I'd put one that calls walk:

while(player.health > 0){  
    walk();
}
and one in my fight function:

function fight(){  
    ask user to either fight or run
    enemyCreation();
    if (user is trying to run){
        run();
    } else {
        enemyAttack();
    }
    while (enemy.health > 0){
        attackEnemy();
        enemyAttack();
    }
}
Warning!
Laying your code out this way makes it hard to test along the way. When you get to about this point, it's good to comment out all but a bit of your code and start writing and testing small snippets and building it out that way.

Also, do not define functions inside of functions.

Eric Jones
Read more posts by this author.