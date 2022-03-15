# Simple bash scripts to work with OrderCloud

## Syntax

- token scripts
    - adjust the `template_anon*` and/or `template_user_access.sh` in accordance with your clientid, uiserid and password
    - example: `./anon_access.sh` returns a token for anonymous buyer. Use this token in the following commands
- order creation
    - if needed adjust the `create_order.json` based on your needs, otherwise it will create a default basic order.
    - `./create_order.sh`
- command scripts
    - `command.sh token orderid`
    - examples: `./checkout_order.sh kdjwe9032... ORDER123`
