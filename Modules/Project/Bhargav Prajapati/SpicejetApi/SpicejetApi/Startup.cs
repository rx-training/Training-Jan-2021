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
using SpicejetApi.Authentication;
using SpicejetApi.Models;
using SpicejetApi.Models.IRepositoryHotel;
using SpicejetApi.Models.IRepositorySpicejet;
using SpicejetApi.Models.RepositoryHotel;
using SpicejetApi.Models.RepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpicejetApi
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

            
            services.AddTransient<IAirplaneRepository, AirPlaneRepository>();
            services.AddTransient<IAirPortRepository, AirportRepository>();
            services.AddTransient<IAirportAddressRepository, AirportAddressRepository>();
            services.AddTransient<ISeatBookingRepository,SeatBookingRepository>();
            services.AddTransient<ICostRepository, CostRepository>();
            services.AddTransient<IFlightTripRepository,FlightTripRepostitory>();
            services.AddTransient<ITravellerRepository,TravellerRepository>();
            services.AddTransient<ICheckInDetailsRepository, CheckinDetailsRepository>();
            services.AddTransient<IHotelRepository,HotelRepository>();
            services.AddTransient<IGuestRepository, GuestRepository>();
            services.AddTransient<IRoomRepository, RoomRepository>();
            services.AddTransient<IPaymentRepository, PaymentRepository>();
            services.AddTransient<IAddressRepository, AddressRepository>();
            services.AddTransient<IContectInfoRepository, ContectInfoRepository>();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SpicejetApi", Version = "v1" });
            });

            //database connection
            services.AddDbContext<ApplicationDbContext>
                (option => option.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
            services.AddDbContext<SPICEJETContext>(option => option.UseSqlServer(Configuration.GetConnectionString("ConnStr1")));


            //for identity
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            //Adding Authentication

            services.AddAuthentication(options =>
            {

                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                //Adding Jwt Bearer
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
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SpicejetApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
