using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using ZeeNewsMaster.Models.Enums.Main;
using ZeeNewsMaster.BoundedContext.SqlContext;
namespace ZeeNewsMaster.Models.Main
{
    [Table("NewsContents",Schema="dbo")]
    public partial class NewsContent
    {
		#region ContentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ContentId Annotations

        public int ContentId { get; set; }

		#region Descrioption Annotations

        [Required]
		#endregion Descrioption Annotations

        public string Descrioption { get; set; }


        public string Images_link { get; set; }


        public string Video_link { get; set; }


        public Nullable<System.DateTime> PublishDate { get; set; }

		#region NewsId Annotations

        [RelationshipTableAttribue("NewsHeaders","dbo","","NewsId")]
		#endregion NewsId Annotations

        public Nullable<int> NewsId { get; set; }

		#region News Annotations
        [ForeignKey(nameof(NewsId))]
       
		#endregion News Annotations

        public virtual NewsHeader News { get; set; }


        public NewsContent()
        {
        }
	}
}