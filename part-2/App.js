const App = () => {
    return (
        <div>
            <Tweet 
                username="user1" 
                name="Alice" 
                date="Jan 1, 2025" 
                message="Happy New Year everyone!"
            />
            <Tweet 
                username="user2" 
                name="Bob" 
                date="Dec 25, 2024" 
                message="Merry Christmas to all!"
            />
            <Tweet 
                username="user3" 
                name="Charlie" 
                date="Nov 24, 2024" 
                message="Grateful for all the blessings. Happy Thanksgiving!"
            />
        </div>
    );
}
