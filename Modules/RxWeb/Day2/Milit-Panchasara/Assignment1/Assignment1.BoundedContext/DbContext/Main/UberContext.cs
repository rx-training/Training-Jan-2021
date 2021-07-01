using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Assignment1.BoundedContext.SqlContext;
using Assignment1.Models.Main;
using Assignment1.Models;
using Assignment1.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace Assignment1.BoundedContext.Main
{
    public class UberContext : BaseBoundedContext, IUberContext
    {
        public UberContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<RideType> RideType { get; set; }
            #endregion DbSets


    }


    public interface IUberContext : IDbContext
    {
    }
}

