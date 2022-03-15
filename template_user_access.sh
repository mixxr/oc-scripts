curl --location -g --request POST https://westeurope-sandbox.ordercloud.io/oauth/token \
--data-urlencode 'client_id=<clientid>' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'username=<buyerid>' \
--data-urlencode 'password=<your-buyer-secret>' \
--data-urlencode 'scope=MeAdmin PasswordReset Shopper'
