export class Manage {
    albumList = [];
    currentIdUpdate = '';
    constructor() {
    }

    addAlbum(alb) {
        this.albumList.push(alb);
        // console.log(this.albumList);
        console.log('id khi bam add', alb.id);
    }

    // 2 func removeAlbum & editAlbum BẮT BUỘC DÙNG tenAlbum
    removeAlbum(albumName) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === albumName
        );
        if (index !== -1) {
            this.albumList.splice(index, 1);
        }
    }

    editAlbum(albumName) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === albumName
        );
        this.currentIdUpdate = this.albumList[index].id;
        console.log('id edit', this.currentIdUpdate);
        let edit = this.albumList[index];
        document.getElementById("linkAnh").value = edit.linkAnh;
        document.getElementById("tenAlbum").value = edit.tenAlbum;
        document.getElementById("moTa").value = edit.moTa;
        document.getElementById("loaiAlbum").value = edit.loaiAlbum;
    }

    updateAlbum(album) {
        let index = this.albumList.findIndex(
            (item) => item.id === this.currentIdUpdate
        );
        // console.log(album)
        this.currentIdUpdate = this.albumList[index].id;
        console.log(index);
        // this.albumList[index] = { ...album };
        this.albumList[index].linkAnh = album.linkAnh;
        this.albumList[index].tenAlbum = album.tenAlbum;
        this.albumList[index].moTa = album.moTa;
        this.albumList[index].loaiAlbum = album.loaiAlbum;
        console.log('id update', this.currentIdUpdate);
        console.log('id album', album.id);
    }

    //kiểm tra trùng tên album khi bắt đầu thêm album vào
    validateAlbumName(album) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === tenAlbum
        );
        console.log(index);
        // let index = this.albumList.findIndex(
        //     (item) => item.id === this.currentIdUpdate
        // );
        // this.currentIdUpdate = this.albumList[index].id;
        // console.log('id update validate',this.currentIdUpdate);
        // console.log(index);

        if (index !== -1) {
            alert("Your Album Name existed! Please input another Album Name.");
            return;
        }
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