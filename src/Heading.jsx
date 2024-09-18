
function Heading({ text }) {

    let [randomNumber, setRandomNumber] = useState()

    if (!randomNumber) {

        setRandomNumber(Math.random()) 
    }

    console.log(randomNumber)

    return (
        <>
            <h1>{randomNumber}</h1>
            <p>{text}</p>
        </>
    )

} 

export default Heading

