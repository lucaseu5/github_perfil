import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 3000)
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ):(
                <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.listItemName}>
                            <b>nome:</b> {name}
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem:</b> {language}
                        </div>
                        <a  className={styles.listItemLink} target="_blank" href={html_url}  >Visitar no github</a>
                    </li>
                ))}
            </ul>
            )}

        </div>
    )
}

export default ReposList


