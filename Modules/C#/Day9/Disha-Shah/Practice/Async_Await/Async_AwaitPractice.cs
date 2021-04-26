using System;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Async_Await
{
    public class NaiveButton
    {
        public event EventHandler? Clicked;

        public void Click()
        {
            Console.WriteLine("Somebody has clicked a button. Let's raise the event...");
            Clicked?.Invoke(this, EventArgs.Empty);
            Console.WriteLine("All listeners are notified.");
        }
    }

    class Async_AwaitPractice
    {
        static readonly TaskCompletionSource<bool> s_tcs = new TaskCompletionSource<bool>();

        static readonly string rootFolder = @"D:\Disha-Shah\Training-Jan-2021\Modules\C#\Day9\Disha-Shah\Practice\Async_Await";

        public static object encodedText { get; private set; }

        static async Task Main(string[] args)
        {
            Task returnedTask = callMethodAsync();
            await returnedTask;

            await practiceAsync();

            Console.WriteLine($"Today is {DateTime.Today:dddd}");
            Console.WriteLine($"The current time is {DateTime.Now.TimeOfDay:t}");

            var getLeisureHoursAsync = GetLeisureHoursAsync();
            int hours = await getLeisureHoursAsync;
            Console.WriteLine($"Today's hours of leisure: {hours}");

            Task<bool> secondHandlerFinished = s_tcs.Task;

            var button = new NaiveButton();

            button.Clicked += OnButtonClicked1;
            button.Clicked += OnButtonClicked2Async;
            button.Clicked += OnButtonClicked3;

            Console.WriteLine("Before button.Click() is called...");
            button.Click();
            Console.WriteLine("After button.Click() is called...");

            await secondHandlerFinished;

            string filePath1 = "simple.txt";
            string text1 = $"Hello World! Learning C# from msdn. This is a text file.";

            await File.WriteAllTextAsync(Path.Combine(rootFolder,filePath1), text1);

            string filePath = "simple.txt";
            string text = await File.ReadAllTextAsync(Path.Combine(rootFolder, filePath));

            Console.WriteLine(text);

            try
            {
                string filePath2 = "simple.txt";
                if (File.Exists(Path.Combine(rootFolder, filePath2)) != false)
                {
                    string text2 = await ReadTextAsync(Path.Combine(rootFolder, filePath2));
                    Console.WriteLine(text2);

                    string text3 = await File.ReadAllTextAsync(Path.Combine(rootFolder, filePath2));
                    Console.WriteLine(text3);

                    string filePath3 = "temp.txt";

                    string filePath5 = "temp2.txt";

                    using (FileStream SourceStream = File.Open(Path.Combine(rootFolder, filePath2), FileMode.Open))
                    {
                        using (FileStream DestinationStream = File.Create(rootFolder + Path.Combine(rootFolder, filePath5).Substring(Path.Combine(rootFolder, filePath5).LastIndexOf('\\'))))
                        {
                            await SourceStream.CopyToAsync(DestinationStream);
                        }
                    }

                    string text6 = await File.ReadAllTextAsync(Path.Combine(rootFolder, filePath5));
                    Console.WriteLine($"Async Copy: {text6}");

                    await File.WriteAllTextAsync(Path.Combine(rootFolder, filePath3), text3);

                    string text4 = await File.ReadAllTextAsync(Path.Combine(rootFolder, filePath3));
                    Console.WriteLine(text4);

                    File.Delete(Path.Combine(rootFolder, filePath2));
                    Console.WriteLine("File deleted successfully!");

                    if (File.Exists(Path.Combine(rootFolder, filePath2)) == false)
                    {
                        Console.WriteLine("file is not present");
                    }
                }
                else
                {
                    Console.WriteLine($"file not found: {Path.Combine(rootFolder, filePath2)}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        private static async Task<string> ReadTextAsync(string filePath)
        {
            using var sourceStream =
                        new FileStream(
                            filePath,
                            FileMode.Open, FileAccess.Read, FileShare.Read,
                            bufferSize: 4096, useAsync: true);

            var sb = new StringBuilder();

            byte[] buffer = new byte[0x1000];
            int numRead;
            while ((numRead = await sourceStream.ReadAsync(buffer, 0, buffer.Length)) != 0)
            {
                string text = Encoding.Unicode.GetString(buffer, 0, numRead);
                sb.Append(text);
            }

            return sb.ToString();
        }

        //async Task<string> ReadTextAsync(string filePath)
        //{
        //    using var sourceStream =
        //        new FileStream(
        //            filePath,
        //            FileMode.Open, FileAccess.Read, FileShare.Read,
        //            bufferSize: 4096, useAsync: true);

        //    var sb = new StringBuilder();

        //    byte[] buffer = new byte[0x1000];
        //    int numRead;
        //    while ((numRead = await sourceStream.ReadAsync(buffer, 0, buffer.Length)) != 0)
        //    {
        //        string text = Encoding.Unicode.GetString(buffer, 0, numRead);
        //        sb.Append(text);
        //    }

        //    return sb.ToString();
        //}

        private static void OnButtonClicked1(object? sender, EventArgs e)
        {
            Console.WriteLine("   Handler 1 is starting...");
            Task.Delay(1000).Wait();
            Console.WriteLine("   Handler 1 is done.");
        }

        private static async void OnButtonClicked2Async(object? sender, EventArgs e)
        {
            Console.WriteLine("   Handler 2 is starting...");
            Task.Delay(1000).Wait();
            Console.WriteLine("   Handler 2 is about to go async...");
            await Task.Delay(5000);
            Console.WriteLine("   Handler 2 is done.");
            s_tcs.SetResult(true);
        }

        private static void OnButtonClicked3(object? sender, EventArgs e)
        {
            Console.WriteLine("   Handler 3 is starting...");
            Task.Delay(1000).Wait();
            Console.WriteLine("   Handler 3 is done.");
        }

        static async Task<int> GetLeisureHoursAsync()
        {
            DayOfWeek today = await Task.FromResult(DateTime.Now.DayOfWeek);

            int leisureHours =
                today is DayOfWeek.Saturday || today is DayOfWeek.Sunday
                ? 16 : 5;

            return leisureHours;
        }

        public static async Task practiceAsync()
        {
            var result = 0;
            Console.WriteLine("Working");
            Console.WriteLine("before:" + result);
            result = await DoSomething(3, 5);
            Console.WriteLine("after:" + result);
            Console.WriteLine("Done");
        }

        public static async Task<int> DoSomething(int n1, int n2)
        {
            // Task.Delay(2000).Wait();
            Thread.Sleep(2000);
            int result = 0;
            await Task.Run(() =>
            {
                result = n1 + n2;
            });
            return result;
        }

        public static async Task callMethodAsync()
        {
            Method2();
            var count = await Method1();
            Method3(count);
        }

        public static async Task<int> Method1()
        {
            int count = 0;
            await Task.Run(() =>
            {
                for (int i = 0; i < 100; i++)
                {
                    Console.WriteLine(" Method 1");
                    count += 1;
                }
            });
            return count;
        }

        public static void Method2()
        {
            for (int i = 0; i < 25; i++)
            {
                Console.WriteLine(" Method 2");
            }
        }

        public static void Method3(int count)
        {
            Console.WriteLine("Total count is " + count);
        }
    }

}
