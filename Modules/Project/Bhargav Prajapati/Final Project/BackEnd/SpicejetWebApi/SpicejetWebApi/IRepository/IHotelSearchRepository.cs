﻿using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelSearchRepository
    {
        public IEnumerable<VHotelDatum> GetHotel();
    }
}
