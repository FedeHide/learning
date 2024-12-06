#!./venv/bin/python
from fastapi import APIRouter, HTTPException

router = APIRouter(
    prefix="/products", tags=["products"], responses={404: {"description": "Not found"}}
)
# prefix="/products" is used to add a prefix to the path of all the endpoints in the router.
# tags=["products"] is used to categorize the endpoints under the "products" tag.
# responses={404: {"description": "Not found"}} is used to define the default response for a 404 error.

products_list = [
    {"id": 1, "name": "product1", "price": 100},
    {"id": 2, "name": "product2", "price": 200},
    {"id": 3, "name": "product3", "price": 300},
]


@router.get("/")
async def get_products():
    return products_list


@router.get("/{product_id}")
async def get_product_by_id(product_id: int):
    product = next(
        (product for product in products_list if product["id"] == product_id), None
    )
    if product:
        return product
    raise HTTPException(status_code=404, detail="Product not found")
