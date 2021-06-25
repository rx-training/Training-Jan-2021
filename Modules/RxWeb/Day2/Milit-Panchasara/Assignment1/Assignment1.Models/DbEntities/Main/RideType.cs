using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using Assignment1.Models.Enums.Main;
using Assignment1.BoundedContext.SqlContext;
namespace Assignment1.Models.Main
{
    [Table("RideType",Schema="dbo")]
    public partial class RideType
    {
		#region RideTypeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RideTypeId Annotations

        public int RideTypeId { get; set; }

		#region RideName Annotations

        [Required]
        [MaxLength(50)]
		#endregion RideName Annotations

        public string RideName { get; set; }

		#region SeatingCapacity Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion SeatingCapacity Annotations

        public int SeatingCapacity { get; set; }

		#region PricePerKm Annotations

        [Required]
		#endregion PricePerKm Annotations

        public double PricePerKm { get; set; }


        public Nullable<System.DateTime> CreatedAt { get; set; }


        public Nullable<System.DateTime> ModifiedAt { get; set; }


        public RideType()
        {
        }
	}
}