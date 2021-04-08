using System;

namespace BankAccount
{
	public class GiftCardAccounts : BankAccounts
	{

		private decimal _monthlyDeposit = 0m;

		public GiftCardAccounts(string name, decimal initialBalance, decimal monthlyDeposit = 0) : base(name, initialBalance)
			=> _monthlyDeposit = monthlyDeposit;

		public override void PerformMonthEndTransactions()
		{
			if (_monthlyDeposit != 0)
			{
				MakeDeposit(_monthlyDeposit, DateTime.Now, "Add monthly deposit");
			}
		}


	}

}
