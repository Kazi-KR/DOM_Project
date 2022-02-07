class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
        const list=document.getElementById('bookList');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message,className){
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const card=document.querySelector('.form');
        container.insertBefore(div,card);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000);
    }

    deleteBook(target){
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
            this.showAlert('Book Removed','success');
        }
    }
    
    clearFields( ){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }
    
}

//EventListeners

document.getElementById('bookForm').addEventListener('submit',(e)=>{
    const title=document.getElementById('title').value,
    author=document.getElementById('author').value,
    isbn=document.getElementById('isbn').value
    const book=new Book(title,author,isbn);
    const ui=new UI();

    if(title===''|| author===''|| isbn===''){
        ui.showAlert("Please fill up all the fields",'error');
    }else{
        ui.addBookToList(book);
        ui.showAlert('Book Added','success');
        ui.clearFields();
        
    }
    e.preventDefault();
});

document.getElementById('bookList').addEventListener('click',(e)=>{
    const ui=new UI();
    ui.deleteBook(e.target);
    
    e.preventDefault();
})