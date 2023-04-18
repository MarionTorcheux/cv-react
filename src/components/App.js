import React, {Fragment} from "react";
import HeaderComponent from "./HeaderComponent";
import AsideComponent from "./AsideComponent";
import ContentComponent from "./ContentComponent"



class App extends React.Component{


    render(){
        return(
            <Fragment>
                <HeaderComponent/>
                <main className="container d-flex main-content">
                <AsideComponent/>
                    <ContentComponent/>


                </main>
            </Fragment >

        );
    }
}

export default App