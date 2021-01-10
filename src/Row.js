import React from 'react'

class Row extends React.Component{
render(){
    return (<div style={{border:"1px solid gray", marginLeft: "150px", marginRight: "150px", backgroundColor: "#f2f2f2", marginTop:"8px", marginBottom:"8px"}}>
            <table>
                <tr>
                <td>
                    <img src={this.props.poster} alt="Poster unavailable" style={{width:70, height:100}}/>
                </td>
                <td>
                    <div>{this.props.title}</div>
                    <div>{this.props.overview}</div>
                    <div><a href={"https://www.themoviedb.org/movie/"+this.props.id+this.props.title} target="_blank"><button>More Details</button></a></div>

                </td>
                </tr>
            </table>

        </div>
    )
}
}
export default Row;