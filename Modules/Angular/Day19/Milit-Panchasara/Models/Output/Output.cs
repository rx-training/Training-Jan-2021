using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentAPIs.Models.Output
{
    [NotMapped]
    public class Output
    {
        public long Id { get; set; }
        public Name StudentName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public string FirstLanguage { get; set; }
        public Address Address { get; set; }
        public Father Father { get; set; }
        public Mother Mother { get; set; }
        public IEnumerable<Emergency> EmergencyDetails { get; set; }
        public RefDetails ReferenceDetails { get; set; }
    }
}
