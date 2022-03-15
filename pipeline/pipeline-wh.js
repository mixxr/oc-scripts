export default defineComponent({
    async run({ steps, $ }) {
      const headers = {"Content-Type": "application/json"}
  
      const xp = {
        query: steps.trigger.event.query,
        path: steps.trigger.event.path,
        event_id: steps.trigger.context.id,
        workflow_id: steps.trigger.context.workflow_id,
        owner_id: steps.trigger.context.owner_id,
        deployment_id: steps.trigger.context.deployment_id,
        timestamp: steps.trigger.context.ts,
        inspect: `https://pipedream.com/@/${steps.trigger.context.workflow_id}`, 
        quickstart: `https://pipedream.com/quickstart/`,
      }
  
      const body = {
        proceed: true,
        xp
      }
  
      await $.respond({
        status: 200,
        headers,
        body,
      })
    },
  })