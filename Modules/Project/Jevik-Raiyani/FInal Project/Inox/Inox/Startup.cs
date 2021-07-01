using Inox.Authentication;
using Inox.Models;
using Inox.Models.IRepository;
using Inox.Models.Repository;
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


namespace Inox
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

            services.AddDbContext<inoxContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
         
            services.AddTransient<ICinema, CinemaRepository>();
            services.AddTransient<IScreens, ScreensRepository>();
            services.AddTransient<IDirectorCast, DirectorCastRepository>();
            services.AddTransient<IMovies, MoviesRepository>();
            services.AddTransient<IMovieDirectorCast, MovieDirectorCastRepository>();
            services.AddTransient<IPaymentMethod, PaymentMethodRepository>();
            services.AddTransient<IRows, RowsRepository>();
            services.AddTransient<ISeat, SeatRepository>();
            services.AddTransient<ISeatType, SeatTypeRepository>();
            services.AddTransient<IShowTime, ShowTimeRepository>();
            services.AddTransient<ITickets, TicketsRepository>();
            services.AddTransient<IUsers, UsersRepository>();
            services.AddTransient<IUserBookingHistory, UserBookingHistoryRepository>();
            services.AddTransient<IVCastOfMovies, VCastOfMoviesRepository>();
            services.AddTransient<IVCinemaScreens, VCinemaScreensRepository>();
            services.AddTransient<IVTransactionHistory, VTransactionHistoryRepository>();
            services.AddTransient<IvSeat, VSeatRepository>();
            services.AddTransient<IvHistory, VHistoryRepository>();
            services.AddControllers();


            // For Identity  
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<inoxContext>()
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
            app.UseCors(x => x
              .AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());



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
