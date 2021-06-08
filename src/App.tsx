import React, { useState } from "react";

import "./App.css";

interface IState {
    people: {
        name: string;
        age: number;
        url: string;
        notes?: string;
    }[];
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([]);

    people.map((person) => person.age);
    return (
        <div className="App">
            <p>Maha</p>
        </div>
    );
}

export default App;
