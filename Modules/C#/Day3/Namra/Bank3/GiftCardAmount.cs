using System;

namespace Bank3
{
    public class GiftCardAmount : Bank3
    {
        private decimal _monthlyDeposit = 0m;

        public GiftCardAmount(string name, decimal initialBalance, decimal monthlyDeposit = 0) : base(name, initialBalance)
            => _monthlyDeposit = monthlyDeposit;
        public override void PerformMonthEndTransaction()
        {
            if (_monthlyDeposit != 0)
            {
                MakeDeposit(_monthlyDeposit, DateTime.Now, "Add Monthly deposit");
            }
        }
    }
}
