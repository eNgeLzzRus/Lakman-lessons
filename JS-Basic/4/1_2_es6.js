"use strict";

class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        this.text = newText;
    }
}

const post1 = new Post("Lenin", "123213213123", Date());
console.log(post1);

post1.edit("87349857349853489");
console.log(post1);

class AttachedPost extends Post {
    constructor (author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const at1 = new AttachedPost("Pushkin", "fjgnajngasfg", Date());
console.log(at1);

at1.edit("13874yhjvxczvzx");
console.log(at1);

at1.makeTextHighlighted();
console.log(at1);