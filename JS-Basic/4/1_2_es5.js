"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (newText) {
    this.text = newText;
}

const post1 = new Post("Lenin", "123213213123", Date());
console.log(post1);

post1.edit("87349857349853489");
console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const ap1 = new AttachedPost("Pushkin", "jnbvlkjdfnbjksbn", Date());
console.log(ap1);

ap1.edit("123");
console.log(ap1);

ap1.makeTextHighlighted();
console.log(ap1);