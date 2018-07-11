var digits = document.getElementById("numbers");

digits.addEventListener('click', function()
{
    buttonFunction();
});

function buttonFunction(value)
{
    document.getElementById("pinCode").value = document.getElementById('buttons').value;
}
