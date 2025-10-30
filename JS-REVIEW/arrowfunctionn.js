 getyear = (str) => str.split("-")[0];
console.log(getyear("2020-02-01"));

const getmonth = (str) => str.split("-")[1];
console.log(getmonth("2020-02-01"));

const getdate = (str) => str.split("-")[2];
console.log(getdate("2020-02-01"));


 function getyear1(str){
    return str.split("-")[0];
 }
console.log(getyear1("2023-05-10"));

const data = [
  {
    id: 1,
    title: "The Hobbit",
    publicationDate: "1937-09-21",
  },
  {
    id: 2,
    title: "1984",
    publicationDate: "1949-06-08",
  },
];
 
 function  getdata(){
    return data;
 }
    const allbooks = getdata();
    allbooks;
    console.log(allbooks);

    const  getbook = (id) => data.find((d) => d.id === id);
    const book = getbook(2);
    book;
    console.log(book);