using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class VGetCateogryWisenews
    {
        public int NewsId { get; set; }
        public string NewsCategory { get; set; }
        public int ContentId { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
    }
}
