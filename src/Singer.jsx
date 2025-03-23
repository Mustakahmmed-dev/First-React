export default function Singer({ singer }) {
    return (
        <div style={{
            border: "2px solid green",
            padding: "10px",
            marginBottom: "15px"
        }}>
            <h2>Name: {singer.name} </h2>
            <p>Age: {singer.age} </p>
            <p>Country: {singer.country} </p>
        </div>

    )
}