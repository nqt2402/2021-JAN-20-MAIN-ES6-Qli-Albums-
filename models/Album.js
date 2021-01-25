
export class Album {
    //dùng get date để làm id tìm index
    // id = new Date(); // Cach 1
    id = Date.now(); // Cach 2
    // id = 0;
    linkAnh = '';
    tenAlbum = '';
    moTa = '';
    loaiAlbum = '';

    constructor() { }

}
