using System;
using classes;

namespace BankApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var account = new BankAccount("Tirth", 1000);
            Console.WriteLine($"Account {account.number} was created for {account.owner} with {account.Balance} initial balance.");
            account.MakeWithdrawal(500, DateTime.Now, "Rent payment");
            Console.WriteLine(account.Balance);
            account.MakeDeposit(100, DateTime.Now, "Friend paid me back");
            Console.WriteLine(account.Balance);
            try
            {
                var invalidAccount = new BankAccount("invalid", -55);
            }
            catch (ArgumentOutOfRangeException e)
            {
                Console.WriteLine("Exception caught creating account with negative balance");
                Console.WriteLine(e.ToString());
            }
            try
            {
                account.MakeWithdrawal(750, DateTime.Now, "Attempt to overdraw");

            }
            catch(InvalidOperationException e)
            {
                Console.WriteLine("cant overdraw");
                Console.WriteLine(e.ToString());
            }
            var giftcard = new GiftCardAccount("giftcard", 100, 50);
            giftcard.MakeWithdrawal(20, DateTime.Now, "Got expensive coffee");
            giftcard.MakeWithdrawal(50, DateTime.Now, "Buy grocerires");
            giftcard.PerformMonthEndTransactions();
            giftcard.MakeDeposit(27.50m, DateTime.Now, "Add some additional spending");
            Console.WriteLine(giftcard.GetAccountHistory());
            var savings = new InstrestEarningAccount("saving account", 10000);
            savings.MakeDeposit(750, DateTime.Now, "save some money");
            savings.MakeDeposit(1250, DateTime.Now, "add more savings");
            savings.MakeWithdrawal(250, DateTime.Now, "monthly bill payment");
            savings.PerformMonthEndTransactions();
            Console.WriteLine(savings.GetAccountHistory());
            var lineOfCredit = new LineofCreditAccount("lineofCredit",0,2000);
            lineOfCredit.MakeWithdrawal(1000m, DateTime.Now, "take out monthly");
            lineOfCredit.MakeDeposit(50m, DateTime.Now, "Pay back small amount");
            lineOfCredit.MakeWithdrawal(5000m, DateTime.Now, "Emergency funds for repairs");
            lineOfCredit.MakeDeposit(150m, DateTime.Now, "Partial restoration on repairs");
            lineOfCredit.PerformMonthEndTransactions();
            Console.WriteLine(lineOfCredit.GetAccountHistory());

        }

    }
}
