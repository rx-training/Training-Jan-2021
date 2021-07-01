using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using assignment1.Models.Enums.Main;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
namespace Assignment1.Models.Main
{
    [Table("Roles",Schema="dbo")]
    public partial class Role
    {
		#region RoleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RoleId Annotations

        public int RoleId { get; set; }

		#region RoleName Annotations

        [Required]
        [MaxLength(50)]
		#endregion RoleName Annotations

        public string RoleName { get; set; }

		#region StatusId Annotations

        [Range(1, int.MaxValue)]
        [Required]
		#endregion StatusId Annotations

        public Status StatusId { get; set; }


        public virtual ICollection<UserRole> UserRoles { get; set; }


        public virtual ICollection<RolePermission> RolePermissions { get; set; }


        public Role()
        {
			UserRoles = new HashSet<UserRole>();
			RolePermissions = new HashSet<RolePermission>();
        }
	}
}