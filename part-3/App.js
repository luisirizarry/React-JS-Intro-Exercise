const App = () => {
    return (
        <div>
            <Person 
                name="Christopher" 
                age={20} 
                hobbies={["Reading", "Hiking", "Gaming"]} 
            />
            <Person 
                name="Sophia" 
                age={16} 
                hobbies={["Drawing", "Dancing", "Singing"]} 
            />
            <Person 
                name="Alexander" 
                age={25} 
                hobbies={["Cooking", "Traveling", "Swimming"]} 
            />
        </div>
    );
};
