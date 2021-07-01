using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using SpicejetAPI.IRepository;
using SpicejetAPI.Repository;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using SpicejetWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
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
            services.AddDbContext<ANGULARSPICEJETContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
            services.AddTransient<IFlightSearchRepository, FlightSearchRepository>();
            services.AddTransient<IFlightBooking, FlightBooking>();
            services.AddTransient<IHotelBooking, HotelBookingRepository>();
            services.AddTransient<IHotelSearchRepository, HotelSearchRepository>();
            services.AddTransient<IAdminRepository, AdminRepository>();
            services.AddTransient<IAirPlaneCrudRepository,AirplaneCrudRepository>();
            services.AddTransient<IAirplaneCostCrudRepository, AirplaneCostCrudRepository>();
            services.AddTransient<ITripDetailsCrudRepository,TripDetailsCrudRepository>();
            services.AddTransient<IBookingCrudRepository,BookingCrudRepository>();
            services.AddTransient<IHotelCostCrudRepository,HotelCostCrudRepository>();
            services.AddTransient<IHotelContactCrudRepository,HotelContactCrudRepository>();
            services.AddTransient<IHotelInfoCrudRepository,HotelInfoCrudRepository>();
            services.AddTransient<IHotelBookingCrudRepository, HotelBookingCrudRepository>();

            services.AddScoped<IEmailSender, EmailSender>();
            var emailconfig = Configuration.GetSection("EmailConfiguration").Get<EmailClass>();
            services.AddSingleton(emailconfig);

            services.AddControllers();
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

            app.UseCors("Policy");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
