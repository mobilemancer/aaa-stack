
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;

namespace DevSumNumbers
{
    public static class ConverCounter
    {
        [FunctionName("ConverCounter")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)]HttpRequest req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function processed a request.");

            string requestBody = new StreamReader(req.Body).ReadToEnd();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            int c = (data?.counter ?? 0);
            return new OkObjectResult(Feebas(c));
        }

        public static string Feebas(int n) => (n % 3 == 0 && n % 5 == 0 ? "Feebas" : n % 3 == 0 ? "Fee" : n % 5 == 0 ? "bas" : n.ToString());
    }
}
