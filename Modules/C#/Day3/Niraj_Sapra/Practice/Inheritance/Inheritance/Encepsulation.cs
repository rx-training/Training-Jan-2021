using System;
using System.Collections.Generic;
using System.Text;

namespace Inheritance
{
    class Encepsulation
    {
        int accountbalnce;
        public int Balance
        {
            set
            {
                accountbalnce = value;
            }
            get
            {
                return accountbalnce;
            }
        }

    }
}
