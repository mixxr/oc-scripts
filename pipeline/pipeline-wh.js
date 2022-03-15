export default defineComponent({
  async run({ event, steps, $ }) {
    const headers = { "Content-Type": "application/json" }

    const path = steps.trigger.event.path;
    const maxQty = 5;
    let proceedValue = false;
    let message = "Quantity is not correct value";
    let suggestion = "Max allowed quantity is " + maxQty;
    let qty = 0

    try {
      qty = steps.trigger.event.body.Request.Body.Quantity;
    } catch (e) { }

    switch (path) {
      case '/lineqtycheck': {
        if (qty >= 1 && qty < maxQty) {
          proceedValue = true
          message = "Quantity is fine, you can proceed"
          suggestion = ""
        }
      }

    }

    const xp = {
      path: path,
      timestamp: steps.trigger.context.ts,
      maxQty: maxQty,
      qty: qty,
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