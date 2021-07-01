using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using HumanResources.Models.Enums.Main;
using HumanResources.BoundedContext.SqlContext;
namespace HumanResources.Models.Main
{
    [Table("UserRoles",Schema="dbo")]
    public partial class UserRole
    {
		#region UserRoleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserRoleId Annotations

        public int UserRoleId { get; set; }

		#region UserId Annotations

        [Range(1, int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region RoleId Annotations

        [Range(1, int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Roles","dbo","","RoleId")]
		#endregion RoleId Annotations

        public int RoleId { get; set; }

		#region Role Annotations

        [ForeignKey( nameof(RoleId))]
		#endregion Role Annotations

        public virtual Role Role { get; set; }

		#region User Annotations

        [ForeignKey(nameof(UserId))]
		#endregion User Annotations

        public virtual User User { get; set; }


        public UserRole()
        {
        }
	}
}