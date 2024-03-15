import React, {useState} from "react";

export default function Lift() {
    const [pets, setPets] = useState([]);
    return (
    <div className="App">
        <Pets petsList={pets} />
        <RegisterPet petsArray={pets} setPetsFunction={setPets} />
    </div>
    );
}

function Pets(props) {
    return (
    <div>
        <div>A total of {props.petsList.length} pets have been registered</div>
        {props.petsList.map((pet) => (
        <div>
            {pet.name} is {pet.age} years old
        </div>))}
    </div>
    );
}

function RegisterPet(props) {
    const [petName, setPetName] = useState([]);
    const [petAge, setPetAge] = useState([]);
    return (
    <div>
        <div>
            <label for="pet_name">Name:</label>
            <input
            id="pet_name"
            value={petName}
            onChange={(e) => {
                setPetName(e.target.value);
            }}
            />
        </div>
        <div>
            <label for="pet_age">Age:</label>
            <input
            id="pet_age"value={petAge}
            onChange={(e) => {
                setPetAge(e.target.value);
            }}
            />
        </div>
        <div>
            <button onClick={() => {
                props.setPetsFunction([
                    ...props.petsArray,
                    { name: petName, age: petAge }
                ]);
                setPetName("");
                setPetAge("");
            }}
            > Register</button>
        </div>
    </div>);
}