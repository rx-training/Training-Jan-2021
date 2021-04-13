using System;

namespace Day3
{
    class Program
    {
        static void Main(string[] args)
        {
            var giftCardAc = new GiftCardAccount("Milit", 100, 20);
            giftCardAc.MakeWithdrawal(30, DateTime.Now, "buy something");
            giftCardAc.MakeWithdrawal(50, DateTime.Now, "buy something");
            giftCardAc.PerformMonthEndTransactions();
            giftCardAc.MakeDeposit(27.50m, DateTime.Now, "add some additional spending money");
            Console.WriteLine(giftCardAc.GetAccountHistory());

            var savings = new InterestEarningAccount("savings account", 10000);
            savings.MakeDeposit(750, DateTime.Now, "save some money");
            savings.MakeDeposit(1250, DateTime.Now, "Add more savings");
            savings.MakeWithdrawal(250, DateTime.Now, "Needed to pay monthly bills");
            savings.PerformMonthEndTransactions();
            Console.WriteLine(savings.GetAccountHistory());

            var lineOfCredit = new LineOfCreditAccount("XYZ", 1000,1000);
            lineOfCredit.MakeWithdrawal(1000m, DateTime.Now, "Take out monthly advance");
            lineOfCredit.MakeDeposit(50m, DateTime.Now, "Pay back small amount");
            // Following line Will cause error due to balance
            lineOfCredit.MakeWithdrawal(5000m, DateTime.Now, "Emergency funds for repairs");
            lineOfCredit.MakeDeposit(150m, DateTime.Now, "Partial restoration on repairs");
            lineOfCredit.PerformMonthEndTransactions();
            Console.WriteLine(lineOfCredit.GetAccountHistory());
        }
    }
}
