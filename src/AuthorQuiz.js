import React from 'react';
import './App.css';
import './bootstrap.min.css'

function Hero() {
    return (<div className="row">
        <div className="jumbotron col-10 offset-1">
            <h1>Author Quiz 📚</h1>
            <p>Select the 📖 written by the author</p>
        </div>
    </div>);
}

function Book({title,onAnswerSelected}){
    return (<p className="answer alert alert-primary" onClick={()=>onAnswerSelected(title)}>{title}
    </p>);
}

function Turn({ author, books,highlight,onAnswerSelected }) {

    //function to highlight the block if answer is correct or wrong
    function highlightToBgColor(highlight){
        const mapping = {
            'none':'',
            'correct':'green',
            'wrong':'red'
        };
        return mapping[highlight];
    }

    return (<div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
        <div className="col-4 offset-1">
            <img src={author.imageUrl} className="authorimage rounded" alt="Author"></img>
        </div>
        <div className="col-6">
            {(books.map(title => <Book title={title} key={title} onAnswerSelected={onAnswerSelected}></Book>))}
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

function AuthorQuiz({ turnData,highlight,onAnswerSelected }) {
    return (
        <div className="container-fluid">
            <Hero></Hero>
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}></Turn>
            <Continue></Continue>
            <Footer></Footer>
        </div>);
}

export default AuthorQuiz;
