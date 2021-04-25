using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace person.Models
{
    public partial class day5Context : DbContext
    {
        public day5Context()
        {
        }

        public day5Context(DbContextOptions<day5Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Assign05> Assign05s { get; set; }
        public virtual DbSet<Assign2> Assign2s { get; set; }
        public virtual DbSet<Assign4> Assign4s { get; set; }
        public virtual DbSet<Assign5> Assign5s { get; set; }
        public virtual DbSet<Banking> Bankings { get; set; }
        public virtual DbSet<Banking1> Banking1s { get; set; }
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<Countries1> Countries1s { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Customer10> Customer10s { get; set; }
        public virtual DbSet<D6assign3> D6assign3s { get; set; }
        public virtual DbSet<Dealership> Dealerships { get; set; }
        public virtual DbSet<Departments1> Departments1s { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Employee2> Employee2s { get; set; }
        public virtual DbSet<Employees1> Employees1s { get; set; }
        public virtual DbSet<Incentive> Incentives { get; set; }
        public virtual DbSet<Inventory> Inventories { get; set; }
        public virtual DbSet<JobHistory1> JobHistory1s { get; set; }
        public virtual DbSet<Locations1> Locations1s { get; set; }
        public virtual DbSet<MyTable> MyTables { get; set; }
        public virtual DbSet<Newwww> Newwwws { get; set; }
        public virtual DbSet<Orders10> Orders10s { get; set; }
        public virtual DbSet<PlanetsId> PlanetsIds { get; set; }
        public virtual DbSet<Reportsto> Reportstos { get; set; }
        public virtual DbSet<Sale> Sales { get; set; }
        public virtual DbSet<Salesperson> Salespeople { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Student1> Student1s { get; set; }
        public virtual DbSet<Student2> Student2s { get; set; }
        public virtual DbSet<TestTran> TestTrans { get; set; }
        public virtual DbSet<V4> V4s { get; set; }
        public virtual DbSet<ValueTable> ValueTables { get; set; }
        public virtual DbSet<Worksat> Worksats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=JEVIK\\SQLEXPRESS;Initial Catalog=day5;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Assign05>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("assign05");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .HasMaxLength(46)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");
            });

            modelBuilder.Entity<Assign2>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Assign2");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(46)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Assign4>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("assign4");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.NoOfEmployee).HasColumnName("No_Of_Employee");
            });

            modelBuilder.Entity<Assign5>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("assign5");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Banking>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("BANKING");

                entity.Property(e => e.Account).HasColumnName("ACCOUNT");

                entity.Property(e => e.Balance)
                    .HasColumnType("money")
                    .HasColumnName("BALANCE");

                entity.Property(e => e.Name)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Banking1>(entity =>
            {
                entity.HasKey(e => e.Account)
                    .HasName("pk");

                entity.ToTable("BANKING1");

                entity.Property(e => e.Account)
                    .ValueGeneratedNever()
                    .HasColumnName("ACCOUNT");

                entity.Property(e => e.Balance)
                    .HasColumnType("money")
                    .HasColumnName("BALANCE");

                entity.Property(e => e.Name)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Car>(entity =>
            {
                entity.HasKey(e => e.Vin)
                    .HasName("pkVin");

                entity.Property(e => e.Vin)
                    .ValueGeneratedNever()
                    .HasColumnName("vin");

                entity.Property(e => e.Askprice).HasColumnName("askprice");

                entity.Property(e => e.Carid).HasColumnName("carid");

                entity.Property(e => e.Invoiceprice).HasColumnName("invoiceprice");

                entity.Property(e => e.Make)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("make");

                entity.Property(e => e.Mileage).HasColumnName("mileage");

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("model");

                entity.Property(e => e.Year)
                    .IsRequired()
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("year")
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Countries1>(entity =>
            {
                entity.HasKey(e => e.CountryId)
                    .HasName("PK__Countrie__10D160BF36E91B95");

                entity.ToTable("Countries1");

                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("CountryID");

                entity.Property(e => e.CountryName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.RegionId)
                    .HasColumnType("decimal(10, 0)")
                    .HasColumnName("RegionID");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customer");

                entity.Property(e => e.Customerid)
                    .ValueGeneratedNever()
                    .HasColumnName("customerid");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("state");
            });

            modelBuilder.Entity<Customer10>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Customer10");

                entity.Property(e => e.CustomerName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ID");
            });

            modelBuilder.Entity<D6assign3>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("D6Assign3");

                entity.Property(e => e.Department)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.EmpId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .HasColumnName("Emp_ID")
                    .IsFixedLength(true);

                entity.Property(e => e.EmpRefId)
                    .HasMaxLength(10)
                    .HasColumnName("Emp_Ref_ID")
                    .IsFixedLength(true);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(10)
                    .HasColumnName("First_Name")
                    .IsFixedLength(true);

                entity.Property(e => e.IncentiveAmount).HasColumnName("Incentive_Amount");

                entity.Property(e => e.IncentiveDate)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Incentive_Date");

                entity.Property(e => e.JoiningDate)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Joining_Date");

                entity.Property(e => e.LastName)
                    .HasMaxLength(10)
                    .HasColumnName("Last_Name")
                    .IsFixedLength(true);

                entity.Property(e => e.ManagerId)
                    .HasMaxLength(10)
                    .HasColumnName("Manager_ID")
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Dealership>(entity =>
            {
                entity.ToTable("dealership");

                entity.Property(e => e.Dealershipid)
                    .ValueGeneratedNever()
                    .HasColumnName("dealershipid");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.DealerName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("dealerName");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("state");
            });

            modelBuilder.Entity<Departments1>(entity =>
            {
                entity.HasKey(e => e.DepartmentId)
                    .HasName("PK__Departme__B2079BCD8160D3D7");

                entity.ToTable("Departments1");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LocationID");

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("ManagerID");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.EmpId);

                entity.Property(e => e.EmpId)
                    .HasMaxLength(10)
                    .HasColumnName("Emp_ID")
                    .IsFixedLength(true);

                entity.Property(e => e.Department)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(10)
                    .HasColumnName("First_Name")
                    .IsFixedLength(true);

                entity.Property(e => e.JoiningDate)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Joining_Date");

                entity.Property(e => e.LastName)
                    .HasMaxLength(10)
                    .HasColumnName("Last_Name")
                    .IsFixedLength(true);

                entity.Property(e => e.ManagerId)
                    .HasMaxLength(10)
                    .HasColumnName("Manager_ID")
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Employee2>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                    .HasName("PK__Employee__AF2DBA796A99F63D");

                entity.ToTable("Employee2");

                entity.Property(e => e.EmpId)
                    .ValueGeneratedNever()
                    .HasColumnName("EmpID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.EmpName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Employees1>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("pkEmployeeID");

                entity.ToTable("Employees1");

            //    entity.HasIndex(e => e.Email, "ukEmail")
              //      .IsUnique();

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EmployeeID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.CommissionPct).HasColumnType("decimal(2, 2)");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("ManagerID");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");
            });

            modelBuilder.Entity<Incentive>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.EmpRefId)
                    .HasMaxLength(10)
                    .HasColumnName("Emp_Ref_ID")
                    .IsFixedLength(true);

                entity.Property(e => e.IncentiveAmount).HasColumnName("Incentive_Amount");

                entity.Property(e => e.IncentiveDate)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Incentive_Date");

                entity.HasOne(d => d.EmpRef)
                    .WithMany()
                    .HasForeignKey(d => d.EmpRefId)
                    .HasConstraintName("fkEMp_Ref_ID");
            });

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.ToTable("inventory");

                entity.Property(e => e.Inventoryid)
                    .ValueGeneratedNever()
                    .HasColumnName("inventoryid");

                entity.Property(e => e.Dealershipid).HasColumnName("dealershipid");

                entity.Property(e => e.Vin).HasColumnName("vin");

                entity.HasOne(d => d.Dealership)
                    .WithMany(p => p.Inventories)
                    .HasForeignKey(d => d.Dealershipid)
                    .HasConstraintName("fdeaid");

                entity.HasOne(d => d.VinNavigation)
                    .WithMany(p => p.Inventories)
                    .HasForeignKey(d => d.Vin)
                    .HasConstraintName("fkserid");
            });

            modelBuilder.Entity<JobHistory1>(entity =>
            {
                entity.HasKey(e => new { e.EmployeeId, e.StartDate })
                    .HasName("PK__JobHisto__1E31D03EDE5B4D40");

                entity.ToTable("JobHistory1");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JobID");
            });

            modelBuilder.Entity<Locations1>(entity =>
            {
                entity.HasKey(e => e.LocationId)
                    .HasName("PK__Location__E7FEA477C9B57225");

                entity.ToTable("Locations1");

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LocationID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("CountryID");

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.StateProvince)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MyTable>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("myTable");

                entity.Property(e => e.ColumnA).HasDefaultValueSql("(newsequentialid())");
            });

            modelBuilder.Entity<Newwww>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Newwww");

                entity.Property(e => e.Id).HasColumnName("id");
            });

            modelBuilder.Entity<Orders10>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Orders10");

                entity.Property(e => e.OrderId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("OrderID");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PlanetsId>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("PlanetsID");

                entity.Property(e => e.Id).HasColumnName("ID");
            });

            modelBuilder.Entity<Reportsto>(entity =>
            {
                entity.ToTable("reportsto");

                entity.Property(e => e.Reportstoid)
                    .ValueGeneratedNever()
                    .HasColumnName("reportstoid");

                entity.Property(e => e.Managingsalespersonid).HasColumnName("managingsalespersonid");

                entity.Property(e => e.Salespersonid).HasColumnName("salespersonid");

                entity.HasOne(d => d.Managingsalesperson)
                    .WithMany(p => p.ReportstoManagingsalespeople)
                    .HasForeignKey(d => d.Managingsalespersonid)
                    .HasConstraintName("fkmansalperid");

                entity.HasOne(d => d.Salesperson)
                    .WithMany(p => p.ReportstoSalespeople)
                    .HasForeignKey(d => d.Salespersonid)
                    .HasConstraintName("fksalperid");
            });

            modelBuilder.Entity<Sale>(entity =>
            {
                entity.ToTable("sale");

                entity.Property(e => e.Saleid)
                    .ValueGeneratedNever()
                    .HasColumnName("saleid");

                entity.Property(e => e.Customerid).HasColumnName("customerid");

                entity.Property(e => e.Dealershipid).HasColumnName("dealershipid");

                entity.Property(e => e.Saledate)
                    .HasColumnType("date")
                    .HasColumnName("saledate");

                entity.Property(e => e.Saleprice).HasColumnName("saleprice");

                entity.Property(e => e.Salespersonid).HasColumnName("salespersonid");

                entity.Property(e => e.Vin).HasColumnName("vin");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Customerid)
                    .HasConstraintName("fsrid");

                entity.HasOne(d => d.Dealership)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Dealershipid)
                    .HasConstraintName("faid");

                entity.HasOne(d => d.Salesperson)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Salespersonid)
                    .HasConstraintName("fsaerid");

                entity.HasOne(d => d.VinNavigation)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.Vin)
                    .HasConstraintName("fserid");
            });

            modelBuilder.Entity<Salesperson>(entity =>
            {
                entity.ToTable("salesperson");

                entity.Property(e => e.Salespersonid)
                    .ValueGeneratedNever()
                    .HasColumnName("salespersonid");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("student");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.Dob)
                    .HasColumnType("datetime")
                    .HasColumnName("DOB");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("gender");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.TotalScore).HasColumnName("total_score");
            });

            modelBuilder.Entity<Student1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("student1");

              //  entity.HasIndex(e => e.Name, "IX_tblStudent_Name");

                //entity.HasIndex(e => new { e.Name, e.Gender }, "THIRD_key");

                //entity.HasIndex(e => e.Name, "UK_INDEX")
                //    .IsUnique();

                //entity.HasIndex(e => e.Name, "UK_INDEX2")
  //                  .IsUnique();

//                entity.HasIndex(e => e.Name, "secondNON__KEY");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.Dob)
                    .HasColumnType("datetime")
                    .HasColumnName("DOB");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("gender");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.TotalScore).HasColumnName("total_score");
            });

            modelBuilder.Entity<Student2>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("STUDENT2");

                entity.Property(e => e.Address)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TestTran>(entity =>
            {
                entity.HasKey(e => e.Cola)
                    .HasName("PK__TestTran__A259EE64C7BE4806");

                entity.ToTable("TestTran");

                entity.Property(e => e.Cola).ValueGeneratedNever();

                entity.Property(e => e.Colb)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<V4>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("V4");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.ManagerId).HasColumnType("decimal(6, 0)");

                entity.Property(e => e.ManagerName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<ValueTable>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ValueTable");

                entity.Property(e => e.Value).HasColumnName("value");
            });

            modelBuilder.Entity<Worksat>(entity =>
            {
                entity.ToTable("worksat");

                entity.Property(e => e.Worksatid)
                    .ValueGeneratedNever()
                    .HasColumnName("worksatid");

                entity.Property(e => e.Basesalaryformonth).HasColumnName("basesalaryformonth");

                entity.Property(e => e.Dealershipid).HasColumnName("dealershipid");

                entity.Property(e => e.Monthworked).HasColumnName("monthworked");

                entity.Property(e => e.Salespersonid).HasColumnName("salespersonid");

                entity.HasOne(d => d.Dealership)
                    .WithMany(p => p.Worksats)
                    .HasForeignKey(d => d.Dealershipid)
                    .HasConstraintName("fkdeaid");

                entity.HasOne(d => d.Salesperson)
                    .WithMany(p => p.Worksats)
                    .HasForeignKey(d => d.Salespersonid)
                    .HasConstraintName("fksaerid");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
