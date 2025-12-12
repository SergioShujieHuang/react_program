function ListGroup() {
    let item = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    return (
        <>
            <h1>List</h1>
            {item.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {item.map((item, index) => (
                    <li className="list-group-item"
                        key={item}
                        onClick={() => console.log(item, index)}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;