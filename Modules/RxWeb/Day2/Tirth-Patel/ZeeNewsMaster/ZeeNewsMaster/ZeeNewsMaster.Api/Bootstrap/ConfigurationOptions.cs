using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Data.Models;
using ZeeNewsMaster.Models;

namespace ZeeNewsMaster.Api.Bootstrap
{
    public static class ConfigurationOptions
    {
        public static void AddConfigurationOptions(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            #region ConfigurationOptions
            serviceCollection.Configure<DatabaseConfig>(configuration.GetSection("Database"));
            serviceCollection.Configure<SecurityConfig>(configuration.GetSection("Security"));
            #endregion ConfigurationOptions
        }
    }
}



