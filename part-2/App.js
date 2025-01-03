const App = () => {
    return (
        <div>
            <Tweet 
                username="user1" 
                name="Alice" 
                date={new Date().toDateString()}
                message="Happy New Year everyone!"
            />
            <Tweet 
                username="user2" 
                name="Bob" 
                date={new Date().toDateString()}
                message="Merry Christmas to all!"
            />
            <Tweet 
                username="user3" 
                name="Charlie" 
                date={new Date().toDateString()}
                message="Grateful for all the blessings. Happy Thanksgiving!"
            />
        </div>
    );
}
