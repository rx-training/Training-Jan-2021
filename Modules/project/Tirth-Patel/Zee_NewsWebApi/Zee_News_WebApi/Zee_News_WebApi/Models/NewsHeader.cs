using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class NewsHeader
    {
        public NewsHeader()
        {
            NewsContents = new HashSet<NewsContent>();
        }

        public int NewsId { get; set; }
        public string NewsCategory { get; set; }
        public DateTime Date { get; set; }

        public virtual ICollection<NewsContent> NewsContents { get; set; }
    }
}
