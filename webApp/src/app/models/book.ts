export class Book {
    authors:string;
    average_rating;
    book_id;
    genre;
    goodreads_book_id;
    image_url;
    isbn;
    original_title;   

    deserialize(input: any) : this{
        Object.assign(this, input);
        return this;
    }
    getBooktitle(){
        return this.original_title;
    }
}
