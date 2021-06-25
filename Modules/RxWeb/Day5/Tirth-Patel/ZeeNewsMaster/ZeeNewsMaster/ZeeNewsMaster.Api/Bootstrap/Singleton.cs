using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Data;
using ZeeNewsMaster.BoundedContext.Singleton;
using ZeeNewsMaster.Infrastructure.Singleton;

namespace ZeeNewsMaster.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




