using Microsoft.Extensions.DependencyInjection;
using NewApplication.BoundedContext.Singleton;
using NewApplication.Infrastructure.Singleton;
using RxWeb.Core.Data;

namespace NewApplication.Api.Bootstrap
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




