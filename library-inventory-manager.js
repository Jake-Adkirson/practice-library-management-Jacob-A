class LibraryItem{
    constructor(title, id, isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut(){
        return this.isAvailable = false;
    }
    returnItem(){
        return this.isAvailable = true;
    }
};

class Book extends LibraryItem{
    constructor(author, genre){
        super();
        this.author = author;
        this.genre = genre;
    }
    getAuthor(){
        return `${this.author} wrote the book "${this.title}".`
    }
};

class DVD extends LibraryItem{
    constructor(director, duration){
        super();
        this.director = director;
        this.duration = duration;
    }
    getDirector(){
        return `${this.director} directed the film "${this.title}".`
    }
};

class Magazine extends LibraryItem{
    constructor(issueNumber, publisher){
        super();
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    getPublisher(){
        return `${this.publisher} published the really super cool magazine known as "${this.title}".`
    }
};

let percyJackson = new Book("Rick Riordan", "Fantasy");
percyJackson.title = "The Lightning Thief";
percyJackson.id = 109;
percyJackson.isAvailable = true;

console.log(percyJackson);

let standByMe = new DVD("Rob Reiner", "89 Minutes");
standByMe.title = "Stand By Me";
standByMe.id = 1;
standByMe.isAvailable = false;

console.log(standByMe);

let coolGuyMag = new Magazine(363, "Cool Guy Publishing");
coolGuyMag.title = "Coooooool Guy Magazine";
coolGuyMag.id = 45;
coolGuyMag.isAvailable = true;

console.log(coolGuyMag);

percyJackson.checkOut();
console.log(percyJackson);

standByMe.returnItem();
console.log(standByMe);

console.log(standByMe.getDirector());
console.log(percyJackson.getAuthor());
console.log(coolGuyMag.getPublisher());