var digits = document.getElementById("numbers");

digits.addEventListener('click', function()
{
    buttonFunction();
});
// Work in progress! The function returns only 1 number!
function buttonFunction(value)
{
    document.getElementById("pinCode").value = document.getElementById('buttons').value;
}

var clearInput = document.getElementById("clearIt");

clearInput.addEventListener('click', function()
{
    clearFunction();
});

function clearFunction()
{
    document.getElementById("pinCode").value = "";
}
