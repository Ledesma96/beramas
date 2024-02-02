const Success = ({children, notification}) => {
    return (
        <div className={notification? 'succes-on' : 'success-off'}>
            {children}
        </div>
    )
}

export default Success