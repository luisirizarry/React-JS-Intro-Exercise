const Person = ({ name, age, hobbies }) => {
    let reply;
    if (age >= 18) {
        reply = "please go vote!";
    } else {
        reply = "you must be 18";
    }

    let correctName = name;
    if (name.length > 8) {
        correctName = name.slice(0, 6);
    }

    return (
        <div>
            <p>Learn some information about {correctName}</p>
            <ul>
                {hobbies.map((h, index) => (
                    <li key={index}>
                        <b>{h}</b>
                    </li>
                ))}
            </ul>
            <h3>{reply}</h3>
        </div>
    );
};
