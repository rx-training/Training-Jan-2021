using BATAWebAPI.Models.IRepository;
using BATAWebAPI.Models.Repository;
using BATAWebApiProject.Authentication;
using BATAWebApiProject.Models;
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
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BATAWebApiProject
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
            services.AddCors(options =>
            {
                options.AddPolicy(name: "policy1",
                builder =>
                {
                    builder.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
                });
            });
            services.AddEntityFrameworkSqlServer();
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
            services.AddDbContext<BATAContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
            services.AddTransient<IAdmin, AdminRepository>();
            services.AddTransient<IBrand, BrandRepository>();
            services.AddTransient<ICart, CartRepository>();
            services.AddTransient<ICountry, CountryRepository>();
            services.AddTransient<ICategory, CategoryRepository>();
            services.AddTransient<ICustomer, CustomerRepository>();
            services.AddTransient<IOffer, OfferRepository>();
            services.AddTransient<IOrder, OrderRepository>();
            services.AddTransient<IProduct, ProductRepository>();
            services.AddTransient<ISale, SaleRepository>();
            services.AddTransient<ISubCategory, SubCategoryRepository>();
            services.AddTransient<IViewKid, ViewKidRepository>();
            services.AddTransient<IViewKids999, ViewKidRepository999>();
            services.AddTransient<IViewMan, ViewManRepository>();
            services.AddTransient<IViewMen999, ViewMenRepository999>();
            services.AddTransient<IViewWoman, ViewWomanRepository>();
            services.AddTransient<IViewWomen999, ViewWomanRepository999>();
            services.AddControllers();
            // For Entity Framework  
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));

            // For Identity  
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
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
