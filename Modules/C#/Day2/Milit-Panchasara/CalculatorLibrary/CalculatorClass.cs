using System;
using System.IO;
using System.Diagnostics;
using Newtonsoft.Json;

namespace CalculatorLibrary
{
    public class CalculatorClass
    {
        JsonWriter writer;
        public CalculatorClass()
        {
            //StreamWriter logFile = new StreamWriter("calc.log");
            //Trace.Listeners.Add(new TextWriterTraceListener(logFile));
            //Trace.AutoFlush = true;
            //Trace.WriteLine("Starting Calculator Log");
            //Trace.WriteLine(String.Format($"Started {System.DateTime.Now.ToString()}"));

            StreamWriter logFile = File.CreateText("calculatorlog.json");
            logFile.AutoFlush = true;
            writer = new JsonTextWriter(logFile);
            writer.Formatting = Formatting.Indented;
            writer.WriteStartObject();
            writer.WritePropertyName("Operations");
            writer.WriteStartArray();
        }

        public double Calculation(double n1, double n2, string operation)
        {
            double answer = double.NaN;

            writer.WriteStartObject();
            writer.WritePropertyName("Operand1");
            writer.WriteValue(n1);
            writer.WritePropertyName("Operand2");
            writer.WriteValue(n2);
            writer.WritePropertyName("Operation");

            switch (operation)
            {
                case "a":
                    answer = n1 + n2;
                    //Trace.WriteLine(String.Format($"{n1} + {n2} = {answer}"));
                    writer.WriteValue("Add");
                    break;
                case "s":
                    answer = n1 - n2;
                    //Trace.WriteLine(String.Format($"{n1} - {n2} = {answer}"));
                    writer.WriteValue("Subtract");
                    break;
                case "m":
                    answer = n1 * n2;
                    //Trace.WriteLine(String.Format($"{n1} * {n2} = {answer}"));
                    writer.WriteValue("Multiply");
                    break;
                case "d":
                    if (n2 != 0)
                    {
                        answer = n1 / n2;
                        //Trace.WriteLine(String.Format($"{n1} / {n2} = {answer}"));
                        writer.WriteValue("Division");
                    }
                    break;
                default:
                    break;
            }

            writer.WritePropertyName("Answer");
            writer.WriteValue(answer);
            writer.WriteEndObject();

            return answer;
        }

        public void Finish()
        {
            writer.WriteEndArray();
            writer.WriteEndObject();
            writer.Close();
        }
    }
}
