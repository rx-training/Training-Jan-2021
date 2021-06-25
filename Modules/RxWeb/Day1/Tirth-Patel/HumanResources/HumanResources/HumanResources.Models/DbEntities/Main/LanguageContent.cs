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
    [Table("LanguageContents",Schema="dbo")]
    public partial class LanguageContent
    {
		#region LanguageContentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion LanguageContentId Annotations

        public int LanguageContentId { get; set; }

		#region LanguageContentKeyId Annotations

        [Range(1, int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("LanguageContentKeys","dbo","","LanguageContentKeyId")]
		#endregion LanguageContentKeyId Annotations

        public int LanguageContentKeyId { get; set; }

		#region ContentType Annotations

        [Required]
        [MaxLength(3)]
		#endregion ContentType Annotations

        public string ContentType { get; set; }

		#region En Annotations

        [Required]
		#endregion En Annotations

        public string En { get; set; }


        public string Fr { get; set; }

		#region LanguageContentKey Annotations

        [ForeignKey(nameof(LanguageContentKeyId))]
        #endregion LanguageContentKey Annotations

        public virtual LanguageContentKey LanguageContentKey { get; set; }


        public virtual ICollection<ComponentLanguageContent> ComponentLanguageContents { get; set; }


        public LanguageContent()
        {
			ComponentLanguageContents = new HashSet<ComponentLanguageContent>();
        }
	}
}