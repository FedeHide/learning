//? readOnly type with as const

let readonlyColors = ["red", "green", "blue"] as const; // as const = readonly

// readonlyColors[0] = "yellow"; //! Error



//* we can use as const to make all properties of an object readonly
function obtainConfig() {
    return {
        mode: "development",
        version: "1.0.0",
        options: {
            debug: false,
        }
    } as const;
}

const config = obtainConfig();
// config.mode = "production"; //! Error
// config.options.debug = true; //! Error



//* we can use readonly to make a single property readonly too
function obtainConfig2() {
    return {
        mode: "development" as const,
        version: "1.0.0",
        options: {
            debug: false,
        }
    }
}

const config2 = obtainConfig2();
// config2.mode = "production"; //! Error


//* convert a data type to another
let isNumer: number = 10;
let isString = isNumer as unknown as string; // convert number to string (first to unknown then to string)