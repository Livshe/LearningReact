export default function Drill() {
    const mySharedMethod = () => {
        alert("Yay, It works!");
    };

function ButtonsContainer(props) {
    return (
    <div>
        <Button sharedMethod={props.sharedMethod} />
        <Button sharedMethod={props.sharedMethod} />
        <Button sharedMethod={props.sharedMethod} />
        <Button sharedMethod={props.sharedMethod} />
    </div>
    );
}

function Button(props) {
    return (
    <div>
        <button onClick={props.sharedMethod}>Custom</button>
    </div>
    );
}

    return (
    <div className="App">
        <ButtonsContainer sharedMethod={mySharedMethod} />
        </div>
        );
    }