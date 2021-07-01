using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class ZeeNewsContext : DbContext
    {
        public ZeeNewsContext()
        {
        }

        public ZeeNewsContext(DbContextOptions<ZeeNewsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Activity> Activities { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<NewsContent> NewsContents { get; set; }
        public virtual DbSet<NewsHeader> NewsHeaders { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UsersHistory> UsersHistories { get; set; }
        public virtual DbSet<VGetCateogryWisenews> VGetCateogryWisenews { get; set; }
        public virtual DbSet<VUserIsAdmin> VUserIsAdmins { get; set; }
        public virtual DbSet<VUserIsViewer> VUserIsViewers { get; set; }
        public virtual DbSet<ViewerComment> ViewerComments { get; set; }
        public virtual DbSet<Viewers1> Viewers1s { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Activity>(entity =>
            {
                entity.HasIndex(e => new { e.UserId, e.CommentedContentId }, "IX_Table_user_comment")
                    .IsUnique();

                entity.Property(e => e.ActivityId).ValueGeneratedNever();

                entity.Property(e => e.CommentedContentId).HasColumnName("Commented_content_Id");

                entity.Property(e => e.LikedContentId).HasColumnName("Liked_content_Id");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.CommentedContent)
                    .WithMany(p => p.ActivityCommentedContents)
                    .HasForeignKey(d => d.CommentedContentId)
                    .HasConstraintName("FK_Activities_News_Contents");

                entity.HasOne(d => d.LikedContent)
                    .WithMany(p => p.ActivityLikedContents)
                    .HasForeignKey(d => d.LikedContentId)
                    .HasConstraintName("FK_Activities_News_Contents1");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Activities)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Activities_Viewers1");
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Admin)
                    .HasForeignKey<Admin>(d => d.UserId)
                    .HasConstraintName("FK_Admins_Users");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Comment1)
                    .IsRequired()
                    .IsUnicode(false)
                    .HasColumnName("Comment");

                entity.Property(e => e.CommentedContetntId).HasColumnName("Commented_contetntId");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<NewsContent>(entity =>
            {
                entity.HasKey(e => e.ContentId);

                entity.ToTable("News_Contents");

                entity.HasIndex(e => e.ContentId, "IX_News-Contents")
                    .IsUnique();

                entity.Property(e => e.ContentId).ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ImagesLink)
                    .IsUnicode(false)
                    .HasColumnName("Images_link");

                entity.Property(e => e.VideosLink)
                    .IsUnicode(false)
                    .HasColumnName("Videos_link");

                entity.HasOne(d => d.News)
                    .WithMany(p => p.NewsContents)
                    .HasForeignKey(d => d.NewsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_News-Contents_News_headers");
            });

            modelBuilder.Entity<NewsHeader>(entity =>
            {
                entity.HasKey(e => e.NewsId);

                entity.ToTable("News_headers");

                entity.Property(e => e.NewsId).ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.NewsCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("News_category");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UsersHistory>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNo).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VGetCateogryWisenews>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vGetCateogryWisenews");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.NewsCategory)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("News_category");
            });

            modelBuilder.Entity<VUserIsAdmin>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vUserIsAdmin");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VUserIsViewer>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vUserIsViewer");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("userId");
            });

            modelBuilder.Entity<ViewerComment>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Comment)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CommentContetnId).HasColumnName("Comment_contetn_id");
            });

            modelBuilder.Entity<Viewers1>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("Viewers1");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNo).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Viewers1)
                    .HasForeignKey<Viewers1>(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Viewers1_Users");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
