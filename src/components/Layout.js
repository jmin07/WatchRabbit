import Header from "./Header"

export default function Layout(props) {
    return(
       <div>
        <Header getOn={props.getOn}/>
            {props.children}
        </div> 
    )
}