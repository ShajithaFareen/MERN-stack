const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

let chennaiTouristPlaces = [
    {
    id: 1,
    name: "Marina Beach",
    location: "Chennai, Tamil Nadu, India",
    type: "Beach",
    established: "1880s",
    famousFor: ["Longest urban beach in India", "Sunrise view", "Street food"],
    entryFee: 0,
    timings: "Open 24 hours",
    rating: 4.6
    },
    {
    id: 2,
    name: "Kapaleeshwarar Temple",
    location: "Mylapore, Chennai, Tamil Nadu, India",
    type: "Temple",
    established: "7th Century (Rebuilt 16th Century)",
    famousFor: ["Dravidian architecture", "Religious significance"],
    entryFee: 0,
    timings: "5:00 AM - 12:00 PM, 4:00 PM - 9:30 PM",
    rating: 4.7
    },
    {
    id: 3,
    name: "Fort St. George",
    location: "Chennai, Tamil Nadu, India",
    type: "Historical Site",
    established: 1644,
    famousFor: ["British-era fort", "Museum"],
    entryFee: 15,
    timings: "9:00 AM - 5:00 PM (Closed on Fridays)",
    rating: 4.3
    },
    {
    id: 4,
    name: "Santhome Basilica",
    location: "Santhome, Chennai, Tamil Nadu, India",
    type: "Church",
    established: "16th Century",
    famousFor: ["Neo-Gothic architecture", "St. Thomas tomb"],
    entryFee: 0,
    timings: "6:00 AM - 8:00 PM",
    rating: 4.6
    },
    {
    id: 5,
    name: "Guindy National Park",
    location: "Guindy, Chennai, Tamil Nadu, India",
    type: "National Park",
    established: 1978,
    famousFor: ["Blackbucks", "Urban national park"],
    entryFee: 30,
    timings: "9:00 AM - 5:30 PM (Closed on Tuesdays)",
    rating: 4.2
    },
    {
    id: 6,
    name: "Valluvar Kottam",
    location: "Nungambakkam, Chennai, Tamil Nadu, India",
    type: "Monument",
    established: 1976,
    famousFor: ["Dedicated to Thiruvalluvar", "Large auditorium"],
    entryFee: 10,
    timings: "8:00 AM - 6:00 PM",
    rating: 4.1
    },
    {
    id: 7,
    name: "Elliot's Beach (Besant Nagar Beach)",
    location: "Besant Nagar, Chennai, Tamil Nadu, India",
    type: "Beach",
    established: "Colonial period",
    famousFor: ["Calm beach", "Karl Schmidt Memorial"],
    entryFee: 0,
    timings: "Open 24 hours",
    rating: 4.5
    }
];

// GET all places
app.get("/places", (req, res) => {
    res.json(chennaiTouristPlaces);
});

// GET a place by id
app.get("/places/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const place = chennaiTouristPlaces.find(p => p.id === id);
    if (!place) {
        return res.status(404).json({ message: "Place not found" });
    }
    res.json(place);
});

// POST a new place
app.post("/places", (req, res) => {
const newPlace = { id: Date.now(), ...req.body }; // unique id
    chennaiTouristPlaces.push(newPlace);
    res.status(201).json(newPlace);
});

// PUT to update a place by id
app.put("/places/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = chennaiTouristPlaces.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Place not found" });
    }
    chennaiTouristPlaces[index] = { ...chennaiTouristPlaces[index], ...req.body };
    res.json(chennaiTouristPlaces[index]);
});

// DELETE a place by id
app.delete("/places/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = chennaiTouristPlaces.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Place not found" });
    }
    const deletedPlace = chennaiTouristPlaces.splice(index, 1);
    res.json(deletedPlace[0]);
});

// Start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});