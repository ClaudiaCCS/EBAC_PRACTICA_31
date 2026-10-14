import Song from '../Song'
import './style.css'

export default function SearchResults({data, addLibrary}) {

    
    return (

        <div className= "main__izquierda">
        <div className = "main__izquierda--biblioteca global__contenedor">
            <div className = "main__izquierda--tubiblioteca">
                <div>
                    <p className = "global__texto--comun">Buscador de canciones</p>
                </div>
            </div>
            
            <div className = "main__izquierda--buscar">
                <p className = "main__izquierda--buscarlabel">Nombre de la canción:</p>
                <input id = "main__izquierda--buscarcancion" type = "text" placeholder = "Buscar canción"/>
                <img src = {require("../../img/icon_search.svg").default} className = "global__icono--chico" alt = "Icono Search"/>
            </div>
            <div className = "main__izquierda--listado">
                {data.map((song) => {
                    return (
                        <Song
                            key = {song.id}
                            song = {song}
                            addLibrary = {addLibrary} 
                        />
                    )
                })}                
                    
            </div>
        </div>
    </div>

                    
    )
}