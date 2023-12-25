

var default1 = "Hakkımda"; // Genel başlık
var text1 = "|Hakkımda|"; // 1. Yazı
var text2 = "Hakkımda"; // 2. Yazı
var text3 = "|Hakkımda|"; // 3. Yazı
var text4 = "Hakkımda"; // 4. Yazı
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
    messageNumber = 0;
}



messageNumber++;
setTimeout("changeStatus();",changeRate);

}

 

changeStatus();
