import { Album } from "../models/Album.js";
import { Manage } from "../models/Manage.js";

let manage = new Manage();
manage.getAlbum();

document.getElementById("btnCapNhatAlbum").disabled = true;

// BTD ADDALBUM
document.getElementById("btnThemAlbum").onclick = (event) => {
    event.preventDefault();
    let album = new Album();
    let arrInput = document.querySelectorAll("#inputFromUI input, #inputFromUI select");
    for (let input of arrInput) {
        let id = input.id;
        let value = input.value;
        album[id] = value;
    }
    manage.validateInputIsBlank(album);
    manage.saveAlbum();
    renderAlbum();
};

const renderAlbum = () => {
    let renderDiv = '';
    for (let obj of manage.albumList) {
        renderDiv += `
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
            <div class="reponsive-img"
                style="background-image: url(${obj.linkAnh});">
            </div>
            <div class="card-body">
                <h3>${obj.tenAlbum}</h3>
                <p class="card-text">Mô tả : ${obj.moTa} </p>
                <p class="card-text">Thể loại: ${obj.loaiAlbum}</p>
                <p class="card-text">id : ${obj.id} </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button onclick="editAlbum(${obj.id})" type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2">Chỉnh sửa</button>
                        <button onclick="removeAlbum(${obj.id})" type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
    }
    document.getElementById("output").innerHTML = renderDiv;
}

renderAlbum();

//  BTN REMOVE
window.removeAlbum = (albumId) => {
    let cfm = confirm("This album will be removed.\nARE YOU SURE?");
    if (cfm) {
        manage.removeAlbum(albumId);
        manage.saveAlbum();
        renderAlbum();
    }
}

//  BTN EDIT
window.editAlbum = (albumName) => {
    manage.editAlbum(albumName);
    manage.saveAlbum();
    renderAlbum();
}

//  BTN CAPNHATALBUM
document.getElementById("btnCapNhatAlbum").onclick = (event) => {
    event.preventDefault();
    let albumUpdated = new Album();
    let arrInput = document.querySelectorAll("#inputFromUI input, #inputFromUI select");
    for (let inputUpdated of arrInput) {
        let id = inputUpdated.id;
        let value = inputUpdated.value;
        albumUpdated[id] = value;
    }

    albumUpdated.id = manage.currentIdUpdate;
    manage.validateUpdateAlbum(albumUpdated);
    manage.saveAlbum();
    renderAlbum();
};