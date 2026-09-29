var age = prompt("yoshingizni kriting")

if (age> 1 && age < 18  ) {
    alert("siz yosh siz oqshingiz kerak")
}





if (age>19 && age < 59) {
   alert("siz ishlashingiz kerak")
}








if (age>60 && age < 100) {
    alert("pensiyaga chiqishingiz kerak")
}




if (age>100 && age < 200) {
   alert("siz ancha qarsiz")
}









var n1 = +prompt("birinchi sonni kriting")
var n2 = +prompt("ikkinchi sonni kriting")
var n3 = +prompt("uchinchi sonni kriting")


if (n1 > n2 && n1 < n3 || n1 < n2 && n1 > n3) {
    alert("ortacha qiymat " + n1)
}
if (n2 > n1 && n2 < n3 || n2 < n1 && n2 > n3) {
    alert("ortacha qiymat " + n2)
}
if (n3 > n1 && n3 < n2 || n3 < n1 && n3 > n2) {
    alert("ortacha qiymat " + n3)
}
