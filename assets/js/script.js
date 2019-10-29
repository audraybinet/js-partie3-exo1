document.getElementById('image1').addEventListener('mouseover', border);
function border(){
document.getElementById('image1').style="border: 3px solid red"
}
document.getElementById('image1').addEventListener('mouseout', removeBorder);
function removeBorder(){
document.getElementById('image1').style="border: none";
}
