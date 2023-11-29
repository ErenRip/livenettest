

var default1 = "Anasayfa"; // Genel başlık
var text1 = "Anas ayfa"; // 1. Yazı
var text2 = "Anasayfa"; // 2. Yazı
var text3 = "Anas ayfa"; // 3. Yazı
var text4 = "Anasayfa"; // 4. Yazı
var text5="Anas ayfa";
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
    messageNumber = 0;
}


messageNumber++;
setTimeout("changeStatus();",changeRate);

}



changeStatus();
