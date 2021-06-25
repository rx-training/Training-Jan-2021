using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ZeeNewsMaster.BoundedContext.SqlContext;
using ZeeNewsMaster.Models.Main;
using ZeeNewsMaster.Models;
using ZeeNewsMaster.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace ZeeNewsMaster.BoundedContext.Main
{
    public class MasterContext : BaseBoundedContext, IMasterContext
    {
        public MasterContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
        public DbSet<vNewsContent> vNewsContents { get; set; }
        public DbSet<NewsContent> NewsContents { get; set; }
        public DbSet<NewsHeader> NewsHeaders { get; set; }
        

            #endregion DbSets

    }


    public interface IMasterContext : IDbContext
    {
    }
}

