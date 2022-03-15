export default defineComponent({
    async run({ steps, $ }) {
        // Reference previous step data using the steps object and return data to use it in future steps
        const headers = { "Content-Type": "application/json" }
        let body = {}

        switch (steps.trigger.event.path) {
            case '/ordersubmit':
                body = {
                    "HttpStatusCode": 200,
                    "UnhandledErrorBody": null,
                    "xp": {}
                    }
                break;
            case '/ordercalculate':
                body = {
                    "LineItemOverrides": [],
                    "ShippingTotal": null,
                    "TaxTotal": 4.15,
                    "HttpStatusCode": 200,
                    "UnhandledErrorBody": null,
                    "xp": {}
                }
                break;
            case '/shippingrates':
                body =
                {
                    "ShipEstimates": [
                        {
                            "ID": "shipmentestimate1",
                            "SelectedShipMethodID": null,
                            "ShipEstimateItems": [],
                            "ShipMethods": [
                                {
                                    "ID": "shipment1a",
                                    "Name": "shipment1a",
                                    "Cost": 5,
                                    "EstimatedTransitDays": 1
                                },
                                {
                                    "ID": "shipment1b",
                                    "Name": "shipment1b",
                                    "Cost": 7,
                                    "EstimatedTransitDays": 1
                                }
                            ]
                        }
                    ],
                    "HttpStatusCode": 200,
                    "UnhandledErrorBody": null,
                    "xp": {}
                }
                steps.trigger.event.body.OrderWorksheet.LineItems.forEach( lineItem =>
                    body.ShipEstimates[0].ShipEstimateItems.push({ "LineItemID": lineItem.ID, "Quantity": lineItem.Quantity }) )
                break;
        }



        await $.respond({
            status: 200,
            headers,
            body,
        })
    },
})