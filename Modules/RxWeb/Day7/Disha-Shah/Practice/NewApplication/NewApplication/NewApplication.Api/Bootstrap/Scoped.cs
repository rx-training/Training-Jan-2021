#region Namespace
using Microsoft.Extensions.DependencyInjection;
using NewApplication.BoundedContext.Main;
using NewApplication.Infrastructure.Security;
using NewApplication.UnitOfWork.DbEntityAudit;
using NewApplication.UnitOfWork.Main;
using RxWeb.Core;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data;
using RxWeb.Core.Security;

using NewApplication.Domain.UserModule;
            using NewApplication.Domain.MasterModule;
            #endregion Namespace





namespace NewApplication.Api.Bootstrap
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

            
            serviceCollection.AddScoped<IUserDomain, UserDomain>();
            
            serviceCollection.AddScoped<IStudentDomain, StudentDomain>();
            #endregion DomainService


        }
    }
}




