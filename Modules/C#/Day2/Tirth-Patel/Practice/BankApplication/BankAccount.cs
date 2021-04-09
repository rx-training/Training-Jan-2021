using System;
namespace classes
{
	public class BankAccount
	{
		public string owner { get; set; }
		public string number { get; }
		public decimal Balance { get; }
		public void MakeDeposit(decimal amount, DateTime date, string note)
		{
		}

		public void MakeWithdrawal(decimal amount, DateTime date, string note)
		{
		}
		public BankAccount(string name, decimal initialBalance)
		{
			this.owner = name;
			this.Balance = initialBalance;
		}
	}
}
