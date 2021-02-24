export class Manage {
    albumList = [];
    currentIdUpdate = '';
    constructor() {
    }
    validateInputIsBlank(album) {
        if (album.tenAlbum.trim() === '' &&
            album.moTa.trim() === '' &&
            album.linkAnh.trim() === '') {
            document.getElementById("warning").innerHTML = 'PLEASE FILL IN YOUR FORM !';
            return;
        }
        return this.validateNewAlbum(album);
    }

    validateNewAlbum(album) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === album.tenAlbum
        );
        if (index !== -1) {
            document.getElementById("warning").innerHTML = "EXISTED! Please input another Album Name.";
            return;
        }
        return this.addAlbum(album);
    }

    addAlbum(album) {
        this.albumList.push(album);
        this.currentIdUpdate = album.id;
    }

    removeAlbum(albId) {
        //dung id
        let index = this.albumList.findIndex(
            (item) => item.id === albId
        );
        if (index !== -1) {
            this.albumList.splice(index, 1);
        }
    }

    editAlbum(albumID) {
        document.getElementById("btnThemAlbum").disabled = true;
        document.getElementById("btnCapNhatAlbum").disabled = false;

        let index = this.albumList.findIndex(
            (item) => item.id === albumID
        );
        console.log(index);
        this.currentIdUpdate = albumID;
        let edit = this.albumList[index];
        document.getElementById("linkAnh").value = edit.linkAnh;
        document.getElementById("tenAlbum").value = edit.tenAlbum;
        document.getElementById("moTa").value = edit.moTa;
        document.getElementById("loaiAlbum").value = edit.loaiAlbum;
    }

    validateUpdateAlbum(album) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === album.tenAlbum
        );
        if (index !== -1) {
            document.getElementById("warning").innerHTML = "EXISTED! Please input another Album Name.";
            return;
        }
        return this.updateAlbum(album);
    }

    updateAlbum(album) {
        let index = this.albumList.findIndex(
            (item) => item.id === album.id
        );
        this.albumList[index] = { ...album };
        document.getElementById("btnThemAlbum").disabled = false;
        document.getElementById("btnCapNhatAlbum").disabled = true;
    }

    saveAlbum() {
        let sList = JSON.stringify(this.albumList);
        localStorage.setItem("saveList", sList);
    }

    getAlbum() {
        if (localStorage.getItem("saveList")) {
            let gList = JSON.parse(localStorage.getItem("saveList"));
            this.albumList = gList;
        }
    }
}