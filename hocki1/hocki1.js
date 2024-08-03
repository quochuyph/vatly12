var btnHome = document.querySelector(".btnHome")

var btnBack = document.querySelector(".btn")

var btnHk2_Bai12 = document.querySelector(".hk2bai12")
var btnHk2_Bai13 = document.querySelector(".hk2bai13")
var btnHk2_Bai14 = document.querySelector(".hk2bai14")

var btnTailieu = document.querySelector(".btnTailieu")

btnHome.addEventListener("click", function(){
    btnHome.style.transform = "scale(0.9)"
    setTimeout(() => {
        btnHome.style.transform = "scale(1)"
        window.location.href= "../index.html"
    })
})

btnBack.addEventListener("click", function(){
    btnBack.style.transform = "scale(0.9)"
    setTimeout(() => {
        btnBack.style.transform = "scale(1)"
        window.location.href= "../index.html"
    })
})

btnHk2_Bai12.addEventListener("click", function(){
    btnHk2_Bai12.style.transform = "scale(0.9)"
    setTimeout(() => {
        btnHk2_Bai12.style.transform = "scale(1)"
        window.location.href = "../hocki2/hocki2.html#bai12"
    }, 200)
})

btnHk2_Bai13.addEventListener("click", function(){
    btnHk2_Bai13.style.transform = "scale(0.9)"
    setTimeout(() => {
        btnHk2_Bai13.style.transform = "scale(1)"
        window.location.href = "../hocki2/hocki2.html#bai13"
    }, 200)
})

btnHk2_Bai14.addEventListener("click", function(){
    btnHk2_Bai14.style.transform = "scale(0.9)"
    setTimeout(() => {
        btnHk2_Bai14.style.transform = "scale(1)"
        window.location.href = "../hocki2/hocki2.html#bai14"
    }, 200)
})

btnTailieu.addEventListener("click", function(){
    btnTailieu.style.transform = "scale(0.9)"
    setTimeout(() => {
        btnTailieu.style.transform = "scale(1)"
        window.location.href = "../tailieu/tailieu.html"
    }, 200)
})