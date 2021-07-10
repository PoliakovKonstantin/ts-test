const arr:Object[]=[]
class book{
    [x: string]: any
    constructor(book:Object) {
        this.id=arr.length+1
        this.title= book.title,
        this.description= book.description,
        this.authors= book.authors,
        this.favorite= book.favorite,
        this.fileCover=book.fileCover,
        this.fileName=book.fileName
    }
}
class BooksRepository {
    createBook(book1:Object): Object{
            const b00k=new book(book1)
            arr.push(b00k)
            console.log(arr)
            return
        }
    getBook(id:number) {
        console.log(arr[id-1])
        return
    }
    getBooks(){
        console.log(arr)
    }
    updateBook(id:number,book1234:Object) {
        arr[id-1]=book1234
        console.log('ok!')
        return
    }
    deleteBook(id:number) {
        var id1=id-1
        arr.splice(id1,1,)
    }
    }
