// To use any npm package, just import it
// import axios from "axios"

import crypto from "crypto";

export default defineComponent({
  async run({ event, steps, $ }) {
    const headers = {"Content-Type": "application/json"}

    const path = steps.trigger.event.path;
    const maxQty = 5;
    let proceedValue = false;
    let message = "Quantity is not correct value";
    let suggestion = "Max allowed quantity is " + maxQty;
    let qty = 0;

    // x-oc-hash check
    let hmac = steps.trigger.event.headers["x-oc-hash"];

    var msg = JSON.stringify(steps.trigger.event.body)
    var sharedSecret = 'my-true-secret'
    //generate hmac sha256 hash
    let hmacSignature = crypto.createHmac('sha256', sharedSecret).update(msg).digest("base64");
    
    if (hmac != hmacSignature) {
            proceedValue = false
            message = "hash check failed."
            suggestion = "check your Secret."
    }else{
      try{
        qty = steps.trigger.event.body.Request.Body.Quantity;
      }catch(e){}

      switch(path) {
        case '/lineqtycheck':{
          if (qty >= 1 && qty < maxQty) {
            proceedValue = true
            message = "Quantity is fine, you can proceed"
            suggestion = ""
          }
        }

      }
    }
    

    const xp = {
      path: path,
      timestamp: steps.trigger.context.ts,
      maxQty: maxQty,
      qty: qty,
      hmacSignature: hmacSignature,
      customMessage: message,
      suggestions: [
        suggestion
      ]
    }

    const body = {
      proceed: proceedValue,
      xp
    }

    await $.respond({
      status: 200,
      headers,
      body,
    })
  },
})
