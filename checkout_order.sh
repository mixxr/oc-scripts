echo $'\n'"----> estimateshipping: https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/estimateshipping" ;
curl https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/estimateshipping -X POST -H "Authorization: Bearer "$1 -i -d {};
echo $'\n'"----> shipmethods: https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/shipmethods" ;
curl https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/shipmethods -X POST -H "Authorization: Bearer "$1 -i -H "Content-Type: application/json;" -d @checkout_shipmethods.json;

echo $'\n'"----> estimateshipping: https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/calculate" ;
curl https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/calculate -X POST -H "Content-Type: application/json;" -H  "Authorization: Bearer "$1 -i -d {};
echo $'\n'"----> submit:";
curl https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/submit -X POST -H "Content-Type: application/json;" -H  "Authorization: Bearer "$1 -i -d {};
