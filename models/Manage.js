export class Manage {
    albumList = [];
    currentIdUpdate = '';
    constructor() {
    }
    validateInputIsBlank(alb) {
        if (alb.tenAlbum.trim() === '' &&
            alb.moTa.trim() === '' &&
            alb.linkAnh.trim() === '') {
            alert('Please fill in your form');
            return;
        }
        return this.validateNewAlbum(alb);
    }

    validateNewAlbum(alb) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === alb.tenAlbum
        );
        if (index !== -1) {
            alert("Your Album Name existed! Please input another Album Name.");
            return;
        }
        return this.addAlbum(alb);
    }

    addAlbum(alb) {
        this.albumList.push(alb);
        this.currentIdUpdate = alb.id;
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
            alert("Your Album Name existed! Please input another Album Name.");
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