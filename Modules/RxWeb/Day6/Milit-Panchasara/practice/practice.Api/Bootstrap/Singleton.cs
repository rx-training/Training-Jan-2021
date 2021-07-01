using Microsoft.Extensions.DependencyInjection;
using practice.BoundedContext.Singleton;
using practice.Infrastructure.Singleton;
using RxWeb.Core.Data;

namespace practice.Api.Bootstrap
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




