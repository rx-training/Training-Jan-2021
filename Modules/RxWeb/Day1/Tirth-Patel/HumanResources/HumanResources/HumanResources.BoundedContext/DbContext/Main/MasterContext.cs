using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using HumanResources.BoundedContext.SqlContext;
using HumanResources.Models.Main;
using HumanResources.Models;
using HumanResources.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace HumanResources.BoundedContext.Main
{
    public class MasterContext : BaseBoundedContext, IMasterContext
    {
        public MasterContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

        #region DbSets

        public DbSet<vStudent> vStudents { get; set; }
		public DbSet<Student> Students { get; set; }
		public DbSet<Cours> Courses { get; set; }
    
            #endregion DbSets





    }


    public interface IMasterContext : IDbContext
    {
    }
}

