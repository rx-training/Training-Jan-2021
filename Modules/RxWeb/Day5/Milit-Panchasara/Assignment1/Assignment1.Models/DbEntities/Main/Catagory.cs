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
    [Table("Catagory",Schema="dbo")]
    public partial class Catagory
    {
		#region Id Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Id Annotations

        public int Id { get; set; }

		#region Name Annotations

        [Required]
        [MaxLength(50)]
		#endregion Name Annotations

        public string Name { get; set; }

		#region MasterCategoryId Annotations

        [RelationshipTableAttribue("Catagory","dbo","","MasterCategoryId")]
		#endregion MasterCategoryId Annotations

        public Nullable<int> MasterCategoryId { get; set; }


        public Nullable<System.DateTime> CreatedAt { get; set; }


        public Nullable<System.DateTime> ModifiedAt { get; set; }

		#region MasterCategory Annotations
        [ForeignKey(nameof(Catagory.MasterCategory))]
		#endregion MasterCategory Annotations

        public virtual Catagory MasterCategory { get; set; }


        public virtual ICollection<Catagory> SubCategory { get; set; }


        public Catagory()
        {
            SubCategory = new HashSet<Catagory>();
        }
	}
}