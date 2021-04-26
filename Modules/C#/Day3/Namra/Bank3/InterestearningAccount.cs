using System;
namespace Bank3
{
    public class InterestEarningAccount : Bank3
    {
        public InterestEarningAccount(string name, decimal initialBalance) : base(name, initialBalance)
        {

        }
        public virtual void PerformMonthEndTransactions()
        {
            if (Balance > 500m)
            {
                var interest = Balance * 0.05m;
                MakeDeposit(interest, DateTime.Now, "apply monthly interest");
            }
        }
    }
}
