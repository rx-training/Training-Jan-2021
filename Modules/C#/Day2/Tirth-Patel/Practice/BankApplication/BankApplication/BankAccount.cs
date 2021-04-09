using System;
using System.Collections.Generic;
namespace classes
{
    public class BankAccount
    {
        public string owner { get; set; }
        public string number { get; }
        public decimal Balance
        {

            get
            {
                decimal balance = 0;
                foreach (var item in allTransactions)
                {
                    balance += item.Amount;
                }
                return balance;
            }



        }
        public void MakeDeposit(decimal amount, DateTime date, string note)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount must be positive");

            }
            var deposit = new Transaction(amount, date, note);
            allTransactions.Add(deposit);
        }

        public void MakeWithdrawal(decimal amount, DateTime date, string note)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Amount must be positive");

            }
            var overdraftTranscation = CheckWithdrawalLimit(Balance - amount < minimumbalance);
            var withdrawal = new Transaction(-amount, date, note);
            allTransactions.Add(withdrawal);
            if (overdraftTranscation != null)
            {
                allTransactions.Add(overdraftTranscation);
            }
        }
        protected virtual Transaction? CheckWithdrawalLimit(bool isOverdrawn)
        {
            if (isOverdrawn)
            {
                throw new InvalidOperationException("Not sufficient funds for this withdrawal");
            }
            else
            {
                return default;
            }
        }
        public virtual void PerformMonthEndTransactions() { }
        private readonly decimal minimumbalance;

        public BankAccount(string name, decimal initialbalance) : this(name, initialbalance, 0) { }
        /*public BankAccount(string name, decimal initialBalance)
		{
			this.owner = name;
			
			this.number = accountNumberSeed.ToString();
			accountNumberSeed++;
			MakeDeposit(initialBalance, DateTime.Now, "Initial Balance");
		}*/
        public BankAccount(string name, decimal initialBalance, decimal minimumBalance)
        {
            this.number = accountNumberSeed.ToString();
            accountNumberSeed++;
            this.owner = name;
            this.minimumbalance = minimumbalance;
            if (initialBalance > 0)
            {
                MakeDeposit(initialBalance, DateTime.Now, "intial Balance");
            }
        }
        private List<Transaction> allTransactions = new List<Transaction>();
        private static int accountNumberSeed = 1234567890;
        public string GetAccountHistory()
        {
            var report = new System.Text.StringBuilder();
            decimal balance = 0;
            report.AppendLine("Date\t\tAmount\tbalance\tnote");
            foreach (var item in allTransactions)
            {
                balance += item.Amount;
                report.AppendLine($"{item.date.ToShortDateString()}\t{item.Amount}\t{balance}\t{item.Notes}");

            }
            return report.ToString();
        }
    }
    public class InstrestEarningAccount : BankAccount
    {

        public InstrestEarningAccount(string name, Decimal initialBalance)
                : base(name, initialBalance) { }
        public override void PerformMonthEndTransactions()
        {
            if (Balance > 500m)
            {
                var intrest = Balance * 0.05m;
                MakeDeposit(intrest, DateTime.Now, "Apply monthly intrest");
            }
        }
    }

    public class LineofCreditAccount : BankAccount
    {
        public LineofCreditAccount(string name, Decimal initialBalance, decimal creditLimit)
: base(name, initialBalance, -creditLimit) { }
        public override void PerformMonthEndTransactions()
        {
            if (Balance < 0)
            {
                var interest = -Balance * 0.07m;
                MakeWithdrawal(interest, DateTime.Now, "Monthly charges");

            }
        }
        protected override Transaction CheckWithdrawalLimit(bool isOverdrawn)
       => isOverdrawn ? new Transaction(-20, DateTime.Now, "Overdraft fee") : default;
    }
    public class GiftCardAccount : BankAccount
    {
        private decimal _monthlyDeposit = 0m;
        public GiftCardAccount(string name, decimal initialbalance, decimal monthlydeposit = 0) : base(name, initialbalance)
       => _monthlyDeposit = monthlydeposit;
        public override void PerformMonthEndTransactions()
        {
            if (_monthlyDeposit != 0)
            {
                MakeDeposit(_monthlyDeposit, DateTime.Now, "Add monthly deposit");

            }

        }
    }
}
