import "./App.css"
import Card from "./Card"

function App(){
    // const cards = [
    //     {shoeName : "کفش 1", shoePic : "./images/01.png"},
    //     {shoeName : "کفش 2", shoePic : "./images/02.png"},
    //     {shoeName : "کفش 3", shoePic : "./images/03.png"}
    // ]

    const cards = [
        {shoeName : "کفش 1" , shoePic : "./images/01.png"},
        {shoeName : "کفش 2", shoePic : "./images/02.png"},
        {shoeName : "کفش 3", shoePic : "./images/03.png"}
    ] 

    return(
        // <>
        //     <header>header</header>
        //     <section>
        //         <div className="row">
        //             <Card shoeName="کفش 1" shoePic="./images/01.png" />
        //             <Card shoeName="کفش 2" shoePic="./images/02.png" />
        //             <Card shoeName="کفش 3" shoePic="./images/03.png" />
        //         </div>
        //     </section>
        //     <footer>footer</footer>
        // </>
        <>
        <header>header</header>
        <section>
            <div className="row">
                <Card {...cards[0]}/>
                <Card {...cards[1]} />
                <Card {...cards[2]} />
            </div>
        </section>
        <footer>footer</footer>
    </>
    )
}

export default App