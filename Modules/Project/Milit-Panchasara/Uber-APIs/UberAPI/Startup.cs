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
using UberAPI.Code.Interfaces;
using UberAPI.Code.RepositoryDB;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI
{
    public class Startup
    {
        public static Dictionary<Tuple<long,long>, TempTrip?> tempTripCache = new Dictionary<Tuple<long, long>, TempTrip?>();
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

            services.AddControllers();

            services.AddControllers();

            // for dbContext
            services.AddDbContext<UberContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("UberDB")));

            // For identity
            services.AddIdentity<AppUser, IdentityRole>().AddEntityFrameworkStores<UberContext>().AddDefaultTokenProviders();

            // Adding Authentication and Adding Jwt Bearer
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateAudience = true,
                    ValidateIssuer = true,
                    ValidAudience = Configuration["JWT:Audience"],
                    ValidIssuer = Configuration["JWT:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };

            });

            services.AddTransient<IDriverRepo, DriverRepo>();
            services.AddTransient<IRiderRepo, RiderRepo>();
            services.AddTransient<IUserRepo, UserRepo>();
            services.AddTransient<IAdminRepo, AdminRepo>();
            services.AddTransient<ILocationRepo, LocationRepo>();
            services.AddTransient<IRideTypeRepo, RideTypeRepo>();
            services.AddTransient<ITripRepo, TripRepo>();
            services.AddTransient<IRatingByRiderRepo, RatingByRiderRepo>();
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
