curl -X POST -H "Content-type: application/json" \
-d "{\"name\":\"chair\",
	\"sku\":\"029rjfwuf\",
	\"price\": 33.45 }" \
'http://localhost:3000/api/products'

curl -X POST -H "Content-type: application/json" \
-d "{\"restaurantName\":\"Moes\",
	\"city\":\"boston\",
	\"zip\": 02151 }" \
'http://localhost:3000/api/restaurants'
