﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Models.Repository
{
    public class RepoSellerAddress : Amazon<SellerAddress>, ISellerAddress
    {
        public RepoSellerAddress(AmazonContext context) : base(context)
        {

        }
    }
}
