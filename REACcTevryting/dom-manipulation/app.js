document.add.addEventListener("submit", function(e){
    e.preventDefault();
    var first = document.getElementById('first-add').value;
    var second = document.add.second.value;
    var result = parseInt(first) + Number(second);
    console.log(result);
    document.getElementById("add-result").textContent = result;
})

document.subtract.addEventListener("submit", function(e){
    e.preventDefault();
    var first = document.getElementById('first-subtract').value;
    var second = document.subtract.second.value;
    var result = parseInt(first) - Number(second);
    console.log(result);
    document.getElementById("subtract-result").textContent = result;
})
