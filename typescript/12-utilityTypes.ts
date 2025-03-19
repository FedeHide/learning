//? Utility types: are a set of generic types that can be used to manipulate the properties of other types


//* Awaited<T>: extracts the type that a promise resolves to
type AwaitedA = Awaited<Promise<string>>; // string

type AwaitedB = Awaited<Promise<Promise<number>>>; // number

type AwaitedC = Awaited<boolean | Promise<string>>; // boolean | string







//* Partial<T>: makes all properties of an object optional
interface PartialUser {
    name: string;
    age: number;
}

type PartialUserType = Partial<PartialUser>;

const partialUser: PartialUserType = {
    name: 'John',
    age: 30
};

const partialUser2: PartialUserType = {
    name: 'John'
};



//* Required<T>: makes all properties of an object required
interface RequiredUser {
    name?: string;
    age?: number;
}

type RequiredUserType = Required<RequiredUser>;

const requiredUser: RequiredUserType = {
    name: 'John',
    age: 30
};

// const requiredUser2: RequiredUserType = {
//     name: 'John'
// }; //! Error: Property 'age' is missing in type '{ name: string; }' but required in type 'RequiredUserType'



//* Readonly<T>: makes all properties of an object readonly
interface ReadonlyUser {
    name: string;
    age: number;
}

type ReadonlyUserType = Readonly<ReadonlyUser>;

const readonlyUser: ReadonlyUserType = {
    name: 'John',
    age: 30
};

// readonlyUser.name = 'Doe'; //! Error: Cannot assign to 'name' because it is a read-only property







//* Record<K, T>: creates an object type whose property keys are of type K and whose property values are of type T
type RecordType = Record<string, number>;

const record: RecordType = {
    a: 1,
    b: 2,
    c: 3
};







//* Pick<T, K>: creates a type by picking the set of properties K from T
interface PickUser {
    name: string;
    age: number;
    email: string;
}

type PickUserType = Pick<PickUser, 'name' | 'email'>; // you can pick one or more properties

const pickUser: PickUserType = {
    name: 'John',
    email: 'asd@asd.com'
};



//* Omit<T, K>: creates a type by omitting the set of properties K from T
interface OmitUser {
    name: string;
    age: number;
    email: string;
}

type OmitUserType = Omit<OmitUser, 'age' | 'email'>; // you can omit one or more properties

const omitUser: OmitUserType = {
    name: 'John',
};



//* Exclude<T, U>: excludes from T those types that are assignable to U
type ExcludeType = Exclude<string | number | boolean, boolean>; // you can exclude one or more types

const exclude: ExcludeType = 'string';
// const exclude2: ExcludeType = true; //! Error: Type 'true' is not assignable to type 'string'

//! difference between exclude and omit
// Exclude: exclude types from a union
// Omit: exclude properties from an object type



//* Extract<T, U>: extracts from T those types that are assignable to U
type ExtractType = Extract<string | number | boolean, boolean>; // you can extract one or more types

const extract: ExtractType = true;
// const extract2: ExtractType = 'string'; //! Error: Type 'string' is not assignable to type 'boolean'

//! difference between extract and pick
// Extract: extract types from a union
// Pick: pick properties from an object type



//* NonNullable<T>: excludes null and undefined from T
type NonNullableType = NonNullable<string | number | null | undefined>; // you can exclude one or more types but just null and undefined

const nonNullable: NonNullableType = 'string';
// const nonNullable2: NonNullableType = null; //! Error: Type 'null' is not assignable to type 'string'







//* Parameters<T>: extracts the parameters of a function type in a tuple
type ParametersType = Parameters<(name: string, age: number) => void>;

const parameters: ParametersType = ['John', 30];

// const parameters2: ParametersType = ['John']; //! Error: Expected 2 arguments, but got 1



//* ConstructorParameters<T>: extracts the parameters of a constructor function type in a tuple
type ConstructorParametersType = ConstructorParameters<ErrorConstructor>;

const constructorParameters: ConstructorParametersType = ['message'];

// const constructorParameters2: ConstructorParametersType = ['message', 404]; //! Error: Expected 1 arguments, but got 2



//* ReturnType<T>: extracts the return type of a function type
type ReturnTypeType = ReturnType<() => string>;

const returnType: ReturnTypeType = 'string';

// const returnType2: ReturnTypeType = 404; //! Error: Type 'number' is not assignable to type 'string'







//* InstanceType<T>: extracts the instance type of a constructor function type
class InstanceTypeUser {
    name: string;
    age: number;
}

type InstanceTypeType = InstanceType<typeof InstanceTypeUser>;

const instanceType: InstanceTypeType = {
    name: 'John',
    age: 30
};



//* IntrinsicString manipulation types
type LowercaseType = Lowercase<'hello'>; // 'hello'
const lowercase: LowercaseType = 'hello';
// const lowercase2: LowercaseType = 'HELLO'; //! Error: Type '"HELLO"' is not assignable to type '"hello"'

type UppercaseType = Uppercase<'hello'>; // 'HELLO'
const uppercase: UppercaseType = 'HELLO';
// const uppercase2: UppercaseType = 'hello'; //! Error: Type '"hello"' is not assignable to type '"HELLO"'

type CapitalizeType = Capitalize<'hello'>; // 'Hello'
const capitalize: CapitalizeType = 'Hello';
// const capitalize2: CapitalizeType = 'hello'; //! Error: Type '"hello"' is not assignable to type '"Hello"'

type UncapitalizeType = Uncapitalize<'hello'>; // 'hello'
const uncapitalize: UncapitalizeType = 'hello';
// const uncapitalize2: UncapitalizeType = 'Hello'; //! Error: Type '"Hello"' is not assignable to type '"hello"'
