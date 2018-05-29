using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;

namespace DevSumNumbers
{
    public static class GetCounter
    {
        public static int Counter = 0;


        [FunctionName("GetCounter")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequest req, TraceWriter log)
        {
            Counter++;
            return new OkObjectResult(Counter);
        }
    }
}
