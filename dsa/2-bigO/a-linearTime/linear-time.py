groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"]


def search_for_item(item):
    for i in groceries:
        if groceries[i] == item:
            print(f"Found {item}")


search_for_item("eggs")
# O(n)


def search_for_2_items(item):
    for i in groceries:
        if groceries[i] == item:
            print(f"Found {item}")

    for j in groceries:
        if groceries[j] == item:
            print(f"Found {item}")


search_for_2_items("eggs")
# O(n + n) = O(2n) = O(n)
# Drop the constant so it becomes O(n) significa ignorar constantes multiplicativas al analizar la eficiencia de un algoritmo, porque lo importante es cómo escala con el tamaño del input (n), no cuántas veces exactamente se ejecuta.
