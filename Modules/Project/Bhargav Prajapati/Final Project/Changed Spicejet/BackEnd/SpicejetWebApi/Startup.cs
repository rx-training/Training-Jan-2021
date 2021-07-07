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
using Microsoft.OpenApi.Models;
using SpicejetWebApi.Authentication;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using SpicejetWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpicejetWebApi
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

            //database connection
            services.AddDbContext<ANGULARSPICEJETDbContext>
                (option => option.UseSqlServer(Configuration.GetConnectionString("ConnStr")));

            services.AddTransient<IAirplaneRepository, AirplaneRepository>();
            services.AddTransient<IAirplaneCostDetailsRepository, AirplaneCostDetailsRepository>();
            services.AddTransient<ITripDetailsRepository, TripDetailsRepository>();
            services.AddTransient<IRouteDetailsRepository, RouteDetailsRepository>();
            services.AddTransient<IUserFlightBookingRepository, UserFlightBookingRepository>();
            services.AddTransient<IViewSearchedFlightRepository, ViewSearchedFlightRepository>();
            services.AddTransient<IViewFlightBookingRepository, ViewFlightBookingRepository>();
            services.AddTransient<IViewHotelBookingRepository, ViewHotelBookingRepository>();
            services.AddTransient<IViewSearchHotelRepository, ViewSearchHotelRepository>();
            services.AddTransient<IHotelDetailsRepository, HotelDetailsRepository>();
            services.AddTransient<IHotelCostRepository, HotelCostRepository>();
            services.AddTransient<IListofHotelRepository, ListofHotelRepository>();
            services.AddTransient<IHotelUserBookingRepository, HotelUserBookingRepository>();
            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));
            services.AddTransient<IMailService, MailServiceRepository>();
            services.AddControllers();

            // For Identity  
            services.AddIdentity<SpicejetUser, IdentityRole>()
                .AddEntityFrameworkStores<ANGULARSPICEJETDbContext>()
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
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SpicejetWebApi", Version = "v1" });
            });

            services.AddCors(option => option.AddPolicy("Policy", builder =>
            {
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }
));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SpicejetWebApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("Policy");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}
