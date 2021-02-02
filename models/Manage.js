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
        album.id = this.currentIdUpdate;
        console.log(album.id);
        // console.log(index);
        // console.log(album)
        // this.currentIdUpdate = this.albumList[index].id;
        this.albumList[index] = { ...album };
        console.log('id update', this.currentIdUpdate);
        console.log('id album', album.id);
    }

    //kiểm tra trùng tên album khi bắt đầu thêm album vào
    validateAlbumName(album) {
        // let index = this.albumList.findIndex(
        //     (item) => item.tenAlbum === tenAlbum
        // );

        let index = this.albumList.findIndex(
            (item) => item.id === this.currentIdUpdate
        );

        // let index = this.albumList.findIndex(
        //     (item) => item.id === album.id
        // );
        console.log(index);
        console.log(album.id);

        let duplicateName = this.albumList[index].tenAlbum.includes(album.tenAlbum);
        console.log(this.albumList[index].tenAlbum);
        console.log(duplicateName);

        if (duplicateName) {
            alert('Your Album Name existed! Please input another Album Name.');
            return;
        }

        // if (index !== -1) {
        //     alert("Your Album Name existed! Please input another Album Name.");
        //     return;
        // }
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