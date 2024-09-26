import { useState, useEffect} from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState ('');

    useEffect( () => {
        console.log('O componente iniciou')

        return () => {
            console.log('o componente finalizou')
        }
    }, []);

    useEffect( () => {
        console.log('O Estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('Nota A foi alterada ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return(
                <p>Olá {nome},Voce foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome},Voce foi reprovado!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text"  placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario