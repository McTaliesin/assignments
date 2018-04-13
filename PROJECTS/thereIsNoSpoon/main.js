var desk = {
    objectNumber: 1,
    heightInMM : 987,
    color: "simulatedWood",
    isInRoom: true,
    paintability: function() {
       console.log("object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color);
}
}
    
    document.getElementById("desk").innerHTML = desk.paintability();


var door = {
    objectNumber: 2,
    heightInMM : 2300,
    color: "white",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("door").innerHTML = door.paintability();

var projectorScreen = {
    objectNumber: 3,
    heightInMM : 887,
    color: "silver",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("projectorScreen").innerHTML = projectorScreen.paintability();

var chair = {
    objectNumber: 4,
    heightInMM : 1000,
    color: "blue",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("chair").innerHTML = chair.paintability();
    

var endTable = {
    heightInMM : 887,
    objectNumber: 5,
    color: "off white",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("endTable").innerHTML = endTable.paintability();

var heater = {
    heightInMM : 500,
    objectNumber: 6,
    color: "white",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("heater").innerHTML = heater.paintability();

var wallPost = {
    objectNumber: 7,
    heightInMM : 3200,
    color: "trueWood",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("wallPost").innerHTML = wallPost.paintability();

var wall = {
    objectNumber: 7,
    heightInMM : 3200,
    color: "eggshellWhite",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("wall").innerHTML = wall.paintability();

var recycleBin = {
    objectNumber: 8,
    heightInMM : 787,
    color: "blue",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("recycleBin").innerHTML = recycleBin.paintability();

var threeTierShelf = {
    objectNumber: 9,
    heightInMM : 750,
    color: "chrome",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("threeTierShelf").innerHTML = threeTierShelf.paintability();

var cardboardBox = {
    objectNumber: 10,
    heightInMM : 555,
    color: "cardboard",
    isInRoom: true,
    paintability: function() {
        "object number" this.objectNumber + "this item can be painted over it's current color which is " + this.color;
    }
};
    
    document.getElementById("cardboardBox").innerHTML = cardboardBox.paintability();
 
    
