
import Header from './components/Header/index'
import SearchResults from './components/SearchResults/index'
import Library from './components/Library/index'
import { dbsong } from './data/db_song'
import {useState, useEffect} from 'react'

function App() {

    //Lista de canciones de SearchResults
    const [data, setData] = useState(dbsong)

    //Lista de canciones de la biblioteca
    const [dataLibrary, setDataLibrary] = useState([])

    //Estados creados para identificar cuando se Agregan o Eliminan canciones del Library
    const [lastAddedSong, setLastAddedSong] = useState(null);
    const [lastRemovedSong, setLastRemovedSong] = useState(null);

    useEffect(() => {
        if (lastAddedSong) {
            console.log(
                `Canción agregada a tu biblioteca: ${lastAddedSong.nombre}`
            );
        }
    }, [lastAddedSong]);

    useEffect(() => {
        if (lastRemovedSong) {
            console.log(
                `Canción eliminada de Mi Biblioteca: ${lastRemovedSong.nombre}`
            );
        }
    }, [lastRemovedSong]);

    //Función para añadir a la Library

    const addLibrary = (song) => {
        if (dataLibrary.some((item) => item.id === song.id)) {
            return
        }

        setDataLibrary((prev) => [...prev, song])
        setLastAddedSong({ ...song })
    }


    //Función para eliminar de Library
    const removeLibrary = (id) => {
        const songToRemove = dataLibrary.find(
            (song) => song.id === id
        )

        if (!songToRemove) return

        setDataLibrary((prev) => 
            prev.filter((song) => song.id !== id)
        )

        setLastRemovedSong({ ...songToRemove });
    }

  return (
    <>
    <Header />

    <div className = "main__principal">

        <SearchResults
            data = {data}
            addLibrary = {addLibrary} 
        />       

        <div className="main__central">
            <div className = "main__central--contenedor">
                <div className = "main__central--artista">
                    <div className = "main__central--sobreimagen">
                        <div className = "main__central--mover">
                            <a href = "#">
                                <img src = {require("./img/icono_menor.svg").default} className = "global__icono" alt = "Icono Atrás"/>
                            </a>
                            <a href = "#">
                                <img src = {require("./img/icono_mayor.svg").default} className = "global__icono" alt = "Icono Delante"/>
                            </a>
                        </div>
                        <div className = "main__central--instalar">
                            <a href = "#">&#8595; Instalar app</a>
                        </div>
                        <div className = "main__central--nomartista">
                            <p className = "main__central--nombre">Coldplay</p>
                        </div>
                        <div className = "main__central--oyentes">
                            <p>75.836.230 oyentes mensuales</p>
                        </div>
                    </div>
                </div>
                <div className = "main__central--canciones">
                    <div className = "main__central--siguiendo">
                        <div>
                            <img src = {require("./img/icono_pausa_verde.svg").default} className = "global__icono" alt = "Icono Pausar"/>
                            <a href = "#">Siguiendo</a>
                            <p className = "global__texto--comun global__icono--texto">. . .</p>
                        </div>
                        
                    </div>
                
                <div className = "main__central--listado">

                    <div className = "main__derecha--infoartista">
                    
                    <div className = "main__derecha--info">
                        <div>
                            <p className = "global__texto--claro">Coldplay</p>
                        </div>
                        <div>
                            <p className = "global__texto--muychico">75.836.230 oyentes mensuales</p>
                            <a href = "#">Dejar de seguir</a>
                        </div>
                        <div>
                            <p className = "global__texto--chico">New album, Music Of The Spheres, out now. Coldplay formed their band in late 1997 after Guy Berryman, Jonny Buckland, Will Champion and...</p>
                        </div> 
                    </div>
                </div>

                    <div className = "main__central--more">
                        <p className = "global__texto--chico">See more</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>

        <Library 
            dataLibrary = {dataLibrary}
            removeLibrary = {removeLibrary}
        />
        
    </div>
    


    <footer>
        <div className = "footer__contenedor">
            <div className = "footer__izquierda">
                <div>
                    <img src = {require("./img/yellow.jpg")} className = "global__icono" alt = "Yellow"/>
                </div>
                <div>
                    <p className = "global__texto--claro">Yellow</p>
                    <p className = "global__texto--muychico">Coldplay</p>
                </div>
                <div className = "global__icono--chico">
                    <img src = {require("./img/corazon_icono.png")} className = "global__icono--chico" alt = "Me Gusta"/>
                </div>
            </div>
            <div className = "footer__central">
                <div>
                    <img src = {require("./img/icono_aleatorio.png")} className = "global__icono" alt = "Aleatorio"/>
                    <img src = {require("./img/icono_regresar.png")} className = "global__icono" alt = "Regresar"/>
                    <img src = {require("./img/icono_fondo_blanco.svg").default} className = "global__icono" alt = "Pausar"/>
                    <img src = {require("./img/icono_adelantar.png")} className = "global__icono" alt = "Adelantar"/>
                    <img src = {require("./img/icono_repetir.png")} className = "global__icono" alt = "Repetir"/>
                </div>
                <div>
                    <p className = "global__texto--muychico">1:29</p>
                    <img src = {require("./img/barra_progreso.png")} alt = "Barra Progreso"/>
                    <p className = "global__texto--muychico">4:25</p> 
                </div>
            </div>
            <div className = "footer__derecha">
                <img src = {require("./img/play_verde.png")} className = "global__icono--chico" alt = "Play"/>
                <img src = {require("./img/icono_microfono.png")} className = "global__icono--chico" alt = "Micrófono"/>
                <img src = {require("./img/lista_transparente.png")} className = "global__icono--chico" alt = "Lista"/>
                <img src = {require("./img/icono_bocina.png")} className = "global__icono--chico" alt = "Bocina"/>
                <img src = {require("./img/barra_blanca_transparente.png")} alt = "Volumen"/>
                <img src = {require("./img/pantalla_transparente.png")} className = "global__icono--chico" alt = "Pantalla"/>
                <img src = {require("./img/expandir_transparente.png")} className = "global__icono--chico" alt = "Expandir"/>
            </div>
        </div>
    </footer>
    
    </>
  );
}

export default App;

