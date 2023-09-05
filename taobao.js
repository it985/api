window.onload = function() {
    loadRandomImage();
}

function loadRandomImage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var imageUrls = this.responseText.split("\n");
            var randomIndex = Math.floor(Math.random() * imageUrls.length);
            window.location.href = imageUrls[randomIndex];
        } else {
            console.log("图片文件状态异常，可联系foryouos@qq.com");
        }
    };
    xhttp.open("GET", "taobao.txt", true);
    xhttp.send();
}