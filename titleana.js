

var default1 = "Anasayfa"; // Genel başlık
var text1 = "Anasayf"; // 1. Yazı
var text2 = "Anasay"; // 2. Yazı
var text3 = "Anasa"; // 3. Yazı
var text4 = "Anas"; // 4. Yazı
var text5="Ana";
var text6="An";
var text7="A";
var text8="An";
var text9 = "Ana"; 
var text10 = "Anas"; 
var text11 = "Anasa"; 
var text12 = "Anasay"; 
var text13 = "Anasayf";
var text14 = "Anasayfa";  
var changeRate = 450; // Zaman ayarı [1000 = 1 Saniye]
var messageNumber = 0;

function changeStatus() {
if (messageNumber == 0) {
window.status=default1;
document.title=default1;
}
else if (messageNumber == 1) {
window.status=text1;
document.title=text1;
}
else if (messageNumber == 2) {
window.status=text2;
document.title=text2;
}
else if (messageNumber == 3) {
window.status=text3;
document.title=text3;
}
else if (messageNumber == 4) {
    window.status=text4;
    document.title=text4;
}
else if (messageNumber == 5) {
    window.status=text5;
    document.title=text5;
}
else if (messageNumber == 6) {
    window.status=text6;
    document.title=text6;
}
else if (messageNumber == 7) {
    window.status=text7;
    document.title=text7;
}
else if (messageNumber == 8) {
    window.status=text8;
    document.title=text8;
}
else if (messageNumber == 9) {
    window.status=text9;
    document.title=text9;
}
else if (messageNumber == 10) {
    window.status=text10;
    document.title=text10;
}
else if (messageNumber == 11) {
    window.status=text11;
    document.title=text11;
}
else if (messageNumber == 12) {
    window.status=text12;
    document.title=text12;
    
}
else if (messageNumber == 13) {
    window.status=text13;
    document.title=text13;
}
else if (messageNumber == 14) {
    window.status=text14;
    document.title=text14;
    messageNumber = 0;
}
messageNumber++;
setTimeout("changeStatus();",changeRate);

}
 


changeStatus();
