import React from "react";

class AsideComponent extends React.Component{

    render(){
        return(
            <aside className="presentation-cadre d-flex flex-column justify-content-center">
                <img src="/marion.jpg" alt="Marion" className="img-presentation"/>
                <h2> à propos</h2>
                <h3>Bonjour, je suis Marion =)</h3>
                <p>
                    Je suis à la recherche d'un stage pour terminer ma formation en developpement Web.
                    Avant cette formation j'occupais un poste d'infographiste, pendant cinq ans, rattachée au service
                    informatique.
                    J'ai toujours été curieuse de savoir comment les sites web fonctionnaient, je voyais et vois
                    toujours les
                    développeurs comme les héros du web. Je me suis alors lancée un défis, je souhaite moi aussi devenir
                    un héros.
                </p>

                <div className="social"><a href="https://www.linkedin.com/in/marion-torcheux-406017140/"><i
                    className="bi bi-linkedin"></i></a> <a href="https://github.com/MarionTorcheux"><i
                    className="bi bi-github"></i></a></div>

                <div className="content-center">
                    <a href="mailto:marion.btssion@gmail.com">
                        <button type="button" className="btn btn-dark bouton">Me contacter</button>
                    </a>
                </div>
            </aside>

        )
    }
}


export default AsideComponent;