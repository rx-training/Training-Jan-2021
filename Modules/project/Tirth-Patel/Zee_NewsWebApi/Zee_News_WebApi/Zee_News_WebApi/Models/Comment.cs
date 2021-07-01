using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class Comment
    {
        //per userId and commnet contnetnid commnet should be unique
        public string UserId { get; set; }
        public int CommentedContetntId { get; set; }
        public string Comment1 { get; set; }
    }
}
