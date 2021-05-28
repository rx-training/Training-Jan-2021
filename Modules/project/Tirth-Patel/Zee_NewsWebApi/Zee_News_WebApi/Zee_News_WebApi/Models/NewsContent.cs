using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class NewsContent
    {
        public NewsContent()
        {
            ActivityCommentedContents = new HashSet<Activity>();
            ActivityLikedContents = new HashSet<Activity>();
        }

        public int NewsId { get; set; }
        public int ContentId { get; set; }
        public string Description { get; set; }
        public string ImagesLink { get; set; }
        public string VideosLink { get; set; }
        public DateTime Date { get; set; }
        //many news content can refer to one newsHeader
        public virtual NewsHeader News { get; set; }
        //many newscontent can be liked and commented by single or zero user
        public virtual ICollection<Activity> ActivityCommentedContents { get; set; }
        public virtual ICollection<Activity> ActivityLikedContents { get; set; }
    }
}
