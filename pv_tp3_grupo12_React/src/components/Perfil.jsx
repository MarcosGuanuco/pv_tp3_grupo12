import { useState } from 'react'
import '../css/Perfil.css'


function Perfil() {

    const [personas] = useState([
        {
            id: 1,
            nombre: 'Marcos',
            rol: 'Docente'
        },

        {
            id: 2,
            nombre: 'Ana',
            rol: 'Alumno'
        },

        {
            id: 3,
            nombre: 'Lucas',
            rol: 'Alumno'
        }
    ])

    return (

        <main>

            <h2>Informacion Personal</h2>

            <table border="1">

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        personas.map(persona => (

                            <tr key={persona.id}>

                                <td>{persona.nombre}</td>

                                <td>{persona.rol}</td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </main>
    )
}

export default Perfil