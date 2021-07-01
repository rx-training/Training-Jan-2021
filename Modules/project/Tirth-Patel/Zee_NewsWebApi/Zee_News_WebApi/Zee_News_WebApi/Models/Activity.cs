using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class Activity
    {
        public int ActivityId { get; set; }
        public string UserId { get; set; }
        public int? LikedContentId { get; set; }
        public int? CommentedContentId { get; set; }


        //many user can comment and like on one news
        public virtual NewsContent CommentedContent { get; set; }
        public virtual NewsContent LikedContent { get; set; }
        public virtual Viewers1 User { get; set; }
    }
}
