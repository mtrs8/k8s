import BookModel from "../models/book";

const booksInitial = [
  {
    title: "Fogo e Sangue",
    author: "George R. R. Martin",
  },
  {
    title: "Harry Potter e as Relíquias da Morte",
    author: "J. K. Rowling",
  },
  {
    title: "Convite para um homicídio",
    author: "Agatha Christie",
  },
  {
    title: "O Sanatório",
    author: "Sarah Pearse",
  },
];

export const saveDataInDatabase = async () => {
  BookModel.find({}, (err:any , res: any) => {
    if (err) {
      console.log('Mongoose failed while verifying books')
      return
    }

    const existBooks = res.map((item: any) => item.title)
    const newBooks = []
    booksInitial.forEach((item: any) => {
      if(!existBooks.includes(item.title)){
        newBooks.push(item)
      }
    })

    if (newBooks.length > 0) {
      BookModel.insertMany(booksInitial)
        .then(() => console.log('Mongoose inserted some books'))
        .catch((err) => console.log(err))
    } 
  })
}