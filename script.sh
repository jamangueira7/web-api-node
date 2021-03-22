echo '\n\n requesting all heroes';
curl localhost:3000/heroes

echo '\n\n requesting flash';
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body';
curl --silent -X POST \
    --data-binary '{"invalid": "Batman"}' \
    localhost:3000/heroes

echo '\n\n creating batman'
CREATE=$(curl --silent -X POST \
    --data-binary '{"name": "Batman","age": 200,"power": "Rich"}' \
    localhost:3000/heroes)
