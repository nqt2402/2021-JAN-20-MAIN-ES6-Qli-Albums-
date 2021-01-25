/* 

https: //images.unsplash.com/photo-1541167789142-b241ead81115?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60

https: //images.unsplash.com/photo-1541103341619-7e00561566f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60

https: //images.unsplash.com/photo-1541718366506-c16ed9459a7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60

https: //images.unsplash.com/photo-1541616615104-405a4fffe382?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60

https: //images.unsplash.com/photo-1541576556499-4b95da858155?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60

https: //images.unsplash.com/photo-1542080255-e564af7ae266?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60 

*/

let arrI = document.querySelectorAll("#inputFromUI input, #inputFromUI select");
let obj_HienTai = {};
for (let objTag of arrI) {
    let id = objTag.id;
    let value = objTag.value;
    obj_HienTai[id] = value;
}
console.log(obj_HienTai);
console.log(album);
// let obj_Update = {};
// for (let update_Tag of this.albumList) {

// }