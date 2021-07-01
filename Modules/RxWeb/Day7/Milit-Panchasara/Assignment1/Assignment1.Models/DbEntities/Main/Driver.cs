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
    [Table("Drivers",Schema="dbo")]
    public partial class Driver
    {
		#region DriverId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion DriverId Annotations

        public int DriverId { get; set; }

		#region FirstName Annotations

        [Required]
        [MaxLength(50)]
		#endregion FirstName Annotations

        public string FirstName { get; set; }

		#region LastName Annotations

        [Required]
        [MaxLength(50)]
		#endregion LastName Annotations

        public string LastName { get; set; }


        public virtual ICollection<Vehicle> Vehicles { get; set; }


        public Driver()
        {
			Vehicles = new HashSet<Vehicle>();
        }
	}
}