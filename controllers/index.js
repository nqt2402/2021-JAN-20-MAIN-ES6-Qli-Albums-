import { Album } from "../models/Album.js";
import { Manage } from "../models/Manage.js";

let manage = new Manage();
manage.getAlbum();

// let album = new Album(); // dung album ngoai button khi add vao bi thay doi het album truoc do
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
    manage.addAlbum(album);
    console.log(album.id);
    // manage.validateAlbumName(album.tenAlbum);
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
                <p class="card-text"> ${obj.moTa} </p>
                <p class="card-text">Thể loại: ${obj.loaiAlbum}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button onclick="editAlbum('${obj.tenAlbum}')" type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2">Chỉnh sửa</button>
                        <button onclick="removeAlbum('${obj.tenAlbum}')" type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary">Xóa</button>
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
window.removeAlbum = (albumName) => {
    let cfm = confirm("This album will be removed. Are you sure?");
    if (cfm) {
        manage.removeAlbum(albumName);
        manage.saveAlbum();
        renderAlbum();
    }
}

//  BTN EDIT
window.editAlbum = (albumName) => {
    document.getElementById("btnThemAlbum").disabled = true;
    document.getElementById("btnCapNhatAlbum").disabled = false;

    manage.editAlbum(albumName);
    manage.saveAlbum();
    // console.log(album.id);
    // manage.renderAlbum();
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

    manage.updateAlbum(albumUpdated);
    manage.validateAlbumName(albumUpdated);
    // manage.saveAlbum();
    renderAlbum();

    //disable sau khi bấm update
    document.getElementById("btnThemAlbum").disabled=false;
    document.getElementById("btnCapNhatAlbum").disabled = true;
};

/*
1/ tìm index ở btn capnhat done
2/ validate tenalbum ở btn them va btn capnhat ???
3/ disable ô input hợp lí ???
4/ return the loai album done
*/
