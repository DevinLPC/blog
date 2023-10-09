console.log("Hello QRCode!", browser);

///DOM加载完事件
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOMContentLoaded");
    
    document.getElementById("QRCodeMake").addEventListener("click", makeQRCode);
    document.getElementById("QRCodeSave").addEventListener("click", saveQRCode);
    document.getElementById("QRCodeText").addEventListener('keydown', updateValueKeyCodeEnter);
    document.getElementById("QRCodeText").addEventListener('blur', updateValueBlur);
    
    let querying = browser.tabs.query({
    active: true,
    currentWindow: true,
    });
    var elText = document.getElementById("QRCodeText");
    querying.then(function(tabs) {
        for (let tab of tabs) {
            elText.value = tab.url
        }
    }).then(function() {
        makeQRCode()
    })
    //主动释放焦点
    elText.blur();
});

var qrcode = new QRCode(document.getElementById("QRCode"), {
    //text: "http://www.runoob.com",
    //width: 128,
    //height: 128,
    //colorDark : "#000000",
    //colorLight : "#ffffff",
    //correctLevel : QRCode.CorrectLevel.H
});

/// 输入回车
function updateValueKeyCodeEnter(e) {
    if (e.keyCode == "13") {
        console.log("updateValueKeyEnter");
        makeQRCode()
    }
}
/// 输入失焦
function updateValueBlur(e) {
    console.log("updateValueBlur");
    makeQRCode()
}

/// 生成二维码
function makeQRCode() {
    var elText = document.getElementById("QRCodeText");
    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    qrcode.clear();
    qrcode.makeCode(elText.value);
}

/// 保存二维码
function saveQRCode() {
    alert('welcome');
    var bg = browser.extension.getBackgroundPage();
    console.log("getBackgroundPage", bg);
    
    var QRCode = document.getElementById("QRCode")
    var img = QRCode.querySelector("img")
    // 将图片的src属性作为URL地址
    var url = img.src
    // 生成一个a元素
    var a = document.createElement('a')
    // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
    //a.download = 'QRCode'
    // 元素中添加一个空格：_blank    在新窗口中打开被链接文档。_self    在被点击时的同一框架中打开被链接文档（默认）。_parent    在父框架中打开被链接文档。_top    在窗口主体中打开被链接文档。
    a.target = "_blank"
    // 将生成的URL设置为a.href属性
    a.href = url
    
    // 创建一个单击事件
    var event = new MouseEvent('click');
    // 触发a的单击事件
    a.dispatchEvent(event)
    a.remove()
}
