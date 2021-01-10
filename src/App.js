import './App.css';
import $ from 'jquery';
import React from 'react';
import Row from './Row.js';
import ReactDOM from 'react-dom';

class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
    input:null,
    movies:[],
    }
    this.handleClick = this.handleClick.bind(this);
}
handleClick(){

   let results = [];
    const inputValue = document.getElementById('input').value;
    const urlString = "https://api.themoviedb.org/3/search/movie?query="+inputValue+"&api_key=20afc3cb6f32f448a0e19deb785a42df";
    this.setState({
    input: inputValue,
    movies: this.state.movies,

    });
    $.ajax({
    url: urlString,
    success: (searchResults)=>{
       const limit = searchResults.results.length;
       if(limit!=0){
       for(let i=0; i<limit; i++){
        results.push(searchResults.results[i])
               }
       const rows = results.map((element)=>{
         return <Row title={element.title} overview={element.overview} poster={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+element.poster_path} id={element.id}/>
       });
       this.setState({
       input: this.state.input,
       movies: rows,
       })
    }
    else{
        document.getElementById('rows').innerHTML = "<p>Oops!There is no movie with that key word</p>"
    }
    }
    })

}

render(){
const style = {marginLeft: "20%", marginRight: "20%", marginTop: "15%"};
    return(<div>
    <header style={{height:"50px", width:"100%", fontSize:"32px", paddingLeft:"35%"}}>Movie Searching Made Easy 😎</header>
       <input id="input" placeholder="Enter any key word in the search bar above and you will get a list of movies containing that key word in their title" style={{backgroundColor: "#f2f2f2", width: "80%", height: "40px", border:"1px double gray", marginLeft: "150px", marginRight: "150px"}}></input><button style={{backgroundColor: "#f2f2f2", borderRadius: "0px", height: "40px", marginRight: "50%", marginLeft: "50%", border: "1px groove #f2f2f2"}}onClick={this.handleClick}>Search</button>
       <div id="rows">{this.state.movies}</div>
    </div>)
}
}
export default App;
