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
    [Table("Vehicles",Schema="dbo")]
    public partial class Vehicle
    {
		#region Id Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Id Annotations

        public int Id { get; set; }

		#region DriverId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Drivers","dbo","","DriverId")]
		#endregion DriverId Annotations

        public int DriverId { get; set; }

		#region VehicleName Annotations

        [Required]
        [MaxLength(50)]
		#endregion VehicleName Annotations

        public string VehicleName { get; set; }

		#region VehicleBrand Annotations

        [Required]
        [MaxLength(50)]
		#endregion VehicleBrand Annotations

        public string VehicleBrand { get; set; }

		#region RegistrationNo Annotations

        [Required]
        [MaxLength(10)]
		#endregion RegistrationNo Annotations

        public string RegistrationNo { get; set; }

		#region Driver Annotations

        [ForeignKey(nameof(Vehicle.DriverId))]
		#endregion Driver Annotations

        public virtual Driver Driver { get; set; }


        public Vehicle()
        {
        }
	}
}