// es6 的class 只是语法糖
function Person(name){
    this.name=name;
}
Person.prototype={
    getName:function(){
        return this.name;
    }
}
// new Person()
function Author(name,books){
    Person.call(this,name);
    this.books=books;
}
extend(Author,Person);
Author.prototype.getBooks=function(){
    return this.books;
}
function extend(subClass,superClass){
    // var F=function(){
        subClass.prototype=new superClass;
    // }
    
}
const author=new Author('高尔基',['我的offer']);
console.log(author.getNmae())