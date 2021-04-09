using System;

namespace Calculator
{
    public class Class1
    {
        public  double calc(double num1, double num2, int ch)
        {
           double result=double.NaN;
            switch (ch)
            {
                case 1:
                    result = num1 + num2;

                    break;
                case 2:
                    result = num1 - num2;
                    break;
                case 3:
                    result = num1 * num2;
                    break;
                case 4:
                    result = num1 / num2;
                    break;
                default:
                    break;
             
            }
            return result;
           
        }

    }
}
