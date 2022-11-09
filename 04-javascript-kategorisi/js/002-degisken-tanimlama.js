// ********** let ve const ile Degisken Tanimlama ********** 

// var ile degisken tanimlamak:
// var serverName = "api.kodluyoruz.org"
// console.log(serverName)


// let ile degiskeni bos tanimlamak (UNDEFINDED):
// let serverName;  
// console.log(serverName)
//(";" noktalı virgül koyduğumuz zaman direk bitti olarak algılar. eşittir koyarsam devam ettiğimi algılar.)
// çünkü herhangi bir link girişinde bulunmadığımız için undedined hatası verir.


// let ile degiskene bilgi atamak:
//  serverName = "https://kodluyoruz.org"
//  console.log(serverName)
// burda bir link belirttiğim için artık undifened hatası vermez.


// let ile degiskene bilgi atayarak tanimlamak:
// let password = "159753";
// console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:

/* HATALI KULLANIM:  
console.log(fullName)
let fullName = "Nehir";

Eğer var etiketi ile yapsam undifened hatası vericekti.
Bu şekilde yazdığımda ise etiketten hemen önce ekran görüntüsü istediğim için bana initialization hatası veriyor.
*/
// DOĞRU KULLANIM
// let fullName = "Nehir";
//console.log(fullName); 

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
// Tekrardan set ettiğimiz için yukarıda ki bilgiyi görmeyip yeni değişikliği algılayacaktır.
  fullName = "Lorem Ipsum Dolor"
  console.log(fullName)

// birlestirme veya ekleme islemi
// fullName + "Yeni Eklenen Bilgi" // acaba eklendimi ??
//console.log(fullName + " NEHİR") // Ekle ve Goster ama Degiskene Eklemedik

 /*fullName = fullName + " Yeni Bilgi"
 fullName =  "2: Bilgi : " + fullName
 console.log(fullName)*/

 fullName = "Sifirlandi"
 fullName += " ve Yeni Bilgi Eklendi"
 console.log(fullName) 

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??

// const ile degisken tanimlamak:
// const SERVER_PASSWORD = "oisjefo9jwes221"
//  console.log(SERVER_PASSWORD)

 /*SERVER_PASSWORD = "1234"
 console.log(SERVER_PASSWORD)*/


 //!!!! Eğer bir şeyi değiştirmek istiyorsak bunu let ile tanımlıyoruz. Eğer değiştirmek istemiyorsak, sabit kalsın istiyorsak const ile tanımlama yapmamız gerekir.