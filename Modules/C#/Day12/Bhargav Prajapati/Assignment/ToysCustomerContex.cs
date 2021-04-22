using Assignment.Modals;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class ToysCustomerContex :DbContext
    {
        public DbSet<Address> Addresses{ get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Plants> Plants { get; set; }
        public DbSet<Toys> Toys { get; set; }
        public DbSet<ToysPerson> ToysPeople { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-P3KPE28\MSSQLSERVER02;Database=ToysComponyDB;Trusted_Connection=True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToysPerson>().HasKey(sc => new { sc.CustomerId, sc.ToyId });

            modelBuilder.Entity<ToysPerson>().HasOne<Toys>(sc => sc.Toys)
                .WithMany(sc => sc.ToysPeople).HasForeignKey(sc=>sc.ToyId);


            modelBuilder.Entity<ToysPerson>().HasOne<Customer>(sc => sc.Customer)
      .WithMany(sc => sc.ToysPeople).HasForeignKey(sc => sc.CustomerId);

            //modelBuilder.Entity<Toys>().HasOne<Plants>(s => s.Plants)
            //    .WithOne(s => s.Toys).HasForeignKey<Plants>(s => s.ToyId);
        }
    }
}
