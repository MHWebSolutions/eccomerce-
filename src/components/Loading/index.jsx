import style from './style.css'

export const Loading = ({loading}) => {
    return(
        loading ? (
        <div className="fullscreen">
            <div className="loading-text"><p>carregando...</p></div>
        </div>) : (<></>)
    )
}