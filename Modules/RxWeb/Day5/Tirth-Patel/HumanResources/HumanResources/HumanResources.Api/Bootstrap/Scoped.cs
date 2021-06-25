#region Namespace
using HumanResources.BoundedContext.Main;
using HumanResources.Infrastructure.Security;
using HumanResources.UnitOfWork.DbEntityAudit;
using HumanResources.UnitOfWork.Main;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data;
using RxWeb.Core.Security;

using HumanResources.Domain.UserModule;
            #endregion Namespace




namespace HumanResources.Api.Bootstrap
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
                        serviceCollection.AddScoped<IMasterContext, MasterContext>();
            serviceCollection.AddScoped<IMasteUow, MasteUow>();
            #endregion ContextService





            #region DomainService

            
            serviceCollection.AddScoped<IUserDomain, UserDomain>();
            
            serviceCollection.AddScoped<IUserDomain, UserDomain>();
            #endregion DomainService


        }
    }
}




