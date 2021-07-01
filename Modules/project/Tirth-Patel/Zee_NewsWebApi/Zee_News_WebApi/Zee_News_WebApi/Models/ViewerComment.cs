using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class ViewerComment
    {
        public int CommentContetnId { get; set; }
        public int UserId { get; set; }
        public string Comment { get; set; }
    }
}
