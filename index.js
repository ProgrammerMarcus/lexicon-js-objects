// 1
const person = {
    name: "John Smith",
    age: 34,
    city: "New York"
}

// 2
console.log(`Name: ${person.name} Age: ${person.age} City: ${person.city}`)

// 3
person.age = 35
person.email = "real@email.mail"
console.log(person)

// 4
const car = {
    make: "Car Maker",
    model: "Drivable Car",
    display: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}`)
    }
}

car.display()

// 5
for (key in person) {
    console.log(person[key])
}

// 6
const student = {
    name: "Studious Student",
    age: 18,
    subjects: {
        math: {
            Trigonometry: "A",
            Algebra: "D",
            Functions: "C",
        },
        english: {
            writing: "B",
            speaking: "F",
            listening: "A",
        },
        gymnastics: {
            running: "D",
            sprinting: "B",
            dodging: "A",
            football: "F",
        },
        science: {
            writing: "B",
            experimenting: "D",
            research: "C",
        }
    }
}

console.log(student)

// 7
student.subjects.science.experimenting = "A"
student.subjects.science.writing = "A"
student.subjects.science.research = "A"

console.log(student)

const books = [
    {
        title: "The life of Hubert Holmes",
        releaseDate: "1977-05-27",
        author: "Hubert Holmes"
    },
    {
        title: "Adventures in Undertown",
        releaseDate: "1953-01-22",
        author: "J.S. Lewis"
    },
    {
        title: "1655",
        releaseDate: "2011-01-11",
        author: "Bob Stewens"
    }
]

// 8

books.forEach((book) => {
    console.log(`${book.author} - ${book.title}`)
})