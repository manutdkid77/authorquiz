import React from 'react';
import './App.css';
import './bootstrap.min.css'

function Hero() {
    return (<div className="row">
        <div className="jumbotron col-10 offset-1">
            <h1>Author Quiz 📚</h1>
            <p>Select the author who wrote the 📖</p>
        </div>
    </div>);
}

function Book({title}){
    return (<p className="answer alert alert-primary">{title}
    </p>);
}

function Turn({ author, books }) {
    return (<div className="row turn" style={{ backgroundColor: "white" }}>
        <div className="col-4 offset-1">
            <img src={author.imageUrl} className="authorimage rounded" alt="Author"></img>
        </div>
        <div className="col-6">
            {(books.map(title => <Book title={title} key={title}></Book>))}
        </div>
    </div>);
}

function Continue() {
    return <div></div>;
}

function Footer() {
    return (<div id="footer" className="row">
        <div className="col-12">
            <p className="text-muted credit text-center">All images are from <a href="https://commons.wikimedia.org/wiki/Commons:Licensing">Wikimedia Commons</a></p>
        </div>
    </div>);
}

function AuthorQuiz({ turnData }) {
    return (
        <div className="container-fluid">
            <Hero></Hero>
            <Turn {...turnData}></Turn>
            <Continue></Continue>
            <Footer></Footer>
        </div>);
}

export default AuthorQuiz;
