class LibraryItem{
    constructor(title, id, isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut(){
       if(this.isAvailable){
        this.isAvailable = false;
       console.log(`${this.title} has been checked out.`);
       } else {
        console.log(`$this.title} is already checked out.`);
       }
    }
    returnItem(){
        if(!this.isAvailable){
            this.isAvailable = true;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} has already been returned.`);
        }
    }
};

class Book extends LibraryItem{
    constructor(title, id, isAvailable, author, genre){
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
    describe(){
        return `Book: ${this.title} by ${this.author}, Genre: ${this.genre}, Is available: ${this.isAvailable}.`
    }
};

class DVD extends LibraryItem{
    constructor(title, id, isAvailable, director, duration){
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
    describe(){
        return `DVD: ${this.title} by ${this.director}, Runtime: ${this.duration}, Is available: ${this.isAvailable}.`
    }
};

class Magazine extends LibraryItem{
    constructor(title, id, isAvailable, issueNumber, publisher){
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    describe(){
        return `Magazine: ${this.title} by ${this.publisher}, Issue number: ${this.issueNumber}, Is available: ${this.isAvailable}.`
    }
};

let percyJackson = new Book("The Lightning Thief", 109, true, "Rick Riordan", "Fantasy");

console.log(percyJackson);

let standByMe = new DVD("Stand By Me", 1, false, "Rob Reiner", "89 Minutes");

console.log(standByMe);

let coolGuyMag = new Magazine("Coooooool Guy Magazine", 45, true, 363, "Cool Guy Publishing");

console.log(coolGuyMag);

percyJackson.checkOut();
console.log(percyJackson);

standByMe.returnItem();
console.log(standByMe);

console.log(standByMe.describe());
console.log(percyJackson.describe());
console.log(coolGuyMag.describe()); 




