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
    [Table("NewsHeaders",Schema="dbo")]
    public partial class NewsHeader
    {
		#region NewsId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion NewsId Annotations

        public int NewsId { get; set; }

		#region Category Annotations
        [Unique (connection:typeof(IMainDatabaseFacade))]
        [Required]
        [MaxLength(50)]
		#endregion Category Annotations

        public string Category { get; set; }


        public virtual ICollection<NewsContent> NewsContents { get; set; }


        public NewsHeader()
        {
			NewsContents = new HashSet<NewsContent>();
        }
	}
}