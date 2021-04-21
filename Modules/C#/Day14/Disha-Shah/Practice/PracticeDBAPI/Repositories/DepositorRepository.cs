using Microsoft.EntityFrameworkCore;
using PracticeDBAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeDBAPI.Repositories
{
    public class DepositorRepository : IDepositors
    {
        private readonly TestDBContext ctx;

        public DepositorRepository(TestDBContext context)
        {
            ctx = context;
        }

        public List<Deposit> GetAll()
        {

            //var cust = ctx.Deposits
            //                .Include("CnameNavigation")
            //                .Select(s => new
            //                {
            //                    ActNo = s.ActNo,
            //                    Date = s.Adate,
            //                    Amount = s.Amount,
            //                    Customer = s.CnameNavigation.Cname,
            //                    CustomerCity = s.CnameNavigation.City
            //                })
            //                .ToList();

            var cust = ctx.Deposits.ToList();
                        
            //if (cust.Count == 0)
            //{
            //    return null;
            //}
            
            return cust;
        }
    }
}
