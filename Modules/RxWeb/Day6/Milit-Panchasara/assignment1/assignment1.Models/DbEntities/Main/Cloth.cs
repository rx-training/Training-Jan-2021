using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using assignment1.Models.Enums.Main;
using assignment1.BoundedContext.SqlContext;
namespace assignment1.Models.Main
{
    [Table("Clothes",Schema="dbo")]
    public partial class Cloth
    {
		#region Id Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Id Annotations

        public int Id { get; set; }

		#region Brand Annotations

        [Required]
        [MaxLength(50)]
		#endregion Brand Annotations

        public string Brand { get; set; }

		#region ProductName Annotations

        [Required]
        [MaxLength(50)]
		#endregion ProductName Annotations

        public string ProductName { get; set; }

		#region Price Annotations

        [Required]
		#endregion Price Annotations

        public double Price { get; set; }

		#region Category Annotations

        [Required]
        [MaxLength(50)]
		#endregion Category Annotations

        public string Category { get; set; }

		#region Size Annotations

        [Required]
        [MaxLength(5)]
		#endregion Size Annotations

        public string Size { get; set; }

		#region Color Annotations

        [Required]
        [MaxLength(20)]
		#endregion Color Annotations

        public string Color { get; set; }

		#region Gender Annotations

        [Required]
        [MaxLength(6)]
		#endregion Gender Annotations

        public string Gender { get; set; }


        public Cloth()
        {
        }
	}
}