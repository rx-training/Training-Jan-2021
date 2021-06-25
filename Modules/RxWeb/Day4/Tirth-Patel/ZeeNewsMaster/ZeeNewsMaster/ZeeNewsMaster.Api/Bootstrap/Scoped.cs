#region Namespace
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data;
using RxWeb.Core.Security;
using ZeeNewsMaster.BoundedContext.Main;
using ZeeNewsMaster.Infrastructure.Security;
using ZeeNewsMaster.UnitOfWork.DbEntityAudit;
using ZeeNewsMaster.UnitOfWork.Main;
using ZeeNewsMaster.Domain.NewContentModule;
#endregion Namespace






namespace ZeeNewsMaster.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                        serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasterUow, MasterUow>();
            #endregion ContextService




            #region DomainService

            
            
            
            serviceCollection.AddScoped<INewsContentDomain, NewsContentDomain>();
            #endregion DomainService



        }
    }
}




