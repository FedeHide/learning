nombre_1 = input(
    "Comparemos las edades de 2 personas... Dime el nombre de la primera persona: "
)
edad_nombre_1 = int(input("Dime su edad: "))

while edad_nombre_1 > 256:
    print("Dudo que sea mas viejo que el humano con mas edad de nuestra historia...")
    edad_nombre_1 = int(input(f"Dime la verdadera edad de {nombre_1} : "))

nombre_2 = input("Dime el nombre de la otra persona: ")
edad_nombre_2 = int(input("Ahora dime su edad: "))

while edad_nombre_2 > 256:
    print("Dudo que sea mas viejo que el humano con mas edad de nuestra historia...")
    edad_nombre_2 = int(input(f"Dime la verdadera edad de {nombre_2} : "))


if edad_nombre_1 > edad_nombre_2:
    print(
        f"{nombre_1} es mayor a {nombre_2}, tiene {edad_nombre_1 - edad_nombre_2} años más."
    )
elif edad_nombre_1 < edad_nombre_2:
    print(
        f"{nombre_2} es mayor a {nombre_1}, tiene {edad_nombre_2 - edad_nombre_1} años más."
    )
else:
    print(f"{nombre_1} y {nombre_2} tienen la misma edad")
