//
Lyrics
Maybe someday, saved by zero
I'll be more together
Stretched by fewer thoughts that leave me
Chasing after my dreams, disown me, loaded with danger
So maybe I'll win (saved by zero)
Maybe I'll win (saved by zero)
Holding onto words that teach me
I will conquer space around me
So maybe I'll win (saved by zero)
Maybe I'll win (saved by zero)
Maybe I'll win (saved by zero)
Maybe I'll win (saved by zero)
So maybe I'll win (saved by zero)
Maybe I'll win (saved by zero)
Maybe I'll win (saved by zero)
Who needs to win (saved by zero)
Saved by, saved by, save-saved by zero
Saved by, saved by, save-saved by zero
Saved by, saved by, save-saved by zero (saved by zero)
Saved by, saved by, save-saved by zero
Saved by, saved by, save-saved by zero
Saved by zero (saved by, saved by, save-saved by zero)
*

//Using test-drive development (TDD), create multiplication and division functions and associated tests

function describe(message, testFunction) {
    console.log("\n" + message);
    try {
        testFunction();
    } catch(err) {
        console.log("Test FAILED: " + err.message);
    }
}

function add(a, b) {
    return a + b;
}

describe("An add function", function() {
    assert(add(2, 3), 5);
    assert(add(-1, -1), -2);
    assert(add(-1, 3), 2);
    assert(add(1, -3), -2);
});

function subtract(a, b) {
    return a - b;
}

describe("A subtract function", function() {
    assert(subtract(2, 1), 1);
    assert(subtract(-2, 1), -3);
    assert(subtract(2, -1), 3);
    assert(subtract(-2, -1), -1);
});
