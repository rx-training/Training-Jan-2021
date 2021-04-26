using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class EmpMgr
    {
        public EmpMgr()
        {
            InverseMgrNavigation = new HashSet<EmpMgr>();
        }

        public string Emp { get; set; }
        public string Mgr { get; set; }
        public int? NooFreports { get; set; }

        public virtual EmpMgr MgrNavigation { get; set; }
        public virtual ICollection<EmpMgr> InverseMgrNavigation { get; set; }
    }
}
