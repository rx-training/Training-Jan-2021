using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmazonDemo.Authenticate;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using AmazonDemo.Models.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace AmazonDemo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(
                option =>
                {
                    option.AddPolicy(name: "policy1",
                        builder =>
                        {
                            builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                        });
                });
            // For Entity Framework  
            services.AddDbContext<AmazonContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
           
            services.AddTransient<IAdmin, RepoAdmin>();
            services.AddTransient<IBrand,RepoBrand>();
            services.AddTransient<IProduct, RepoProduct>();
            services.AddTransient <ICart, RepoCart> ();
            services.AddTransient <ICategory,RepoCategory> ();
            services.AddScoped<ICity, RepoCity> ();
            services.AddTransient <ICountry, RepoCountry> ();
            services.AddTransient<IOrder, RepoOrder> ();
            services.AddTransient <IPlacedOrder, RepoPlacedOrder> ();
            services.AddTransient <IProductDescription, RepoProductDescription> ();
            services.AddTransient <ISeller, RepoSeller> ();
            services.AddTransient <ISellerAddress, RepoSellerAddress> ();
            services.AddTransient <ISellerDeliverable,RepoSellerDeliverable> ();
            services.AddTransient <ISellerProduct,RepoSellerProduct> ();
            services.AddTransient <IState,RepoState> ();
            services.AddScoped <IUser,RepoUser> ();
            services.AddTransient <IUserAddress,RepoUserAddress> ();
            services.AddTransient<IProductImage, RepoProductImage>();


            // For Identity  
            services.AddIdentity<ApplicationUserAmazon, IdentityRole>()
                .AddEntityFrameworkStores<AmazonContext>()
                .AddDefaultTokenProviders();

            // Adding Authentication  
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })

            // Adding Jwt Bearer  
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = Configuration["JWT:ValidAudience"],
                    ValidIssuer = Configuration["JWT:ValidIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("policy1");

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
