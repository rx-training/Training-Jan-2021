using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using NaukriProject.Authentication;

#nullable disable

namespace NaukriProject.Models
{
    public partial class NaukriDbContext : IdentityDbContext<ApplicationUser>
    {
        public NaukriDbContext(DbContextOptions<NaukriDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<AppliedForJob> AppliedForJobs { get; set; }
        //public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        //public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; }
        //public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        //public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        //public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        //public virtual DbSet<AspNetUserRole> AspNetUserRoles { get; set; }
        //public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; }
        public virtual DbSet<BestPlace> BestPlaces { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<CompanyBranch> CompanyBranches { get; set; }
        public virtual DbSet<ContactUsBranchAddress> ContactUsBranchAddresses { get; set; }
        public virtual DbSet<Faq> Faqs { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
        public virtual DbSet<JobSeeker> JobSeekers { get; set; }
        public virtual DbSet<JobSeekerEducation> JobSeekerEducations { get; set; }
        public virtual DbSet<JobSeekerJobHistory> JobSeekerJobHistories { get; set; }
        public virtual DbSet<JobsByCompany> JobsByCompanies { get; set; }
        public virtual DbSet<JobsByDesignation> JobsByDesignations { get; set; }
        public virtual DbSet<JobsByLocation> JobsByLocations { get; set; }
        public virtual DbSet<JobsBySkill> JobsBySkills { get; set; }
        public virtual DbSet<MainSector> MainSectors { get; set; }
        public virtual DbSet<SubSector> SubSectors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();

            //            if (!optionsBuilder.IsConfigured)
            //            {
            //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
            //                optionsBuilder.UseSqlServer("Server=DESKTOP-G7G6FSU\\SQLEXPRESS;Database=NaukriDb;Trusted_Connection=True;");
            //            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");


            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PK__Admins__719FE4E86886EFBD");

                //entity.HasIndex(e => e.UserId, "IX_Admins_applicationUserId");

                entity.Property(e => e.AdminId).HasColumnName("AdminID");

                entity.Property(e => e.AdminEmail)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.AdminFirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AdminLastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AdminPassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AppliedForJob>().HasKey(k => new { k.CompanyId, k.JobId, k.JobSeekerId });


            //modelBuilder.Entity<AspNetRole>(entity =>
            //{
            //    entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
            //        .IsUnique()
            //        .HasFilter("([NormalizedName] IS NOT NULL)");

            //    entity.Property(e => e.Name).HasMaxLength(256);

            //    entity.Property(e => e.NormalizedName).HasMaxLength(256);
            //});

            //modelBuilder.Entity<AspNetRoleClaim>(entity =>
            //{
            //    entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

            //    entity.Property(e => e.RoleId).IsRequired();

            //    entity.HasOne(d => d.Role)
            //        .WithMany(p => p.AspNetRoleClaims)
            //        .HasForeignKey(d => d.RoleId);
            //});

            //modelBuilder.Entity<AspNetUser>(entity =>
            //{
            //    entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

            //    entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
            //        .IsUnique()
            //        .HasFilter("([NormalizedUserName] IS NOT NULL)");

            //    entity.Property(e => e.Email).HasMaxLength(256);

            //    entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

            //    entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

            //    entity.Property(e => e.UserName).HasMaxLength(256);
            //});

            //modelBuilder.Entity<AspNetUserClaim>(entity =>
            //{
            //    entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

            //    entity.Property(e => e.UserId).IsRequired();

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserClaims)
            //        .HasForeignKey(d => d.UserId);
            //});

            //modelBuilder.Entity<AspNetUserLogin>(entity =>
            //{
            //    entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

            //    entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

            //    entity.Property(e => e.UserId).IsRequired();

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserLogins)
            //        .HasForeignKey(d => d.UserId);
            //});

            //modelBuilder.Entity<AspNetUserRole>(entity =>
            //{
            //    entity.HasKey(e => new { e.UserId, e.RoleId });

            //    entity.HasIndex(e => e.RoleId, "IX_AspNetUserRoles_RoleId");

            //    entity.HasOne(d => d.Role)
            //        .WithMany(p => p.AspNetUserRoles)
            //        .HasForeignKey(d => d.RoleId);

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserRoles)
            //        .HasForeignKey(d => d.UserId);
            //});

            //modelBuilder.Entity<AspNetUserToken>(entity =>
            //{
            //    entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

            //    entity.HasOne(d => d.User)
            //        .WithMany(p => p.AspNetUserTokens)
            //        .HasForeignKey(d => d.UserId);
            //});

            modelBuilder.Entity<BestPlace>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("BestPlaces");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MainSectorName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SubSectorName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasKey(e => e.CompanyId);

                //entity.HasIndex(e => e.UserId, "IX_Companies_applicationUserId");

                entity.Property(e => e.CompanyId).HasColumnName("CompanyID");

                //entity.Property(e => e.UserId).HasColumnName("applicationUserId");

                entity.Property(e => e.CompanyAbout).IsUnicode(false);

                entity.Property(e => e.CompanyImages).HasColumnType("image");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanySector)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanySize)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyWebsite)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyPassword)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.SubSectorId).HasColumnName("SubSectorID");

                //entity.HasOne(d => d.ApplicationUser)
                    //.WithMany(p => p.Companies)
                    //.HasForeignKey(d => d.UserId);

                entity.HasOne(d => d.SubSector)
                    .WithMany(p => p.Companies)
                    .HasForeignKey(d => d.SubSectorId)
                    .HasConstraintName("fkSubSectorIDCompanies");
            });

            modelBuilder.Entity<CompanyBranch>(entity =>
            {
                entity.Property(e => e.CompanyBranchId).HasColumnName("CompanyBranchID");

                entity.Property(e => e.CompanyAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyId).HasColumnName("CompanyID");

                entity.Property(e => e.CompanyLocation)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CompanyBranches)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("fkCompanyID");
            });

            modelBuilder.Entity<ContactUsBranchAddress>(entity =>
            {
                entity.HasKey(e => e.ContactUsBranchAddressId)
                    .HasName("PK__ContactU__D5A71D83F9641F46");

                entity.Property(e => e.ContactUsBranchAddressId).HasColumnName("CUBAID");

                entity.Property(e => e.CUBAAddress)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("CUBAAddress");

                entity.Property(e => e.CUBALocation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CUBALocation");

                entity.Property(e => e.CUBAPhoneNumber).HasColumnName("CUBAPhoneNumber");

                entity.Property(e => e.CUBAPinCode).HasColumnName("CUBAPinCode");

                entity.Property(e => e.CUBATollFreeNumber).HasColumnName("CUBATollFreeNumber");
            });

            modelBuilder.Entity<Faq>(entity =>
            {
                entity.ToTable("FAQs");

                entity.Property(e => e.FAQId).HasColumnName("FAQID");

                entity.Property(e => e.FAQAnswer)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("FAQAnswer");

                entity.Property(e => e.FAQQuestion)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("FAQQuestion");

                entity.Property(e => e.FAQTopic)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("FAQTopic");
            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.Property(e => e.JobId).HasColumnName("JobID");

                entity.Property(e => e.JobDescription)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.JobEmploymentType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobExperienceNeeded)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobKeySkills)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.JobLocation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobRole)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.JobSalary)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.Jobs)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("fkCompanyIdJobs");
            });

            modelBuilder.Entity<JobSeeker>(entity =>
            {
                entity.Property(e => e.JobSeekerId).HasColumnName("JobSeekerID");

                entity.Property(e => e.JobSeekerAddress)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerDob)
                    .HasColumnType("date")
                    .HasColumnName("JobSeekerDOB");

                entity.Property(e => e.JobSeekerEmail)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerFirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerGender)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.JobSeekerLastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerMiddleName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerPassword)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerProjects)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerResume)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerSkills)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerType)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
                


            });

            modelBuilder.Entity<JobSeekerEducation>(entity =>
            {
                entity.HasKey(e => e.JobSeekerEducationId);

                entity.Property(e => e.JobSeekerEducationId).HasColumnName("JSEID");

                entity.Property(e => e.JobSeekerCollege)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerField)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerId).HasColumnName("JobSeekerID");

                entity.HasOne(d => d.JobSeeker)
                    .WithMany(p => p.JobSeekerEducations)
                    .HasForeignKey(d => d.JobSeekerId)
                    .HasConstraintName("fkJobSeekerID");
            });

            modelBuilder.Entity<JobSeekerJobHistory>(entity =>
            {
                entity.HasKey(e => e.JobSeekerJobHistoryId);

                entity.Property(e => e.JobSeekerJobHistoryId).HasColumnName("JSJHID");

                entity.Property(e => e.JobSeekerCompany)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerCurrentCity)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerDesignation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.JobSeekerId).HasColumnName("JobSeekerID");

                entity.Property(e => e.JobSeekerWorkingFrom).HasColumnType("date");

                entity.Property(e => e.JobSeekerWorkingTo).HasColumnType("date");

                entity.HasOne(d => d.JobSeeker)
                    .WithMany(p => p.JobSeekerJobHistories)
                    .HasForeignKey(d => d.JobSeekerId)
                    .HasConstraintName("fkJobSeekerIDJobHistory");
            });

            modelBuilder.Entity<JobsByCompany>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("JobsByCompany");

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<JobsByDesignation>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("JobsByDesignation");

                entity.Property(e => e.JobName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<JobsByLocation>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("JobsByLocation");

                entity.Property(e => e.JobLocation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<JobsBySkill>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("JobsBySkill");

                entity.Property(e => e.Skills)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MainSector>(entity =>
            {
                entity.HasIndex(e => e.MainSectorName, "UQ__MainSect__9DCFF602B88432DF")
                    .IsUnique();

                entity.Property(e => e.MainSectorId).HasColumnName("MainSectorID");

                entity.Property(e => e.MainSectorName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubSector>(entity =>
            {
                entity.Property(e => e.SubSectorId).HasColumnName("SubSectorID");

                entity.Property(e => e.MainSectorId).HasColumnName("MainSectorID");

                entity.Property(e => e.SubSectorName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.MainSector)
                    .WithMany(p => p.SubSectors)
                    .HasForeignKey(d => d.MainSectorId)
                    .HasConstraintName("fkMainSectorID");
            });
        }
    }
}
