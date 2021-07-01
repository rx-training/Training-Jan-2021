using Assignment1.BoundedContext.Singleton;
using Assignment1.Infrastructure.Singleton;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Data;

namespace Assignment1.Api.Bootstrap
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




