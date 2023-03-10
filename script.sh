echo '\n #### Inicio do test ####'
echo '\n requesting all heroes';
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

echo $CREATE

sleep 1s

ID=$(echo $CREATE | jq .id)

echo '\n\n requesting batman'
curl localhost:3000/heroes/$ID

echo '\n\n #### Final do test ####'
