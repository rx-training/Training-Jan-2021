using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using ZeeNewsMaster.BoundedContext.SqlContext;
namespace ZeeNewsMaster.Models.Main
{
    [Table("vNewsContent",Schema="dbo")]

    public partial class vNewsContent
    {

        public Nullable<int> NewsId { get; set; }


        public string Category { get; set; }

		#region ContentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ContentId Annotations

        public int ContentId { get; set; }


        public Nullable<System.DateTime> PublishDate { get; set; }


        public vNewsContent()
        {
        }
	}
}