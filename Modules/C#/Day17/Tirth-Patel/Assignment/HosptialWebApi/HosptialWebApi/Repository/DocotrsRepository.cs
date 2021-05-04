using HosptialWebApi.IRepository;
using HosptialWebApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HosptialWebApi.Repository
{
    public class DoctorRepository : GenericRepository<Doctor>, IDoctors
    {
        public DoctorRepository(HospitalContext context) : base(context)
        { }
        //Get doctor wise patient report lis
          public List<vGetReport> GetReport(int DoctorId)
        {
          var report =  context.VGetReports.FromSqlRaw($"select * from GetReports WHERE DoctorID = {DoctorId}").ToList();
            return report;
            
    }

    }
}

