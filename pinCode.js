var buttons = document.getElementsByClassName("digits");
var userInput = document.getElementById("pinCode");
var clearButton = document.getElementById("clear");


for (var i = 0, len = buttons.length; i <= len; i += 1) 
{
    buttons[i].addEventListener("click", function(e) 
    {
        userInput.value += this.value;
        if (userInput.value.length > 4) 
        {
            userInput.value = userInput.value.substring(0,4);
        }
    });

    clearButton.addEventListener("click", function() 
    {
        userInput.value = "";
    });
}