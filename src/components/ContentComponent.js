import React from "react";

class ContentComponent extends React.Component{
    render(){
        return (
            <div className="content">

                <div className="formation-part part">
                    <h4> Formations </h4>

                    <a href="https://lidem.eu/"><p> 2023 : Projet Pro - l'IDEM - Le Soler </p></a>
                    <ul>
                        <li><i className="fa-brands fa-html5"></i> HTML/CSS</li>
                        <li><i className="fa-brands fa-bootstrap"></i> Bootstrap</li>
                        <li><i className="fa-solid fa-wrench"></i> Algorithmique</li>
                        <li><i className="fa-brands fa-php"></i> PHP Objet</li>
                        <li><i className="fa-brands fa-js"></i> Javascript</li>
                        <li><i className="fa-solid fa-server"></i> Serveur</li>
                        <li><i className="fa-solid fa-database"></i> SQL</li>
                        <li><i className="fa-brands fa-react"></i> React</li>
                        <li><i className="fa-brands fa-symfony"></i> Symfony</li>
                        <li><i className="fa-solid fa-box-open"></i> Webpack</li>
                        <li><i className="fa-brands fa-wordpress"></i> Wordpress</li>
                    </ul>

                    <p> 2015 : Licence Pro Communication Numérique et e-activités - <em>UPVD Antenne de Mende</em></p>


                    <p> 2013 : BTS Services informatiques aux organisations - option développeur web - <em>Lycée Jean
                        Lurçat Perpignan</em></p>


                </div>
                <div className="xppro-part part">
                    <h4> Expériences professionnelles </h4>

                    <p> Novembre 2017 -> Novembre 2022 : Infographiste - <a
                        href="https://www.cottonbird.fr/">CottonBird</a> - Saleilles</p>
                    <ul>
                        <li>création d'actions / traitements par lot sur Photoshop</li>
                        <li>Utilisation d'un FTP (FileZilla)</li>
                        <li>Archivage</li>
                        <li> langage SQL</li>
                    </ul>

                    <p> 2015 -> 2016 : Auto entreprise</p>
                    <ul>
                        <li>Déclinaison et création de visuels sur plusieurs supports pour les évènements :
                            <ul>
                                <li>Terroir des Alpilles (Juillet 2015 et Juillet 2016)</li>
                                <li> Le Salon des Agricultures de Provence (Juin 2016)</li>
                            </ul>
                        </li>
                        <li>Création du carton d’invitation pour l’inauguration des locaux de l’entreprise La Serpe.
                        </li>
                        <li>Mise en page du guide des associations thoroises édition 2015.</li>
                        <li>Mise en page de l’Echo du Beffroi (5 éditions, avec inDesign), magazine bimensuel de la
                            ville du Thor.
                        </li>
                    </ul>


                    <p>Hôtesse d’accueil :</p>
                    <ul>
                        <li>Sur les deux éditions 2015 de la Foire internationale Art et Antiquités de l’Isle sur la
                            Sorgue.
                        </li>
                        <li>Inauguration des locaux de l’entreprise la Serpe (le Thor 84).</li>
                    </ul>

                    <p>Formatrice :</p>
                    <ul>
                        <li>Formation du personnel de mairie pour la mise à jour du site de la ville du Thor sous
                            Wordpress.
                        </li>
                    </ul>


                    <p>Créatrice de contenu :</p>
                    <ul>
                        <li>Sites web des évènements Terroir des Alpilles, La Foire internationale art et antiquités de
                            l’Isle sur la Sorgue.
                        </li>
                        <li>Site web de la ville du Thor (qui a remporté en 2015 le premier prix des trophées de la
                            communication).
                        </li>
                    </ul>


                    <p>Inventoriste :</p>
                    <ul>
                        <li>Pour la société Ivalis (2013-2014).</li>
                    </ul>

                </div>

                <div className="hobbies-part part">
                    <h4> Hobbies </h4>

                    <ul>
                        <li><i className="fa-brands fa-xbox"></i> Jeux vidéos</li>
                        <li><i className="fa-solid fa-heart"></i> Badminton (en club)</li>


                    </ul>

                </div>
            </div>
        )
    }
}

export default ContentComponent;