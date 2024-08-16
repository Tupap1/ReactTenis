import './Landing.css'
import aydj from './img/aydj.jpg'
import nadal from './img/nadal.jpg'
import serena from './img/serena.webp'
import federer from './img/federer.jpg'
import calendario from './img/calendario.png'

const Landing = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                        <div className='body' id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">




                            <nav className="navbar navbar-default navbar-fixed-top">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" href="#myPage">Tenis Olimipico</a>
                                    </div>
                                    <div className="collapse navbar-collapse" id="myNavbar">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="#myPage">Inicio</a></li>
                                            <li><a href="#band">Tenis Olímpico</a></li>
                                            <li><a href="#tour">Tenistas principales</a></li>
                                            <li><a href="#contact">Paris 2024</a></li>
                                            <li className="dropdown">
                                            </li>   
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <div id="myCarousel" className="carousel slide" data-ride="carousel">



                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                         <img src={aydj} width="1200" height="700"/>
                                        <div className="carousel-caption">
                                            <h3>Alcaraz VS. Djokovic</h3>
                                            <p>"El duelo de titanes del tenis mundial."</p>
                                        </div>
                                    </div>

                                </div>



                            </div>


                            <div id="band" className="container text-center">
                                <h3>Tenis Olimpico</h3>
                                <p><em>We love tennis!</em></p>
                                <p>"¡Bienvenido al corazón del tenis olímpico! Aquí encontrarás la pasión, la emoción y la adrenalina de los mejores tenistas del mundo compitiendo en el escenario más grande del deporte. Sumérgete en la historia de rivalidades épicas, celebraciones inolvidables y momentos que han marcado la historia del tenis. ¡Vive la magia de los Juegos Olímpicos con nosotros!</p>
                                <br />

                            </div>


                            <div id="tour" className="bg-1">
                                <div className="container">
                                    <h3 className="text-center">Tenistas populares</h3>
                                    <p className="text-center">en esta seccion algunos de los mejores tenistas de todos los tiempos.</p>
 

                                    <div className="row text-center">
                                        <div className="col-sm-4">
                                            <div className="thumbnail">
                                                 <img src={nadal} width="400" height="300"/> 
                                                <p><strong>Rafael Nadal</strong></p>
                                                <p>El español, conocido por su intensidad y su dominio en tierra batida, ha demostrado ser un verdadero campeón olímpico. Con medallas de oro en individuales (Pekín 2008) y dobles (Río 2016), Nadal ha combinado elegancia y fuerza para conquistar el podio olímpico.</p>

                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="thumbnail">
                                                <img src={serena} width="400" height="300"/> 
                                                <p><strong>Serena Williams</strong></p>
                                                <p>La estadounidense, considerada una de las mejores tenistas de todos los tiempos, ha dominado el tenis femenino durante décadas. Con múltiples medallas de oro olímpicas en individuales y dobles, Serena ha demostrado su superioridad en el escenario más importante del deporte.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="thumbnail">
                                                <img src={federer}  width="400" height="300"/> 
                                                <p><strong>Roger Federer</strong></p>
                                                <p>El suizo, reconocido por su estilo de juego elegante y su palmarés sin igual, ha dejado su huella en el tenis olímpico. Aunque no ha conseguido el oro en individuales, Federer ha logrado la medalla de oro en dobles en los Juegos Olímpicos de Pekín 2008 junto a su compatriota Stan Wawrinka.

</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="modal fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">


                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                                <h4><span className="glyphicon glyphicon-lock"></span> Tickets</h4>
                                            </div>
                                            <div className="modal-body">
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label for="psw"><span className="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per person</label>
                                                        <input type="number" className="form-control" id="psw" placeholder="How many?" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="usrname"><span className="glyphicon glyphicon-user"></span> Send To</label>
                                                        <input type="text" className="form-control" id="usrname" placeholder="Enter email" />
                                                    </div>
                                                    <button type="submit" className="btn btn-block">Pay
                                                        <span className="glyphicon glyphicon-ok"></span>
                                                    </button>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                                                    <span className="glyphicon glyphicon-remove"></span> Cancel
                                                </button>
                                                <p>Need <a href="#">help?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="contact" className="container">
                                <h3 className="text-center">Paris 2024</h3>
                                <p className="text-center"><em>Men's singles</em></p>
                                <br />


                            <img src={calendario} width="1200" height="800"/>  
                                <br /><br />
                                <h3 className="text-center">Gracias por ver!!</h3>


                            </div>




                            <footer className="text-center">
                                <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
                                    <span className="glyphicon glyphicon-chevron-up"></span>
                                </a><br /><br />
                                <p>Made by Andres Cantillo Ficha 2669897</p>
                            </footer>

                        </div>
                    </div>
                    )
}

                    export default Landing