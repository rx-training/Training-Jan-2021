using BookMyShowAPI.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BookMyShowAPI.Models;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Repository;

namespace BookMyShowAPI
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
            services.AddEntityFrameworkSqlServer();
            services.AddDbContext<ApplicationDBContext>((serviceProvider, options) => { options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")); });
            services.AddDbContext<BookMyShowDBContext>((serviceProvider, options) => { options.UseSqlServer(Configuration.GetConnectionString("Conn")); });
            services.AddTransient<IRegion, RegionRepository>();
            services.AddTransient<ICity, CityRepository>();
            services.AddTransient<ITheatre, TheatreRepository>();
            services.AddTransient<IEventVenue, EventVenueRepository>();
            services.AddTransient<ISeatCategory, SeatCategoryRepository>();
            services.AddTransient<ISeat, SeatRepository>();
            services.AddTransient<ILanguage, LanguageRepository>();
            services.AddTransient<IFilmCategory, FilmCategoryRepository>();
            services.AddTransient<IGenre, GenreRepository>();
            services.AddTransient<ICertification, CertificationRepository>();
            services.AddTransient<IMovie, MovieRepository>();
            services.AddTransient<IShowTiming, ShowTimingRepository>();
            services.AddTransient<IEventType, EventTypeRepository>();
            services.AddTransient<IEvent, EventRepository>();
            services.AddTransient<IMovieBooking, MovieBookingRepository>();
            services.AddTransient<IEventBooking, EventBookingRepository>();
            services.AddTransient<IBookingHistory, BookingHistoryRepository>();
            services.AddTransient<IUser, UserRepository>();
            services.AddTransient<IAdmin, AdminRepository>();
            services.AddTransient<IDynamicNavbar, DynamicNavbarRepository>();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "BookMyShowAPI", Version = "v1" });
            });

            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));
            services.AddTransient<IMailService, MailServiceRepository>();

            //services.AddIdentity<ApplicationUser, IdentityRole>(opt =>
            //{
            //    opt.Password.RequiredLength = 10;
            //    opt.Password.RequireDigit = true;
            //    opt.Password.RequireUppercase = true;
            //    opt.User.RequireUniqueEmail = true;
            //    opt.SignIn.RequireConfirmedEmail = true;
            //});

            services.Configure<IdentityOptions>(opts =>
            {
                opts.User.RequireUniqueEmail = true;
                opts.Password.RequiredLength = 9;

                opts.SignIn.RequireConfirmedEmail = true;
            });

            services.AddCors(options => options.AddPolicy("BookMyShowPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            // For Identity  
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDBContext>()
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
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BookMyShowAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseRouting();

            app.UseCors("BookMyShowPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireCors("BookMyShowPolicy");
            });
        }
    }
}
