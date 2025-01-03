const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <h1>From {name}/{username}</h1>
            <p>
                {message}
                <br/> 
                Tweeted On: {date}
            </p>    
        </div>
    )
}