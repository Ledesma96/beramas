const CardLoader = ({count}) => {
    const render = Array.from({length: count}, (v, i) => i)
    return(
        <div className="conteiner-card-loader">
            {render.map((index) => (
                <div key={index} className="card-loader">
                    <div className="img-loader"></div>
                    <div className="title-loader"></div>
                    <div className="btn-loader"></div>
                </div>
            ))
            }
        </div>
    )
}

export default CardLoader