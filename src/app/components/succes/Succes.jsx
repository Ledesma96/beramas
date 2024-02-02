const Success = ({children, notification}) => {
    return (
        <div className={notification? 'success-on' : 'success-off'}>
            {children}
        </div>
    )
}

export default Success