curl https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/lineitems -X POST -H "Content-Type: application/json;" -H  "Authorization: Bearer "$1 -i -d @addline_order.json;
echo "----";
curl https://westeurope-sandbox.ordercloud.io/v1/orders/Outgoing/$2/lineitems -X GET -H "Authorization: Bearer "$1 -i;