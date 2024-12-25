import './card.css'

function Card(props){
    return(
        <div className="card" style={{position:"relative", alignItems:"center"}}>
            <img alt="calendar picture "></img>
            {props.children}
        </div>
    );
}

export default Card