using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;


namespace AsynchronousDemo
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            this.InitializeComponent();
        }
        protected override void OnInitialized(EventArgs e)
        {
            ComputeStuffAsync();
        }
        async void ComputeStuffAsync()
        {
            var sum = 0.0;
            pageTitle.Text = "Computing......";
           await Task.Run(() =>
            {
                for (int i = 1; i < 200000000; i++)
                {
                    sum += Math.Sqrt(i);
                }
            });
            pageTitle.Text = "Sum = " + sum;await Task.Run(() =>
            {
                for (int i = 1; i < 200000000; i++)
                {
                    sum += Math.Sqrt(i);
                }
            });
            pageTitle.Text = "Sum = " + sum;await Task.Run(() =>
            {
                for (int i = 1; i < 200000000; i++)
                {
                    sum += Math.Sqrt(i);
                }
            });
            pageTitle.Text = "Sum = " + sum;await Task.Run(() =>
            {
                for (int i = 1; i < 200000000; i++)
                {
                    sum += Math.Sqrt(i);
                }
            });
            pageTitle.Text = "Sum = " + sum;await Task.Run(() =>
            {
                for (int i = 1; i < 200000000; i++)
                {
                    sum += Math.Sqrt(i);
                }
            });
            pageTitle.Text = "Sum = " + sum;



        }
    }
}
