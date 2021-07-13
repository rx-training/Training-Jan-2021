﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.IRepositorySpicejet
{
    public  interface ITravellerRepository:SpicejetGeneric<Travelller>
    {
        public Travelller GetByPnrNumber(string PNRNUmber);
    }
}