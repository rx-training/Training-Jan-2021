using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Microsoft.EntityFrameworkCore;


namespace Assignement_2_.Models
{
    public class BrainsmithContext : DbContext
    {
        public DbSet<Customers> Customers { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<OrderedItems> OrderedItems { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<Plants> Plants { get; set; }
        public DbSet<ShipAddresses> ShipAddresses { get; set; }
       
        public DbSet<Toys> Toys { get; set; }
      
        public DbSet<categoriswithToys> CategoriswithToys { get; set; }
      
         public DbSet<vToysCategory> toysCategories { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server =.\SQLEXPRESS; Database = Brain_Smith; Trusted_Connection = True; ");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<vToysCategory>().HasNoKey();

        }
    }

}
