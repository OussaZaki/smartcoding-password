var clickImage = document.getElementById('image');

clickImage.addEventListener('click', function ()
{
    newPageFunction();
});

function newPageFunction()
{
    var newWindow = window.open("pinCode.html");
}