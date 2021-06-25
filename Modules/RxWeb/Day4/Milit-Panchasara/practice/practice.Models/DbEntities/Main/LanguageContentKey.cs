using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using practice.Models.Enums.Main;
using practice.BoundedContext.SqlContext;
namespace practice.Models.Main
{
    [Table("LanguageContentKeys",Schema="dbo")]
    public partial class LanguageContentKey
    {
		#region LanguageContentKeyId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion LanguageContentKeyId Annotations

        public int LanguageContentKeyId { get; set; }

		#region KeyName Annotations

        [Required]
        [MaxLength(50)]
		#endregion KeyName Annotations

        public string KeyName { get; set; }

		#region IsComponent Annotations

        [Required]
		#endregion IsComponent Annotations

        public bool IsComponent { get; set; }


        public virtual ICollection<LanguageContent> LanguageContents { get; set; }


        public virtual ICollection<ComponentLanguageContent> ComponentLanguageContents { get; set; }


        public LanguageContentKey()
        {
			LanguageContents = new HashSet<LanguageContent>();
			ComponentLanguageContents = new HashSet<ComponentLanguageContent>();
        }
	}
}