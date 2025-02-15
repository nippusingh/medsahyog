const medicines = [
    {
        name: "Paracetamol",
        uses: "Pain relief, fever reducer",
        dosage: "500mg every 6 hours",
        sideEffects: "Nausea, rash, liver damage",
        ageGroup: "Adults & children above 6 years",
        warnings: "Avoid alcohol, liver patients caution",
        avoid: "Liver disease, alcohol consumption",
        brands: "Calpol, Crocin"
    },
    {
        name: "Ibuprofen",
        uses: "Pain relief, anti-inflammatory",
        dosage: "200-400mg every 6-8 hours",
        sideEffects: "Stomach pain, dizziness, ulcers",
        ageGroup: "Adults & children above 12 years",
        warnings: "Take with food, avoid in ulcers",
        avoid: "Ulcer patients, kidney disease",
        brands: "Brufen, Advil"
    },
    {
        name: "Aspirin",
        uses: "Pain relief, blood thinner",
        dosage: "75-325mg daily",
        sideEffects: "Bleeding, stomach upset",
        ageGroup: "Adults only",
        warnings: "Avoid in bleeding disorders",
        avoid: "Pregnancy, bleeding disorders",
        brands: "Ecosprin, Disprin"
    },
    {
        name: "Amoxicillin",
        uses: "Bacterial infections",
        dosage: "500mg every 8 hours",
        sideEffects: "Diarrhea, nausea, rash",
        ageGroup: "Adults & children",
        warnings: "Allergy warning, take full course",
        avoid: "Penicillin allergy",
        brands: "Mox, Amoxil"
    },
    {
        name: "Cetirizine",
        uses: "Allergy relief, hay fever",
        dosage: "10mg daily",
        sideEffects: "Drowsiness, dry mouth",
        ageGroup: "Adults & children above 6 years",
        warnings: "May cause drowsiness",
        avoid: "Alcohol, kidney disease",
        brands: "Zyrtec, Cetzine"
    },
    {
        name: "Ranitidine",
        uses: "Acid reflux, ulcers",
        dosage: "150mg twice daily",
        sideEffects: "Headache, constipation",
        ageGroup: "Adults & children above 12 years",
        warnings: "Discontinued in some countries",
        avoid: "Kidney disease",
        brands: "Zantac, Aciloc"
    },
    {
        name: "Metformin",
        uses: "Diabetes management",
        dosage: "500-1000mg twice daily",
        sideEffects: "Diarrhea, nausea, weight loss",
        ageGroup: "Adults",
        warnings: "Monitor blood sugar levels",
        avoid: "Severe kidney disease",
        brands: "Glycomet, Glucophage"
    },
    {
        name: "Atorvastatin",
        uses: "Cholesterol lowering",
        dosage: "10-80mg daily",
        sideEffects: "Muscle pain, liver issues",
        ageGroup: "Adults",
        warnings: "Liver function monitoring",
        avoid: "Pregnancy, liver disease",
        brands: "Lipitor, Atorva"
    },
    {
        name: "Azithromycin",
        uses: "Bacterial infections",
        dosage: "500mg daily for 3 days",
        sideEffects: "Nausea, diarrhea",
        ageGroup: "Adults & children",
        warnings: "Take on empty stomach",
        avoid: "Liver disease",
        brands: "Azithral, Zithromax"
    },
    {
        name: "Omeprazole",
        uses: "Acid reflux, ulcers",
        dosage: "20mg daily",
        sideEffects: "Headache, stomach pain",
        ageGroup: "Adults",
        warnings: "Do not use long term without doctor advice",
        avoid: "Liver disease",
        brands: "Omez, Prilosec"
    }
];
document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("search");
    searchBar.addEventListener("input", searchMedicine);
});

function searchMedicine() {
    let query = document.getElementById("search").value.toLowerCase();
    let suggestionsContainer = document.getElementById("suggestions");
    let resultContainer = document.getElementById("medicineInfo");

    suggestionsContainer.innerHTML = ""; // Clear previous suggestions
    resultContainer.innerHTML = ""; // Clear previous details

    if (query.length < 2) return; // Start searching after 2 letters

    medicines.forEach(medicine => {
        let name = medicine.name.toLowerCase();
        
        if (name.includes(query)) {
            let suggestion = document.createElement("div");
            suggestion.classList.add("suggestion-item");
            suggestion.innerText = medicine.name;
            suggestion.onclick = function () { displayMedicine(medicine); };
            suggestionsContainer.appendChild(suggestion);
        }
    });

    if (suggestionsContainer.innerHTML === "") {
        suggestionsContainer.innerHTML = "<p class='no-match'>No matches found.</p>";
    }
}

function displayMedicine(medicine) {
    let resultContainer = document.getElementById("medicineInfo");

    resultContainer.innerHTML = `
        <div class="medicine-card">
            <h2>${medicine.name}</h2>
            <p><strong>Uses:</strong> ${medicine.uses}</p>
            <p><strong>Dosage:</strong> ${medicine.dosage}</p>
            <p><strong>Side Effects:</strong> ${medicine.sideEffects}</p>
            <p><strong>Warnings:</strong> ${medicine.warnings}</p>
            <p><strong>Brands:</strong> ${medicine.brands}</p>
        </div>
    `;
}
