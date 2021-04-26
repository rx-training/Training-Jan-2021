using System;
using System.Collections.Generic;
using System.Text;

namespace Day3
{
    class GiftCardAccount : BankAccount
    {
        private decimal _monthlyDeposit = 0m;
        public GiftCardAccount(string name, decimal initialBalance, decimal monthlyDeposit = 0) : base(name, initialBalance) 
            => _monthlyDeposit = monthlyDeposit;
        

        public override void PerformMonthEndTransactions()
        {
            //base.PerformMonthEndTransactions();
            if (_monthlyDeposit != 0)
            {
                MakeDeposit(_monthlyDeposit, DateTime.Now, "Add monthly deposit");
            }
        }
    }
}
