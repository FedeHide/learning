
//* using enums to create a type

enum CarModelKeys {
    brand = "brand",
    model = "model",
    year = "year",
}

type CarModel = {
    [key in CarModelKeys]: string;
}


//* combine enums and mapped types

enum Numbers1 {
    one = 1,
    two = 2,
    three = 3,
}

enum Numbers2 {
    four = 4,
    five = 5,
    six = 6,
}

const myNumbers = {
    ...Numbers1,
    ...Numbers2,
} as const;

const mixedValues = Object.values(myNumbers);
type mixedNumbers = (typeof mixedValues)[number]

type Enums = {
    [key in mixedNumbers]: any
}
