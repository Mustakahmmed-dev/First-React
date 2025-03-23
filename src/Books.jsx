
export default function Books({ name, price, available }) {
    if (price >= 100 && available) {
        return (
            <div style={{
                border: "2px solid green",
                marginBottom: "10px",
                borderRadius: "10px",
                fontSize: "20px",
                fontWeight: "normal"
            }}>
                <p> Book Name: {name}  </p>
                <p>Price: {price} </p>
            </div>
        )
    }

}