function search() {
    let query = document.getElementById("searchBox").value;
    if (query.trim() === "") {
        alert("Please enter a search term.");
        return;
    }

    fetch(`http://localhost:5000/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            let resultDiv = document.getElementById("searchResults");
            resultDiv.innerHTML = "";

            if (data.length === 0) {
                resultDiv.innerHTML = "<p>No results found.</p>";
                return;
            }

            data.forEach(item => {
                let resultItem = document.createElement("p");
                resultItem.textContent = `${item.name}: ${item.uses}`;
                resultDiv.appendChild(resultItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}
