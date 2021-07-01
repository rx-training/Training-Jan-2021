using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using Assignment1.BoundedContext.SqlContext;
using Microsoft.EntityFrameworkCore;

namespace Assignment1.Models.Main
{
    [Table("vCatagory",Schema="dbo")]
    public partial class vCatagory
    {

        #region CategoryId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
        #endregion CategoryId Annotations

        public int CategoryId { get; set; }

        public string MasterCatagory { get; set; }

        public string Catagory { get; set; }


        public vCatagory()
        {
        }
	}
}