using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class Faq
    {
        [Key]
        public int FAQId { get; set; }
        public string FAQTopic { get; set; }
        public string FAQQuestion { get; set; }
        public string FAQAnswer { get; set; }
    }
}
